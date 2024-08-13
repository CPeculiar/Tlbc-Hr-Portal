import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register'
import NotFound from './pages/NotFound';
import DashboardCharts from './partials/dashboard/DashboardCharts';
import Transactions from './partials/finance/Transactions'
import UsersPage from './partials/community/UsersPage';
import UserProfile from './partials/profile/UserProfile'
import Logout from './pages/Auth/Logout';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ChangePassword from './pages/Auth/ChangePassword';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="*" element={<NotFound />} />


        <Route exact path="/charts" element={<DashboardCharts />} />
        <Route exact path="/userspage" element={<UsersPage />} />
        <Route exact path="/transactions" element={<Transactions />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/changepassword" element={<ChangePassword />} />
      </Routes>
    </>
  );
}

export default App;
