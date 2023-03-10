import axios from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { API_BASE_URL } from '../../api/endPoint';

export default function Certificates(props) {
  
  const BearerToken = localStorage.getItem("accessToken");
  
  const [certeficate, setCerteficate] = useState(null);
  const [name, setName] = useState(null);

  
  function HandleClose() {
    props.modal(false);
  }
  const handleChange = (e) => {
    const img = {
      name: e?.target?.files[0].name,
      data: e?.target?.files[0],
    };
    setCerteficate(img?.data);
  };

  const form = new FormData();
  form.append("certeficate", certeficate);
  form.append("name", name);

  
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}certeficate/create`, form, {
        headers: {
          // "Content-Type": "multipart/form-data",
          accept: "multipart/form-data",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImVtYWlsIjoibmFyZG9zQGllbmV0d29ya3MuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkRXdSVjZZWFhsQU5NZ2d4VUZmYmdHT1ZmZHlINDRSd3l6VlpTS211ay5zSnl2N3plRmFIYVMiLCJpc0FkbWluIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0xN1QxNDoyNzoyMC4iLCJ1cGRhdGVkX2F0IjpudWxsLCJjcmVhdGVkX2J5IjpudWxsLCJ1cGRhdGVkX2J5IjpudWxsLCJkZXBhcnRtZW50IjoiU29mdHdhcmUgYXMgYSBTZXJ2aWMiLCJmaXJzdE5hbWUiOiJOYXJkb3MiLCJnZW5kZXIiOiIiLCJpc19kZWxldGVkIjpmYWxzZSwibGFzdE5hbWUiOiJUZXNnYXllIiwidGVsIjoiMDk4NzY1NDMyMSIsImlhdCI6MTY3NzgyMzY5NiwiZXhwIjoxNjc3OTEwMDk2fQ.MUJmV3h4cJv41WKbjptV6WHBweATrrxM3XQ-M48eEXY"
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
      className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[630px] h-[600px]  px-8 py-8 rounded-lg bg-white flex flex-col gap-4 overflow-x-hidden overflow-y-auto"
      >
        <div className="flex pb-4 justify-between">
          <span className="text-[28px] font-semibold">Add Certificate</span>
          <div onClick={HandleClose} className="pt-2">
            <GrClose className="w-[40px] h-[25px]" />
          </div>
        </div>
        <div className="grid items-center justify-center ">
          <form
            onSubmit={HandleSubmit}
            className="grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]"
          >
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Certificate Name"
                  onChange={(e) => setName(e.target.value)}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.name}
                />
                {/* {formik.touched.name && formik.errors.name ? (
                  <p>{formik.errors.name}</p>
                ) : null} */}
              </div>
        <div className="m-[10px]">
              <div className="m-[10px]">
              <input
                  className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                  id="certeficate"
                  name="certeficate"
                  type="file"
                  placeholder="Add image"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  // onBlur={Formik.handleBlur}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-[60px] my-[25px]">
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
              </form>
    </div>
    </div>
    </div>
  )
}
