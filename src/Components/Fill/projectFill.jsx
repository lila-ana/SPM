import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"
import axios from 'axios'

export default function ProjectFill() {
 
  // const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] =useState(null)
  const [description, setDescription] =useState(null)

  const formik  = useFormik ({
    initialValues: {
      name:"", 
      email:"",
      sector_id:"",
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

let projectFill={
  name,
  description,
  }
const HandleSubmit=(e)=>{
    e.preventDefault();
        axios
        .post(`http://172.16.34.103:8000/api/v1/projectFill/create`, projectFill, {
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
console.log(projectFill, "projectFill.errors")
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
            placeholder='Project Name'
            onChange={(e)=>setName(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px] h-[200px] grid justify-start'
            id="description"
            name="description"
            type="description"
            placeholder='Project Description'
            onChange={(e)=>setDescription(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? <p>{formik.errors.description}</p> : null}
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
