import React from 'react'
import image from "../../Assests/1324024.png"

export default function TextSection(props) {
  return (
    <div>
        <div className='p-[30px] m-[20px]'> 
        <div className='grid grid-cols-6 gap-[20px] border-r-[2px] border-[#d99c000]'>
          <div className='col-span-4 flex justify-center pt-[15px] text-[#606060] text-[21px] font-normal font-Raleway'>
            "Elevate Ambo University's Efficiency with our Cutting-Edge Inventory Management System!<br></br><br></br>
            Benefit from real-time updates, automated asset tracking, and enhanced visibility into your inventory. Improve procurement, reduce waste, and optimize resource allocation.<br></br><br></br>
            Effortlessly search and categorize items, enabling efficient allocation and utilization of university resources.  Experience the power of intelligent inventory management for academic excellence and seamless operations."<br></br><br></br>
          </div>
            <div className='col-span-2 flex justify-center pt-[15px] text-[#606060] text-[21px] font-normal font-Raleway'>
              <img
                className=' w-[300px] h-[200px] items-center justify-center '
                src={image}
                alt='Inventory Management Sytem Image'
              />
            </div>
          </div>
          <div>

        </div>
        </div>
    </div>
  )
}
