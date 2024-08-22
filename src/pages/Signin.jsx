import React from 'react'

function Signin() {
    return (
        <>
            <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div class="md:w-1/2 px-8 md:px-16">
                        <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
                        <p class="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

                        <form action="" class="flex flex-col gap-4">
                            <input class="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
                            <div class="relative">
                                <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>
                            <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                        </form>

                        <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr class="border-gray-400" />
                            <p class="text-center text-sm">OR</p>
                            <hr class="border-gray-400" />
                        </div>

                        <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                            Login with Google
                        </button>

                        <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>Don't have an account?</p>
                            <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
                        </div>
                    </div>

                    <div class="md:block hidden w-1/2">
                        <img class="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin


import React, { useState } from "react";
import { Link } from "react-router-dom";


const [darkMode, setDarkMode] = useState(false);
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
            Login into your Account
          </h1>
          <div className="w-full mt-8">
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
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
              <span className="ml-3">Login</span>
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
              Don't have an account?{" "}
              <Link to="/Register">
                <span className="text-[#E9522C] font-semibold">Register</span>
              </Link>
            </p>
            <p className="mt-2 text-xs text-gray-600 text-right">
              <Link to="/ForgotPassword">
                <span className="text-[#E9522C] font-semibold">Forgot Password?</span>
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



Register

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




//forgot password

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