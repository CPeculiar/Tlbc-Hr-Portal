import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import authService from "../../Services/authService";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Logo from "../../assets/images/TLBC_LOGO_removebg.png";

const Register = () => {
  const [darkMode, setDarkMode] = useState(false);
  //   const [termsAccepted, setTermsAccepted] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);
  // const [passwordVisible, setPasswordVisible] = useState(false);
  // const [formData, setFormData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   username: "",
  //   password: "",
  //   gender: "",
  //   phone_number: ""
  // });

  // const [errors, setErrors] = useState({});
  // const navigate = useNavigate();

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: "",
  //   }));
  // };

  // const handleTermsAccepted = (e) => {
  //   setTermsAccepted(e.target.checked);
  // };


  // const validateForm = (data) => {
  //   const newErrors = {};
  //   let isValid = true;

  //   if (!data.first_name) {
  //     newErrors.first_name = "First name is required";
  //     isValid = false;
  //   }

  //   if (!data.last_name) {
  //     newErrors.last_name = "Last name is required";
  //     isValid = false;
  //   }

  //   if (!data.username) {
  //     newErrors.username = "Username is required";
  //     isValid = false;
  //   }

  //   if (!data.password) {
  //     newErrors.password = "Password is required";
  //     isValid = false;
  //   }

  //   if (!data.birth_date) {
  //     newErrors.birth_date = "Birth Date is required";
  //     isValid = false;
  //   }

  //   if (!validatePhone(data.phone_number)) {
  //     newErrors.phone_number = "Invalid phone number";
  //     isValid = false;
  //   }

  //   if (!data.gender) {
  //     newErrors.gender = "Gender is required";
  //     isValid = false;
  //   }

  //   if (!data.zone) {
  //     newErrors.zone = "Please select your zone";
  //     isValid = false;
  //   }

  //   setErrors(newErrors);
  //   return isValid;
  // };

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!termsAccepted) {
  //       alert("Please accept the terms and conditions to proceed.");
  //       return;
  //     }  

  //   if (!validateForm(formData)) {
  //     return;
  //   }
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(
  //       "https://tlbc-platform-api.onrender.com/api/onboarding/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       let errorData;

  //       try {
  //         errorData = JSON.parse(errorText);
  //       } catch {
  //         throw new Error("An unknown error occurred");
  //       }

  //       setErrors(errorData);
  //       return;  
  //     }

  //     const data = await response.json();
  //     localStorage.setItem("accessToken", data.access);
  //     localStorage.setItem("refreshToken", data.refresh);

  //     authService.setAuthHeader(data.access);

  //     const userInfo = await authService.getUserInfo();

  //     if (userInfo.role === "admin" || userInfo.role === "superadmin") {
  //       navigate("/dashboard");
  //     } else {
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //       console.error("Error details:", error);
  //       setErrors({ submit: error.message });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const validatePhone = (phone) => {
  //   const re = /^\d{11}$/;
  //   return re.test(String(phone));
  // };

  return (
    //   <div classNameName="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    //     <div classNameName="bg-gray-100 flex items-center justify-center w-full max-w-xl">
    //       <div classNameName="bg-white p-8 rounded-lg shadow-md w-full">
    //         <div classNameName="mb-8">
    //           <img classNameName="mx-auto h-20 w-auto" src={Logo} alt="Purple logo" />
    //           <h2 classNameName="text-2xl text-black text-center font-semibold mt-6">
    //             Your Experience starts here
    //           </h2>
    //           <p classNameName="text-gray-600 text-center">Register with your correct information to be able to access the portal.</p>
    //         </div>

    //         <form classNameName="space-y-6" method="post" onSubmit={handleSubmit}>
    //           <div classNameName="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div>
    //               <input
    //                 type="text"
    //                 id="first_name"
    //                 name="first_name"
    //                 placeholder="First Name"
    //                 onChange={handleInputChange}
    //                 value={formData.first_name}
    //                 classNameName="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //               />
    //               <span classNameName="text-red-500 text-xs">
    //                 {errors.first_name}
    //               </span>
    //             </div>
    //             <div>
    //               <input
    //                 type="text"
    //                 name="last_name"
    //                 placeholder="Last Name"
    //                 onChange={handleInputChange}
    //                 value={formData.last_name}
    //                 classNameName="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //               />
    //               <span classNameName="text-red-500 text-xs">{errors.last_name}</span>
    //             </div>
    //           </div>

    //           <div classNameName="relative">
    //             <input
    //               type="email"
    //               name="email"
    //               placeholder="Email address"
    //               onChange={handleInputChange}
    //               value={formData.email}
    //               classNameName="w-full  px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //             />
    //           </div>
    //           <span classNameName="text-red-500 text-xs">{errors.email}</span>

    //           <div classNameName="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div>
    //               <input
    //                 type="text"
    //                 name="username"
    //                 placeholder="Username"
    //                 onChange={handleInputChange}
    //                 value={formData.username}
    //                 classNameName="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //               />
    //               <span classNameName="text-red-500 text-xs">{errors.username}</span>
    //             </div>

    //             <div classNameName="relative">
    //               <input
    //                 type={passwordVisible ? "text" : "password"}
    //                 id="password"
    //                 name="password"
    //                 placeholder="Password"
    //                 onChange={handleInputChange}
    //                 value={formData.password}
    //                 classNameName="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 pr-10" // Add padding to the right
    //               />
    //                 <button
    //                   type="button"
    //                   classNameName="absolute inset-y-0 right-0 flex items-center pr-3" // Position the icon inside the input
    //                   onClick={togglePasswordVisibility}
    //                   style={{
    //                     border: "none",
    //                     background: "transparent",
    //                     padding: 0,
    //                   }}
    //                 >
    //                   <FontAwesomeIcon
    //                         icon={passwordVisible ? faEyeSlash : faEye}
    //                         style={{ color: "#6c757d" }}
    //                   />
    //                 </button>
    //               </div>
    //             </div>


    //           <span classNameName="text-red-500 text-xs">{errors.password}</span>

    //           <div classNameName="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div>
    //               <input
    //                 type="tel"
    //                 name="phone_number"
    //                 placeholder="Phone number"
    //                 onChange={handleInputChange}
    //                 value={formData.phone_number}
    //                 classNameName="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //               />
    //               <span classNameName="text-red-500 text-xs">
    //                 {errors.phone_number}
    //               </span>
    //             </div>
    //             <div>
    //              <label htmlFor="birth_date" classNameName="text-gray-900">Date of Birth</label> 
    //               <input
    //                 type="date"
    //                 name="birth_date"
    //                 onChange={handleInputChange}
    //                 value={formData.birth_date}
    //                 placeholder="enter date"
    //                 classNameName="w-full text-gray-900 px-3 py-2 text-black text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //               />
    //               <span classNameName="text-red-500 text-xs">
    //                 {errors.birth_date}
    //               </span>
    //             </div>
    //           </div>

    //           <div classNameName="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div>
    //               <select
    //                 name="gender"
    //                 onChange={handleInputChange}
    //                 value={formData.gender}
    //                 classNameName="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //               >
    //                 <option value="">Select Gender</option>
    //                 <option value="Male">Male</option>
    //                 <option value="Female">Female</option>
    //               </select>
    //               <span classNameName="text-red-500 text-xs">{errors.gender}</span>
    //             </div>
    //             <div>
    //               <select
    //                 name="zone"
    //                 onChange={handleInputChange}
    //                 value={formData.zone}
    //                 classNameName="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //               >
    //                 <option value="">Select Zone</option>
    //                 <option value="Awka zone">Awka zone</option>
    //                 <option value="Nnewi zone">Nnewi zone</option>
    //                 <option value="Owerri zone">Owerri zone</option>
    //                 <option value="Ekwulobia zone">Ekwulobia zone</option>
    //                 <option value="TLBC Onitsha">TLBC Onitsha</option>
    //               </select>
    //               <span classNameName="text-red-500 text-xs">{errors.zone}</span>
    //             </div>
    //           </div> 

    //           <div classNameName="mb-4">
    //                 <div classNameName="form-check">
    //                   <label classNameName="form-check-label text-muted text-gray-900">
    //                     <input 
    //                     type="checkbox" 
    //                     classNameName="form-check-input"
    //                     checked={termsAccepted}
    //                     onChange={handleTermsAccepted}
    //                      />
    //                     <i classNameName="input-helper mr-2"></i>
    //                     I agree to all Terms & Conditions of TLBC Int'l
    //                   </label>
    //                 </div>
    //               </div>

    //           <button
    //             type="submit"
    //             disabled={isLoading}
    //             classNameName={`w-full text-white bg-blue-600 hover:bg-blue-800 py-2 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    //           ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    // }`}>
    //         {isLoading ? "Registering..." : "Register"}
    //           </button>

    //           {errors.submit && (
    //             <div classNameName="mt-4 text-center text-red-500">
    //               {errors.submit}
    //             </div>
    //           )}

    //         </form>

    //         <p classNameName="text-center mt-6 text-sm text-gray-600">
    //           Already have an account?{" "}
    //           <Link to="/login" classNameName="text-blue-600 hover:underline">
    //             Login
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>




    //   <div className="lg:flex">
    //   <div className="bg- bg-top bg-no-repeat lg:w-1/2" style={{ backgroundImage: "url('https://scontent.fbni1-2.fna.fbcdn.net/v/t39.30808-6/279266972_2838165546330012_4247521066369827701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEfDHQ9iBmjWIBO9PbSSgWX26nMtmU9IdDbqcy2ZT0h0CiI1Hxl3Dh-FoCMmiMi67s76m6N8r3VqFvEC56WX8bt&_nc_ohc=nSlGzpRigxoQ7kNvgEbP3vJ&_nc_zt=23&_nc_ht=scontent.fbni1-2.fna&oh=00_AYDVHXFlJwZ0F5Sm3vrc9kdeih81LitDS3Dg1k4WHHH-FQ&oe=66C931BA')" }}></div>

    //   <div className="bg-gray-100 w-full lg:w-1/2 flex items-center justify-center">
    //     <div className="max-w-md w-full">
    //       <img src="logo" alt=""/>
    //       <h3 className="text-xl font-bold mb-4 text-center">Your <strong>Experience</strong> Starts Here</h3>
    //       <p className="mb-4 text-center text-black">Register with your correct information to be able to access the portal.</p>
    //       <form action="#" method="post">
    //         <div className="mb-4">
    //           <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Firstname</label>
    //           <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Your firstname here" id="firstname"/>
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Lastname</label>
    //           <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Your lastname here" id="lastname"/>
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
    //           <input type="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="your-email@gmail.com" id="email"/>
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
    //           <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="your-email@gmail.com" id="username"/>
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
    //           <input type="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Your Password" id="password"/>
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
    //           <input type="date" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" id="date_of_birth"/>
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
    //           <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" id="gender">
    //             <option value="" disabled selected>Select your gender</option>
    //             <option value="male">Male</option>
    //             <option value="female">Female</option>
    //           </select>
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="zone" className="block text-sm font-medium text-gray-700">Zone</label>
    //           <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" id="zone">
    //             <option value="" disabled selected>Select your zone</option>
    //             <option value="Awka">Awka Zone</option>
    //             <option value="Nnewi">Nnewi Zone</option>
    //             <option value="Owerri">Owerri Zone</option>
    //             <option value="Ekwulobia">Ekwulobia Zone</option>
    //             <option value="Onitsha">TLBC Onitsha</option>
    //           </select>
    //         </div>
    //         <div className="mb-4">
    //           <label className="inline-flex items-center">
    //             <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500"/>
    //             <span className="ml-2 text-sm text-gray-600">I agree to all Terms & Conditions of TLBC Int'l</span>
    //           </label>
    //         </div>
    //         <div className="flex justify-between mb-4">
    //           <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password</a>
    //         </div>
    //         <input type="submit" value="Log In" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"/>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="flex flex-col justify-center items-center w-full h-[150vh] bg-[#282D2D] px-5">
        <div
          className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"
            }  w-full p-5 sm:p-10 rounded-md`}
        >
          <h1
            className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
              }`}
          >
            Register for an Account
          </h1>
          <div className="w-full mt-8">
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                    }`}
                  type="text"
                  placeholder="Your firstname"
                />
                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                    }`}
                  type="text"
                  placeholder="Your lastname"
                />
              </div>
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="email"
                placeholder="Enter your email"
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text"
                placeholder="Your Username"
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="password"
                placeholder="Password"
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="date"
                placeholder="Date of Birth"
              />
              <select
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
                  }`}
              >
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
                  }`}
              >
                <option value="" disabled selected>Select Zone</option>
                <option value="">Awka Zone</option>
                <option value="">Owerri Zone</option>
                <option value="">Nnewi Zone</option>
                <option value="">Ekwulobia Zone</option>
                <option value="">TLBC Onitsha</option>
              </select>
              <div className="flex items-center mt-4">
          <input
            id="termsCheckbox"
            type="checkbox"
            className="w-4 h-4 text-[#E9522C] bg-gray-100 border-gray-300 rounded focus:ring-[#E9522C] focus:ring-2"
          />
          <label
            htmlFor="termsCheckbox"
            className={`ml-2 text-sm font-medium ${darkMode ? "text-white" : "text-black"
              }`}
          >
            Do you agree to the terms and conditions of the TLBC'IntL
          </label>
        </div>
            </div>
            <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3">Register</span>
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/Login">
                <span className="text-[#E9522C] font-semibold">Login</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start overflow-hidden pt-5 xl:max-w-3xl w-full">
          <div className="flex">
            <h3 className="text-white">Switch Mode : &nbsp;</h3>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                readOnly
              />
              <div
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
            </label>
          </div>
        </div>
      </div>

    </>
  );
};

export default Register;
