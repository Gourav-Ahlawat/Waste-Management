import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load the environment variables
dotenv.config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.log('Error connecting to MongoDB:', error);
    }
  };

export default connectDB;
