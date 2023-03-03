import axios from 'axios';
import React, { useState } from 'react'
import { API_BASE_URL } from '../api/endPoint';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    let login = {
      email,
      password,
    };
  const HandleSubmit = (e) => {
        e.preventDefault();
        axios
          .post(`${API_BASE_URL}user/login`, login)
          .then((response) => {
            localStorage.setItem("accessToken", response?.data?.accessToken);
            window.location.replace("/admin");
            console.log(response, "thi is response");
          })
          .catch((err) => {
            setMessage(err?.response?.data?.message?.message);
    
            console.log(err);
          });
      };
  return (
    <div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-[rgb(167,228,212)]  lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#10a37f] uppercase ">
                   Sign in
                </h1>
                <form 
                    onSubmit={HandleSubmit}
                    className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input 
                          type="text" 
                          id="email"
                          onChange={(e) => setEmail(e.target.value)} 
                          className="block w-full px-4 py-2 mt-2 text-[#10a37f] bg-white border rounded-md focus:border-[#10a37f] focus:ring-[#a7e4d4] focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="name@ienetworks.com"/>
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input 
                          type="password" 
                          id="password" 
                          onChange={(e) => setPassword(e.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-[#10a37f] bg-white border rounded-md focus:border-[#10a37f] focus:ring-[#a7e4d4] focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="password"/>
                    </div>
                    <a
                        href="#"
                        className="text-xs text-[#10a37f] hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="flex m-[10px] gap-[10px] items-center justify-center">
                      <button
                        type="submit"
                        className="bg-[#1b9c85] font-nunito text-sm text-white rounded-[12px]  p-[10px] w-[150px] "
                      >
                        Login
                      </button>
                      <button
                        type="reset"
                        className="bg-[#ffff] border-[#1b9c85] border-[1px] font-nunito text-sm text-[#1b9c85] rounded-[12px]  p-[10px] w-[150px] "
                      >
                        Cancel
                      </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="/registration"
                        className="font-medium text-[#10a37f] hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
   
    </div>

  )
}



