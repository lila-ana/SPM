import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { API_BASE_URL } from "../../api/endPoint";

export default function VendorFill(props) {
  
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(null);
  const [logo, setLogo] = useState(null);
  const [website, setWebsite] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact_phone, setContact_phone] = useState(null);
  const [address, setAddress] = useState(null);
  const [clients, setClients] = useState(null);

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
  form.append("email", email);
  form.append("website", website);
  form.append("contact_phone", contact_phone);
  form.append("address", address);
  form.append("logo", logo);
  
  let vendor = {
    name,
    logo,
    website,
    email,
    contact_phone,
    address,
  };
  // for (let pair of form.entries()) {
  //   console.log(pair[0] + ", " + pair[1], "hahahaha");
  // }
  
  const getUser = ()=> {
    axios
    .get(`${API_BASE_URL}client`)
    .then((res) => setClients(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUser()
  },[]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}vendor/create`, form, {
        headers: {
          // "Content-Type": "multipart/form-data",
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

  console.log(clients, "Give me clients")

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
          <span className="text-[28px] font-semibold">Add Vendor</span>
          <div onClick={HandleClose} className="pt-2">
            <GrClose className="w-[40px] h-[25px]" />
          </div>
        </div>
        <form
          onSubmit={HandleSubmit}
          className="grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px] h-[500px] "
        >
          <div className="mx-[20px] mt-[20px] w-[350px] ">
            <div className="m-[4px] flex justify-center items-center gap-[5px]">
              <label className="block mb-[2px] text-sm font-nunito font-light text-[#696969] w-[120px] dark:text-white">
                Client
              </label>
              <select className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled>
                  Choose Client
                </option>
                {get?.getclient()?.map((items) => (
                  <option value={items?.id}>{items?.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="m-[10px]">
            <div className="m-[10px]">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="name"
                name="name"
                type="text"
                placeholder="Vendor Name"
                onChange={(e) => setName(e.target.value)}
              />             
            </div>
            <div className="m-[10px]">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="email"
                name="email"
                type="email"
                placeholder="example@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-[10px]">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="contact_phone"
                name="contact_phone"
                type="phoneNumber"
                placeholder="Contact Number"
                onChange={(e) => setContact_phone(e.target.value)}
              />
            </div>
            <div className="m-[10px]">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="address"
                name="address"
                type="text"
                placeholder="City, Country"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="m-[10px]">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="website"
                name="website"
                type="text"
                placeholder="Website"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="m-[10px] flex gap-3 justify-center items-center">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="logo"
                name="logo"
                type="file"
                placeholder="Add image"
                onChange={(e) => {
                  handleChange(e);
                }}
              />     
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
          </div>
        </form>
      </div>
    </div>
  );
}
