import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import get from '../../features/get'
import { GrClose } from 'react-icons/gr'
import { API_BASE_URL } from '../../api/endPoint'


export default function SolutionsFIll(props) {
 
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] =useState(null)
  const [description, setDescription] =useState(null)

  function HandleClose() {
    props.modal(false);
  }
  const handleChange = (e) => {
    const img = {
      name: e?.target?.files[0].name,
      data: e?.target?.files[0],
    };
    setLogo(img);
  };
 
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
const form = new FormData();
  form.append("name", name);
  form.append("description", description);
  
let solution={
  name,
  description,
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}solution/create`, solution, {
        headers: {
          // "Content-Type": "multipart/form-data",
          accept: "application/json",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJUZXNmYWh1bkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgU2VydmljIiwiZmlyc3ROYW1lIjoibmViaXlhdCIsImdlbmRlciI6Im1hbGUiLCJpc19kZWxldGVkIjp0cnVlLCJsYXN0TmFtZSI6Im5lYml5YXQiLCJ0ZWwiOiIwOTc2NTM1MzQzIiwiaWF0IjoxNjc0ODI3MzI5LCJleHAiOjE2NzQ5MTM3Mjl9.82tZr5kmLUJ4R1STgWh--A4IoRy5f95fnwGr1Zc2BwA"
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };
  
  // console.log(solution, "formik.errors");

  return (
    <div
      onClick={(e) => props?.setmodal(false)}
      className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[630px] h-[600px]  px-8 py-8 rounded-lg bg-white flex flex-col gap-4 overflow-x-hidden overflow-y-auto"
      >
        <div className="flex pb-4 justify-between">
          <span className="text-[28px] font-semibold">Add Solution</span>
          <div onClick={HandleClose} className="pt-2">
            <GrClose className="w-[40px] h-[25px]" />
          </div>
        </div>
   <div className='grid items-center justify-center '>
      <form 
      onSubmit={HandleSubmit}
      className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]  '
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
            id="description"
            name="description"
            type="description"
            placeholder='Solution Description'
            onChange={(e)=>setDescription(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.logo}
          />
          {formik.touched.logo && formik.errors.logo ? <p>{formik.errors.logo}</p> : null}
        </div>
        {/* <div className='m-[10px] flex gap-3 justify-center items-center'>

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
        </div> */}
       
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
    </div>
    </div>
  )
}
