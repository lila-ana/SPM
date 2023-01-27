import React, { useState } from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_BASE_URL } from '../api/endPoint';

export default function New() {
    // const BearerToken = localStorage.getItem("accessToken");
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [gender, setGender]=useState("")
    const [email, setEmail]= useState("")
    const [department, setDepartment]=useState("")
    const [tel, setTel]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")

    

    const formik = useFormik ({
        
        initialValues: {
            fullName: "",
            gender:"",
            email: "",
            department: "",
            role: "",
            password: "",
            confirmPassword: "",
        },

        validationSchema: Yup.object ({
            name: Yup.string()
                .required("Required"),
            email: Yup.string()
                .email("Invalid email")
                .required("Required"),
            gender: Yup.string()
                .required("Required"),
            department: Yup.string()
                .required("Required"),
            role: Yup.string()
                .required("Required"),
            password: Yup.string()
                .required("Required")
                .min(8, "Must be 8 characters or more")
                .matches(/[a-z]+/, "One lowercase character")
                .matches(/[A-Z]+/, "One uppercase character")
                .matches(/[@$!%*#?&]+/, "One special character")
                .matches(/\d+/, "One number"),
            confirmPassword: Yup.string()
                // .when("password", {
                //     is: val => (val && val.length >0 ? true : false),
                //     then: Yup.string().oneOf([Yup.ref('password')], 'password does not match')
                // })    
            // .required("Required")
            //     .min(8, "Must be 8 characters or more")
            //     .matches(/[a-z]+/, "One lowercase character")
            //     .matches(/[A-Z]+/, "One uppercase character")
            //     .matches(/[@$!%*#?&]+/, "One special character")
            //     .matches(/\d+/, "One number"), 

        }),

        // onSubmit: (values) =>{
        //     console.log(values)
        // }
    })

    let registration={
        firstName,
        lastName,
        gender,
        email,
        department,
        tel,
        password,
        confirmPassword,
        }
    const HandleSubmit=(e)=>{
        e.preventDefault();
            axios
            .post(`${API_BASE_URL}user/create`, registration, {
              headers: {
                accept: "application/json",
                // authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Ik5hb2xsbCIsImVtYWlsIjoiTmFvbGxsQGdtYWlsLmNvbSIsImdlbmRlciI6Im1hbGUiLCJkZXBhcnRtZW50IjoiU29mdHdhcmUgYXMgYSBTZXJ2aWMiLCJqb2IiOiJFUlAiLCJwYXNzd29yZCI6IjEyMzhnZ2ZqOCIsImlzQWRtaW4iOm51bGwsImNyZWF0ZWRfYXQiOm51bGwsInVwZGF0ZWRfYXQiOm51bGwsImlzX2RlbGV0ZWQiOnRydWUsImNyZWF0ZWRfYnkiOjIsInVwZGF0ZWRfYnkiOm51bGwsImlhdCI6MTY3MzUyNDcxOSwiZXhwIjoxNjczNjExMTE5fQ.n8D5nEppe3v49Btx4UZog6csO2gVeJpOKHVKJ5iZLws",
                
              },
            })
            .then(function (response) {
              console.log(response);
             
            })
            .catch(function (error) {
              console.log(error, "errorrrrrrrrrrrrrrr");
            });
      }
      
      console.log(registration,"formik.errors")

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
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
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
           
            {/* <div className='m-[10px]'>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder='Full Name'
                        onChange={(e)=>setFullName(e.target.value)}
                        onBlur={formik.handleBlur}
                        // value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? <p>{formik.errors.fullName}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="gender"
                        name="gender"
                        
                        type="text"
                        placeholder='Gender'
                        onChange={(e)=>setGender(e.target.value)}
                        onBlur={formik.handleBlur}
                        // value={formik.values.gender}
                    />
                    <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option>Female</option>
  <option>Male</option>
 
</select>
                    {formik.touched.gender && formik.errors.gender ? <p>{formik.errors.gender}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="department"
                        name="department"
                        type="text"
                        placeholder='Department/Team'
                        onChange={(e)=>setDepartment(e.target.value)}
                        onBlur={formik.handleBlur}
                        // value={formik.values.department}
                    />
                    {formik.touched.department && formik.errors.department ? <p>{formik.errors.department}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="role"
                        name="role"
                        type="text"
                        placeholder='Role/Job title'
                        onChange={(e)=>setRole(e.target.value)}
                        onBlur={formik.handleBlur}
                        // value={formik.values.role}
                    />
                    {formik.touched.role && formik.errors.role ? <p>{formik.errors.role}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="email"
                        name="email"
                        type="email"
                        placeholder='example@example.com'
                        onChange={(e)=>setEmail(e.target.value)}
                        onBlur={formik.handleBlur}
                        // value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="password"
                        name="password"
                        type="Password"
                        placeholder='Password'
                        onChange={(e)=>setPassword(e.target.value)}
                        onBlur={formik.handleBlur}
                        // value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="confirmPassword"
                        name="confirmPassword"
                        type="Password"
                        placeholder='Confirm Password'
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        onBlur={formik.handleBlur}
                        // value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null}
                </div>
            </div> */}

            {/* <div className='flex items-center justify-center gap-[40px] my-[10px]'>
                <button 
                    type="submit"
                    className="bg-[#1b9c85] font-nunito text-[13px] font-light text-white rounded-[12px] p-[10px] w-[90px] h-[35px] flex justify-center items-center "
                >
                    Register
                </button>
                <button 
                    type="submit"
                    className="bg-[#8f8f8f] font-nunito text-[13px] font-light text-white border-[#8f8f8f] border-[1px] rounded-[12px] p-[10px] w-[90px] h-[35px] flex justify-center items-center"
                >
                    Cancel
                </button>
            </div> */}
        </form>
    </div>
  )
}
