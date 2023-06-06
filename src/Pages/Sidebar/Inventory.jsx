import { Menu } from '@headlessui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { API_BASE_URL } from '../../api/endPoint';

export default function Inventory() {
  
    const BearerToken = localStorage.getItem("accessToken");

    const [asset, setAsset] = useState();
    const getUser = ()=> {
        axios
        .get(`${API_BASE_URL}storage`)
        .then((res) => setAsset(res.data?.data))
        .catch((err) => console.log(err));
      }
      useEffect(() => {
        getUser()
      },[]);

    const logoutUser = () => {
		localStorage.clear();
		window.location.replace("/login")}
  
  
    return (
    <div>
      <div className='flex items-center justify-between bg-[#D99C00]'>
        <div className='block m-[20px] p-[5px] text-[20px] font-semibold text-gray-900 dark:text-white bg-[#'>
          <p className=' p-[10px] rounded-[15px]'>Inventory</p>
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
      <div className='m-[10px] p-[10px]'>
        
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    No.
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Per Price
                </th>
                <th scope="col" class="px-6 py-3">
                    New Value
                </th>
            </tr>
        </thead>
        <tbody>
          {asset?.map((item) => (
            <tr  key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id} 
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.ProductName}
                </th>
                <td class="px-6 py-4">
                    {item.productUniqueNumber}
                </td>
                <td class="px-6 py-4">
                    {item.Category}
                </td>
                <td class="px-6 py-4">
                    {item.itemPerPrice}
                </td>
                <td class="px-6 py-4">
                <input 
                      type="text" 
                      id="newValue" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="New Value" 
                      onChange={(e)=>setValue(e.target.value)}
                      required
                    />
                </td>
            </tr>
            ))}

        </tbody>
        
    </table>
</div>

      </div>
    </div>
  )
}
