import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../Services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/TLBC_LOGO_removebg.png";

const Register = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    birth_date: "",
    gender: "",
    phone_number: "",
    zone: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleTermsAccepted = (e) => {
    setTermsAccepted(e.target.checked);
  };


  const validateForm = (data) => {
    const newErrors = {};
    let isValid = true;

    if (!data.first_name) {
      newErrors.first_name = "First name is required";
      isValid = false;
    }

    if (!data.last_name) {
      newErrors.last_name = "Last name is required";
      isValid = false;
    }

    if (!data.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!data.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!data.birth_date) {
      newErrors.birth_date = "Birth Date is required";
      isValid = false;
    }

    if (!validatePhone(data.phone_number)) {
      newErrors.phone_number = "Invalid phone number";
      isValid = false;
    }

    if (!data.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    if (!data.zone) {
      newErrors.zone = "Please select your zone";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
        alert("Please accept the terms and conditions to proceed.");
        return;
      }  

    if (!validateForm(formData)) {
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://tlbc-platform-api.onrender.com/api/onboarding/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;

        try {
          errorData = JSON.parse(errorText);
        } catch {
          throw new Error("An unknown error occurred");
        }

        // Set the errors to the respective fields
        setErrors(errorData);
        return;  // Exit after setting errors
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      // Set the default authorization header for all future requests
      authService.setAuthHeader(data.access);

      // Get user info
      const userInfo = await authService.getUserInfo();

      // Navigate based on user role
      if (userInfo.role === "admin" || userInfo.role === "superadmin") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
        console.error("Error details:", error);
        setErrors({ submit: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const validatePhone = (phone) => {
    const re = /^\d{11}$/;
    return re.test(String(phone));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 flex items-center justify-center w-full max-w-xl">
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <div className="mb-8">
            <img className="mx-auto h-20 w-auto" src={Logo} alt="Purple logo" />
            <h2 className="text-2xl text-black text-center font-semibold mt-6">
              Your Experience starts here
            </h2>
            <p className="text-gray-600 text-center">Register with your correct information to be able to access the portal.</p>
          </div>

          <form className="space-y-6" method="post" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  onChange={handleInputChange}
                  value={formData.first_name}
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <span className="text-red-500 text-xs">
                  {errors.first_name}
                </span>
              </div>
              <div>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                  value={formData.last_name}
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <span className="text-red-500 text-xs">{errors.last_name}</span>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleInputChange}
                value={formData.email}
                className="w-full  px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <span className="text-red-500 text-xs">{errors.email}</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleInputChange}
                  value={formData.username}
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <span className="text-red-500 text-xs">{errors.username}</span>
              </div>

              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                  value={formData.password}
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 pr-10" // Add padding to the right
                />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3" // Position the icon inside the input
                    onClick={togglePasswordVisibility}
                    style={{
                      border: "none",
                      background: "transparent",
                      padding: 0,
                    }}
                  >
                    <FontAwesomeIcon
                          icon={passwordVisible ? faEyeSlash : faEye}
                          style={{ color: "#6c757d" }}
                    />
                  </button>
                </div>
              </div>
            

            <span className="text-red-500 text-xs">{errors.password}</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone number"
                  onChange={handleInputChange}
                  value={formData.phone_number}
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <span className="text-red-500 text-xs">
                  {errors.phone_number}
                </span>
              </div>
              <div>
               <label htmlFor="birth_date" className="text-gray-900">Date of Birth</label> 
                <input
                  type="date"
                  name="birth_date"
                  onChange={handleInputChange}
                  value={formData.birth_date}
                  placeholder="enter date"
                  className="w-full text-gray-900 px-3 py-2 text-black text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <span className="text-red-500 text-xs">
                  {errors.birth_date}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <select
                  name="gender"
                  onChange={handleInputChange}
                  value={formData.gender}
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <span className="text-red-500 text-xs">{errors.gender}</span>
              </div>
              <div>
                <select
                  name="zone"
                  onChange={handleInputChange}
                  value={formData.zone}
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="">Select Zone</option>
                  <option value="Awka zone">Awka zone</option>
                  <option value="Nnewi zone">Nnewi zone</option>
                  <option value="Owerri zone">Owerri zone</option>
                  <option value="Ekwulobia zone">Ekwulobia zone</option>
                  <option value="TLBC Onitsha">TLBC Onitsha</option>
                </select>
                <span className="text-red-500 text-xs">{errors.zone}</span>
              </div>
            </div>

            <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted text-gray-900">
                      <input 
                      type="checkbox" 
                      className="form-check-input"
                      checked={termsAccepted}
                      onChange={handleTermsAccepted}
                       />
                      <i className="input-helper mr-2"></i>
                      I agree to all Terms & Conditions of TLBC Int'l
                    </label>
                  </div>
                </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white bg-blue-600 hover:bg-blue-800 py-2 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>

            {errors.submit && (
              <div className="mt-4 text-center text-red-500">
                {errors.submit}
              </div>
            )}

          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
