import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import get from '../../features/get'
import { AiFillCloseCircle } from 'react-icons/ai';

export default function RepresentativeFill() {
 
  // const BearerToken = localStorage.getItem("accessToken");

  const [name, setName]= useState(null);
  const [email, setEmail]= useState(null);
  const [address, setAddress]= useState(null);
  const [contact_1, setContact_1]= useState(null);
  const [contact_2, setContact_2]= useState(null);
  const [position, setPosition]= useState(null);
  
  function HandleClose(){
    props.modal(false)
  }

  const formik  = useFormik ({
    initialValues: {
      name:"", 
      email:"",
      contactNumber: "",
      address: ""
    },

    validationSchema: Yup.object ({
      name: Yup.string()
        .required("Required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Required"),
      address: Yup.string()
        .required("Required"),
      contact_1: Yup.string()
        .required("Required"),
      contact_2: Yup.string()
        .required("Required"),
      position: Yup.string()
        .required("Required"),

    }),

})

      let representative={
        name,
        email,
        contact_1,
        contact_2,
        address,
        position,
        }
      const HandleSubmit=(e)=>{
          e.preventDefault();
              axios
              .post(`http://172.16.34.103:8000/api/v1/representative/create`, representative, {
                headers: {
                  "Content-Type": "application/json",
                  // authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Ik5hb2xsbCIsImVtYWlsIjoiTmFvbGxsQGdtYWlsLmNvbSIsImdlbmRlciI6Im1hbGUiLCJkZXBhcnRtZW50IjoiU29mdHdhcmUgYXMgYSBTZXJ2aWMiLCJqb2IiOiJFUlAiLCJwYXNzd29yZCI6IjEyMzhnZ2ZqOCIsImlzQWRtaW4iOm51bGwsImNyZWF0ZWRfYXQiOm51bGwsInVwZGF0ZWRfYXQiOm51bGwsImlzX2RlbGV0ZWQiOnRydWUsImNyZWF0ZWRfYnkiOjIsInVwZGF0ZWRfYnkiOm51bGwsImlhdCI6MTY3MzUyNDcxOSwiZXhwIjoxNjczNjExMTE5fQ.n8D5nEppe3v49Btx4UZog6csO2gVeJpOKHVKJ5iZLws",

                },
              })
              .then(function (response) {
                console.log(response);
               
              })
              .catch(function (error) {
                console.log(error, "errorrrrrrrrrrrrrrr");
              });
        }
        
        console.log(get.getrepresentative(),"data")
        
  
return (
    <div className='grid items-center justify-center '>
       
       <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true shadow dark:bg-gray-700">
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[950px] sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg shadow dark:bg-gray-700"></div>
        <h3 onClick={HandleClose} className="text-lg font-medium leading-6 text-gray-900 flex justify-end" id="modal-title">
            <AiFillCloseCircle className='flex  fill-[#1b9c85] w-[25px] h-[25px] rounded-full'/>
        </h3>
        <form
          onSubmit={HandleSubmit}
          className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]  '
        >
       
        <div className='m-[10px]'>
          {/* <div className='m-[1px] w-[350px] '>
          <div className='m-[4px] flex justify-center items-center gap-[5px]'>
            <label className="block mb-[2px] text-sm font-nunito font-light text-[#696969] w-[120px] dark:text-white">Client</label>
            <select className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="" disabled>Choose Client</option>
                {get?.getclient()?.map((items)=>(
                  <option 
                  value={items?.id}>{items?.name}</option>           
                ))}
            </select>
            </div>
          </div> */}
 
          <div className='mx-[20px] mt-[20px] w-[350px] '>
          <div className='m-[4px] flex justify-center items-center gap-[5px]'>
            <label className="block mb-[2px] text-sm font-nunito font-light text-[#696969] w-[80px] dark:text-white">Client</label>
            <select className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="" disabled>Choose Client</option>
                {get?.getclient()?.map((items)=>(
                  <option 
                  value={items?.id}>{items?.name}</option>           
                ))}
            </select>
            </div>
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='name'
              name='name'
              type='text'
              placeholder='Representative Name'
              onChange={(e)=>setName(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='email'
              name='email'
              type='email'
              placeholder='example@example.com'
              onChange={(e)=>setEmail(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='address'
              name='address'
              type='text'
              placeholder='Address'
              onChange={(e)=>setAddress(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_1'
              name='Contact_1'
              type='text'
              placeholder='Contact Number'
              onChange={(e)=>setContact_1(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_2'
              name='Contact_2'
              type='text'
              placeholder='Contact Number_2'
              onChange={(e)=>setContact_2(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='position'
              name='position'
              type='text'
              placeholder='Position'
              onChange={(e)=>setPosition(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.position && formik.errors.position ? <p>{formik.errors.position}</p> : null}
          </div>
          </div>
          
          <div className='flex items-center justify-center gap-[60px] my-[10px]'>
            <button 
              type="submit"
              className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
            >
              Submit
            </button>
            <button 
            type="submit"
            className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
            >
            Cancel
          </button>
          </div>
        </form>
    
    </div>
    </div>
    </div>
    </div>
   </div>
  
   
    
  )
}
