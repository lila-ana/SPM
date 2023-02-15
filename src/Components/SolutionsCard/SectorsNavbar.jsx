import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../api/endPoint';
import sector from "../../utils/Sectors.json"

export default function SectorsNavbar() {
  
    const [sectors, setSectors] = useState ();
    const [projects, setProjects] = useState ();
    
    const getProject = ()=> {
        axios
        .get(`${API_BASE_URL}project`)
        .then((res) => setProjects(res.data?.data))
        .catch((err) => console.log(err));
        }
        useEffect(() => {
        getProject()
        },[]);

    const getUser = ()=> {
        axios
        .get(`${API_BASE_URL}sector`)
        .then((res) => setSectors(res.data?.data))
        .catch((err) => console.log(err));
      }
      useEffect(() => {
        getUser()
      },[]);

    // console.log(sectors, "Give me Sectors")
    
    return (
        <div>            
            <nav class="flex bg-[rgb(16,163,127)] border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
                <ul className="flex gap-[50px] text-[#FFFFFF] font-semibold mr-[25px] ">
                {sectors?.map((sector) => (
                        <a
                            href="#"
                            className="  hover:text-white hover:font-bold hover:border-b-2 hover:border-[#e0e0e0] duration-100 "
                        >
                            <span>
                                
                                {sector.name}
                            </span>
                        </a>
                ))}
                </ul>
            </nav>
    <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3"></div>
            {projects?.map((projectcard) => (
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        {projectcard.client_id}sdfjdfs 
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-gray-900">
                        {projectcard.name}   sjfhkashfdjas                     
                    </div>
                </div>
            ))}
    </div>
</div>
  )
}
