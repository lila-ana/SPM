import { Menu } from '@headlessui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { API_BASE_URL } from '../../api/endPoint';

export default function CategoryCreate() {
  
  const BearerToken = localStorage.getItem("accessToken");
  
  const [categoryName, setCategoryName] = useState()

    let group = [
        categoryName,
    ]

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}category/create`, group, {
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
            className=''
        >
           <div className='flex items-center justify-between bg-[#D99C00]'>
        <div className='block m-[20px] p-[5px] text-[20px] font-semibold text-gray-900 dark:text-white bg-[#'>
          <p className=' p-[10px] rounded-[15px]'>Asset Registration</p>
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
											{/* {users.fullName} */}
										</div>
										<div className="text-nunito text-[#602234] font-light text-[16px]">
											{/* {users.department} */}
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
            <div className=' m-[20px] p-[20px] border-[2px]  rounded-[25px] items-center justify-center bg-rgba(173, 131, 23, 0.5) '>
                <div>
                <input 
                    type="text" 
                    id="categoryName" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Category" 
                    onChange={(e)=>setCategoryName(e.target.value)}
                    required
                />
            </div>
<div className='p-[10px] m-[15px]'> 
    <button
        type = "submit"
        class="text-[#000000] bg-[#AD8317] w-[100px] hover:bg-[#fcfcfc] border-[#AD8317] border-[1px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         Add Category   
    </button>
</div>
</div>
</form>
    </div>
  )
}

