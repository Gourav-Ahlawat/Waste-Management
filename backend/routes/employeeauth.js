import express from 'express';
import {employee_login} from '../controllers/export.js';

const employeeAuthRouter = express.Router();

employeeAuthRouter.post('/login', employee_login);

export default employeeAuthRouter;