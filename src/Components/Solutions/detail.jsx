import React, { useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'

export default function Detail() {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  
  return (
    <div>
        <div>
          <h1 className='mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85] '> Projects </h1>
        </div>
        <div className='grid grid-cols-12 gap-3'>
          <div className='col-span-4'>
          
           <div 
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
            className=' border-[#1b9c85] mb-[30px] rounded-sm bg-gradient-to-t from-[#1b9c85] to-[#fffff] hover:from-[#1b9c85] hover:to-[#fcfcfc] '
            >
              <div>
                  <img
                    className='col-span-4 hover:opacity-[25%]'
                    src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000'
                    alt='Company Image'
                  />
                </div>
            </div>

        {isHovering && (
          
          <div className=' flex gap-[30px]'>
            <h1 className='font-regular text-[15px]'>ERA-MOT</h1>
            <div className='rounded-sm border-[1px] border-[#ffffff] w-[200px] h-[40px] font-nunito text-[10px] font-normal flex justify-center items-center'>
              Read More
              <IoIosArrowForward className='w-[18px] h-[18px]'/>
            </div>
          </div>
         
        )}
      </div>
          
          <div className='col-span-4'>

          </div>
        </div>
   
        </div>
    // <div>
    //     <div>
    //         <h1 className='mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85] '> Projects </h1>
    //     </div>

    //     <div >
    //       <div className='grid grid-cols-10 gap-[20px]'>
    //         <div 
    //         onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
    //         className='col-span-4 border-[1px] border-[#1b9c85] mb-[30px] rounded-sm bg-gradient-to-t from-[#1b9c85] to-[#fffff] hover:from-[#1b9c85] hover:to-[#fcfcfc] '
    //         >
    //           <div>
    //               <img
    //                 className='col-span-4 hover:opacity-[25%]'
    //                 src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000'
    //                 alt='Company Image'
    //               />
    //             </div>
    //         </div>

    //     {isHovering && (
          
    //       <div className=' flex gap-[30px]'>
    //         <h1 className='font-regular text-[15px]'>ERA-MOT</h1>
    //         <div className='rounded-sm border-[1px] border-[#ffffff] w-[200px] h-[40px] font-nunito text-[10px] font-normal flex justify-center items-center'>
    //           Read More
    //           <IoIosArrowForward className='w-[18px] h-[18px]'/>
    //         </div>
    //       </div>
         
    //     )}
    //   </div>
    // </div>
       
    // <div >
    //       <div className='grid grid-cols-10 gap-[20px]'>
    //         <div 
    //         onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
    //         className='col-span-4 border-[1px] border-[#1b9c85] mb-[30px] rounded-sm bg-gradient-to-t from-[#1b9c85] to-[#fffff] hover:from-[#1b9c85] hover:to-[#fcfcfc] '
    //         >
    //           <div>
    //               <img
    //                 className='col-span-4 hover:opacity-[25%]'
    //                 src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000'
    //                 alt='Company Image'
    //               />
    //             </div>
    //         </div>

    //     {isHovering && (
          
    //       <div className=' flex gap-[30px]'>
    //         <h1 className='font-regular text-[15px]'>ERA-MOT</h1>
    //         <div className='rounded-sm border-[1px] border-[#ffffff] w-[200px] h-[40px] font-nunito text-[10px] font-normal flex justify-center items-center'>
    //           Read More
    //           <IoIosArrowForward className='w-[18px] h-[18px]'/>
    //         </div>
    //       </div>
         
    //     )}
    //   </div>
    // </div>
    // <div >
    //       <div className='grid grid-cols-10 gap-[20px]'>
    //         <div 
    //         onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
    //         className='col-span-4 border-[1px] border-[#1b9c85] mb-[30px] rounded-sm bg-gradient-to-t from-[#1b9c85] to-[#fffff] hover:from-[#1b9c85] hover:to-[#fcfcfc] '
    //         >
    //           <div>
    //               <img
    //                 className='col-span-4 hover:opacity-[25%]'
    //                 src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000'
    //                 alt='Company Image'
    //               />
    //             </div>
    //         </div>

    //     {isHovering && (
          
    //       <div className=' flex gap-[30px]'>
    //         <h1 className='font-regular text-[15px]'>ERA-MOT</h1>
    //         <div className='rounded-sm border-[1px] border-[#ffffff] w-[200px] h-[40px] font-nunito text-[10px] font-normal flex justify-center items-center'>
    //           Read More
    //           <IoIosArrowForward className='w-[18px] h-[18px]'/>
    //         </div>
    //       </div>
         
    //     )}
    //   </div>
    // </div>
       
    //     {/* <div className='grid grid-cols-8 gap-3'>
    //       <div className='col-span-4 m-[20px] h-[200px] border-[#1b9c85] stroke-[#1b9c85] rounded-sm border-[1px] hover:shadow-[#1b9c8585]'>
    //         <div className='stroke-[#1b9c85] w-[300px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  '>
    //         </div>
    //         <div className="">
    //             <div>
    //               <img
    //                 className=''
    //                 src=''
    //                 alt=''
    //               />
    //             </div>

    //         </div>
    //       </div>
    //     </div> */}
        
    // </div>
  )
}
