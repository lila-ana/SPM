import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import get from '../../features/get'


export default function SolutionsFIll() {
 
  const [name, setName] =useState(null)
  const [logo, setLogo] =useState(null)
  
 

  const formik  = useFormik ({
    initialValues: {
      solutionName:"", 
      email:"",
      country:"",
      state:"",
      address:"",
      contactNumber: "",
      website: ""
    },

    validationSchema: Yup.object ({
      name: Yup.string()
        .required("Required"),
      logo: Yup.string()
        .min(100, "Minimum 100 character")
        .max(500, "Maximum 500 character")
        .required("Required"),
    }),

})

let solution={
  name,
  logo,
  }
const HandleSubmit=(e)=>{
    e.preventDefault();
        axios
        .post(`http://172.16.33.73:8000/api/v1/solution/create`, solution, {
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
  console.log(get.getsolutions(),"data")

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
            id="name"
            name="name"
            type="text"
            placeholder='Solution Name'
            onChange={(e)=>setName(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px] h-[200px] grid justify-start'
            id="logo"
            name="logo"
            type="logo"
            placeholder='Solution Description'
            onChange={(e)=>setLogo(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.logo}
          />
          {formik.touched.logo && formik.errors.logo ? <p>{formik.errors.logo}</p> : null}
        </div>
       
        <div className='flex items-center justify-center gap-[60px] my-[10px]'>
          <button 
            type="submit"
            className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
          >
            Submit
          </button>
          <button 
            type="reset"
            className="bg-[#bfbfbf] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
          >
            Cancel
          </button>
        </div>
      </div>
      </form>

    </div>
  )
}
