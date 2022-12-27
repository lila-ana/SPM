import React from 'react'
import logo from '../../Image/MDCC.png'
import ScrollButton from '../AboutUs/ScrollButton'
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
            <p className='text-[#1b9c85] font-semibold text-[18px] border-b-2 w-[150px] border-[#1b9c85]'>{items?.name}</p>
            <div className='grid grid-cols-12 gap-[20px]'>
              <div className='col-span-8 flex justify-center pt-[15px] text-[#1b9c85] '>{items?.description} </div>
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
      <ScrollButton
            styles ='rounded-sm text-[16px] bg-[#1b9c85] text-[#fcfcfc]'
            name='Scroll to top'   
            action={(e)=>scrollback(e,"gelila")}
         /> 
    </div>
  )
}
