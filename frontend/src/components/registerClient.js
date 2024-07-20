import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterClient = ({ isAdmin = false }) => {
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [clientId, setClientId] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!clientName || !clientAddress || !clientId) {
            alert('Please fill in all fields');
            return;
        }

        const token = localStorage.getItem('token'); // Retrieve token from local storage

        try {
            const response = await axios.post(
                isAdmin ? 'http://localhost:5000/admin/registerclient' : 'http://localhost:5000/user/managerfin/registerclient',
                {
                    client_name: clientName,
                    client_address: clientAddress,
                    client_id: clientId
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in headers
                    },
                }
            );

            if (response.status === 201) {
                alert('Client registered successfully');
                navigate(isAdmin ? '/admin' : '/managerfin');
            } else {
                alert('Failed to register client');
            }
        } catch (error) {
            console.error('Error registering client', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="w-full h-screen relative flex justify-center items-center">
            <div
                className="flex flex-col p-6 md:p-12 items-center justify-center shadow-md opacity-75"
                style={{ backgroundColor: "#E9FFE5" }}
            >
                <h2 className="text-2xl text-center pb-4">Register Client</h2>
                <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="client_name"
                            type="text"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            placeholder="Client Name"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="client_address"
                            type="text"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            placeholder="Client Address"
                            value={clientAddress}
                            onChange={(e) => setClientAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="client_id"
                            type="text"
                            style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                            placeholder="Client ID"
                            value={clientId}
                            onChange={(e) => setClientId(e.target.value)}
                            required
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

export default RegisterClient;
