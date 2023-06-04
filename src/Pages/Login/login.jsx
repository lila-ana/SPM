import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import Footer from '../../Components/Footer/footer';
import { API_BASE_URL } from '../../api/endPoint';
import Header from '../../header/header';

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
            window.location.replace("/AssetRegistration");
            console.log(response, "thi is response");
          })
          .catch((err) => {
            setMessage(err?.response?.data?.message?.message);
    
            console.log(err);
          });
      };
  return (
    <div>
        <div className="relative flex flex-col justify-center items-center  min-h-screen overflow-hidden">
           <Header/>
            <div className="border-[1px] border-[#d99000] w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-[#d4b87e]  lg:max-w-xl">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white justify-center items-center flex">
                  Sign in to your account
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
                          className="block w-full px-4 py-2 mt-2 text-[#d99000] bg-white border rounded-md focus:border-[#d99000] focus:ring-[#9671274b] focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="example@auhhc.com"/>
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
                          className="block w-full px-4 py-2 mt-2 text-[#d99000] bg-white border rounded-md focus:border-[#d99000] focus:ring-[#9671274b] focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="password"/>
                    </div>
                    <a
                        href="#"
                        className="text-xs text-[#d99000] hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="flex m-[10px] gap-[50px] items-center justify-center">
                      <button
                        type="submit"
                        className="bg-[#AD8317] font-nunito text-sm text-white rounded-[12px]  p-[10px] w-[150px] "
                      >
                        Login
                      </button>
                      <button
                        type="reset"
                        className="bg-[#ffff] border-[#d99000] border-[1px] font-nunito text-sm text-[#d99000] rounded-[12px]  p-[10px] w-[150px] "
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
                        className="font-medium text-[#d99000] hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
            <section class="bg-gray-50 dark:bg-gray-900">
</section>
        </div>
      <Footer/>
    </div>

  )
}



