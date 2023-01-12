import React, { useState, useEffect } from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import get from '../../features/get'

export default function ClientFill() {
  const[name,setName]=useState(null);
  const[website,setWebSite]=useState(null);
  const[email,setEmail]=useState(null);
  const[contact_no,setContact]=useState(null);
  const[address,setAddress]=useState(null);
  const[logo,setLogo]=useState(null);
  
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
let client={
name,
website,
email,
// state,
// country,
contact_no,
address,
logo,
}
const HandleSubmit=(e)=>{
  e.preventDefault();
      axios
      .post(`http://172.16.33.73:8000/api/v1/client/create`, client, {
        headers: {
          "Content-Type": "application/json",
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
    <div className='grid items-center justify-center '>
      <form 
      onSubmit={HandleSubmit}
      className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px] h-[400px] '
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
          <div className='text-sm border-[1px] border-[#1b9c85] p-2 w-[75px] rounded-[10px] text-nunito text-[#1b9c85] flex justify-center items-center'>
            Logo
          </div>
          <input
            className=' border-[1px] bg-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[260px]'
            id="logo"
            name="logo"
            type="text"
            placeholder='Add image'
            onChange={(e)=>setLogo(e.target.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.logo && formik.errors.logo ? <p>{formik.errors.logo}</p> : null}
        </div>
        <div className='flex items-center justify-center gap-[60px] my-[25px]'>
          <button 
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
  )
}
