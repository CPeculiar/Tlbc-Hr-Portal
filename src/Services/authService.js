import axios from 'axios';
import { showToast } from '../utils/toast';

const API_URL = 'https://tlbc-platform-api.onrender.com/api';

const authService = {
  login: async (username, password) => {
    try{
    const response = await axios.post(`${API_URL}/login/`, { username, password });
    showToast.info('Logging in...', { autoClose: 2000 });

    if (response.data.access) { 
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);

      // Set the default authorization header for all future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
      authService.setAuthHeader(response.data.access);
      await authService.getUserInfo(); // Fetch and save user info after successful login
     
      // showToast.success('Successfully logged in!');

    }
    return response.data;
} catch (error) {
  console.error('Login error:', error);
  showToast.error('Login failed. Please check your credentials.');
  throw error;
}
},


  logout: async (message) => {
    const refreshToken = localStorage.getItem('refreshToken');
    // showToast.info('Logging out...');
   
    try {
      const response = await axios.post(`${API_URL}/logout/`, { refresh: refreshToken });

      if (response.data.detail === "Successfully logged out." || response.status === 200) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('firstName');
        localStorage.removeItem('userRole');
        delete axios.defaults.headers.common['Authorization'];
        
         showToast.success('Successfully logged out!');

        // Clear browser history
        window.history.pushState(null, '', window.location.href);
        window.onpopstate = function () {
          window.history.pushState(null, '', window.location.href);
        };
      
        // Redirect to home page after a short delay
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);
    }

    } catch (error) {
      console.error('Logout error:', error);
      showToast.error('An error occurred during logout.');
    }
  },

  getUserInfo: async () => {
    try {
    const response = await axios.get(`${API_URL}/user/`);
    const userData = response.data;

     // Save non-null values to localStorage
     Object.entries(userData).forEach(([key, value]) => {
      if (value !== null) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    });

    return userData;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  },

  updateProfile: async (updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/user/`, updatedData);
      await authService.getUserInfo(); // Refresh user info after update
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },


  checkTokenValidity: async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return false;

    try {
      await axios.post(`${API_URL}/token/verify/`, { token: accessToken });
      return true;
    } catch (error) {
      return false;
    }
  },

  refreshToken: async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return false;

    try {
      const response = await axios.post(`${API_URL}/token/refresh/`, { refresh: refreshToken });
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      // Update the default authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
      authService.setAuthHeader(response.data.access);
      return true;
    } catch (error) {
      return false;
    }
  },

  setAuthHeader: (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
};


export default authService;



// getUserInfo: async () => {
//   const response = await axios.get(`${API_URL}/user/`);
//   localStorage.setItem('firstName', response.data.first_name);
//   localStorage.setItem('lastName', response.data.last_name);
//   localStorage.setItem('userRole', response.data.role);
//   localStorage.setItem('gender', response.data.gender);
//   return response.data;
// },


// Notify().showSuccessNotification("We are logging you in...");
// Notify().showInfoNotification("Logging in...");
// Notify().showInfoNotification(message || "We are logging you out...");