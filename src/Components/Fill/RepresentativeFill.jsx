import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { AiFillCloseCircle } from "react-icons/ai";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function RepresentativeFill(props) {
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
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };
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

      <div
        onClick={(e) => props?.setmodal(false)}
        className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center "
      >
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
}
