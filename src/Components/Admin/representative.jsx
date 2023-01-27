import { Menu } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {AiFillEdit, AiOutlineCloseCircle} from "react-icons/ai"
import AddButton from '../Common/Button/addButton'
import RepresentativeFill from '../Fill/RepresentativeFill'
import RepresentativePop from '../Modal/representativePop'
import get from '../../features/get'
import { Tooltip } from '@mui/material'
import EditRepresentative from '../ModalEdit/editRepresentative'
import { API_BASE_URL } from '../../api/endPoint'
import axios from 'axios'

export default function Representative() {
    
    
    const [addModal,setAddModal]=useState(false)
    const [representativeModal,setRepresentativeModal]=useState(false)
    const [data, setData] = useState(null);
    const [editModal, setEditModal] = useState(false);

    function HandleModal(){
      setClientModal(true)
   }
    function HandleAddModal () {
      setAddModal(true)
   }

   function RepresentativeModal (){
      setRepresentativeModal (true)
   }
   function HandleEditModal(e, items) {
      setEditModal(true);
      setData(items);
    }
      
      const [datas, setDatas] = useState();
      useEffect(() => {
        axios
          .get(`${API_BASE_URL}representative`)
          .then((res) => setDatas(res.data?.data))
          .catch((err) => console.log(err));
      });
    function HandleAddModal () {
      setAddModal(true)
    }
    const HandleDelete = (e, id) => {
      e.preventDefault();
      axios
        .delete(`${API_BASE_URL}representative/${id}`, {
          headers: {
            "Content-Type": "application/json",
            //  accept:"application/json"
            //   authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwiZW1haWwiOiJtdWxlc3NAZ21haWwuY29tIiwiZ2VuZGVyIjoiTWFsZSIsImRlcGFydG1lbnQiOiJTYWFTIiwidGVsIjpudWxsLCJwYXNzd29yZCI6IjEyMzhnZmo4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiaXNfZGVsZXRlZCI6dHJ1ZSwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiaWF0IjoxNjczNTk1OTI4LCJleHAiOjE2NzM2ODIzMjh9.XHYs6P7qOADLnWJGePBvJPs0PSqGcyUrY0fKcuUmZjo",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error, "errorrrrrrrrrrrrrrr");
        });
    };


    return (
    <div className="grid gap-5">
      <div className='flex justify-center'>
         <div className='flex justify-center'>
            <AddButton 
                     styles ='bg-[#1b9c85] w-[200px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]'
                     name='Add Representative'   
                     action={HandleAddModal}
            /> 
            </div>
      </div>
      
      {get?.getrepresentative()?.length!==0?
    <div className='grid grid-cols-12 gap-4'>
    {get?.getrepresentative()?.map((items)=>(
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
               {/* <div className='text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl'>
                   <div className='flex justify-center items-center'>
                        <div className=''>
                           <AiFillEdit className="fill-[#7c0a02] "/>
                        </div>
                        <div>
                      */}
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
   
    {/* {RepresentativeModal?<RepresentativePop modal={setRepresentativeModal}/>:""} */}
    
{addModal?<RepresentativeFill modal={setAddModal}/>:""}
{editModal ? <EditRepresentative modal={setEditModal} data={data} /> : ""}


    </div>
    
  )
}

