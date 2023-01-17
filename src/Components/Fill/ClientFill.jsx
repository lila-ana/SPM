import React, { useState, useEffect } from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import get from '../../features/get'
import { API_BASE_URL } from '../../api/endPoint'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function ClientFill(props) {
  
  // const BearerToken = localStorage.getItem("accessToken");
  
  const[name,setName]=useState(null);
  const[website,setWebSite]=useState(null);
  const[email,setEmail]=useState(null);
  const[contact_no,setContact]=useState(null);
  const[address,setAddress]=useState(null);
  const[logo,setLogo]=useState(null);


  function HandleClose(){
    props.modal(false)
  }
 const handleChange = (e) => {
    const img = {
      name: e?.target?.files[0].name,
      data: e?.target?.files[0],
    };
    setLogo(img?.data);
  };
  // const handleApi = () => {
  //   const formData = new formData ()
  //   formData.append ('image', image)
  //   axios.post('url', formData).then((res) => {
  //     console.log(res)
  //   })
  // }
  
  const formik  = useFormik ({
    initialValues: {
      fullName:"", 
      email:"",
      address:"",
      contact_no: "",
      website: "",
      logo: ""
    },

    validationSchema: Yup.object ({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Required"),  
      address: Yup.string()
        .required("Required"),   
      // country: Yup.string()
      //   .required("Required"),
      // state: Yup.string()
      //   .required("Required"),
      contact_no: Yup.string()
        .required("Required"),
      logo: Yup.string()
        .required("Required"),
      website: Yup.string()
      
      
    }),
})
const form = new FormData();
form.append("name",name)
form.append("email",email)
form.append("contact_no",contact_no)
form.append("logo",logo)
let client={
name,
website,
email,
contact_no,
address,
// logo,
}
console.log(client,"rerttr")
const HandleSubmit=(e)=>{
  e.preventDefault();
      axios
      .post(`${API_BASE_URL}client/create`, client, {
        headers: {
      'Content-Type': 'multipart/form-data',
      accept:"application/json"
          // authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwiZW1haWwiOiJtdWxlc3NAZ21haWwuY29tIiwiZ2VuZGVyIjoiTWFsZSIsImRlcGFydG1lbnQiOiJTYWFTIiwidGVsIjpudWxsLCJwYXNzd29yZCI6IjEyMzhnZmo4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiaXNfZGVsZXRlZCI6dHJ1ZSwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiaWF0IjoxNjczNTk1OTI4LCJleHAiOjE2NzM2ODIzMjh9.XHYs6P7qOADLnWJGePBvJPs0PSqGcyUrY0fKcuUmZjo",

        },
      })
      .then(function (response) {
        console.log(response);
       
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
}


console.log(get.getclient(),"data")


console.log(client,"formik.errors")

  return (
    <div className="fixed pin z-50 overflow-auto bg-smoke-light flex ">

<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true shadow dark:bg-gray-700">
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[950px] sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg shadow dark:bg-gray-700"></div>
        <h3 onClick={HandleClose} className="text-lg font-medium leading-6 text-gray-900 flex justify-end" id="modal-title">
            <AiFillCloseCircle className='flex  fill-[#1b9c85] w-[25px] h-[25px] rounded-full'/>
        </h3>
   
    <div className='grid items-center justify-center '>
      <form 
      onSubmit={HandleSubmit}
      className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]'
      >
      <div className='m-[10px]'>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="fullName"
            name="fullName"
            type="text"
            placeholder='Full Name'
            onChange={(e)=>setName(e.target.value)}
            onBlur={formik.handleBlur}
          
          
          />
          {formik.touched.fullName && formik.errors.fullName ? <p>{formik.errors.fullName}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="email"
            name="email"
            type="email"
            placeholder='example@example.com'
            onChange={(e)=>setEmail(e.target.value)}
            onBlur={formik.handleBlur}
            
          />
          {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="address"
            name="address"
            type="text"
            placeholder='Address'
            onChange={(e)=>setAddress(e.target.value)}
            onBlur={formik.handleBlur}
          
          />
          {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="contactNumber"
            name="contactNumber"
            type="string"
            placeholder='Contact Number'
            onChange={(e)=>setContact(e.target.value)}
            onBlur={formik.handleBlur}
            
          />
          {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="website"
            name="website"
            type="text"
            placeholder='Website'
            onChange={(e)=>setWebSite(e.target.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.website && formik.errors.website ? <p>{formik.errors.website}</p> : null}
        </div>
        <div className='m-[10px] flex gap-3 justify-center items-center'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="logo"
            name="logo"
            type="file"
            placeholder='Add image'
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.logo && formik.errors.logo ? <p>{formik.errors.logo}</p> : null}
        </div>
        <div className='flex items-center justify-center gap-[60px] my-[25px]'>
          <button 
            // onClick={handleApi}
            type="submit"
            className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
          
          >
            Submit
          </button>
          <button 
            type="reset"
            className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
          >
            Cancel
          </button>
        </div>
      </div>
      </form>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    
  )
}
