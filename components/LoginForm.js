import React from "react";
import Router from "next/router";
import { useState, useEffect } from "react";


export default function LoginForm({ login , user }) {
  const [state, changeState] = useState(0);
  const [alertstate, ChangeAlertstate] = useState(false);
  const [loginState, setLoginState] = useState();

  const handleLogin = (e) => {
    try {
      e.preventDefault();
      let login_info = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      login(login_info.email, login_info.password, changeState);
      console.log(user);
      setLoginState(false);
    } catch (err) {
      console.log("you are not authorized ");
      
    }
  };
  useEffect(() => {
    if (state == 1) {
      Router.push("/controller/");
    }
    if (state > 1) {
      setLoginState(true);
      ChangeAlertstate(true);
    }
  }, [state]);

  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex bg-gradient-to-tr from-blue-800 to-purple-700 i">
          <div>
            <h1 className="font-sans text-4xl font-bold text-white">Connect</h1>
            <p className="mt-1 text-white">
            The most popular Business to Customer service in the world
            </p>
            <button
              type="submit"
              className="block py-2 mt-4 mb-2 font-bold text-indigo-800 bg-white w-28 rounded-2xl"
            >
              Read More
            </button>
          </div>
          <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30"></div>
          <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30"></div>
          <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30"></div>
          <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30"></div>
        </div>
        <div className="flex items-center justify-center py-10 bg-white md:w-1/2">
          <form
            className="bg-white"
            onSubmit={(e) => {
              handleLogin(e);
            }}
          >
            <h1 className="mb-1 text-3xl font-bold text-gray-800">
              Hello Again!
            </h1>
            <p className="text-xl font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            {loginState && <>
              <p className="text-sm font-normal text-gray-600 text-red-600 mb-7">
                Please enter a correct email and password.<br/>Note that both fields may be case-sensitive.
                 
              </p>
              
            </>
              
            }
            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 border-none outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 border-none outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-indigo-600 rounded-2xl"
            >
              Login
            </button>

           
          </form>
        </div>
      </div>
    </div>
  );
}
