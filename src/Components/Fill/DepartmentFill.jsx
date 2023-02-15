import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function DepartmentFill(props) {
  
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(null);
  const [description, setDescription] =useState(null);
  const [logo, setLogo] = useState(null);

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
  
  const form = new FormData();
  form.append("name", name);
  form.append("description", description);
  form.append("logo", logo);
  
  let department = {
    name,
    description,
    logo,
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}department/create`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "multipart/form-data",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiZGFuaWVsYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRVWkRJSHQuVHIxQ0MvU1FwTW56VkFPd1JRNS5vSkdlcS5OcURRTnVYVzBvdE1PNzB5VUJGcSIsImlzQWRtaW4iOm51bGwsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTEzVDA3OjAwOjI0LiIsInVwZGF0ZWRfYXQiOm51bGwsImNyZWF0ZWRfYnkiOjEsInVwZGF0ZWRfYnkiOm51bGwsImRlcGFydG1lbnQiOiJTb2Z0d2FyZSBhcyBhIFNlcnZpYyIsImZpcnN0TmFtZSI6IkRhbmllbCIsImdlbmRlciI6Im1hbGUiLCJpc19kZWxldGVkIjpmYWxzZSwibGFzdE5hbWUiOiJBbGVtdSIsInRlbCI6IjA5NzY5OTY1MyIsImlhdCI6MTY3NjI3MTkxNCwiZXhwIjoxNjc2MzU4MzE0fQ.5aQPQIWWXFjTQqZTNBmSTcY1b6vlPboJe5o5O8FRLfU"
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
          <span className="text-[28px] font-semibold">Add Department</span>
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
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Department Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
             
              <div className="mx-2 grid items-center">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="logo"
                  name="logo"
                  type="file"
                  placeholder="Add image"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label className="text-sm text-gray-900">Insert image</label>
              </div>

              <div className="flex items-center justify-center gap-[60px] my-[25px]">
                <button
                  type="submit"
                  className="text-[#fff] border-[#ffffff] border-[1px] bg-[#1b9c85] hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-[#fcfcfc]  dark:hover:bg-[#fcfcfc]  dark:focus:ring-[#fcfcfc] "
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="text-[#1b9c85] border-[#1b9c85] border-[1px] bg-[#ffffff] hover:bg-gray  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-[#fcfcfc]  dark:hover:bg-[#fcfcfc]  dark:focus:ring-[#fcfcfc] "
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
