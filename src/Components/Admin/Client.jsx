import { Menu } from '@headlessui/react'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {AiOutlineCloseCircle} from "react-icons/ai"
import ClientPop from '../modal/clientPop'

export default function Client() {
   
   function scrollback (e,name)  { }
   const [clientmodal,setClientModal]=useState(false)
   function HandleModal(){
      setClientModal(true)
   }
   return (
    <div className="grid gap-5">
    <div className='flex justify-center'>
    <button 
    className="bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]">
    Add Client
    </button>

    </div>
    <div className='grid grid-cols-12 gap-4'>
      <div   className="col-span-4 stroke-[#1b9c85] w-[285px] h-[200px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl   text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
         <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBMI1jhJpZvoZZ7mTkeNc9LUqTuwx_k4Xgg&usqp=CAU" 
            className='w-[285px] h-[125px]'
            onClick={HandleModal}
         />
         <div className='flex justify-between items-center h-[80px] px-5'>
            <div className='text-[#1b9c85] font-semibold text-[18px] hover-pointer'onClick={HandleModal}>ERA</div>
               <div className='text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl'>
                  <div>
                     <Menu as="div" className="relative inline-block text-left">
					         <Menu.Button>
                           <MdDelete className='fill-[#7c0a02]'/>
					         </Menu.Button>
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-[70px] origin-top-right divide-y divide-[#1b9c85] bg-white shadow-lg ring-opacity-5 focus:outline-none">
						         {/* <div className="py-1"> */}
							      <Menu.Item>
								      <div className="flex rounded-[5px] gap-[15px] items-center justify-center bg-[#1b9c85] ">
									      <div className="pt-[5px]">
                                    <button >
                                       <IoIosCheckmarkCircleOutline className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                    
									      </div>
                                 <div className="pt-[5px]">
                                    <button className='w-[15px]'>
                                       <AiOutlineCloseCircle className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                 </div>
									      
								      </div>
							      </Menu.Item>
						         {/* </div> */}
					         </Menu.Items>
                     </Menu>

            </div>
        </div>
     </div>
    </div>
    <div  onClick={HandleModal} className="col-span-4 stroke-[#1b9c85] w-[285px] h-[200px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl   text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
         <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBMI1jhJpZvoZZ7mTkeNc9LUqTuwx_k4Xgg&usqp=CAU" 
            className='w-[285px] h-[125px]'
         />
         <div className='flex justify-between items-center h-[80px] px-5'>
            <div className='text-[#1b9c85] font-semibold text-[18px]'>ERA</div>
               <div className='text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl'>
                  <div>
                     <Menu as="div" className="relative inline-block text-left">
					         <Menu.Button>
                           <MdDelete className='fill-[#7c0a02]'/>
					         </Menu.Button>
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-[70px] origin-top-right divide-y divide-[#1b9c85] bg-white shadow-lg ring-opacity-5 focus:outline-none">
						         {/* <div className="py-1"> */}
							      <Menu.Item>
								      <div className="flex rounded-[5px] gap-[15px] items-center justify-center bg-[#1b9c85] ">
									      <div className="pt-[5px]">
                                    <button >
                                       <IoIosCheckmarkCircleOutline className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                    
									      </div>
                                 <div className="pt-[5px]">
                                    <button className='w-[15px]'>
                                       <AiOutlineCloseCircle className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                 </div>
									      
								      </div>
							      </Menu.Item>
						         {/* </div> */}
					         </Menu.Items>
                     </Menu>

            </div>
        </div>
     </div>
    </div>
    <div  onClick={HandleModal} className="col-span-4 stroke-[#1b9c85] w-[285px] h-[200px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl   text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
         <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBMI1jhJpZvoZZ7mTkeNc9LUqTuwx_k4Xgg&usqp=CAU" 
            className='w-[285px] h-[125px]'
         />
         <div className='flex justify-between items-center h-[80px] px-5'>
            <div className='text-[#1b9c85] font-semibold text-[18px]'>ERA</div>
               <div className='text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl'>
                  <div>
                     <Menu as="div" className="relative inline-block text-left">
					         <Menu.Button>
                           <MdDelete className='fill-[#7c0a02]'/>
					         </Menu.Button>
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-[70px] origin-top-right divide-y divide-[#1b9c85] bg-white shadow-lg ring-opacity-5 focus:outline-none">
						         {/* <div className="py-1"> */}
							      <Menu.Item>
								      <div className="flex rounded-[5px] gap-[15px] items-center justify-center bg-[#1b9c85] ">
									      <div className="pt-[5px]">
                                    <button >
                                       <IoIosCheckmarkCircleOutline className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                    
									      </div>
                                 <div className="pt-[5px]">
                                    <button className='w-[15px]'>
                                       <AiOutlineCloseCircle className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                 </div>
									      
								      </div>
							      </Menu.Item>
						         {/* </div> */}
					         </Menu.Items>
                     </Menu>

            </div>
        </div>
     </div>
    </div>
    <div  onClick={HandleModal} className="col-span-4 stroke-[#1b9c85] w-[285px] h-[200px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl   text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
         <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBMI1jhJpZvoZZ7mTkeNc9LUqTuwx_k4Xgg&usqp=CAU" 
            className='w-[285px] h-[125px]'
         />
         <div className='flex justify-between items-center h-[80px] px-5'>
            <div className='text-[#1b9c85] font-semibold text-[18px]'>ERA</div>
               <div className='text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl'>
                  <div>
                     <Menu as="div" className="relative inline-block text-left">
					         <Menu.Button>
                           <MdDelete className='fill-[#7c0a02]'/>
					         </Menu.Button>
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-[70px] origin-top-right divide-y divide-[#1b9c85] bg-white shadow-lg ring-opacity-5 focus:outline-none">
						         {/* <div className="py-1"> */}
							      <Menu.Item>
								      <div className="flex rounded-[5px] gap-[15px] items-center justify-center bg-[#1b9c85] ">
									      <div className="pt-[5px]">
                                    <button >
                                       <IoIosCheckmarkCircleOutline className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                    
									      </div>
                                 <div className="pt-[5px]">
                                    <button className='w-[15px]'>
                                       <AiOutlineCloseCircle className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                 </div>
									      
								      </div>
							      </Menu.Item>
						         {/* </div> */}
					         </Menu.Items>
                     </Menu>

            </div>
        </div>
     </div>
    </div>
    <div  onClick={HandleModal} className="col-span-4 stroke-[#1b9c85] w-[285px] h-[200px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl   text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
         <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBMI1jhJpZvoZZ7mTkeNc9LUqTuwx_k4Xgg&usqp=CAU" 
            className='w-[285px] h-[125px]'
         />
         <div className='flex justify-between items-center h-[80px] px-5'>
            <div className='text-[#1b9c85] font-semibold text-[18px]'>ERA</div>
               <div className='text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl'>
                  <div>
                     <Menu as="div" className="relative inline-block text-left">
					         <Menu.Button>
                           <MdDelete className='fill-[#7c0a02]'/>
					         </Menu.Button>
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-[70px] origin-top-right divide-y divide-[#1b9c85] bg-white shadow-lg ring-opacity-5 focus:outline-none">
						         {/* <div className="py-1"> */}
							      <Menu.Item>
								      <div className="flex rounded-[5px] gap-[15px] items-center justify-center bg-[#1b9c85] ">
									      <div className="pt-[5px]">
                                    <button >
                                       <IoIosCheckmarkCircleOutline className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                    
									      </div>
                                 <div className="pt-[5px]">
                                    <button className='w-[15px]'>
                                       <AiOutlineCloseCircle className='fill-white w-[20px] h-[20px]'/>
                                    </button>
                                 </div>
									      
								      </div>
							      </Menu.Item>
						         {/* </div> */}
					         </Menu.Items>
                     </Menu>

            </div>
        </div>
     </div>
    </div>

    </div>
      
    
{clientmodal?<ClientPop modal={setClientModal}/>:""}
</div>
  )
}
