import { Schema, model } from 'mongoose';

const employee_schema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    employee_id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

// Create a model based on the schema
const EmployeeModel = model('Employees', employee_schema);

export default EmployeeModel;