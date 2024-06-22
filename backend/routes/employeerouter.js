import express from 'express';
import {employee_authenticate} from '../middlewares/export.js';

const employeeUserRouter = express.Router();

employeeUserRouter.get('/profile', employee_authenticate, (req, res) => {
    res.json({ message: `Welcome ${req.user.employee_id}` });
  });
  
export default employeeUserRouter;