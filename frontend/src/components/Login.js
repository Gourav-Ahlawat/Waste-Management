import React from "react";
import backgroundImage from "../images/background.jpeg";
import logo from "../images/logo.png";
import vehicle from "../images/vehicle.png";

const Login = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-white opacity-15"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full p-4">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <div className="mt-12 md:mt-36 flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-48 md:w-96 h-28 mb-4" />
            <div className="text-xl text-center md:text-left mb-8">
              <p className="text-center">Swaaha Resources</p>
              <p>Management Pvt Ltd. India</p>
            </div>
            <img src={vehicle} alt="Van" className="w-48 md:w-48" />
          </div>
        </div>
        <div
          className="w-full md:w-1/3 flex flex-col p-6 md:p-12 items-center justify-center shadow-md"
          style={{ backgroundColor: "#E9FFE5" }}
        >
          <h2 className="text-2xl text-center pb-4">Login</h2>
          <hr
            style={{ backgroundColor: "rgba(204, 218, 201, 1)" }}
            className="w-full border-spacing-px mb-8 md:mb-12"
          />
          <form className="w-full">
            <div>
              <input
                className="shadow mb-4 md:mb-8 appearance-none  w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                placeholder="User id / Employee id"
              />
            </div>
            <div>
              <input
                className="shadow mb-4 md:mb-8 appearance-none  w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
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
                className="hover:bg-green-700 text-black w-24 h-12 py-2 px-4 focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: "rgba(97, 198, 8, 1)" }}
                type="button"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
