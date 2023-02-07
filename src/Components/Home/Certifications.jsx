import React, {useState} from 'react'
import clients from '../../utils/Clients.json'
import certificate1 from '../../Image/Certificate.jpg'
import certificate2 from '../../Image/Certificate2.webp'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import axios from 'axios';

export default function Certifications() {

    const slideLeft = () => {
        let slider = document.getElementById('slidercertificate');
          slider.scrollLeft = slider.scrollLeft - 500;
         }; 
          
    const slideRight = () => {
        let slider = document.getElementById('slidercertificate');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
      const [data,setData]=useState();
      axios.get(`http://172.16.33.131:8000/api/v1/client`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        setData(response.data);
    }).catch((error) => {
        console.log(error.response);
    });


return (
    <div className='px-[100px]'>
    <div className='mt-[40px]'>
        <h1 className='mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85]'> Certifications </h1>
    </div>
    <div className='relative flex items-center gap-5'>
    <div className='hover:bg-[#1b9c85] hover:text-white rounded-full '>
    <AiOutlineLeft className="text-2xl" onMouseEnter={slideLeft}/>  
    </div>   
    <div id="slidercertificate" className='w-full h-full overflow-x-scroll scroll scrollbar-hide  scroll-smooth'>
    <div className='grid grid-flow-col gap-[20px] items-center'>    
        {clients?.map((items)=> ( 
            <div key = {items.id} className='stroke-[#1b9c85] w-[300px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  '>
                <p className='pb-[10px]'>
                    <img
                     src={items.id < 2 ?certificate1: certificate2}
                    // src={require()}
                     />
                </p>
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
