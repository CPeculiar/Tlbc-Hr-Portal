// src/components/ChangePassword.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tlbc-platform-api.onrender.com/api/password/change/', {
        old_password: oldPassword,
        new_password: newPassword
      });
      setMessage('Password was successfully changed.');
      setOldPassword('');
      setNewPassword('');
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data)[0][0];
        setMessage(errorMessage);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="old-password" className="block mb-1">Old Password</label>
          <input
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="new-password" className="block mb-1">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Change Password
        </button>
      </form>
      {message && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
};

export default ChangePassword;