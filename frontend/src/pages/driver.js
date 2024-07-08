import React from "react";
import backgroundImage from "../images/background.jpeg";
import logo from "../images/logo.png";
import { TiUser } from "react-icons/ti";
import { MdSupport, MdHistory, MdSettings } from "react-icons/md";

const Driver = () => {
  return (
    <div className="w-full h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-white opacity-15"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Navbar */}
      <div
        className="w-full h-28 border-b-2 drop-shadow-md flex justify-end items-center"
        style={{ backgroundColor: "#F8FFF7" }}
      >
        <div className="flex items-center mr-4">
          <TiUser
            className="w-10 h-10 rounded-full p-1"
            style={{ backgroundColor: "#DFEFDF" }}
          />
          <select className="text-2xl ml-2">
            <option>Ryan Gosling</option>
            <option>Shaikh</option>
            <option>Gourav</option>
          </select>
        </div>
      </div>
      {/* Left section */}
      <div className="absolute left-0 top-0 h-screen w-64 p-8 shadow-lg z-10">
        <img src={logo} alt="Logo" className="w-40 h-auto mb-12   mx-auto" />
        <div className="flex flex-col items-center space-y-4">
          <div className=" mt-8 items-center space-x-2">
            <TiUser
              className="w-20 p-2 h-20 ml-6 rounded-full mb-4"
              style={{ backgroundColor: "#DFEFDF" }}
            />
            <div>
              <p className="text-lg font-semibold mb-1">Ryan Gosling</p>
              <p className="text-sm text-center text-gray-600">Driver</p>
            </div>
          </div>
          <hr className="w-full border-gray-300 " />
          <div className="mt-40">
            <div className="flex items-center space-x-2 mb-4">
              <MdSupport className="w-8 h-8" />
              <button className="text-lg">Support</button>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MdHistory className="w-8 h-8" />
              <button className="text-lg">History</button>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MdSettings className="w-8 h-8" />
              <button className="text-lg">Settings</button>
            </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex items-center justify-center h-96 mt-12 p-28 ml-80">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border-t-slate-800">
          <h2 className="text-4xl text-center mb-4">Driver Login</h2>
          <hr
            style={{ backgroundColor: "rgba(204, 218, 201, 1)" }}
            className="w-full border-spacing-px mb-8 md:mb-12"
          />
          <div className="mb-4">
            <label className="block text-2xl text-gray-700 mb-2 text-center mb-4">
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
              className="mb-4 p-2 items-center"
              id="username"
              type="text"
              style={{ backgroundColor: "#F4FAED" }}
            />
          </div>
          <div className="mb-4 flex justify-center">
            <button
              type="button"
              className="w-1/2 bg-green-500 text-white py-2 rounded hover:bg-green-600"
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
              className="w-1/2 bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
