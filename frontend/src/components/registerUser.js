import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../images/bg.png";
import logo from "../images/logo.png";

const RegisterEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from local storage

        try {
            const response = await axios.post(
                'http://localhost:5000/user/managerops/registerdriver',
                {
                    name,
                    email,
                    phone_number: phoneNumber,
                    employee_id: employeeId,
                    role,
                    password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in headers
                    },
                }
            );

            if (response.status === 200) {
                alert('Employee registered successfully');
                navigate('/managerOps'); // Redirect to managerOps after successful registration
            } else {
                alert('Failed to register employee');
            }
        } catch (error) {
            console.error('Error registering employee', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="w-full h-screen relative flex justify-center items-center">
            <div
                className="flex flex-col p-6 md:p-12 items-center justify-center shadow-md opacity-75"
                style={{ backgroundColor: "#E9FFE5" }}
            >
                <h2 className="text-2xl text-center pb-4">Register Employee</h2>
                <form className="w-full " onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="name"
                            type="text"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone_number"
                            type="text"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="employee_id"
                            type="text"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            placeholder="Employee ID"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="employee_id"
                            type="text"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            placeholder="Employee Role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                        <button
                            className="hover:bg-green-700 text-black w-fit h-fit py-2 px-4 focus:outline-none focus:shadow-outline"
                            style={{ backgroundColor: "rgba(97, 198, 8, 1)" }}
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterEmployee;
