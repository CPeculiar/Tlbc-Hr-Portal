import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import { useThemeProvider } from "../../utils/ThemeContext";
import Sidebar from '../Sidebar';
import Header from '../Header';
import axios from 'axios';
import Image from '../../assets/images/TLBC_LOGO_removebg.png'
import ChangePassword from '../../pages/Auth/ChangePassword';



const ProfileSettings = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentTheme } = useThemeProvider();
  const location = useLocation();
  const [profileData, setProfileData] = useState(location.state?.profileData || {});
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    if (!profileData || Object.keys(profileData).length === 0) {

    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://tlbc-platform-api.onrender.com/api/user/');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

     fetchProfileData();
    }
  }, [profileData]);

  const handleChangePassword = () => {
  
    navigate('/changepassword'); // Redirect to login page after logout
  };


  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('https://tlbc-platform-api.onrender.com/api/user/', profileData);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="grow">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <h2 className="text-2xl font-bold mb-5">Profile Settings</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
            <img src={Image} alt="Profile" className="w-24 h-24 rounded-full mr-4"  />
              <h3 className="text-xl font-semibold">{`${profileData.first_name} ${profileData.last_name}`}</h3>
              <p>{profileData.email}</p>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(profileData).map(([key, value]) => (
                <div key={key}>
                  <label className="block mb-2 capitalize">{key.replace('_', ' ')}:</label>
                  <input
                    type="text"
                    name={key}
                    value={value || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
              <div className="md:col-span-2 flex justify-between">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Save Profile
                </button>
                <button
                  type="button"
                  onClick={handleChangePassword}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Change Password
                </button>
              </div>
            </form>
            {showChangePassword && <ChangePassword />}
          </div>
        </div>
      </main>
    </div>
  </div>
);
};

export default ProfileSettings;