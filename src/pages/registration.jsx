import React, { useState } from 'react'
import axios from 'axios';
import { API_BASE_URL } from '../api/endPoint';
import { useNavigate } from 'react-router-dom';

export default function Registration(props) {
   
    const BearerToken = localStorage.getItem("accessToken");
    
    const navigate = useNavigate ();

    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [gender, setGender]=useState("")
    const [email, setEmail]= useState("")
    const [department, setDepartment]=useState("")
    const [tel, setTel]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")

    
    const form = new FormData();
    form.append("firstName", firstName);
    form.append("lastName", lastName);
    form.append("gender", gender);
    form.append("email", email);
    form.append("department", department);
    form.append("tel", tel);
    form.append("password", password);
    form.append("confirmPassword", confirmPassword);
    
    let registration={
        firstName:firstName,
        lastName:lastName,
        gender:gender,
        email:email,
        department:department,
        tel:tel,
        password:password,
        }

    const HandleSubmit=(e)=>{
        e.preventDefault();
            axios
            .post(`${API_BASE_URL}user/create`, registration, {
              headers: {
                // "Content-Type": "application/json",
                accept: "application/json",
                authorization: "Bearer " + BearerToken
            },
            })
            .then((response) => {
                window.location.replace("/login");                
                console.log(response, "Change location to login");
            })
            .catch(function (error) {
              console.log(error, "errorrrrrrrrrrrrrrr");
            });
      }
      
return (
    <div className='h-screen grid items-center justify-center '>
        <form
            onSubmit={HandleSubmit}
            className='grid items-center justify-center w-[500px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-[#83dece] dark:bg-gray-800 dark:border-gray-700'
        >
           <div className=''>
           <div className="grid md:grid-cols-2 md:gap-6 mt-[20px]">
            <div className="relative z-0 w-full mb-6 group ">
                <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setFirstName(e.target.value)}
                    required />
                <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setLastName(e.target.value)}
                    required />
                <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
        </div>   
        <div className="relative z-0 w-full mb-6 group">
        {/* <label htmlFor="gender" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label> */}
            <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Female</option>
                <option>Male</option>
                <option>Rather not say</option>
            </select>
            </div>
        <div className="relative z-0 w-full mb-6 group">
            <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setEmail(e.target.value)}
                    required />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setPassword(e.target.value)}
                    required/> 
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input 
                type="password" 
                name="confirmPassword" 
                id="confirmPassword" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required />
            <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>
        
        <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="tel" 
                    name="tel" 
                    id="tel" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setTel(e.target.value)}
                    required />
                <label htmlFor="tel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tel (123-456-7890)</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="text" 
                    name="department" 
                    id="department" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" "
                    onChange={(e)=>setDepartment(e.target.value)}
                    required />
                <label htmlFor="department" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
            </div>
  </div>
    <div className='flex items-center justify-center gap-[40px] mb-[20px]'>
        <button 
            // onClick={handleClick}
            type="submit" 
            className="text-white bg-[#1b9c85] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
        </button>
        <button 
            type="reset" 
            className="text-[#1b9c85] border-[#1b9c85] border-[1px] bg-[#ffffff] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Cancel
        </button>
    </div>

</div>
           
          
        </form>
    </div>
  )
}
