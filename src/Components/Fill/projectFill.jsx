import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function ProjectFill(props) {
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [solution, setSolution] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [representative_info, setRepresentative_info] = useState(null);

  function HandleClose() {
    props.modal(false);
  }
  const handleChange = (e) => {
    const img = {
      name: e?.target?.files[0].name,
      data: e?.target?.files[0],
    };
    setLogo(img?.data);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      contact_no: "",
      website: "",
      logo: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      address: Yup.string().required("Required"),
      // country: Yup.string()
      //   .required("Required"),
      // state: Yup.string()
      //   .required("Required"),
      contact_no: Yup.string().required("Required"),
      logo: Yup.string().required("Required"),
      website: Yup.string(),
    }),
  });
  const form = new FormData();
  form.append("name", name);
  form.append("decsirption", description);
  form.append("solution", solution);
  form.append("vendor", vendor);
  form.append("representative_info", representative_info);

  let project = {
    name,
    description,
    solution,
    vendor,
    representative_info,
  };

  // console.log(project, "rerttr");

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}project/create`, form, {
        headers: {
          // "Content-Type": "multipart/form-data",
          accept: "multipart/",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJUZXNmYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgU2VydmljIiwiZmlyc3ROYW1lIjoidGVzZmFodW4iLCJnZW5kZXIiOiJtYWxlIiwiaXNfZGVsZXRlZCI6ZmFsc2UsImxhc3ROYW1lIjpudWxsLCJ0ZWwiOiIwOTI0MjMyNTIiLCJpYXQiOjE2NzU0MDMyMzIsImV4cCI6MTY3NTQ4OTYzMn0.8gaBOpbjq_wwav6ksURwSCz2byJYZRVVUDjEn8gls2s"
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };

  // console.log(project, "formik.errors");

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
          <span className="text-[28px] font-semibold">Add Project</span>
          <div onClick={HandleClose} className="pt-2">
            <GrClose className="w-[40px] h-[25px]" />
          </div>
        </div>
        <div className="grid items-center justify-center gap-3 ">
          <form
            onSubmit={HandleSubmit}
            className=" grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]"
          >
            <div className="grid items-center justify-center gap-3 mt-3">
              <label className="block mb-[2px] text-sm font-nunito font-regular text-[#696969] w-[120px] dark:text-white">
                Client
              </label>
              <select className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                <option value="" disabled>
                  Choose client
                </option>
                {get?.getclient()?.map((items) => (
                  <option value={items?.id}>{items?.name}</option>
                ))}
              </select>

              <div className=" gird justify-center items-center gap-[5px]">
              <label className="block mb-[2px] text-sm font-nunito font-normal text-[#696969] w-[120px] dark:text-white">
                Representative
              </label>
                <select className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                  <option value="" disabled>
                    Choose representative
                  </option>
                  {get?.getrepresentative()?.map((items) => (
                    <option value={items?.id}>{items?.name}</option>
                  ))}
                </select>
              </div>

              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="name"
                name="name"
                type="text"
                placeholder="Project Name"
                onChange={(e) => setName(e.target.value)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <p>{formik.errors.fullName}</p>
              ) : null}

              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px] h-[200px] grid items-center justify-center"
                id="decsription"
                name="description"
                type="description"
                placeholder="Project description"
                onChange={(e) => setDescription(e.target.value)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null}

              {/* <div className="m-[10px] flex gap-3 justify-center items-center">
                <input
                  className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                  id="logo"
                  name="logo"
                  type="file"
                  placeholder="Add image"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.logo && formik.errors.logo ? (
                  <p>{formik.errors.logo}</p>
                ) : null}
              </div> */}
              <div className="flex items-center justify-center gap-[60px] my-[25px]">
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
  );
}

// import React, { useState } from 'react'
// import {useFormik} from 'formik'
// import * as Yup from "yup"
// import axios from 'axios'

// export default function ProjectFill() {

//   // const BearerToken = localStorage.getItem("accessToken");

//   const [name, setName] =useState(null)
//   const [description, setDescription] =useState(null)

//   const formik  = useFormik ({
//     initialValues: {
//       name:"",
//       email:"",
//       sector_id:"",
//       state:"",
//       address:"",
//       contactNumber: "",
//       website: ""
//     },

//     validationSchema: Yup.object ({
//       name: Yup.string()
//         .required("Required"),
//       logo: Yup.string()
//         .min(100, "Minimum 100 character")
//         .max(500, "Maximum 500 character")
//         .required("Required"),
//     }),

// })

// let projectFill={
//   name,
//   description,
//   }
// const HandleSubmit=(e)=>{
//     e.preventDefault();
//         axios
//         .post(`http://172.16.34.103:8000/api/v1/projectFill/create`, projectFill, {
//           headers: {
//             "Content-Type": "application/json",
//             // authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Ik5hb2xsbCIsImVtYWlsIjoiTmFvbGxsQGdtYWlsLmNvbSIsImdlbmRlciI6Im1hbGUiLCJkZXBhcnRtZW50IjoiU29mdHdhcmUgYXMgYSBTZXJ2aWMiLCJqb2IiOiJFUlAiLCJwYXNzd29yZCI6IjEyMzhnZ2ZqOCIsImlzQWRtaW4iOm51bGwsImNyZWF0ZWRfYXQiOm51bGwsInVwZGF0ZWRfYXQiOm51bGwsImlzX2RlbGV0ZWQiOnRydWUsImNyZWF0ZWRfYnkiOjIsInVwZGF0ZWRfYnkiOm51bGwsImlhdCI6MTY3MzUyNDcxOSwiZXhwIjoxNjczNjExMTE5fQ.n8D5nEppe3v49Btx4UZog6csO2gVeJpOKHVKJ5iZLws",

//           },
//         })
//         .then(function (response) {
//           console.log(response);

//         })
//         .catch(function (error) {
//           console.log(error, "errorrrrrrrrrrrrrrr");
//         });
//   }
// console.log(projectFill, "projectFill.errors")
//   return (
//     <div className='grid items-center justify-center '>
//       <form
//       onSubmit={HandleSubmit}
//       className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px] h-[400px] '
//       >
//       <div className='m-[10px]'>
//         <div className='m-[10px]'>
//           <input
//             className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
//             id="name"
//             name="name"
//             type="text"
//             placeholder='Project Name'
//             onChange={(e)=>setName(e.target.value)}
//             onBlur={formik.handleBlur}
//             // value={formik.values.name}
//           />
//           {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
//         </div>
//         <div className='m-[10px]'>
//           <input
//             className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px] h-[200px] grid justify-start'
//             id="description"
//             name="description"
//             type="description"
//             placeholder='Project Description'
//             onChange={(e)=>setDescription(e.target.value)}
//             onBlur={formik.handleBlur}
//             // value={formik.values.description}
//           />
//           {formik.touched.description && formik.errors.description ? <p>{formik.errors.description}</p> : null}
//         </div>

//         <div className='flex items-center justify-center gap-[60px] my-[10px]'>
//           <button
//             type="submit"
//             className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
//           >
//             Submit
//           </button>
//           <button
//             type="reset"
//             className="bg-[#bfbfbf] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//       </form>

//     </div>
//   )
// }
