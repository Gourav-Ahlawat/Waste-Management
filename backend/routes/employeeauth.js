import express from 'express';
import jwt from 'jsonwebtoken';
import { EmployeeModel } from '../model/export.js';
import { employee_login } from '../controllers/export.js';

const employeeAuthRouter = express.Router();

employeeAuthRouter.post('/login', employee_login);
employeeAuthRouter.get('/me', async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await EmployeeModel.findById(decoded.id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ username: user.name, role: user.role });
    } catch (error) {
        console.error('Fetch user details error:', error);
        next(error);
    }
});
export default employeeAuthRouter;