import express from 'express';
import mqtt from 'mqtt';
import dotenv from 'dotenv';

// Import the database connection
import connectDB from './db.js';

// Import the user router
import employeeAuthRouter from './routes/employeeauth.js';
import employeeUserRouter from './routes/employeerouter.js';

// Import the admin router
import adminAuthRouter from './routes/adminauth.js'
import adminRouter from './routes/adminrouter.js';

// Load the environment variables
dotenv.config();

// Create an express app
const app = express();

connectDB();

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

//Define a route for admin login
app.use('/adminauth', adminAuthRouter)
// Define a route for the admin page
app.use('/admin', adminRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//mqtt thing
var options = {
    host: process.env.mqtthost,
    port: process.env.mqttport,
    protocol: 'mqtts',
    username: process.env.mqttusername,
    password: process.env.mqttpassword,
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic', 'Hello');