import { Menu } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {AiFillEdit, AiOutlineCloseCircle} from "react-icons/ai"
import AddButton from '../Common/Button/addButton'
import RepresentativeFill from '../Fill/RepresentativeFill'
import RepresentativePop from '../Modal/representativePop'
import { Tooltip } from '@mui/material'
import EditRepresentative from '../ModalEdit/editRepresentative'
import { API_BASE_URL, IMG_API } from '../../api/endPoint'
import axios from 'axios'
import NoRecord from './noRecord'

export default function Representative() {
    
    
    const [addModal,setAddModal]=useState(false)
    const [representativeModal,setRepresentativeModal]=useState(false)
    const [detail,setDetail]=useState(false)
    const [data, setData] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [datas, setDatas] = useState();


    const BearerToken = localStorage.getItem("accessToken");


    function HandleModal(e, items){
      setRepresentativeModal(true)
      setDetail(items);

   }
    function HandleAddModal () {
      setAddModal(true)
   }

   function HandleEditModal(e, items) {
      setEditModal(true);
      setData(items);
    }
    const getUser = ()=> {
      axios
      .get(`${API_BASE_URL}representative`)
      .then((res) => setDatas(res.data?.data))
      .catch((err) => console.log(err));
    }
    useEffect(() => {
      getUser()
    },[]);
      
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
            authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNmdUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgc2VydmljIiwiZmlyc3ROYW1lIjoiVGVzZmFodW4iLCJnZW5kZXIiOiJNYWxlIiwiaXNfZGVsZXRlZCI6ZmFsc2UsImxhc3ROYW1lIjoiQmlyZWdhIiwidGVsIjoiMDkxMjM0MjM0NSIsImlhdCI6MTY3NjM2MDA3MiwiZXhwIjoxNjc2NDQ2NDcyfQ.i3QtJ1cFdRoPCWcQhtR-OJPTyRiaDH8cYsCwxqo4wrQ"
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error, "errorrrrrrrrrrrrrrr");
        });
    };

    console.log(datas, "show me datas")
    return (
    <div className="grid gap-5">
      <div className='flex justify-center'>
            <AddButton 
                     styles ='bg-[#1b9c85] w-[200px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]'
                     name='Add Representative'   
                     action={HandleAddModal}
            /> 
            </div>
      
      {datas?.length!==0?
    <div className='grid grid-cols-12 gap-4'>
    {datas?.map((items)=>(
          <div  className="col-span-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         <div className='flex justify-between items-center h-[80px] px-5'>
         <Tooltip title={items?.name}>
            <div 
            className='text-[#1b9c85] font-semibold text-[18px] hover-pointer'
            onClick={(e) => HandleModal(e, items)}
            >
              {items?.name?.length>=20
              ? items?.name?.slice(0, 20) + "..."
              : items?.name}
              </div>
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
					         </Menu.Items>
                        </div>
                     </Menu>
                     
                     
            </div>
        </div>

</div>
     ))}
    
    </div>:<NoRecord/>}
   
{representativeModal ? <RepresentativePop modal={setRepresentativeModal} data={detail} /> : ""}
{addModal?<RepresentativeFill modal={setAddModal}/>:""}
{editModal ? <EditRepresentative modal={setEditModal} data={data} /> : ""}


    </div>

    
  )
}

