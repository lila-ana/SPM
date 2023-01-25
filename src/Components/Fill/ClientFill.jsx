import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function ClientFill(props) {
  // const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(null);
  const [website, setWebSite] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact_no, setContact] = useState(null);
  const [address, setAddress] = useState(null);
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
  // const handleApi = () => {
  //   const formData = new formData ()
  //   formData.append ('image', image)
  //   axios.post('url', formData).then((res) => {
  //     console.log(res)
  //   })
  // }

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
  form.append("email", email);
  form.append("website", website);
  form.append("contact_no", contact_no);
  form.append("logo", logo);
  let client = {
    name,
    website,
    email,
    contact_no,
    address,
    // logo,
  };
  console.log(client, "rerttr");
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}client/create`, client, {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "application/json",
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

  console.log(get.getclient(), "data");

  console.log(client, "formik.errors");

  return (
    <div
      onClick={(HandleClose)}
      className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[630px] h-[600px]  px-8 py-8 rounded-lg bg-white flex flex-col gap-4 overflow-x-hidden overflow-y-auto"
      >
        <div className="flex pb-4 justify-between">
          <span className="text-[28px] font-semibold">Add Client</span>
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
                  className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <p>{formik.errors.fullName}</p>
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
                />
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="m-[10px]">
                <input
                  className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address ? (
                  <p>{formik.errors.address}</p>
                ) : null}
              </div>
              <div className="m-[10px]">
                <input
                  className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                  id="contactNumber"
                  name="contactNumber"
                  type="string"
                  placeholder="Contact Number"
                  onChange={(e) => setContact(e.target.value)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <p>{formik.errors.contactNumber}</p>
                ) : null}
              </div>
              <div className="m-[10px]">
                <input
                  className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                  id="website"
                  name="website"
                  type="text"
                  placeholder="Website"
                  onChange={(e) => setWebSite(e.target.value)}
                  onBlur={formik.handleBlur}
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
