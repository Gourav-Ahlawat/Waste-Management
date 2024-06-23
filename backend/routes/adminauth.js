import express from 'express';
import { admin_login } from '../controllers/export.js';

const adminAuthRouter = express.Router();

adminAuthRouter.post('/login', admin_login);

export default adminAuthRouter;