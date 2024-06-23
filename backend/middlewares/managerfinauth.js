import jwt from 'jsonwebtoken';
import { EmployeeModel } from '../model/export.js';

const managerfin_authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await EmployeeModel.findById(decodedToken.id);
    if (!user) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    if (user.role !== 'manager_finance') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default managerfin_authenticate;