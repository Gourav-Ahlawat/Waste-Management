import jwt from 'jsonwebtoken';

const admin_authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, process.env.ADMIN_SECRET_KEY);
    if (decodedToken.id != process.env.SUPER_ADMIN_ID) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    if (decodedToken.role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    req.user = { id: decodedToken.id, role: decodedToken.role };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default admin_authenticate;