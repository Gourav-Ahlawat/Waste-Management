import express from 'express';
import mongoose from 'mongoose';
import mqtt from 'mqtt';
import dotenv from 'dotenv';

// Import the user router
import userRouter from './routes/userrouter.js';

// Import the admin router
import adminRouter from './routes/adminrouter.js';

// Create an express app
const app = express();

app.use(express.json());

// Define the port
const port = 5000;

// Load the environment variables
dotenv.config();

// load database connection string
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

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

// Define a route for the landing page
app.get('/', (req, res) => {
    res.send('Welcome to the landing page!');
});

// Define a route for the user page
app.use('/user', userRouter);

// Define a route for the admin page
app.use('/admin', adminRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});