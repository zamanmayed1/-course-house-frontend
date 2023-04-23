import ComponentHeader from "@/components/Shared/ComponentHeader";
import { setUser } from "@/src/features/userSlice";
import { register } from "@/utils/api";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMasage, setErrorMasage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const notify = () => toast(`User Created Successfuly`);
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  let username = email.split("@")[0];
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let newUsername = username + randomNumber;
  const handleRegister = (e) => {
    setErrorMasage("");
    let data = { fullname: fullName, email, username: newUsername, password };
    register(data)
      .then((response) => {
        if (response.jwt) {
          dispatch(setUser(response.user));
          router.push("/profile");
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
        <title>Register your account</title>
      </Head>
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
        <ComponentHeader
          data={{
            title: "Register",
            description: "Create a student account Today!",
          }}
        />
        <section onSubmit={handleRegister} className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-gray-900">
                Course House Register - Access Your Learning Resources
              </h1>

              <p className="leading-relaxed mt-4">
                Are you looking to improve your skills or learn something new?
                Register now for our online courses and take advantage of the
                convenience of learning from anywhere at any time. Our courses
                cover a wide range of topics and are taught by experienced
                instructors who are experts in their fields. Don't miss out on
                this opportunity to enhance your knowledge and advance your
                career. Sign up today and start learning!
              </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Sign Up
              </h2>
              <form>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                    onChange={handleFullNameChange}
                    type="text"
                    id="full-name"
                    value={fullName}
                    name="full-name"
                    required
                    className="w-full bg-white rounded border border-gray-300  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
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
                {password && (
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Username
                    </label>
                    <input
                      type="text"
                      value={newUsername}
                      readOnly
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="text-white hover:bg-black block bg-indigo-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg"
                >
                  Register
                </button>
              </form>
              <p className="text-sm  mt-3">
                Allready have an account.{" "}
                <Link className="text-blue-800 underline" href={"/login"}>
                  Login Now!
                </Link>
              </p>
              <p>
                {errorMasage && (
                  <p className="text-sm text-red-500 mt-3">{errorMasage}</p>
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
