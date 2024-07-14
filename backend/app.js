import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import the database connection
import connectDB from './db.js';

// Import the user router
import employeeAuthRouter from './routes/employeeauth.js';
import employeeUserRouter from './routes/employeerouter.js';

// Import the admin router
import adminAuthRouter from './routes/adminauth.js';
import adminRouter from './routes/adminrouter.js';

// Load the environment variables
dotenv.config();

// Create an express app
const app = express();

connectDB();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Define the port
const port = 5000;

// Define a route for the landing page
app.get('/', (req, res) => {
    res.send('Welcome to the landing page! Login to get access to website.');
});

// Define a route for the login page
app.use('/auth', employeeAuthRouter);

// Define a route for the user page
app.use('/user', employeeUserRouter);

// Define a route for admin login
app.use('/adminauth', adminAuthRouter);

// Define a route for the admin page
app.use('/admin', adminRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
