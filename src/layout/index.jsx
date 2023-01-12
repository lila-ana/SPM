import React from 'react'
import Navbar from '../Components/AboutUs/Navbar'
// import ProjectDescription from '../pages/ProjectDescription'


export default function index(props) {
  return (
   <div className='flex flex-col gap-5'>
    <Navbar/>
    {/* <ProjectDescription/> */}
    <div className='px-[100px]'>
        {props.children}
    </div>
   </div>
    
    
    )
}
