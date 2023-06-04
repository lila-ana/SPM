import React from 'react'
import image from '../Assests/ambo-5fe0cb63411f830df0d3e80b91d3f1b9ffa9ce11970b1efbec2a09f2f404f1d2.png'

export default function Header() {
  return (
    <div className='w-full h-[150px] bg-[#d99000]'>
        <div className='grid grid-cols-5 '>
            <div className='col-span-1 gap-[12px] flex items-center justify-center'>
                <img
                    className='w-[80px] h-[80px] p-[8px] flex items-center justify-center'
                    alt='Ambo Univerity Logo'
                    src={image}
                />
            </div>
            <div className='flex items-center justify-center col-span-4 gap-[20px] mx-[20px]'>
                <p className='text-[30px] font-extrabold border-r-4 border-[#000000] px-[25px] '>Ambo Universty</p>
                <p className='text-[20px] font-bold '>Hachalu Hundessa Campus</p>
            </div>
        </div>
        <div className='text-[20px] font-regular flex justify-center items-center mx-[20px]'>
            Web based Inventory Management System 
        </div>

    </div>
  )
}

