import express from 'express';
import { driver_authenticate, managerops_authenticate, managerfin_authenticate } from '../middlewares/export.js';

const employeeUserRouter = express.Router();

employeeUserRouter.get('/driver', driver_authenticate, (req, res) => {
  res.json({ message: `Welcome driver ${req.user.employee_id}` });
});

employeeUserRouter.get('/managerops', managerops_authenticate, (req, res) => {
  res.json({ message: `Welcome manager operations ${req.user.employee_id}` });
});

employeeUserRouter.get('/managerfin', managerfin_authenticate, (req, res) => {
  res.json({ message: `Welcome manager finance ${req.user.employee_id}` });
});

export default employeeUserRouter;