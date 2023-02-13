import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_BASE_URL } from '../../../api/endPoint';
import CommonSolutionCard from '../../Common/CommonSolutionCard'

export default function Governmental(props) {
  
  const [projects, setProjects]=useState()

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}project`)
      .then((res) => setProjects(res.data?.data))
      .catch((err) => console.log(err));
  },[]);   


  return (
    <div className='flex'>
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
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            PMS
                        </div>
                        <div className="mt-1 text-2xl font-semibold text-gray-900">
                            Project Management System 
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            SCM
                        </div>
                        <div className="mt-1 text-2xl font-semibold text-gray-900">
                            Supply Chain Management 
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            PEP
                        </div>
                        <div className="mt-1 text-2xl font-semibold text-gray-900">
                            Performance Enhancement Platform
                        </div>
                    </div>
                </div>
            </div>
      
    </div>
  )
}
