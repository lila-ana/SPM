import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import get from "../../features/get";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function EditRepresentative(props) {
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(props?.data?.name);
  const [email, setEmail] = useState(props?.data?.email);
  const [contact_1, setContact_1] = useState(props?.data?.contact_1);
  const [contact_2, setContact_2] = useState(props?.data?.contact_2);
  const [position, setPosition] = useState(props?.data?.position);
 

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
  form.append("contact_1", contact_1);
  form.append("contact_2", contact_2);
  form.append("position", position);
  
  let representative = {
    name,
    email,
    contact_1,
    contact_2,
    position,
   
  };
//   console.log(client, "rerttr");
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`${API_BASE_URL}representative/${props?.data?.id}`, representative, {
        headers: {
        // "Content-Type": "application/json",
          accept: "application/json",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJuZWJpeWF0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2NzgiLCJpc0FkbWluIjpudWxsLCJjcmVhdGVkX2F0IjpudWxsLCJ1cGRhdGVkX2F0IjpudWxsLCJjcmVhdGVkX2J5IjpudWxsLCJ1cGRhdGVkX2J5IjpudWxsLCJkZXBhcnRtZW50IjoiU29mdHdhcmUgYXMgYSBTZXJ2aWMiLCJmaXJzdE5hbWUiOiJuZWJpeWF0IiwiZ2VuZGVyIjoibWFsZSIsImlzX2RlbGV0ZWQiOmZhbHNlLCJsYXN0TmFtZSI6Im5lYml5YXQiLCJ0ZWwiOiIwOTc2NTM1MzQzIiwiaWF0IjoxNjc1MzE4MjgyLCJleHAiOjE2NzU0MDQ2ODJ9.iMmzbZySSqU2XYI-ZRCga6j-ChQe77YLVvCXd6Juav4"
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };

//   console.log(client, "formik.errors");

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
          <span className="text-[28px] font-semibold">Edit Representative</span>
          <div onClick={HandleClose} className="pt-2">
            <GrClose className="w-[40px] h-[25px]" />
          </div>
        </div>
        <div className="grid items-center justify-center ">
          <form
            onSubmit={HandleSubmit}
            className="grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]"
          >
            <div className='m-[10px]'>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="name"
            name="name"
            type="text"
            placeholder='Representative Name'
            onChange={(e)=>setName(e.target.value)}
            onBlur={formik.handleBlur}
            value={name}
          />
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="email"
            name="email"
            type="email"
            placeholder='example@example.com'
            onChange={(e)=>setEmail(e.target.value)}
            onBlur={formik.handleBlur}
            value={email}
          />
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="contact_1"
            name="contact_1"
            type="contact_1"
            placeholder='contact_1'
            onChange={(e)=>setContact_1(e.target.value)}
            onBlur={formik.handleBlur}
            value={contact_1}
          />
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="contact_2"
            name="contact_2"
            type="contact_2"
            placeholder='contact_2'
            onChange={(e)=>setContact_2(e.target.value)}
            onBlur={formik.handleBlur}
            value={contact_2}
          />
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="position"
            name="position"
            type="text"
            placeholder='Position'
            onChange={(e)=>setPosition(e.target.value)}
            onBlur={formik.handleBlur}
            value={position}
          />
        </div>
        
        
        <div className='flex items-center justify-center gap-[60px] my-[25px]'>
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
    </div>
  );
}