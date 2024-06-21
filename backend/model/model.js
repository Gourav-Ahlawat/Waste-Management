import { Schema, model } from 'mongoose';

// Define the schema for your collection
const model_one_schema = new Schema({
    // Define your fields here
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

// Create a model based on the schema
const Model = model('YourModel', model_one_schema);

export default Model;