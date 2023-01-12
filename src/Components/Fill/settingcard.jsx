// import React from 'react'
// import {AiOutlineSetting, } from "react-icons/ai"

// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import classNames from "classnames";

// export default function Settingcard() {
//   return (
//     <div className='grid gap-[5px] stroke-[#1b9c85] w-[150px] border-[#1b9c85] border-[1px] rounded-sm'>
//         <Menu as="div" className="relative inline-block text-left">
//                   <Menu.Button >
//                     <AiOutlineSetting
//                         className='m-[10px] fill-[#1b9c85] w-[25px] h-[25px]'
//                     /> 
//                   </Menu.Button>
     
//                     <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                       <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-[#1b9c85] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <div className="py-1">
                          
//                             <Menu.Item>
//                             {({ active }) => (
//                               <a
//                                 href="#"
//                                 className={classNames(
//                                   active ? 'bg-gray-100 text-[#1b9c85]' : 'text-[#1b9c85]',
//                                   'block px-4 py-2 text-sm'
//                                 )}
//                               >
//                                 hawi Tesfaye
//                               </a>
//                             )}
//                             </Menu.Item>
                          
//                         </div>
//                       </Menu.Items>
//                     </Transition>
//                 </Menu>
        
        
//         {/* <p 
//             className='relative p-[15px] text-[#602234] font-semibold font-nunito text-[12px] '>
//             Hawi Tesfaye
//         </p>
//         <p
//             className='relative p-[15px] text-[#602234] font-semibold font-nunito text-[12px] '>
//             className='relative stroke-[#1b9c85] w-[100px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#602234] font-semibold font-nunito text-[12px] border-[#1b9c85] border-[1px]  '>
//             Hawi Tesfaye
//         </p> */}

//     </div>
//   )
// }
