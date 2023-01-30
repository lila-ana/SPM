import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function ClientFill(props) {
  const BearerToken = localStorage.getItem("accessToken");

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
  form.append("address", address);
  form.append("contact_no", contact_no);
  form.append("logo", logo);
  let client = {
    name,
    website,
    email,
    contact_no,
    address,
    logo,
  };
<<<<<<< HEAD
  // console.log(client, "rerttr");
=======
>>>>>>> 64eb1ecd19e595b6d8f855ddd8ce11221892f9b7
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}client/create`, form, {
        headers: {
          accept: "multipart/form-data",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJUZXNmYWh1bkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgU2VydmljIiwiZmlyc3ROYW1lIjoibmViaXlhdCIsImdlbmRlciI6Im1hbGUiLCJpc19kZWxldGVkIjp0cnVlLCJsYXN0TmFtZSI6Im5lYml5YXQiLCJ0ZWwiOiIwOTc2NTM1MzQzIiwiaWF0IjoxNjc0ODI3MzI5LCJleHAiOjE2NzQ5MTM3Mjl9.82tZr5kmLUJ4R1STgWh--A4IoRy5f95fnwGr1Zc2BwA"
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

<<<<<<< HEAD
  // console.log(client, "formik.errors");

=======
>>>>>>> 64eb1ecd19e595b6d8f855ddd8ce11221892f9b7
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  onBlur={formik.handleBlur}
                  required
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
                  required
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
                  onBlur={formik.handleBlur}
                />
                <label className="text-sm text-gray-900">Insert image</label>
              </div>

              <div className="flex items-center justify-center gap-[60px] my-[25px]">
                <button
                  // onClick={handleApi}
                  type="submit"
                  className="text-[#fff] border-[#ffffff] border-[1px] bg-[#1b9c85] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="text-[#1b9c85] border-[#1b9c85] border-[1px] bg-[#ffffff] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {" "}
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
