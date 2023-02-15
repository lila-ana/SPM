import React, { useEffect, useState } from "react";
import axios from "axios";
import get from "../../features/get";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function RepresentativeFill(props) {
  
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName]= useState(null);
  const [email, setEmail]= useState(null);
  const [address, setAddress]= useState(null);
  const [contact_1, setContact_1]= useState(null);
  const [contact_2, setContact_2]= useState(null);
  const [position, setPosition]=useState(null)
  const [fragment, setFragment]=useState(false)
  const [vendors, setVendors]=useState()
  const [clients, setClients]=useState()
  const [vendorId, setVendorId]=useState(null)
  const [clientId, setClientId]=useState(null)

  
  
  function HandleChange () {
    setFragment (!fragment)
  }
  
  // function HandleVendor() {
  //   setClient(true);
  // }
  function HandleClose() {
    props.modal(false);
  }

  let representative = {
    name: name,
    email: email,
    contact_1: contact_1,
    contact_2: contact_2,
    position: position,
    address:address,
    client_id:clientId ?Number(clientId) : "",
    vendor_id:vendorId ?Number(vendorId) : ""


  };

  console.log(representative, "this is data to be sent to database")
 
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("contact_1", contact_1);
    form.append("contact_2", contact_2);
    form.append("address", address);
    form.append("position", position);

    const getUser = ()=> {
      axios
      .get(`${API_BASE_URL}client`)
      .then((res) => setClients(res.data?.data))
      .catch((err) => console.log(err));
    }
    useEffect(() => {
      getUser()
    },[]);
    
    const getVendor = ()=> {
      axios
      .get(`${API_BASE_URL}vendor`)
      .then((res) => setVendors(res.data?.data))
      .catch((err) => console.log(err));
    }
    useEffect(() => {
      getVendor()
    },[]);

    const HandleSubmit = (e) => {
    e.preventDefault(); 
    axios
      .post(`${API_BASE_URL}representative/create`, representative, {
        headers: {
          // "content-type": "application/json",
           accept: "application/json",
           authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNmdUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgc2VydmljIiwiZmlyc3ROYW1lIjoiVGVzZmFodW4iLCJnZW5kZXIiOiJNYWxlIiwiaXNfZGVsZXRlZCI6ZmFsc2UsImxhc3ROYW1lIjoiQmlyZWdhIiwidGVsIjoiMDkxMjM0MjM0NSIsImlhdCI6MTY3NjQ1MTY5NSwiZXhwIjoxNjc2NTM4MDk1fQ.6XK0YUf4x7NnZu0cfIhhDQfxygN1KJgiQ3s0s7vvD1M"
          },
      })
      .then(response => {
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
      <span className="text-[28px] font-semibold">Add Representative</span>
      <div onClick={HandleClose} className="pt-2">
        <GrClose className="w-[40px] h-[25px]" />
      </div>
    </div>
    <div className="grid items-center justify-center ">
        <form
          onSubmit={HandleSubmit}
          className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[550px]  '
        >
          
           <div className="flex justify-center items-center">
              <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container grid grid-wrap items-center justify-between mx-auto">
                <div className='  my-[10px]'>
            <button 
              onClick={HandleChange}
              className="border-[#1b9c85] border-[3px] text-[#1b9c85] font-nunito text-[15px] font-semibold rounded-[12px] p-[10px] w-[120px] "
            >
              {fragment ?"Client" :"Vendor"}
            </button>
            
          </div>
              <div className='mx-[8px] mt-[20px] w-[350px] '>
              <div className='mb-[10px] flex justify-center items-center gap-[5px]'>
              {fragment?
              <>
                <label className="block mb-[2px] text-sm font-nunito font-normal text-[#696969] w-[80px] dark:text-white">Vendor</label>
              
                <select onChange={(event)=>setVendorId(event.target.value)} className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" disabled>Choose Vendor</option>
                    {vendors?.map((items)=>(
                      <option 
                      value={items?.id}>{items?.name}</option>           
                    ))}
                </select>
                </>:              <>
                <label className="block mb-[2px] text-sm font-nunito font-normal text-[#696969] w-[80px] dark:text-white">Client</label>
                <select onChange={(event)=>setClientId(event.target.value)} className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" disabled>Choose Client</option>
                    {clients?.map((items)=>(
                      <option 
                      value={items?.id}>{items?.name}</option>           
                    ))}
                </select>
                </>}
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
            />
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='email'
              name='email'
              type='email'
              placeholder='example@example.com'
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_1'
              name='Contact_1'
              type='string'
              placeholder='Contact Number'
              onChange={(e)=>setContact_1(e.target.value)}
            />
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='contact_2'
              name='Contact_2'
              type='string'
              placeholder='Contact Number_2'
              onChange={(e)=>setContact_2(e.target.value)}
            />
          </div>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='position'
              name='position'
              type='text'
              placeholder='Position'
              onChange={(e)=>setPosition(e.target.value)}
            />
          </div> 
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
              id='address'
              name='address'
              type='text'
              placeholder='City, Country'
              onChange={(e)=>setAddress(e.target.value)}
            />
          </div> 
                </div>
              </div>
            </div>
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
}
