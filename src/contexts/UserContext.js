// UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from './services/authService';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const info = await authService.getUserInfo();
        setUserInfo(info);
      } catch (error) {
        console.error('Error fetching user info:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  const updateUserInfo = async (updatedFields) => {
    try {
      await authService.updateProfile(updatedFields);
      const updatedInfo = await authService.getUserInfo();
      setUserInfo(updatedInfo);
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  return (
    <UserContext.Provider value={{ userInfo, loading, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);