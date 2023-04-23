import ComponentHeader from "@/components/Shared/ComponentHeader";
import { setUser } from "@/src/features/userSlice";
import { login, postfetch } from "@/utils/api";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMasage, setErrorMasage] = useState("");
  const router = useRouter();
  const notify = () => toast(`Login Successfuly`);
  const dispatch = useDispatch()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
  const handleLogin = (e) => {
    setErrorMasage("");
    let data = {  identifier: email ,password };
    login(data)
      .then((response) => {
        if (response.jwt) {
          dispatch(setUser(response.user))
          router.push('/profile');
          notify();
        } else {
          setErrorMasage(response?.error?.message);
        }
      })
      .catch((error) => {
        // Handle error here
        console.error(error.error.message);
      });

    e.preventDefault();
  };
  return (
    <div className="bg-white min-h-screen">
       <Head>
        <title>Login your account</title>
      </Head>
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
        <ComponentHeader
          data={{
            title: "Login",
            description: "Welcome Back To Your account",
          }}
        />
        <section onSubmit={handleLogin} className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-gray-900">
              Course House Login - Access Your Learning Resources
              </h1>
              <p className="leading-relaxed mt-4">
              Welcome back to Course House! Please enter your username and password to access your learning resources. Don't have an account yet? No problem, you can sign up for free and start learning today.
              </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Log in
              </h2>
              <form>
              
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    onChange={handleEmailChange}
                    type="email"
                    value={email}
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    onChange={handlePasswordChange}
                    type="password"
                    value={password}
                    id="password"
                    name="password"
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
               
                <button
                  type="submit"
                  className="text-white hover:bg-black block bg-indigo-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg"
                >
                  Login
                </button>
              </form>

             
                <p className="text-sm  mt-3">New to Course House. <Link className="text-blue-800 underline" href={'/register'}>Register Now!</Link></p>
              
              {errorMasage && (
                <p className="text-sm text-red-500 mt-3">{errorMasage}</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
