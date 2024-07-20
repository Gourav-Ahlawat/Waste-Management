import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TiUser } from "react-icons/ti";
import { MdSupport, MdHistory, MdSettings } from "react-icons/md";
import FetchUserDetails from "../utils/fetchUserDetails";
import BillingTable from "../components/billingTable";
import RegisterClient from "../components/registerClient";
import backgroundImage from "../images/bg.png";
import logo from "../images/logo.png";
import axios from 'axios';

const ManagerFin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('Unknown');
  const [isLoading, setIsLoading] = useState(true);
  const [billings, setBillings] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [billDetails, setBillDetails] = useState(null);
  const [mainContent, setMainContent] = useState('billing'); // Added state to track content

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await FetchUserDetails();
        if (userDetails) {
          setUsername(userDetails.username);
        } else {
          alert('Please login to continue');
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        alert('Failed to fetch user details. Please try again.');
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, [navigate]);

  const fetchBillings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user/managerfin/billing', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setBillings(response.data);
    } catch (error) {
      console.error('Error fetching billing data:', error);
      alert('Failed to fetch billing data. Please try again.');
    }
  };

  const fetchClientBilling = async (clientId) => {
    try {
      const response = await axios.get(`http://localhost:5000/user/managerfin/billing/${clientId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data.message) {
        alert(response.data.message);
      } else {
        setSelectedClient(response.data);
        calculateBillDetails(response.data);
      }
    } catch (error) {
      console.error('Error fetching client billing:', error);
      alert('Failed to fetch client billing data. Please try again.');
    }
  };

  const calculateBillDetails = (clientData) => {
    const baseAmount = clientData.total_weight * 100;
    const sgst = baseAmount * 0.09; // Assuming SGST is 9%
    const cgst = baseAmount * 0.09; // Assuming CGST is 9%
    const totalAmount = baseAmount + sgst + cgst;

    setBillDetails({
      baseAmount: baseAmount,
      sgst: sgst,
      cgst: cgst,
      totalAmount: totalAmount,
    });
  };

  useEffect(() => {
    fetchBillings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleMainContentChange = (event) => {
    const value = event.target.value;
    if (value === 'Logout') {
      handleLogout();
    } else if (value === 'Register Client') {
      setMainContent('registerClient');
    } else {
      setMainContent('billing');
    }
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <div role="status">
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
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
            <select className="text-2xl ml-2" onChange={handleMainContentChange}>
              <option>{username}</option>
              <option>Register Client</option>
              <option>Logout</option>
            </select>
          </div>
        </div>
        <div className="flex px-80 justify-end">
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
                  <p className="text-sm text-center text-gray-600">Manager Finance</p>
                </div>
              </div>
              <div className="mt-12 space-y-6 text-gray-600">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <MdSupport className="w-8 h-8" />
                  <span>Support</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <MdHistory className="w-8 h-8" />
                  <span>History</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <MdSettings className="w-8 h-8" />
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ml-64 p-8">
            {mainContent === 'billing' ? (
              <BillingTable
                billings={billings}
                fetchClientBilling={fetchClientBilling}
              />
            ) : (
              <RegisterClient />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerFin;
