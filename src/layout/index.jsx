import React from 'react'
import Navbar from '../Components/AboutUs/Navbar'

export default function index(props) {
  return (
   <div className='flex flex-col gap-5'>
    <Navbar/>
    <div className='px-[100px]'>
        {props.children}
    </div>
   </div>
    
    
    )
}
