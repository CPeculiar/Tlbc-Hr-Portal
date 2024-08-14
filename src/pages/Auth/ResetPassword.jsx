import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New Password and Confirm Password do not match.");
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://tlbc-platform-api.onrender.com/api/password/reset/confirm/",
        {
          new_password: newPassword,
          key: key,
        }
      );

      setMessage("Password was successfully changed.");
      setShowPopup(true);
      setNewPassword("");
      setConfirmPassword("");
      setKey("");
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data)[0][0];
        setMessage(errorMessage);
        setError(error.response.data);
      } else {
        setMessage("An error occurred. Please try again.");
        setShowPopup(true);
        setError("An error occurred. Please try again.");
      }
      setShowPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="new-password" className="block mb-1">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              id="new-password"
              value={newPassword}
              onChange={(e) => {                
               setNewPassword(e.target.value);
               setMessage(''); // Clear the error message
               }}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-2 text-gray-600"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="confirm-password" className="block mb-1">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => { 
                setConfirmPassword(e.target.value);
                setMessage(''); // Clear the error message
              }}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2 text-gray-600"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="key" className="block mb-1">
            Key
          </label>
          <div className="relative">
            <input
              type="text"
              id="key"
              value={key}
              onChange={(e) => {
                 setKey(e.target.value);
                 setMessage(''); // Clear the error message  
              }}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded-md text-white ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
      {message && (
        <div className="mt-4 p-3 bg-red-100 rounded-md">{message}</div>
      )}
      {showPopup && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {message}
              </h3>
              <div className="mt-2 px-7 py-3">
                <button
                  className="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  onClick={() => {
                    setShowPopup(false);
                    navigate('/login');
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
