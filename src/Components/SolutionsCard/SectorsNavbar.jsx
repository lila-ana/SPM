import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../api/endPoint';

export default function SectorsNavbar() {
  
    const [sectors, setSectors] = useState ();
    const [projects, setProjects] = useState ();
    
    const HandleChange = () => {

    }
    const getUser = ()=> {
        axios
        .get(`${API_BASE_URL}sector`)
        .then((res) => setSectors(res.data?.data))
        .catch((err) => console.log(err));
      }
      useEffect(() => {
        getUser()
      },[]);

    const getProject = ()=> {
        axios
        .get(`${API_BASE_URL}project`)
        .then((res) => setProjects(res.data?.data))
        .catch((err) => console.log(err));
      }
      useEffect(() => {
        getProject()
      },[]);
    
    // console.log(sectors, "Give me Sectors")
    
    return (
        <div>            
            <nav class="flex bg-[rgb(16,163,127)] border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                {sectors?.map((sector)=> (
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <div
                            onClick={HandleChange}
                            className="flex py-2 pl-3 pr-4 text-[#10a37f] rounded md:bg-transparent md:text-[#10a37f] md:p-0 dark:text-[#10a37f]" aria-current="page">{sector?.name}
                        </div>
                    </ul>
                ))}
                </div>
            </div>
            </nav>

            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    {projects?.map((project)=> (
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            {project.client_id}
                        </div>
                        <div className="mt-1 text-2xl font-semibold text-gray-900">
                            {project.name}                        
                        </div>
                    </div>
                    ))}
            </div>
        </div>
        </div>
  )
}
