import React from "react";
import backgroundImage from "../images/background.jpeg";
import logo from "../images/logo.png";
import { TiUser } from "react-icons/ti";
import { MdChevronLeft } from "react-icons/md";
const DriverLogin = () => {
  return (
    <div className="w-full h-screen relative ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-white opacity-15"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Navbar */}
      <div
        className="w-full h-28 border-b-2 drop-shadow-md  flex justify-between items-center"
        style={{ backgroundColor: "#F8FFF7" }}
      >
        <img src={logo} alt="Logo" className="w-68 h-24 p-4 ml-4" />
        <div className="flex items-center mr-4">
          <TiUser
            className="w-10 h-10 rounded-full p-1"
            style={{ backgroundColor: "#DFEFDF" }}
          />

          <p className="text-2xl ml-2">Ryan Gostling</p>
          <MdChevronLeft className="text-2xl -rotate-90" />
        </div>
      </div>
    </div>
  );
};
export default DriverLogin;
