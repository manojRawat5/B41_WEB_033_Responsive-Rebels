import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInwithGoogle from "./SigninWithGoogle";
import Banner from "../Banner";

const Signin = () => {
  const email = useRef(null);
  const password = useRef(null);
  let apikey = "AIzaSyC4rF0h95_op5HGMFg59TLfJvLwgm-M6fo";
  const navigate = useNavigate();

  async function signin(event) {
    event.preventDefault();
    let row = JSON.stringify({
      email: email.current.value,
      password: password.current.value,
    });
    try {
      let call = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apikey}`,
        {
          method: "POST",
          body: row,
        }
      );
      let data = await call.json();
      if (data.error) {
        alert("Log In Failed " + data.error.message);
      } else {
        localStorage.setItem("idToken", data.idToken);
        navigate('/after-login')
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Banner/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Log In
        </h2>

        <form id="form" method="post" onSubmit={signin} className="space-y-4">
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
              value="Sign In"
              className="w-full p-3 cursor-pointer bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-200"
            />
          </div>
        </form>

        <SignInwithGoogle />

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:text-indigo-800">
            Register
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signin;
