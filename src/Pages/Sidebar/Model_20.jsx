import { Menu } from '@headlessui/react';
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { API_BASE_URL } from '../../api/endPoint';
import axios from 'axios';

export default function Model_19() {
    
    const BearerToken = localStorage.getItem("accessToken");

    const [users, setUsers] = useState();
    const [id, setId] = useState();
    const [quantity, setQuantity] = useState();
    const [type, setType] = useState();
    const [model, setModel] = useState();
    const [fullName, setFullName] = useState();
    const [department, setDepartment] = useState();

    let asset = {
        users,
        id,
        quantity,
        type,
        model,
        fullName,
        department,
      };
      const HandleSubmit = (e) => {
        e.preventDefault();
        axios
          .post(`${API_BASE_URL}model_19/create`, asset, {
            headers: {
              // accept: "multipart/form-data",
              accept: "application/json",
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
          <p className=' p-[10px] rounded-[15px]'>Model-20</p>
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
        <div className=' mt-[20px] grid items-center justify-center'>
          <p className='my-[5px] p-[5px] text-[15px] font-extrabold'>Ambo University Hachalu Hundessa Campus </p>
          <p className=' mb-[25px] p-[5px] text-[15px] font-bold flex items-center justify-center'> Reciept for Invoice </p>
        </div>
        <button
        type ='submit'
        className='hover:bg-[#AD8317] ml-[1000px] m-[10px] p-[5px] w-[60px] font-bold text-[13px] rounded-[5px] flex items-center justify-center border-[1px] border-[#d99000]'>
            Print 
        </button>
        <div className='flex items-center justify-center'>
          <p className='my-[5px] px-[25px] text-[15px] font-semibold '> I </p> 
          {/* <div className="relative z-0 mb-6 group "> */}
                <input 
                    type="text" 
                    name="fullName" 
                    id="fullName" 
                    className="block w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#D99C00] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" Enter your full name" 
                    onChange={(e)=>setFullName(e.target.value)}
                    required />
                {/* <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label> */}
            {/* </div> */}
          <p className='m-[5px] px-[5px] text-[13px] font-regular'> 
          here by certify that I have counted correctly and recieved the articles enumerated below for the use of </p>                
        
        {/* <div className='mb-[20px] px-[35px]'> */}
            <input 
                    type="text" 
                    name="department" 
                    id="department" 
                    className="block py-2.5 px-0 w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#D99C00] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" Enter department or Service" 
                    onChange={(e)=>setDepartment(e.target.value)}
                    required />
                {/* <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service</label> */}
            </div>
        
      <div className='m-[10px] p-[10px]'>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 w-[100px]">
                            No.
                        </th>
                        <th scope="col" class="px-6 py-3 w-[100px] ">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3 w-[450px]">
                            Item Type in detail
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Model
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Remark
                        </th>
                        <th scope="col" class="px-6 py-3 w-[120px] font-bold">
                            Add
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="number" 
                                id="id" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="No." 
                                onChange={(e)=>setId(e.target.value)}
                                required
                            />
                        </td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="number" 
                                id="qty" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Qty" 
                                onChange={(e)=>setQuantity(e.target.value)}
                                required
                            />
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <textarea 
                                type="text" 
                                id="type" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Item type in detail" 
                                onChange={(e)=>setType(e.target.value)}
                                required
                            />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="text" 
                                id="model" 
                                class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Model" 
                                onChange={(e)=>setModel(e.target.value)}
                                required
                            />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input 
                                type="text" 
                                id="remark" 
                                class="bg-gray-50 border text-[#d99000] text-[10px] front-regular  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="" 
                                onChange={(e)=>setRemark(e.target.value)}
                                // required
                            />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <button 
                            type="submit" 
                            class="mt-[10px] p-[5px] text-white bg-[#000000] hover:bg-[#AD8317] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Add
                        </button>
                        </th>
                    </tr>
                   
                </tbody>
            </table>
        </div>
        </div>   
        {/* <div className= 'm-[20px]'>
            <button 
                type="submit" 
                class="mt-[10px] p-[5px] text-white bg-[#000000] hover:bg-[#AD8317] focus:ring-4 focus:outline-none focus:ring-[#d99000] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-bg-[#d99000] dark:hover:bg-[#d99000] dark:focus:ring-[#d99000]">
                    Add Item
            </button>
        </div> */}
        <div className='grid grid-cols-8 gap-[12px]'>
          <div className='col-span-2 flex justify-center items-center'>

          </div>
        </div>
      </div>
      </form>
    </div>
  )
}
