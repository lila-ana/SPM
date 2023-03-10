import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../api/endPoint';
import SectorsNavbar from './SectorsNavbar';

export default function SolutionCard() {
    
    const [department, setDepartment] =useState(null)
    const [projects, setProjects] =useState(null)

    const HandleChange = () => {
        const getProject = ()=> {
            axios
            .get(`${API_BASE_URL}project`)
            .then((res) => setProjects(res.data?.data))
            .catch((err) => console.log(err));
          }
          useEffect(() => {
            getProject()
          },[]);

    }
    useEffect(() => {
        axios
          .get(`${API_BASE_URL}department`)
          .then((res) => setDepartment(res.data?.data))
          .catch((err) => console.log(err));
      },[]);   
  
    return (

        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-[#1b9c85] shadow w-100">
                <div className="space-y-8">
                    <div className="flex items-center">
                        <h2 className="text-3xl font-bold text-white">Solutions</h2>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    
                    <div className="flex-1 pt-[35px]">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold text-white mb-4 ">Department</h2>
                        </div>
                        {department?.map((deps)=> (
                        <ul className="pt-2 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    onClick={HandleChange}                                    
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className=" text-gray-100 text-base font-semibold hover:font-bold duration-100">
                                        {deps.name}
                                    </span>
                                </a>
                            </li>
                        </ul>
                        ))} 
                    </div>
                </div>
            </div>

            <SectorsNavbar/>

        </div>
  
  )
}
