import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function EditClient(props) {
  
  const BearerToken = localStorage.getItem("accessToken");

  const [certeficate, setCerteficate] = useState(props?.data?.name);

  function HandleClose() {
    props.modal(false);
  }
  const handleChange = (e) => {
    const img = {
      name: e?.target?.files[0].name,
      data: e?.target?.files[0],
    };
    setcertificate(img?.data);
  };

  const form = new FormData();
  form.append("certeficate", certeficate);
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`${API_BASE_URL}certeficate/${props?.data?.id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "multipart/form-data",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJuZWJpeWF0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2NzgiLCJpc0FkbWluIjpudWxsLCJjcmVhdGVkX2F0IjpudWxsLCJ1cGRhdGVkX2F0IjpudWxsLCJjcmVhdGVkX2J5IjpudWxsLCJ1cGRhdGVkX2J5IjpudWxsLCJkZXBhcnRtZW50IjoiU29mdHdhcmUgYXMgYSBTZXJ2aWMiLCJmaXJzdE5hbWUiOiJuZWJpeWF0IiwiZ2VuZGVyIjoibWFsZSIsImlzX2RlbGV0ZWQiOmZhbHNlLCJsYXN0TmFtZSI6Im5lYml5YXQiLCJ0ZWwiOiIwOTc2NTM1MzQzIiwiaWF0IjoxNjc1MTQ3MTg0LCJleHAiOjE2NzUyMzM1ODR9.rE8UkZ1h4ubdZ8Q7tyD98W7k-0X7tiDubKUkufYRMD8"
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

  // console.log(client, "formik.errors");

  return (
    <div
      onClick={HandleClose}
      className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[630px] h-[600px]  px-8 py-8 rounded-lg bg-white flex flex-col gap-4 overflow-x-hidden overflow-y-auto"
      >
        <div className="flex pb-4 justify-between">
          <span className="text-[28px] font-semibold">Edit Client</span>
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
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  // onBlur={formik.handleBlur}
                  value={name}
                />
              </div>
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={formik.handleBlur}
                  value={email}
                />
              </div>

              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="contactNumber"
                  name="contactNumber"
                  type="string"
                  placeholder="Contact Number"
                  onChange={(e) => setContact(e.target.value)}
                  onBlur={formik.handleBlur}
                  value={contact_no}
                />
              </div>
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="website"
                  name="website"
                  type="text"
                  placeholder="Website"
                  onChange={(e) => setWebSite(e.target.value)}
                  onBlur={formik.handleBlur}
                  value={website}
                />
              </div>
              <div className="m-[10px] flex gap-3 justify-center items-center">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="logo"
                  name="logo"
                  type="file"
                  placeholder="Add image"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />
              </div>
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
