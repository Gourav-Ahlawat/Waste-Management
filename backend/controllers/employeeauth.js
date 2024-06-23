import jwt from 'jsonwebtoken';
import { EmployeeModel } from '../model/export.js';

const employee_login = async (req, res, next) => {
  try {
    const employee_id = req.body.employee_id;
    const password = req.body.password;
    const user = await EmployeeModel.findOne({ employee_id: employee_id });
    if (!user) {
      return res.status(404).json({ message: 'Invalid employee id' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '2h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {

    console.error('Login error:', error);
    next(error);
  }
};

export default employee_login;