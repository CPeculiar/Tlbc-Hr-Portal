// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [showPopup, setShowPopup] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError("");

  //   try {
  //     const response = await axios.post('https://tlbc-platform-api.onrender.com/api/password/reset/', { email });
  //     setMessage('A password reset email has been sent to your email. Click on the link in the mail and follow the instructions to change your password. Blessings');
  //     setShowPopup(true);
  //     setEmail('');
  //   } catch (error) {
  //     if (error.response && error.response.data && error.response.data.email) {

  //       setError(error.response.data.email[0]);
  //     } else {

  //       setError('An error occurred. Please try again.');
  //       setMessage('An error occurred. Please try again.');
  //       setShowPopup(true);
  //   } setShowPopup(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    //   <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot your password?</h2>
    //       <p className="mt-2 text-center text-sm text-gray-600">
    //         Enter your e-mail address and we'll send you a link to reset your password
    //       </p>
    //     </div>
    //     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    //       <div className="rounded-md shadow-sm -space-y-px">
    //         <div>
    //           <label htmlFor="email-address" className="sr-only">Email address</label>
    //           <input
    //             id="email-address"
    //             name="email"
    //             type="email"
    //             autoComplete="email"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //             placeholder="Email address"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <button
    //           type="submit"
    //           disabled={isLoading}
    //             className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white transition duration-150 ease-in-out 
    // ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    // }`}>
    //         {isLoading ? "Submitting..." : "Reset Password"}

    //         </button>
    //       </div>
    //     </form>
    //   </div>
    //   {showPopup && (
    //     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
    //       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
    //         <div className="mt-3 text-center">
    //           <h3 className="text-lg leading-6 font-medium text-gray-900">{error || message}</h3>
    //           <div className="mt-2 px-7 py-3">
    //             <button
    //               className="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
    //               onClick={() => {
    //               setShowPopup(false);
    //               navigate('/resetpassword');
    //               }}
    //             >
    //               Close
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>


    <>
      <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5">
        <div
          className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"
            }  w-full p-5 sm:p-10 rounded-md`}
        >
          <h1
            className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
              }`}
          >
            Reset Password
          </h1>
          <div className="w-full mt-8">
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
              <p className="text-center text-sm text-gray-600">
                Enter your e-mail address and we'll send you a link to reset your password
              </p>
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="email"
                placeholder="Your email here"
              />
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
              <span className="ml-3">Reset Password</span>
            </button>
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


export default ForgotPassword;
