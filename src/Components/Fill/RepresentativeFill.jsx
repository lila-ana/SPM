import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { AiFillCloseCircle } from "react-icons/ai";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";
import { FaBullseye } from 'react-icons/fa';

export default function RepresentativeFill(props) {
<<<<<<< HEAD
 
  
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName]= useState(null);
  const [email, setEmail]= useState(null);
  const [address, setAddress]= useState(null);
  const [contact_1, setContact_1]= useState(null);
  const [contact_2, setContact_2]= useState(null);
  const [client, setClient]=useState(false)
  
  function HandleClose(){
    props.modal(false)
  }
  function HandleVendor() {
    setClient(true);
  }
  const formik  = useFormik ({
=======
  // const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [contact_1, setContact_1] = useState(null);
  const [contact_2, setContact_2] = useState(null);

  function HandleClose() {
    props.modal(false);
  }

  const formik = useFormik({
>>>>>>> 64eb1ecd19e595b6d8f855ddd8ce11221892f9b7
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      address: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      address: Yup.string().required("Required"),
      contact_1: Yup.string().required("Required"),
      contact_2: Yup.string().required("Required"),
      position: Yup.string().required("Required"),
    }),
  });

  let representative = {
    name: name,
    email: email,
    contact_1: contact_1,
    contact_2: contact_2,
  };
  console.log(representative, "efgbn");
  const HandleSubmit = (e) => {
<<<<<<< HEAD
  const form = new FormData();
  form.append("name", name);
  form.append("email", email);
  form.append("contact_1", contact_1);
  form.append("contact_2", contact_2);
  form.append("address", address);

    e.preventDefault();
    // console.log(form,representative,"form inside handler")
    axios
      .post(`${API_BASE_URL}representative/create`, form, {
        headers: {   
          "content-type":"multipart/form-data",
        //  accept: "multipart/form-data",
        authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJUZXNmYWh1bkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgU2VydmljIiwiZmlyc3ROYW1lIjoibmViaXlhdCIsImdlbmRlciI6Im1hbGUiLCJpc19kZWxldGVkIjp0cnVlLCJsYXN0TmFtZSI6Im5lYml5YXQiLCJ0ZWwiOiIwOTc2NTM1MzQzIiwiaWF0IjoxNjc0ODI3MzI5LCJleHAiOjE2NzQ5MTM3Mjl9.82tZr5kmLUJ4R1STgWh--A4IoRy5f95fnwGr1Zc2BwA"
      },
=======
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("contact_1", contact_1);
    form.append("contact_2", contact_2);
    e.preventDefault();
    console.log(form, representative, "form inside handler");
    axios
      .post(`${API_BASE_URL}representative/create`, form, {
        headers: {
          "content-type": "multipart/form-data",
          //  accept: "multipart/form-data",
          // authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwiZW1haWwiOiJtdWxlc3NAZ21haWwuY29tIiwiZ2VuZGVyIjoiTWFsZSIsImRlcGFydG1lbnQiOiJTYWFTIiwidGVsIjpudWxsLCJwYXNzd29yZCI6IjEyMzhnZmo4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiaXNfZGVsZXRlZCI6dHJ1ZSwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiaWF0IjoxNjczNTk1OTI4LCJleHAiOjE2NzM2ODIzMjh9.XHYs6P7qOADLnWJGePBvJPs0PSqGcyUrY0fKcuUmZjo",
        },
>>>>>>> 64eb1ecd19e595b6d8f855ddd8ce11221892f9b7
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };
<<<<<<< HEAD
        
  // console.log (representative, "hsdjg")
return (
    <div className='grid items-center justify-center '>
     
              <div
      onClick={(e) => props?.setmodal(false)}
      className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center "
    >
=======
  // let representative={
  //   name,
  //   email,
  //   contact_1,
  //   contact_2,
  //   }
  // const HandleSubmit=(e)=>{
  //     e.preventDefault();
  //         axios
  //         .post(`http://172.16.34.103:8000/api/v1/representative/create`, representative, {
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

  //   console.log(get.getrepresentative(),"data")

  console.log(representative, "hsdjg");
  return (
    <div className="grid items-center justify-center ">
      {/* <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true shadow dark:bg-gray-700">
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[950px] sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg shadow dark:bg-gray-700"></div>
              <h3 onClick={HandleClose} className="text-lg font-medium leading-6 text-gray-900 flex justify-end" id="modal-title">
                  <AiFillCloseCircle className='flex  fill-[#1b9c85] w-[25px] h-[25px] rounded-full'/>
              </h3> */}

>>>>>>> 64eb1ecd19e595b6d8f855ddd8ce11221892f9b7
      <div
        onClick={(e) => props?.setmodal(false)}
        className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center "
      >
<<<<<<< HEAD
        <div className="flex pb-4 justify-between">
          <span className="text-[28px] font-semibold">Add Representative</span>
          <div onClick={HandleClose} className="pt-2">
            <GrClose className="w-[40px] h-[25px]" />
          </div>
        </div>
        <form
          onSubmit={HandleSubmit}
          className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[550px]  '
        >
           <div>
              <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                  <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                        <div  onClick={HandleVendor}  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Vendor</div>
                        <div
                        className='mx-[20px] mt-[20px] w-[350px] '>
              <div className='m-[4px] flex justify-center items-center gap-[5px]'>
                <label className="block mb-[2px] text-sm font-nunito font-light text-[#696969] w-[80px] dark:text-white">Vendor</label>
               {!client?
                <select className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" disabled>Choose Vendor</option>
                    {get?.getvendor()?.map((items)=>(
                      <option 
                      value={items?.id}>{items?.name}</option>           
                    ))}
                </select>:"client"}

                </div>
              </div>
              <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='name'
              name='name'
              type='text'
              placeholder='Representative Name'
              onChange={(e)=>setName(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='email'
              name='email'
              type='email'
              placeholder='example@example.com'
              onChange={(e)=>setEmail(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='address'
              name='address'
              type='text'
              placeholder='Address'
              onChange={(e)=>setAddress(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_1'
              name='Contact_1'
              type='text'
              placeholder='Contact Number'
              onChange={(e)=>setContact_1(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_2'
              name='Contact_2'
              type='text'
              placeholder='Contact Number_2'
              onChange={(e)=>setContact_2(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
          </div>        
                      </li>
                      <li>
                        <div onClick={HandleVendor}  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Client</div>
                        {/* <div className='mx-[20px] mt-[20px] w-[350px] '>
              <div className='m-[4px] flex justify-center items-center gap-[5px]'>
                <label className="block mb-[2px] text-sm font-nunito font-light text-[#696969] w-[80px] dark:text-white">Client</label>
                <select className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" disabled>Choose Client</option>
                    {get?.getclient()?.map((items)=>(
                      <option 
                      value={items?.id}>{items?.name}</option>           
                    ))}
                </select>
                </div>
              </div>
              <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='name'
              name='name'
              type='text'
              placeholder='Representative Name'
              onChange={(e)=>setName(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='email'
              name='email'
              type='email'
              placeholder='example@example.com'
              onChange={(e)=>setEmail(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='address'
              name='address'
              type='text'
              placeholder='Address'
              onChange={(e)=>setAddress(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_1'
              name='Contact_1'
              type='text'
              placeholder='Contact Number'
              onChange={(e)=>setContact_1(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_2'
              name='Contact_2'
              type='text'
              placeholder='Contact Number_2'
              onChange={(e)=>setContact_2(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
          </div>         */}
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
       
        {/* <div className='m-[10px]'> */}
          {/* <div>
              <div className='mx-[20px] mt-[20px] w-[350px] '>
              <div className='m-[4px] flex justify-center items-center gap-[5px]'>
                <label className="block mb-[2px] text-sm font-nunito font-light text-[#696969] w-[80px] dark:text-white">Client</label>
                <select className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" disabled>Choose Client</option>
                    {get?.getclient()?.map((items)=>(
                      <option 
                      value={items?.id}>{items?.name}</option>           
                    ))}
                </select>
=======
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[630px] h-[600px]  px-8 py-8 rounded-lg bg-white flex flex-col gap-4 overflow-x-hidden overflow-y-auto"
        >
          <div className="flex pb-4 justify-between">
            <span className="text-[28px] font-semibold">
              Add Representative
            </span>
            <div onClick={HandleClose} className="pt-2">
              <GrClose className="w-[40px] h-[25px]" />
            </div>
          </div>
          <form
            onSubmit={HandleSubmit}
            className="grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]  "
          >
            <div className="m-[10px]">
              <div>
                <div className="mx-[20px] mt-[20px] w-[350px] ">
                  <div className="flex justify-center items-center gap-[5px]">
                    <select className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                      <option value="" disabled>
                        Choose Representative
                      </option>
                      {get?.getrepresentative()?.map((items) => (
                        <option value={items?.id}>{items?.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mx-[20px] mt-[20px] w-[350px] ">
                  <div className=" flex justify-center items-center gap-[5px]">
                    <select className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                      <option value="" disabled>
                        Choose Vendor
                      </option>
                      {get?.getvendor()?.map((items) => (
                        <option value={items?.id}>{items?.name}</option>
                      ))}
                    </select>
                  </div>
>>>>>>> 64eb1ecd19e595b6d8f855ddd8ce11221892f9b7
                </div>
              </div>

              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Representative Name"
                  onChange={(e) => setName(e.target.value)}
                  onBlur={formik.handleBlur}
                  // value={formik.values.name}
                />
              </div>
<<<<<<< HEAD
            </div>              */}

          {/* <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='name'
              name='name'
              type='text'
              placeholder='Representative Name'
              onChange={(e)=>setName(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='email'
              name='email'
              type='email'
              placeholder='example@example.com'
              onChange={(e)=>setEmail(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='address'
              name='address'
              type='text'
              placeholder='Address'
              onChange={(e)=>setAddress(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_1'
              name='Contact_1'
              type='text'
              placeholder='Contact Number'
              onChange={(e)=>setContact_1(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_2'
              name='Contact_2'
              type='text'
              placeholder='Contact Number_2'
              onChange={(e)=>setContact_2(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber}</p> : null}
          </div>
          <div className='m-[10px]'>
=======
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={formik.handleBlur}
                  // value={formik.values.email}
                />
              </div>
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  onBlur={formik.handleBlur}
                  // value={formik.values.address}
                />
              </div>
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="contact_1"
                  name="Contact_1"
                  type="text"
                  placeholder="Contact Number"
                  onChange={(e) => setContact_1(e.target.value)}
                  onBlur={formik.handleBlur}
                  // value={formik.values.contactNumber}
                />
              </div>
              <div className="m-[10px]">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="contact_2"
                  name="Contact_2"
                  type="text"
                  placeholder="Contact Number_2"
                  onChange={(e) => setContact_2(e.target.value)}
                  onBlur={formik.handleBlur}
                  // value={formik.values.contactNumber}
                />
              </div>
              {/* <div className='m-[10px]'>
>>>>>>> 64eb1ecd19e595b6d8f855ddd8ce11221892f9b7
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='position'
              name='position'
              type='text'
              placeholder='Position'
              onChange={(e)=>setPosition(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.contactNumber}
            />
            {formik.touched.position && formik.errors.position ? <p>{formik.errors.position}</p> : null}
<<<<<<< HEAD
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
=======
                    </div>*/}
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
                className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
>>>>>>> 64eb1ecd19e595b6d8f855ddd8ce11221892f9b7
}
