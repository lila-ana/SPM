import React from 'react'
import SolutionDescription from '../../utils/SolutionDescription.json'

export default function SolutionJourney() {
  return (
    <div className='mb-[20px]'>
        <div className='text-[#1b9c85] font-semibold text-[28px] border-b-2 w-[300px] border-[#1b9c85] mb-[20px] '>
            Solution Journey
        </div>        
        <div className='grid grid-cols-12 gap-[5px] '>
            {SolutionDescription?.map((items) => (
                <div class=" col-span-2 py-[8px] rounded-b-md  hover:opacity-25 ">
                <span className='shadow-lg border-[1px] border-[#1b9c85] bg-[#fcfcfc] rounded-sm h-[75px] text-nunito font-regular flex justify-center items-center tracking-wide'>{items.abbrevation}</span>
                </div>
            ))}   
            <div class="absolute opacity-0 hover:opacity-100">
                <div class="pt-8 text-center">
                    <button class="rounded-lg p-4 bg-white text-gray-700 font-regulartext-lg">learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

