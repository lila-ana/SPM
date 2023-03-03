import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function EditRepresentative(props) {
  
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(props?.data?.name);
  const [email, setEmail] = useState(props?.data?.email);
  const [contact_1, setContact_1] = useState(props?.data?.contact_1);
  const [contact_2, setContact_2] = useState(props?.data?.contact_2);
  const [position, setPosition] = useState(props?.data?.position);
  const [address, setAddress] = useState(props?.data?.address);
 
  function HandleClose() {
    props.modal(false);
  }
  
  const form = new FormData();
  form.append("name", name);
  form.append("email", email);
  form.append("contact_1", contact_1);
  form.append("contact_2", contact_2);
  form.append("position", position);
  form.append("address", address);
  
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
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImVtYWlsIjoibmFyZG9zQGllbmV0d29ya3MuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkRXdSVjZZWFhsQU5NZ2d4VUZmYmdHT1ZmZHlINDRSd3l6VlpTS211ay5zSnl2N3plRmFIYVMiLCJpc0FkbWluIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0xN1QxNDoyNzoyMC4iLCJ1cGRhdGVkX2F0IjpudWxsLCJjcmVhdGVkX2J5IjpudWxsLCJ1cGRhdGVkX2J5IjpudWxsLCJkZXBhcnRtZW50IjoiU29mdHdhcmUgYXMgYSBTZXJ2aWMiLCJmaXJzdE5hbWUiOiJOYXJkb3MiLCJnZW5kZXIiOiIiLCJpc19kZWxldGVkIjpmYWxzZSwibGFzdE5hbWUiOiJUZXNnYXllIiwidGVsIjoiMDk4NzY1NDMyMSIsImlhdCI6MTY3NzgyMzY5NiwiZXhwIjoxNjc3OTEwMDk2fQ.MUJmV3h4cJv41WKbjptV6WHBweATrrxM3XQ-M48eEXY"
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
            value={position}
          />
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="address"
            name="address"
            type="text"
            placeholder='Address'
            onChange={(e)=>setAddress(e.target.value)}
            value={address}
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