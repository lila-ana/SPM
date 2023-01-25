import { Menu } from '@headlessui/react'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {AiOutlineCloseCircle} from "react-icons/ai"
import AddButton from '../Common/Button/addButton'

export default function Projects(props) {
    
   const [clientmodal,setClientModal]=useState(false)
   const [addModal,setAddModal]=useState(false)

   function HandleModal(){
      setClientModal(true)
   }
   function HandleAddModal () {
      setAddModal(true)
   }

   
   const HandleDelete=(e, id)=>{
      e.preventDefault();
          axios
          .delete(`${API_BASE_URL}client/${id}`, {
            headers: {
          'Content-Type': "application/json",
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
    }
    
    return (
    <div className="grid gap-5">
      <div className='flex justify-center'>
         <AddButton 
            styles ='bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]'
            name='Add Client'   
            action={HandleAddModal}
         /> 
      </div>
    
    


    </div>
  )
}

