import React, { useState } from 'react';
import { useThemeProvider } from "../../utils/ThemeContext";
import Sidebar from '../Sidebar';
import Header from '../Header';
import Image from '../../assets/images/FamilyExperience.jpg'



const ProfileSettings = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentTheme } = useThemeProvider();
  const [profileData, setProfileData] = useState({
    firstName: '',
    surname: '',
    mobileNumber: '',
    addressLine1: '',
    addressLine2: '',
    postcode: '',
    state: '',
    area: '',
    emailId: '',
    education: '',
    country: '',
    stateRegion: '',
    experience: '',
    additionalDetails: ''
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data submitted:', profileData);
    // Handle form submission here
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-2">
              {/* Left: Title */}
              <div className="mb-1 sm:mb-0">
              <h2 className="text-2xl font-bold mb-2">Profile Settings</h2>
                

              </div>
            </div>





    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <img src={Image} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-bold">Reuben Faruna</h3>
            <p>Reuben@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Surname:</label>
            <input
              type="text"
              name="surname"
              value={profileData.surname}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Mobile Number:</label>
            <input
              type="tel"
              name="mobileNumber"
              value={profileData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Address Line 1:</label>
            <input
              type="text"
              name="addressLine1"
              value={profileData.addressLine1}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Address Line 2:</label>
            <input
              type="text"
              name="addressLine2"
              value={profileData.addressLine2}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Postcode:</label>
            <input
              type="text"
              name="postcode"
              value={profileData.postcode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">State:</label>
            <input
              type="text"
              name="state"
              value={profileData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Area:</label>
            <input
              type="text"
              name="area"
              value={profileData.area}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Email ID:</label>
            <input
              type="email"
              name="emailId"
              value={profileData.emailId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Education:</label>
            <input
              type="text"
              name="education"
              value={profileData.education}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Country:</label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">State/Region:</label>
            <input
              type="text"
              name="stateRegion"
              value={profileData.stateRegion}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2">Experience in Designing:</label>
            <textarea
              name="experience"
              value={profileData.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2">Additional Details:</label>
            <textarea
              name="additionalDetails"
              value={profileData.additionalDetails}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-purple-600 text-white p-2 rounded">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>

    </div>
    </main>
    </div>
    </div>

  );
};

export default ProfileSettings;