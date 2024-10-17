import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound";
import DashboardCharts from "./partials/dashboard/DashboardCharts";
import Transactions from "./partials/finance/Transactions";
import UsersPage from "./partials/community/UsersPage";
import UserProfile from "./partials/profile/UserProfile";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ChangePassword from "./pages/Auth/ChangePassword";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import UserTable from "./partials/community/UserTable";
import FinanceDashboard from "./partials/finance/FinanceDashboard";
import ResetPassword from "./pages/Auth/ResetPassword";
import IdleTimerContainer from "./components/IdleTimerContainer";
import AttendanceCreationPage from "./partials/Attendance/CreateAttendance";
import AttendanceMarkerPage from "./partials/Attendance/MarkAttendance";
import NewcomerForm from "./partials/Attendance/NewcomerForm";
import AttendanceReport from "./partials/Attendance/AttendanceReport";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
    <IdleTimerContainer >

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />

        <Route exact path="*" element={<NotFound />} />
        {/* <Route exact path="/charts" element={<DashboardCharts />} /> */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/userspage"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/changepassword"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usertable"
          element={
            <ProtectedRoute>
              <UserTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createattendance"
          element={
            <ProtectedRoute>
              <AttendanceCreationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/markattendance"
          element={
            <ProtectedRoute>
              <AttendanceMarkerPage />
            </ProtectedRoute>
          }
        />
         <Route
          path="/attendancereport"
          element={
            <ProtectedRoute>
              <AttendanceReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/:ref_code"
          element={
            <ProtectedRoute>
              <NewcomerForm />
            </ProtectedRoute>
          }
        />

        <Route path="/finance" element={<ProtectedRoute>
                                          <FinanceDashboard />
                                              </ProtectedRoute>} />
      </Routes>
      </IdleTimerContainer>
    </>
  );
}


export default App;
