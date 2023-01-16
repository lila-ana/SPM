import React from 'react'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'
import { MdAdminPanelSettings, MdEmail } from 'react-icons/md'

export default function FullDetail() {
  return (
    <div>
        <div className='mb-[15px] text-[#4E4E4F] font-bold font-nunito text-[24px] border-b-2 w-[180px] border-[#1b9c85]'>Description</div>
            <div className='grid items-center justify-center grid-cols-5 gap-[5px]'>
                <div className='flex col-span-3 font-light text-[20px] text-gray'>
                     {/*  detail to be mapped*/}
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.
                </div>
                <div className='flex col-span-2'>
                    <img
                        // image to be mapped 
                        className='rounded-[5px] w-[900px] h-[400px]'
                        src='http://xmission.com/blog/wp-content/uploads/2014/03/dc-contained-aisle-highlit.jpg'
                        alt='Data Center Containment'
                    />
                </div>
            </div>
        <div className='mb-[15px] text-[#1b9c85] font-bold font-nunito text-[24px] '>Solutions</div>
            <div className='flex items-center gap-[5px]'>
                <div className='flex p-[5px] m-[10px] items-center justify-center font-nunito font-light text-[20px] text-[#1b9c85] rounded-[20px] border-[1px] border-[#1b9c85] w-[250px] '>
                    solutions to be mapped
                </div>
                <div className='flex p-[5px] m-[10px] items-center justify-center font-nunito font-light text-[20px] text-[#1b9c85] rounded-[20px] border-[1px] border-[#1b9c85] w-[250px] '>
                    solutions to be mapped
                </div>
            </div>
            <div className='flex items-center gap-[40px]'> 
                <div className='grid grid-cols-12 gap-[30px] mx-[0px] my-[50px] justify-center items-center'>
                    <div className='col-span-6 grid w-[400px] h-[150px] border-[1px] rounded-sm border-[#1b9c85]'>
                        <div className='flex items-center justify-center font-semibold text-[24px] font-nunito text-[#1b9c85]'>Commerical Bank of Ethiopia </div>
                        <div className='flex items-center justify-center font-light text-[20px] font-nunito text-[#1b9c85]'>Client </div>
                    </div>
                    <div className='col-span-6 grid w-[400px] h-[150px] border-[1px] rounded-sm border-[#1b9c85]'>
                        <div className='grid items-center justify-center font-semibold text-[24px] font-nunito text-[#1b9c85]'>Prime Contractor</div>
                        <div className='flex items-center justify-center font-light text-[20px] font-nunito text-[#1b9c85]'>Contract Role </div>
                    </div>
                    <div className='col-span-6 grid  w-[400px] h-[150px] border-[1px] rounded-sm border-[#1b9c85]'>
                        <div className='flex items-center justify-center font-semibold text-[24px] font-nunito text-[#1b9c85]'>Commerical Bank of Ethiopia </div>
                        <div className='flex items-center justify-center font-light text-[20px] font-nunito text-[#1b9c85]'>Client </div>
                    </div>
                    <div className='col-span-6 grid w-[400px] h-[150px] border-[1px] rounded-sm border-[#1b9c85]'>
                        <div className='grid items-center justify-center font-semibold text-[24px] font-nunito text-[#1b9c85]'>Prime Contractor</div>
                        <div className='flex items-center justify-center font-light text-[20px] font-nunito text-[#1b9c85]'>Contract Role </div>
                    </div>
                  
                </div>
                
                <div className='mx-[100px]'>
                    <div className='font-bold text-[24px] text-[#1b9c85] font-nunito col-span-2'>Contact Person</div>
                    <div className='mt-[20px]'>
                        <div className='flex items-center gap-[10px] m-[10px]'>
                            <FaUserCircle className='fill-[#1b9c85] w-[25px] h-[25px]'/>
                            <div className='text-[20px] font-normal font-nunito text-[#1b9c85]'>
                                    Mr. Daniel Gardew
                                    {/* {get?.getproject()?.map((items)=>(
                                <div 
                                    value={items?.id}>{items?.name}</div>           
                                ))} */}
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px] m-[10px]'>
                            <MdAdminPanelSettings className='fill-[#1b9c85] w-[25px] h-[25px]'/>
                            <div className='text-[20px] font-normal font-nunito text-[#1b9c85]'>IT Manager</div>
                        </div>
                        <div className='flex items-center gap-[10px] m-[10px]'>
                            <MdEmail className='fill-[#1b9c85] w-[25px] h-[25px]'/>
                            <div className='text-[20px] font-normal font-nunito text-[#1b9c85]'>danielgardew@cbe.com.et</div>
                        </div>
                        <div className='flex items-center gap-[10px] m-[10px]'>
                            <FaPhoneAlt className='fill-[#1b9c85] w-[25px] h-[25px]'/>
                            <div className='text-[20px] font-normal font-nunito text-[#1b9c85]'>+251-91 148 7418</div>
                        </div>
                    </div>

                </div>
                
            </div>
            <div className='mb-[200px]'></div>
    </div>
  )
}
