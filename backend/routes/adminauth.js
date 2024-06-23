import express from 'express';
import { admin_login } from '../controllers/export.js';

const employeeAuthRouter = express.Router();

employeeAuthRouter.post('/login', admin_login);

export default employeeAuthRouter;