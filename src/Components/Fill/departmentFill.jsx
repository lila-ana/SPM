import axios from 'axios';
import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { MdDescription } from 'react-icons/md'
import { API_BASE_URL } from '../../api/endPoint';

export default function DepartmentFill(props) {

 const [name, setName ] = useState(null);
 const [description, setDescription] = useState(null)
 const [logo, setLogo]  = useState(null)
 
    
function HandleClose () {
    props.modal (false);
}
const HandleChange = (e) => {
const img = {
    name: e?.target?.files[0].name,
    data: e?.target?.files[0],
};
setLogo(img);

}
const form = new FormData();
  form.append("name", name);
  form.append("description", description);
  form.append("logo", logo?.data)

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}department/create`, form, {
        headers: {
         "Content-Type": "multipart/form-data",
          //accept: "multipart/form-data",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJUZXNmYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgU2VydmljIiwiZmlyc3ROYW1lIjoidGVzZmFodW4iLCJnZW5kZXIiOiJtYWxlIiwiaXNfZGVsZXRlZCI6ZmFsc2UsImxhc3ROYW1lIjpudWxsLCJ0ZWwiOiIwOTI0MjMyNTIiLCJpYXQiOjE2NzU0MDMyMzIsImV4cCI6MTY3NTQ4OTYzMn0.8gaBOpbjq_wwav6ksURwSCz2byJYZRVVUDjEn8gls2s"
          // BearerToken
        },
      })
      .then(function (response) {
        console.log(response);
        HandleClose();
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };
  
 return (
    <div
    onClick={(e) => props?.setmodal(false)}
    className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center ">
<div
        onClick={(e) => e.stopPropagation()}
        className="w-[630px] h-[600px]  px-8 py-8 rounded-lg bg-white flex flex-col gap-4 overflow-x-hidden overflow-y-auto"
      >

<div className="flex pb-4 justify-between">
          <span className="text-[28px] font-semibold">Add Department</span>
          <div onClick={HandleClose} className="pt-2">
            <GrClose className="w-[40px] h-[25px]" />
          </div>
        </div> 
      <form
            onSubmit={HandleSubmit}
            className="grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]  "
          >
            <div className="m-[10px]">
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Solution Name"
                  onChange={(e) => setName(e.target.value)}
                //   onBlur={formik.handleBlur}
                  // value={formik.values.name}
                />
              </div>
              <div className="m-[10px]">
                <input
                  className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px] h-[200px] grid justify-start"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Solution Description"
                  onChange={(e) => setDescription(e.target.value)}
                //   onBlur={formik.handleBlur}
                  // value={formik.values.logo}
                />
               
              </div>
              <div className='m-[10px] flex gap-3 justify-center items-center'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="logo"
            name="logo"
            type="file"
            placeholder='Add image'
            onChange={(e) => {
              HandleChange(e);
            }}
            // onBlur={formik.handleBlur}
          />
        </div>

              <div className="flex items-center justify-center gap-[60px] my-[10px]">
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
              
    
  )
}
