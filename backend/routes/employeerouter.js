import express from 'express';
import { driver_authenticate, managerops_authenticate, managerfin_authenticate } from '../middlewares/export.js';
import { ClientModel, BillingModel } from '../model/export.js';
import mqtt from 'mqtt';

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



//driver routes
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
    res.status(200).json(result);
  } catch (error) {
    console.error('Error creating client request:', error);
    res.status(400).json({ message: error.message });
  }
});

//manager operations routes
employeeUserRouter.get('/managerops', managerops_authenticate, (req, res) => {
  res.json({ message: `Welcome manager operations ${req.user.employee_id}` });
});

employeeUserRouter.get('/managerops/requests', managerops_authenticate, async (req, res) => {
  try {
    const data = await ClientModel.find({ status: 'pending' });
    res.json(data);

  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
});

employeeUserRouter.patch('/managerops/requests/:id', managerops_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const existingData = await ClientModel.findById(id);
    if (existingData.status !== 'pending') {
      res.status(400).json({ message: 'The request has already been approved or rejected' });
      return;
    }
    const status = req.body.status;
    const updatedData = { status: status };
    const options = { new: true };
    const result = await ClientModel.findOneAndUpdate(
      { _id: id }, updatedData, options
    );

    if (!result) {
      res.status(404).json({ message: 'No record found to update' });
    } else {
      if (status === 'approved') {
        const data = await BillingModel.findOne({ client_id: result.client_id });
        if (data) {
          const updatedData = { total_weight: data.total_weight + result.weight,
             total_unpaid_weight: data.total_unpaid_weight + result.weight
           };
          const options = { new: true };
          await BillingModel.findOneAndUpdate(
            { client_id: result.client_id }, updatedData, options
          );
        } else {
          const billingData = {
            client_name: result.client_name,
            client_address: result.client_address,
            client_id: result.client_id,
            total_weight: result.weight,
            total_unpaid_weight: result.weight
          };
          await BillingModel.create(billingData);
        }

      }
      res.send(result);
    }

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

//manager finance routes
employeeUserRouter.get('/managerfin', managerfin_authenticate, (req, res) => {
  res.json({ message: `Welcome manager finance ${req.user.employee_id}` });
});

employeeUserRouter.get('/managerfin/billing', managerfin_authenticate, async (req, res) => {
  try {
    const data = await BillingModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

employeeUserRouter.get('/managerfin/billing/:id', managerfin_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BillingModel.findOne({ client_id: id });
    if (data) {
      if(data.total_unpaid_weight === 0){
        res.status(200).json({ message: 'No unpaid weight', data: data});
      } else {
        res.status(200).json(data);
      }
    } else {
      res.status(404).json({ message: 'No record found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

employeeUserRouter.patch('/managerfin/paid/:id', managerfin_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BillingModel.findOne({ client_id: id });
    if (data) {
      const updatedData = { total_unpaid_weight: 0 };
      const options = { new: true };
      const result = await BillingModel.findOneAndUpdate(
        { client_id: id }, updatedData, options
      );
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'No record found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});
export default employeeUserRouter;