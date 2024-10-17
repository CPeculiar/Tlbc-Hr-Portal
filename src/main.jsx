import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';
import App from './App';
import setupAxiosInterceptors from './Services/axiosConfig';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Set up Axios interceptors
setupAxiosInterceptors();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
    <ToastContainer />
  </React.StrictMode>
);
