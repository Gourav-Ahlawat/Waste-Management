import React, { useEffect, useState } from "react";
import backgroundImage from "../images/bg.png";
import logo from "../images/logo.png";
import { TiUser } from "react-icons/ti";
import { MdSupport, MdHistory, MdSettings } from "react-icons/md";
import FetchUserDetails from "../utils/fetchUserDetails";
import CaptureWeight from "../utils/captureWeight";
import SubmitWeight from "../utils/submitWeight";
import { useNavigate } from 'react-router-dom';

const Driver = () => {
  const [username, setUsername] = useState('Unknown');
  const [capturedWeight, setCapturedWeight] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await FetchUserDetails();
        if (userDetails) {
          setUsername(userDetails.username);
        } else {
          alert('Please login to continue');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        alert('Failed to fetch user details. Please try again.');
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleCaptureWeight = async () => {
    try {
      const weightData = await CaptureWeight();
      if (weightData && weightData.weight) {
        setCapturedWeight(weightData.weight);
      } else {
        alert('No weight captured');
      }
    } catch (error) {
      console.error('Error capturing weight:', error);
      alert('Failed to capture weight. Please try again.');
    }
  };

  const handleSubmitWeight = async () => {
    try {
      const response = await SubmitWeight(capturedWeight);
      console.log('Submit weight response:', response);
      alert('Weight submitted successfully');
    } catch (error) {
      console.error('Error submitting weight:', error);
      alert('Failed to submit weight. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div class="text-center">
        <div role="status">
          <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="w-full h-28 border-b-2 drop-shadow-md flex justify-end items-center"
          style={{ backgroundColor: "#F8FFF7" }}
        >
          <div className="flex items-center mr-4">
            <TiUser
              className="w-10 h-10 rounded-full p-1"
              style={{ backgroundColor: "#DFEFDF" }}
            />
            <select className="text-2xl ml-2" onChange={handleLogout}>
              <option>{username}</option>
              <option>Logout</option>
            </select>
          </div>
        </div>
        <div class="flex px-80 justify-end">
          {/* Left section */}
          <div className="absolute left-0 top-0 h-screen w-64 p-8 shadow-lg z-10">
            <img src={logo} alt="Logo" className="w-40 h-auto mb-12 mx-auto" />
            <div className="flex flex-col items-center space-y-4">
              <div className="mt-8 items-center space-x-2">
                <TiUser
                  className="w-20 p-2 h-20 ml-6 rounded-full mb-4"
                  style={{ backgroundColor: "#DFEFDF" }}
                />
                <div>
                  <p className="text-lg text-center font-semibold mb-1">{username}</p>
                  <p className="text-sm text-center text-gray-600">Driver</p>
                </div>
              </div>
              <div className="mt-12 space-y-6 text-gray-600">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <MdSupport className="w-8 h-8" />
                  <button className="text-lg">Support</button>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <MdHistory className="w-8 h-8" />
                  <button className="text-lg">History</button>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <MdSettings className="w-8 h-8" />
                  <button className="text-lg">Settings</button>
                </div>
              </div>
            </div>
          </div>
          {/* Capture Weight and Submit section */}
          <div className="flex items-center h-screen w-96 justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border-t-slate-800">
              <h2 className="text-4xl text-center mb-4">Driver Login</h2>
              <hr
                style={{ backgroundColor: "rgba(204, 218, 201, 1)" }}
                className="w-full border-spacing-px mb-8 md:mb-12"
              />
              <div className="mb-4">
                <label className="block text-2xl text-gray-700 text-center mb-4">
                  Select Client
                </label>
                <select className="w-full p-2 border border-b-4 rounded">
                  <option>Cliente 1</option>
                  <option>Cliente 2</option>
                  <option>Cliente 3</option>
                </select>
              </div>
              <hr
                style={{ backgroundColor: "rgba(204, 218, 201, 1)" }}
                className="w-full border-spacing-px"
              />
              <div className="flex justify-center mt-4">
                <input
                  className="mb-4 p-2 items-center bg-gray-700 text-white rounded"
                  id="username"
                  type="text"
                  value={capturedWeight}
                  readOnly
                />
              </div>
              <div className="mb-4 flex justify-center">
                <button
                  type="button"
                  className="w-1/2 bg-green text-white py-2 rounded hover:bg-green-600"
                  onClick={handleCaptureWeight}
                >
                  Capture Weight
                </button>
              </div>
              <hr
                style={{ backgroundColor: "rgba(204, 218, 201, 1)" }}
                className="w-full border-spacing-px "
              />
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  className="w-1/2 bg-green text-white py-2 rounded hover:bg-green-600"
                  onClick={handleSubmitWeight}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
