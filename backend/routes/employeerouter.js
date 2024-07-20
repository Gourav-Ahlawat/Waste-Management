import express from 'express';
import { driver_authenticate, managerops_authenticate, managerfin_authenticate } from '../middlewares/export.js';
import { ClientModel, BillingModel, EmployeeModel } from '../model/export.js';
import mqtt from 'mqtt';
import bcrypt from 'bcryptjs';

const employeeUserRouter = express.Router();

// MQTT setup
const mqttOptions = {
  host: process.env.mqtthost,
  port: process.env.mqttport,
  protocol: 'mqtts',
  username: process.env.mqttusername,
  password: process.env.mqttpassword,
};

const client = mqtt.connect(mqttOptions);

client.on('connect', function () {
  console.log('MQTT Connected');
  client.subscribe('my/test/topic', function (err) {
    if (err) {
      console.error('Error subscribing to MQTT topic:', err);
    } else {
      console.log('Subscribed to MQTT topic');
    }
  });
});

client.on('error', function (error) {
  console.error('MQTT Error:', error);
});

let capturedWeight = null;

client.on('message', function (topic, message) {
  console.log('Received message:', topic, message.toString());
  capturedWeight = message.toString(); // Store the received weight
});

// Driver routes
employeeUserRouter.get('/driver', driver_authenticate, (req, res) => {
  res.json({ message: `Welcome driver ${req.user.employee_id}` });
});

employeeUserRouter.get('/driver/captureWeight', driver_authenticate, async (req, res) => {
  // Simulate capture weight operation
  client.publish('my/test/topic', 'Hello'); // Publish message to MQTT topic
  res.json({ message: 'Weight capture initiated' });
});

employeeUserRouter.post('/driver/clientrequest', driver_authenticate, async (req, res) => {
  const data = {
    client_name: req.body.client_name,
    client_address: req.body.client_address,
    client_id: req.body.client_id,
    timestamp: new Date(req.body.timestamp),
    weight: req.body.weight,
    status: 'pending'
  };
  try {
    const result = await ClientModel.create(data);
    res.status(201).json({ message: 'Client request created successfully', data: result });
  } catch (error) {
    console.error('Error creating client request:', error);
    res.status(400).json({ message: error.message });
  }
});

// Manager Operations routes
employeeUserRouter.get('/managerops', managerops_authenticate, (req, res) => {
  res.json({ message: `Welcome manager operations ${req.user.employee_id}` });
});

employeeUserRouter.get('/managerops/requests', managerops_authenticate, async (req, res) => {
  try {
    const data = await ClientModel.find({ status: 'pending' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

employeeUserRouter.patch('/managerops/requests/:id', managerops_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const existingData = await ClientModel.findById(id);
    if (!existingData || existingData.status !== 'pending') {
      return res.status(400).json({ message: 'The request has already been approved or rejected' });
    }

    const status = req.body.status;
    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const updatedData = { status };
    const options = { new: true };
    const result = await ClientModel.findByIdAndUpdate(id, updatedData, options);

    if (!result) {
      return res.status(404).json({ message: 'No record found to update' });
    }

    if (status === 'approved') {
      const billingData = await BillingModel.findOne({ client_id: result.client_id });
      if (billingData) {
        billingData.total_weight += result.weight;
        billingData.total_unpaid_weight += result.weight;
        await billingData.save();
      } else {
        const newBillingData = {
          client_name: result.client_name,
          client_address: result.client_address,
          client_id: result.client_id,
          total_weight: result.weight,
          total_unpaid_weight: result.weight
        };
        await BillingModel.create(newBillingData);
      }
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

employeeUserRouter.post('/managerops/registerdriver', managerops_authenticate, async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const data = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    employee_id: req.body.employee_id,
    role: req.body.role,
    password: hashedPassword
  };

  if (data.role !== 'driver') {
    return res.status(400).json({ message: 'Role should be driver' });
  }

  try {
    const result = await EmployeeModel.create(data);
    res.status(201).json({ message: 'Driver registered successfully', data: result });
  } catch (error) {
    console.error('Error creating employee:', error);
    if (error.code === 11000 && error.keyPattern && error.keyPattern.employee_id) {
      return res.status(400).json({ message: 'Employee ID already exists. Use update if you want to modify it.' });
    } else {
      return res.status(500).json({ message: error.message });
    }
  }
});

// Manager Finance routes
employeeUserRouter.get('/managerfin', managerfin_authenticate, (req, res) => {
  res.json({ message: `Welcome manager finance ${req.user.employee_id}` });
});

employeeUserRouter.get('/managerfin/billing', managerfin_authenticate, async (req, res) => {
  try {
    const data = await BillingModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

employeeUserRouter.get('/managerfin/billing/:id', managerfin_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BillingModel.findOne({ client_id: id });
    if (data) {
      if (data.total_unpaid_weight === 0) {
        res.status(200).json({ message: 'No unpaid weight', data: data });
      } else {
        res.status(200).json(data);
      }
    } else {
      res.status(404).json({ message: 'No record found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

employeeUserRouter.patch('/managerfin/paid/:id', managerfin_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BillingModel.findOne({ client_id: id });
    if (data) {
      data.total_unpaid_weight = 0;
      const result = await data.save();
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'No record found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Manager finance route to create a new billing record
employeeUserRouter.post('/managerfin/registerclient', managerfin_authenticate, async (req, res) => {
  const { client_name, client_address, client_id } = req.body;

  if (!client_name || !client_address || !client_id) {
    return res.status(400).json({ message: 'Client name, address, and ID are required' });
  }

  try {
    // Create a new billing record with total_weight and total_unpaid_weight set to 0
    const billingData = {
      client_name,
      client_address,
      client_id,
      total_weight: 0,
      total_unpaid_weight: 0
    };

    const result = await BillingModel.create(billingData);
    res.status(201).json({ message: 'Billing record created successfully', data: result });
  } catch (error) {
    console.error('Error creating billing record:', error);
    if (error.code === 11000 && error.keyPattern && error.keyPattern.client_id) {
      return res.status(400).json({ message: 'Client ID already exists. Use update if you want to modify it.' });
    } else {
      return res.status(500).json({ message: error.message });
    }
  }
});

export default employeeUserRouter;
