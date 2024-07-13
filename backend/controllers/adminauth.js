import jwt from 'jsonwebtoken';

const admin_login = async (req, res, next) => {
    try {
        const admin_id = req.body.admin_id;
        const admin_password = req.body.admin_password;
        if (admin_id !== process.env.SUPER_ADMIN_ID) {
            return res.status(404).json({ message: 'Invalid id' });
        }
        if (admin_password !== process.env.SUPER_ADMIN_PASS) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        const token = jwt.sign({ id: admin_id, role: 'admin' }, process.env.ADMIN_SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error('Login error:', error);
        next(error);
    }
};

export default admin_login;