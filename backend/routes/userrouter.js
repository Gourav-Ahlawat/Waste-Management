import express from 'express';
import {EmployeeModel} from '../model/export.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

// Default Login Page
userRouter.get("/", async (req, res)=> {
  try {
    const employee_id = req.body.employee_id;
    const password = req.body.password;
    const user = await EmployeeModel.findOne({ employee_id: employee_id });
    if (!user) {
      return res.status(400).json({ message: 'Invalid employee id or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }

});


export default userRouter;
