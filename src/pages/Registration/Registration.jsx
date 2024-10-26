import React, { useState } from "react";

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-1">Register</h1>
      <p className="text-gray-600 mb-6">Create your account</p>

      {/* Email Address */}
      <label className="block text-sm font-medium text-gray-700">Email Address</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 mt-1 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Phone Number Section */}
      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
      <div className="flex items-center mb-4">
        <select className="bg-gray-200 px-3 py-2 border-r rounded-l-lg focus:outline-none">
          <option value="+880">+880</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
          {/* Add more country codes as needed */}
        </select>
        <input
          type="tel"
          placeholder="174034309"
          className="w-full px-3 py-2 border-l-0 border rounded-r-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password Field */}
      <label className="block text-sm font-medium text-gray-700">Password</label>
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full px-3 py-2 mt-1 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-500"
        >
          {passwordVisible ? "Hide" : "Show"}
        </button>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm text-gray-600">Remember me</label>
        </div>
        <button className="text-sm text-blue-600 hover:underline">Forgot Password?</button>
      </div>

      {/* Register Button */}
      <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
        Register
      </button>

      {/* Already have an account */}
      <p className="text-sm text-center text-gray-600">
        Already have an account? <a href="#" className="text-blue-600 hover:underline">Login</a>
      </p>

      {/* iPhone Buttons */}
      <div className="flex justify-between mt-6">
        <button className="w-1/2 px-4 py-2 mr-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Button 1
        </button>
        <button className="w-1/2 px-4 py-2 ml-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default Registration;
