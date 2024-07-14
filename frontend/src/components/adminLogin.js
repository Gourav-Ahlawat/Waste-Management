import React, { useState } from "react";
import axios from 'axios';
import backgroundImage from "../images/bg.png";
import logo from "../images/logo.png";
import vehicle from "../images/vehicle.png";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/adminauth/login', {
        admin_id: adminId,
        admin_password: adminPassword,
      });
      if (response.data.message === 'Login successful') {
        alert('Login successful');
        // Redirect to admin about page
        navigate('/admin/about');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-0 flex p-6"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full p-4">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="mt-12 md:mt-36 flex flex-col items-center md:items-start">
              <img src={logo} alt="Logo" className="w-48 md:w-96 h-28 mb-4 object-contain" />
              <div className="text-xl text-center md:text-left mb-8">
                <p className="text-center">Swaaha Resources</p>
                <p>Management Pvt Ltd. India</p>
              </div>
              <img src={vehicle} alt="Van" className="w-48 md:w-48 object-contain" />
            </div>
          </div>
        </div>

        <div
          className="w-4/5 md:w-1/3 flex flex-col p-6 md:p-12 items-center justify-center shadow-md opacity-75"
          style={{ backgroundColor: "#E9FFE5" }}
        >
          <h2 className="text-2xl text-center pb-4">Admin Login</h2>
          <hr
            style={{ backgroundColor: "rgba(204, 218, 201, 1)" }}
            className="w-full border-spacing-px mb-8 md:mb-12"
          />
          <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div>
              <input
                className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employee_id"
                type="text"
                style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                placeholder="Employee ID"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
              />
            </div>
            <div>
              <input
                className="shadow mb-4 md:mb-8 appearance-none w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
              <button
                type="button"
                className="text-sm text-[rgba(64, 86, 67, 1)] hover:text-green-800 mb-2 md:mb-0"
                onClick={() => alert("Forgot username or password?")}
              >
                forgot username or password?
              </button>
              <button
                className="hover:bg-green-700 text-black w-fit h-fit py-2 px-4 focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: "rgba(97, 198, 8, 1)" }}
                type="submit"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
