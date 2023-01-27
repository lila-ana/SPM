import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { API_BASE_URL } from "../../api/endPoint";

export default function VendorFill(props) {
  // const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(null);
  const [logo, setLogo] = useState(null);
  const [website, setWebsite] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact_phone, setContact_phone] = useState(null);
  const [country, setCountry] = useState(null);

  function HandleClose() {
    props.modal(false);
  }
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
      name: "",
      email: "",
      address: "",
      contactNumber: "",
      website: "",
      logo: "",
      country: "",
    },

    // validationSchema: Yup.object ({
    //  name: Yup.string()
    //     .required("Required"),
    //   email: Yup.string()
    //     .email("Invalid email")
    //     .required("Required"),
    //   address: Yup.string()
    //     // .max("Invalid Address")
    //     .required("Required"),
    //   contactNumber: Yup.string()
    //     // .max("Invalid input")
    //     .required("Required"),
    //   website: Yup.string()
    //     // .max("Invalid input")
    //     .required("Required"),
    //  country: Yup.string()
    //     // .max("Invalid input")
    //     .required("Required"),

    // }),

    //   onSubmit: (values) =>{
    //     console.log(values)
    // }
  });
  const form = new FormData();
  form.append("name", name);
  form.append("email", email);
  form.append("website", website);
  form.append("contact_phone", contact_phone);
  form.append("logo", logo);
  let vendor = {
    name,
    logo,
    website,
    email,
    contact_phone,
    country,
  };
  for (let pair of form.entries()) {
    console.log(pair[0] + ", " + pair[1], "hahahaha");
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}vendor/create`, form, {
        headers: {
          // "Content-Type": "multipart/form-data",
          accept: "multipart/form-data",
          // authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwiZW1haWwiOiJtdWxlc3NAZ21haWwuY29tIiwiZ2VuZGVyIjoiTWFsZSIsImRlcGFydG1lbnQiOiJTYWFTIiwidGVsIjpudWxsLCJwYXNzd29yZCI6IjEyMzhnZmo4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiaXNfZGVsZXRlZCI6dHJ1ZSwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiaWF0IjoxNjczNTk1OTI4LCJleHAiOjE2NzM2ODIzMjh9.XHYs6P7qOADLnWJGePBvJPs0PSqGcyUrY0fKcuUmZjo",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };
  // console.log(vendor,"formik.errors")
  console.log(get.getvendor(), "data");

  return (
    //   <div className='grid items-center justify-center '>
    //     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true shadow dark:bg-gray-700">
    // <div className="fixed inset-0 z-10 overflow-y-auto">
    //   <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //     <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[950px] sm:max-w-lg">
    //       <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg shadow dark:bg-gray-700"></div>
    //       <h3 onClick={HandleClose} className="text-lg font-medium leading-6 text-gray-900 flex justify-end" id="modal-title">
    //           <AiFillCloseCircle className='flex  fill-[#1b9c85] w-[25px] h-[25px] rounded-full'/>
    //       </h3>
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
                onBlur={formik.handleBlur}
                // value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
            </div>
            <div className="m-[10px]">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="email"
                name="email"
                type="email"
                placeholder="example@example.com"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={formik.handleBlur}
                // value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null}
            </div>

            {/* <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="country"
            name="country"
            type="text"
            placeholder='country'
            onChange={(e)=>setCountry(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.country}
          />
          {formik.touched.country && formik.errors.country ? <p>{formik.errors.country}</p> : null}
        </div> */}
            {/* <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="state"
            name="state"
            type="text"
            placeholder='state'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
          />
          {formik.touched.state && formik.errors.state ? <p>{formik.errors.state}</p> : null}
        </div>
         */}
            {/* <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="address"
            name="address"
            type="text"
            placeholder='Address'
            onChange={(e)=>setAddress(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p> : null}
        </div> */}
            <div className="m-[10px]">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="contact_phone"
                name="contact_phone"
                type="phoneNumber"
                placeholder="Contact Number"
                onChange={(e) => setContact_phone(e.target.value)}
                onBlur={formik.handleBlur}
                // value={formik.values.contact_phone}
              />
              {formik.touched.contact_phone && formik.errors.contact_phone ? (
                <p>{formik.errors.contact_phone}</p>
              ) : null}
            </div>
            <div className="m-[10px]">
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="website"
                name="website"
                type="text"
                placeholder="Website"
                onChange={(e) => setWebsite(e.target.value)}
                onBlur={formik.handleBlur}
                // value={formik.values.website}
              />
              {formik.touched.website && formik.errors.website ? (
                <p>{formik.errors.website}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.logo && formik.errors.logo ? (
                <p>{formik.errors.logo}</p>
              ) : null}
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
