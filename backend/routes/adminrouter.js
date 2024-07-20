import express from 'express';
import { EmployeeModel } from '../model/export.js';
import bcrypt from 'bcryptjs';
import { admin_authenticate } from '../middlewares/export.js';

const adminRouter = express.Router();

// Home page route
adminRouter.get("/about", admin_authenticate, function (req, res) {
  res.send("admin home page");
});

// About page route
adminRouter.get("/panel", admin_authenticate, function (req, res) {
  res.send("admin panel page");
});

//Post Method
adminRouter.post('/register', admin_authenticate, async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const data = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    employee_id: req.body.employee_id,
    role: req.body.role,
    password: hashedPassword
  };
  try {
    const result = await EmployeeModel.create(data);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error creating employee:', error); // Log the error for debugging
    if (error.code === 11000 && error.keyPattern && error.keyPattern.employee_id) {
      res.status(400).json({ message: 'employee id already exists, use update if you want to update it' });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
});

//Get all Method
adminRouter.get('/getAll', admin_authenticate, async (req, res) => {
  try {
    const data = await EmployeeModel.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get by ID Method
adminRouter.get('/getOne/:id', admin_authenticate, async (req, res) => {
  try {
    const data = await EmployeeModel.findOne({ employee_id: req.params.id });
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Update by ID Method
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
      res.send(result);
    }
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
adminRouter.delete('/delete/:id', admin_authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await EmployeeModel.findOneAndDelete({ employee_id: id })
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default adminRouter;