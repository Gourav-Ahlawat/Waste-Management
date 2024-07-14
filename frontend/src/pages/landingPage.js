import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../images/bg.png";
import logo from "../images/logo.png";
import vehicle from "../images/vehicle.png";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleAdminLogin = () => {
        navigate('/adminLogin');
    };

    return (
        <div className="w-full h-screen relative flex justify-center items-center">
            <div
                className="absolute inset-0 bg-cover bg-center flex p-6"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
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
                    className="w-full md:w-1/3 flex flex-col p-6 md:p-12 items-center justify-center shadow-md opacity-75"
                    style={{ backgroundColor: "#E9FFE5" }}
                >
                    <h2 className="text-2xl text-center pb-4">Please login to continue</h2>
                    <hr
                        style={{ backgroundColor: "rgba(204, 218, 201, 1)" }}
                        className="w-full border-spacing-px mb-8 md:mb-12"
                    />
                    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                        <button
                            className="hover:bg-green-700 text-black w-fit h-fit py-2 px-4 focus:outline-none focus:shadow-outline mb-2 md:mb-0"
                            style={{ backgroundColor: "rgba(97, 198, 8, 1)" }}
                            onClick={handleLogin}
                        >
                            Employee
                        </button>
                        <button
                            className="hover:bg-green-700 text-black  w-fit h-fit py-2 px-4 focus:outline-none focus:shadow-outline"
                            style={{ backgroundColor: "rgba(97, 198, 8, 1)" }}
                            onClick={handleAdminLogin}
                        >
                            Admin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
