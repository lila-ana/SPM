import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import get from '../../features/get'

export default function RepresentativeFill() {
 
  const [name, setName]= useState(null);
  const [email, setEmail]= useState(null);
  const [address, setAddress]= useState(null);
  const [contact_1, setContact_1]= useState(null);
  

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
        // .email("Invalid Address")
        .required("Required"),
      contact_1: Yup.string()
        // .email("Invalid input")
        .required("Required"),

    }),

})

      let representative={
        name,
        email,
        contact_1,
        address,
        }
      const HandleSubmit=(e)=>{
          e.preventDefault();
              axios
              .post(`http://172.16.33.73:8000/api/v1/representative/create`, representative, {
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
        
        console.log(get.getrepresentative(),"data")
  
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
  )
}
