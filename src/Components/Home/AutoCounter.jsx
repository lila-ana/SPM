import React from 'react'
import counter from '../../utils/AutoCounter.json'

export default function AutoCounter() {
  return (
    <div>
        <div className='bg-[#1b9c85] bg-cover h-[150px] bg-no-repeat my-[30px] p-[20px] items-center'>
            <div className='text-[#FCFCFC] '>
            <div className='grid grid-cols-10 gap-[10px] '>
                {counter?.map((items) => (
                    <div className='grid col-span-2 px-[80px] py-[20px]'>
                        <div className='text-[24px] font-bold font-nunito border-t-[1px]  grid justify-center'>{items.amount}</div>
                        <div className='text-[18px] font-light font-nunito grid justify-center'>{items.type}</div>
                    </div>
                ))}
            </div>
            </div>
        </div>

    </div>
  )
}
