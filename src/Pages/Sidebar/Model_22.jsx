import { Menu } from '@headlessui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';

export default function Model_19() {
  const BearerToken = localStorage.getItem("accessToken");

  const [users, setUsers] = useState();
  const [Id, setId] = useState();
  const [itemType, setItemType] = useState();
  const [model, setModel] = useState();
  const [serial, setSerial] = useState();
  const [pageNo, setPageNo] = useState();
  const [quantity, setQuantity] = useState();
  const [unitPrice, setUnitPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [remark, setRemark] = useState();

  const form = new FormData();
  form.append("Id", Id);
  form.append("itemType", itemType);
  form.append("model", model);
  form.append("serial", pageNo);
  form.append("quantity", quantity);
  form.append("unitPrice", unitPrice);
  form.append("totalPrice", totalPrice);
  
  let model_22 = {
    itemType,
    model,
    serial,
    pageNo,
    quantity,
    unitPrice,
    totalPrice,
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}model_22/create`, form, {
        headers: {
          accept: "multipart/form-data",
          authorization: "Bearer " + BearerToken
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
  const logoutUser = () => {
  localStorage.clear();
  window.location.replace("/login")}


  return (
  <div>
    <form
      onSubmit={HandleSubmit}
    >
    <div className='flex items-center justify-between bg-[#D99C00]'>
      <div className='block m-[20px] p-[5px] text-[20px] font-semibold text-gray-900 dark:text-white bg-[#'>
        <p className=' p-[10px] rounded-[15px]'>Model-22</p>
      </div>
      <div className='p-[10px]'>
      <Menu>
        <Menu.Button>
          <FaUserCircle className="m-[10px] fill-[#fcfcfc] w-[40px] h-[40px]" />
        </Menu.Button>
      <Menu.Items 
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-[#1b9c85] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <div className="grid m-[5px] gap-[5px] items-center justify-center">
                <div>
                  <div className="grid justify-center items-center pt-[5px] text-nunito text-[#602234] font-semibold text-[15px]">
                    {/* {user.firstName + " " + user.lastName} */}
                  </div>
                  <div className="text-nunito text-[#602234] font-light text-[16px]">
                    {/* {user.department} */}
                  </div>
                </div>
               {/* ))}    */}
                <div className="flex items-center justify-center">
                <button
                  onClick={logoutUser}
                  className="border-[1px] border-[#d99000] w-[70px] rounded-[2px] bg-[#AD8317] text-white flex items-center justify-center" /*  */
                >Logout</button>
                </div>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
          </Menu>
      </div>
      </div>
      <div>
        <div className='grid items-center justify-center'>
          <p className='m-[5px] p-[5px] text-[18px] font-bold'>Ambo University Hachalu Hundessa Campus </p>
          <p className='m-[5px] p-[5px] text-[18px] font-semibold flex items-center justify-center'> Reciept for articles of profit isssued  </p>
        </div>
        <button
        type ='submit'
        className='hover:bg-[#AD8317] ml-[1200px] m-[10px] p-[5px] w-[60px] font-bold text-[13px] rounded-[5px] flex items-center justify-center border-[1px] border-[#d99000]'>
            Print 
        </button>
          <div className='flex items-center justify-center'>
          <p className='my-[5px] px-[25px] text-[13px] font-regular '> In accordance with the </p> 
                <input 
                    type="text" 
                    name="orderNo" 
                    id="orderNo" 
                    className="block w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#D99C00] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" Order No" 
                    onChange={(e)=>setFirstName(e.target.value)}
                    required />
            <p className='my-[5px] px-[25px] text-[13px] font-regular '> Dated of  </p> 
                <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    className="block w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#D99C00] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setFirstName(e.target.value)}
                    required />
          <p className='m-[5px] px-[5px] text-[13px] font-regular'> 
          here by certify that I have counted correctly and recieved the articles enumerated below for the use of </p>
          <input 
                    type="text" 
                    name="service" 
                    id="service" 
                    className="block w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#D99C00] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setFirstName(e.target.value)}
                    required />                
        </div>
               
      <div className='m-[10px] p-[10px]'>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                        <th scope="col" class="px-6 py-3 w-[100px]">
                            No.
                        </th>
                        <th scope="col" class="px-6 py-3 w-[250px]">
                            Detailed description of articles or property                        
                        </th>
                        <th scope="col" class="px-6 py-3 w-[150px]">
                            Model                        
                        </th>
                        <th scope="col" class="px-6 py-3 w-[120px]">
                            Serial                        
                        </th>
                        <th scope="col" class="px-6 py-3 w-[80px] ">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3 w-[120px] ">
                            Unit Price
                        </th>
                        <th scope="col" class="px-6 py-3 w-[120px] ">
                            Total Price
                        </th>
                        <th scope="col" class="px-6 py-3 w-[120px]">
                            Remark
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="number" 
                                id="no" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="No" 
                                onChange={(e)=>setId(e.target.value)}
                                required
                            />
                        </td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <textarea 
                                type="text" 
                                id="itemType" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Item type in detail" 
                                onChange={(e)=>setItemType(e.target.value)}
                                required
                            />
                            
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="model" 
                                id="model" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="model" 
                                onChange={(e)=>setModel(e.target.value)}
                                required
                            />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="text" 
                                id="serial" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="serial" 
                                onChange={(e)=>setSerial(e.target.value)}
                                required
                            />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="number" 
                                id="qty" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Qty" 
                                onChange={(e)=>setQuantity(e.target.value)}
                                required
                            />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="text" 
                                id="unitPrice" 
                                class="bg-gray-50 border text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder=" Unit Price" 
                                onChange={(e)=>setUnitPrice(e.target.value)}
                                required
                            />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="text" 
                                id="totalPrice" 
                                class="bg-gray-50 border text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder=" Total Price" 
                                onChange={(e)=>setTotalPrice(e.target.value)}
                                required
                            />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="text" 
                                id="remark" 
                                class="bg-gray-50 border text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder=" Remark" 
                                onChange={(e)=>setRemark(e.target.value)}
                                required
                            />
                        </th>
                    </tr>
                   
                </tbody>
            </table>
        </div>
        
              </div>
              <div className= 'm-[20px]'>
            <button 
                type="submit" 
                class="mt-[10px] p-[5px] text-white bg-[#000000] hover:bg-[#AD8317] focus:ring-4 focus:outline-none focus:ring-[#d99000] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-bg-[#d99000] dark:hover:bg-[#d99000] dark:focus:ring-[#d99000]">
                    Add Item
            </button>
        </div>
      </div>
      </form>
    </div>
  )
}
