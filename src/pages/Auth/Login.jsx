import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../Services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/images/TLBC_LOGO_removebg.png";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onForgotPassword = () => {
    navigate("/forgotpassword");
  };

  const validateForm = (data) => {
    const newError = {};
    let isValid = true;

    if (!data.username) {
      newError.username = "Username is required";
      isValid = false;
    }

    if (!data.password) {
      newError.password = "Password is required";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(formData)) {
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      await authService.login(formData.username, formData.password);

      // After successful login, getUserInfo will use the saved token
      const userInfo = await authService.getUserInfo();

      if (userInfo.role === "admin" || userInfo.role === "superadmin") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        // Handle non_field_errors or other error messages
        setError(data.non_field_errors?.[0] || "Login failed. Please try again.");
      } else {
      setError("Login failed. Please check your credentials.");
    } 
  }finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <div>
          <img className="mx-auto h-16 w-auto" src={Logo} alt="TLBC Logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to TLBC Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign in to access your dashboard.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>
            {error.username && (
              <p className="text-red-500 text-xs mt-1">{error.username}</p>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your Password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  className="h-5 w-5 text-gray-400"
                />
              </button>
            </div>
            {error.password && (
              <p className="text-red-500 text-xs mt-1">{error.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <button
                type="button"
                onClick={onForgotPassword}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white transition duration-150 ease-in-out 
  ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }`}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
            {error && (
              <p className="mt-2 text-center text-sm text-red-600">{error}</p>
            )}
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          New to our platform?{" "}
          <a
            href="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
