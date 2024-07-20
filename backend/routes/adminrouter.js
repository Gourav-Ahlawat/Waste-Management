import express from 'express';
import { EmployeeModel, BillingModel } from '../model/export.js';
import bcrypt from 'bcryptjs';
import { admin_authenticate } from '../middlewares/export.js';

const adminRouter = express.Router();

// Home page route
adminRouter.get("/about", admin_authenticate, (req, res) => {
  res.send("Admin home page");
});

// About page route
adminRouter.get("/panel", admin_authenticate, (req, res) => {
  res.send("Admin panel page");
});

// Register a new employee
adminRouter.post('/register', admin_authenticate, async (req, res) => {
  const { name, email, phone_number, employee_id, role, password } = req.body;

  if (!name || !email || !phone_number || !employee_id || !role || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (role !== 'driver' && role !== 'manager_finance' && role !== 'manager_operations') {
    return res.status(400).json({ message: 'Role should be one of driver, manager_finance, or manager_operations' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = {
      name,
      email,
      phone_number,
      employee_id,
      role,
      password: hashedPassword
    };

    const result = await EmployeeModel.create(data);
    return res.status(201).json({ message: 'Employee registered successfully', data: result });
  } catch (error) {
    console.error('Error creating employee:', error); // Log the error for debugging

    if (error.code === 11000 && error.keyPattern && error.keyPattern.employee_id) {
      return res.status(400).json({ message: 'Employee ID already exists. Use update if you want to modify it.' });
    }

    return res.status(500).json({ message: 'An internal error occurred.' });
  }
});

// Get all employees
adminRouter.get('/getAll', admin_authenticate, async (req, res) => {
  try {
    const data = await EmployeeModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get employee by ID
adminRouter.get('/getOne/:id', admin_authenticate, async (req, res) => {
  try {
    const data = await EmployeeModel.findOne({ employee_id: req.params.id });
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update employee by ID
adminRouter.patch('/update/:id', admin_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    if (updatedData.password) {
      updatedData.password = await bcrypt.hash(updatedData.password, 10);
    }

    const result = await EmployeeModel.findOneAndUpdate(
      { employee_id: id }, updatedData, options
    );

    if (!result) {
      res.status(404).json({ message: 'No record found to update' });
    } else {
      res.json({ message: 'Employee updated successfully', data: result });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete employee by ID
adminRouter.delete('/delete/:id', admin_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await EmployeeModel.findOneAndDelete({ employee_id: id });
    if (data) {
      res.json({ message: `Employee ${data.name} has been deleted.` });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create a new billing record
adminRouter.post('/registerclient', admin_authenticate, async (req, res) => {
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

export default adminRouter;
