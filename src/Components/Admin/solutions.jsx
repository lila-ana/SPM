import { Menu } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {AiFillEdit, AiOutlineCloseCircle} from "react-icons/ai"
import SolutionsFill from '../Fill/SolutionsFill'
import AddButton from '../Common/Button/addButton'
import get from '../../features/get'
import { Tooltip } from '@mui/material'
import EditSolution from '../Edit/editSolution'
import { API_BASE_URL } from '../../api/endPoint'
import axios from 'axios'

export default function Solutions() {
    
    function scrollback (e,name)  { }
    const [addModal,setAddModal]=useState(false)
    const [solutionModal,setSolutionModal]=useState(false)
    const [data, setData] = useState(null);
    const [editModal, setEditModal] = useState(false);

    function HandleEditModal(e, items) {
      setEditModal(true);
      setData(items);
    }
      
      const [datas, setDatas] = useState();
      useEffect(() => {
        axios
          .get(`${API_BASE_URL}solution`)
          .then((res) => setDatas(res.data?.data))
          .catch((err) => console.log(err));
      });
    function HandleAddModal () {
      setAddModal(true)
   }
    function HandleModal () {
      setSolutionModal(true)
   }

    return (
    <div className="grid gap-5">
    {/* <div className='flex justify-center'>
    <button 
    className="bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]">
    Add Solutions
    </button>
    </div> */}
    <div className='flex justify-center'>
      <AddButton 
            styles ='bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]'
            name='Add Solution'   
            action={
               HandleAddModal
            }
         /> 
    </div>
   
    <div>
    {get?.getsolutions()?.length!==0?
    <div className='grid grid-cols-12 gap-4'>
    {get?.getsolutions()?.map((items)=>(
      <div   className="col-span-4 stroke-[#1b9c85] w-[285px] h-[200px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl   text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
         <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBMI1jhJpZvoZZ7mTkeNc9LUqTuwx_k4Xgg&usqp=CAU" 
            className='w-[285px] h-[125px]'
            onClick={HandleModal}
         />
         <div className='flex justify-between items-center h-[80px] px-5'>
         <Tooltip title={items?.name}>
            <div className='text-[#1b9c85] font-semibold text-[18px] hover-pointer'onClick={HandleModal}>{items?.name?.length>=20? items?.name?.slice(0, 20) + "..."
                          : items?.name}</div>
            </Tooltip>
            <div className='flex justify-center items-center gap-[5px]'>
             <div 
            onClick={(e) => HandleEditModal(e, items)}
             className='text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl'>
                  <AiFillEdit className="fill-[#7c0a02] "/>
                  </div>
            <Menu as="div" className="relative inline-block text-left">

               <div className='text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl'>
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
                              <button className='w-[15px]' onClick={(e)=>HandleDelete(e, items?.id) }>

                                 <AiOutlineCloseCircle className='fill-white w-[20px] h-[20px]'/>
                              </button>
                           </div>
                           
                        </div>
                     </Menu.Item>
                     {/* </div> */}
                  </Menu.Items>
                  </div>
            </Menu>
                     {/* <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <span class="font-medium">Successfully deleted!</span> 
                     </div> */}
            </div>
        </div>
    </div>
     ))}
    
    </div>:<NoRecord/>}
    </div>
    {addModal?<SolutionsFill modal={setAddModal}/>:""}
    {solutionModal?<SolutionPop modal={setSolutionModal}/>:""}
    {editModal ? <EditSolution modal={setEditModal} data={data} /> : ""}

    </div>
  )
}

