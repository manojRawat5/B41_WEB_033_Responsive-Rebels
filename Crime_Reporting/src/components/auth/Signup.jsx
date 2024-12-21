import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInwithGoogle from "./SigninWithGoogle";
import Banner from "../Banner";

const Signup = () => {
  const email = useRef(null);
  const password = useRef(null);
  let apikey = "AIzaSyC4rF0h95_op5HGMFg59TLfJvLwgm-M6fo";
  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();
    const row = JSON.stringify({
      email: email.current.value,
      password: password.current.value,
      returnSecureToken: true,
    });
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: row,
      }
    )
      .then((response) => response.json())
      .then((out) => {
        if (out.error) {
          alert("Sign Up Failed: " + out.error.message);
        } else {
          navigate('/after-register')
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  return (
    <>
      <Banner/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Register
        </h2>

        <form id="form" method="post" onSubmit={signUp} className="space-y-4">
          <div>
            <input
              ref={email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <input
              ref={password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Sign Up"
              className="cursor-pointer w-full p-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-200"
            />
          </div>
        </form>

        <SignInwithGoogle />

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:text-indigo-800">
            Log In
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;
