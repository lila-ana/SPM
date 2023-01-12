import React from 'react'
import logo from '../../Image/MDCC.png'
import ScrollButton from './ScrollButton'
import description from '../../utils/SolutionDescription.json'


export default function SolutionDescription(props) {
    function scrollback (e,name)  {
     window.scroll({left:0,top:300,behavior: 'smooth'})
    }
    
return (
    <div>
      <div>
        {description?.map((items) => (
          <div className='mb-5'>
            <p className='text-[#1b9c85] font-semibold text-[18px] border-b-[1.5px] w-[500px] border-[#1b9c85]'>{items?.name}</p>
            <div className='grid grid-cols-12 gap-[20px]'>
              <div className='col-span-8 flex justify-center pt-[15px] text-[#606060]'>{items?.description} </div>
              <div className='col-span-4 flex justify-center'>
                <img
                  className='w-[200px] h-[200px] '
                  alt={items?.name}
                  src= {logo}
                //   {items?.img}
                />
              </div>
            </div>
          </div>
        ))}
      </div> 
          <div className='grid justify-center '>
      <ScrollButton 
            styles ='rounded-md text-[16px] bg-[#1b9c85] text-[#fcfcfc] w-[120px] h-[40px] grid justify-center items-center mb-[20px]'
            name='Scroll to top'   
            action={(e)=>scrollback(e,"gelila")}
         /> 
         </div>
    </div>
  )
}
