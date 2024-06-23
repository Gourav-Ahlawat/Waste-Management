import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const employeeSchema = new Schema({

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

// Compare the given password with the hashed password in the database
employeeSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Create a model based on the schema
const EmployeeModel = model('Employees', employeeSchema);

export default EmployeeModel;