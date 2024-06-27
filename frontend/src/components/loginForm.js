import React from "react";
import backgroundImage from "../images/background.jpeg"; // Adjust the path based on your actual image location
import logoImage from "../images/logo.png"; // Adjust the path based on your actual image location

const LoginForm = () => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col md:flex-row bg-white bg-opacity-75 p-10 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center mb-10 md:mb-0 md:mr-10">
          <img src={logoImage} alt="Logo" className="w-32 h-32 mb-4" />
          <h1 className="text-3xl font-bold text-green-600">Swaaha</h1>
          <p className="text-gray-700">
            Swaaha Resource Management Pvt Ltd. India
          </p>
        </div>
        <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                User id / Employee id
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="User id / Employee id"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
              >
                Forgot username or password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default LoginForm;
