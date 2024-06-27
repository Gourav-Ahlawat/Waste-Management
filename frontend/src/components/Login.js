import React from "react";
import backgroundImage from "../images/background.jpeg";
import logo from "../images/logo.png";
import vehicle from "../images/vehicle.png";
const Login = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-white opacity-15 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative flex items-center justify-center ">
        <div className="w-96  flex flex-col ">
          <div className="mt-36">
            <img src={logo} alt="Logo" className=" w-96 h-28" />
            <div className="text-xl text-center mb-8">
              <p> Swaaha Resources</p>
              <p>Management Pvt Ltd. India</p>
            </div>
            <img src={vehicle} alt="Van" className="" />
          </div>
        </div>
        <div
          className="  w-3/4 h-72 ml-72 flex flex-col  p-6 items-center justify-center shadow-md "
          style={{ backgroundColor: "#E9FFE5" }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <form>
            <div>
              <input
                className="shadow mb-4 appearance-none border w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
                placeholder="User id / Employee id"
              />
            </div>
            <div>
              <input
                className="shadow mb-4 appearance-none border w-full  h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                style={{ backgroundColor: "rgba(205, 224, 201, 1)" }}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                className="text-sm text-[rgba(64, 86, 67, 1)] hover:text-green-800"
                onClick={() => alert("Forgot username or password?")}
              >
                forgot username or password?
              </button>
              <button
                className=" ml-10 hover:bg-green-700 text-black py-2 px-4  focus:outline-none focus:shadow-outline"
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
