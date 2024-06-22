import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

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

employee_schema.pre('save', async function (next) {
    const employee = this;
    if (!employee.isModified('password')) {
        return next();
    }
    try{
        const salt = await bcrypt.genSalt();
        employee.password = await bcrypt.hash(employee.password, salt);
        next();
    }catch(error){
        console.error('Error creating employee:', error); // Log the error for debugging
        return next(error);
    }
});

// Compare the given password with the hashed password in the database
employee_schema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

// Create a model based on the schema
const EmployeeModel = model('Employees', employee_schema);

export default EmployeeModel;