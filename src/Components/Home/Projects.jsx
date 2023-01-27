import React, {useState} from 'react'
import detail  from '../../utils/Detail.json'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import axios from 'axios';

export default function Projects() {
    const slideLeft = () => {
        let slider = document.getElementById('slider');
          slider.scrollLeft = slider.scrollLeft - 500;
         };
            
    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
    
      const [data,setData]=useState();
      axios.get(`http://172.16.34.117:8000/api/v1/client/all-clients`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        setData(response.data);
    }).catch((error) => {
        console.log(error.response);
    });
    // console.log(data,"response data")

  return (
    <div className='' >
        <div>
            <h1 className='mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85] '> Projects </h1>
        </div>
        <div className='relative flex items-center gap-5'>
        <div className='hover:bg-[#1b9c85] hover:text-white rounded-full '>
        <AiOutlineLeft className="text-2xl" onMouseEnter={slideLeft}/>  
        </div>   
        <div id="slider" className='w-full h-full overflow-x-scroll scroll scrollbar-hide  scroll-smooth'>
        <div className='grid grid-flow-col gap-[20px] items-center'>
               
            {detail?.map((items)=> ( 
                <div className='stroke-[#1b9c85] w-[300px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  '>
                    <p className='pb-[10px]'>{items.dep}</p>
                    <p className='font-light text-[15px]'> {items.detail}</p>
                    <div className='p-[8px] m-[15px] text-[15px] font-light border-[#1b9c85] font-nunito border-[1px] rounded-3xl flex justify-center bg-[#1b9c85] text-[#FCFCFC]'>
                        <a href={items.dep}>View More</a>
                    </div>    
                </div>
            ))}
            
            </div>
        </div>
        <div className='hover:bg-[#1b9c85] hover:text-white rounded-full '>
        <AiOutlineRight className="text-2xl" onMouseEnter={slideRight}/> 
        </div>
        
        </div>
    </div>     
        
  )
}

