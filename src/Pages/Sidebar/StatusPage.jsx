import React, { useEffect, useState } from 'react'
import Header from '../../header/header';
import { Menu } from '@headlessui/react';
import { FaUserCircle } from 'react-icons/fa';
import { API_BASE_URL } from '../../api/endPoint';
import axios from 'axios';

export default function StatusPage() {
 
const [status, setStatus] = useState('');
const [isApproved, setIsApproved] = useState(false);
const [showDeclineInput, setShowDeclineInput] = useState(false);
const [requestedItem, SetRequestedItem] = useState ();


const handleRequstedItem = ()=> {
    axios
    .get(`${API_BASE_URL}model_20`)
    .then((res) => setData(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    handleRequstedItem()
  },[]);

  const handleApprove = () => {
    setIsApproved(true);
    setShowDeclineInput(false); 
  };

  const handleDecline = () => {
    setIsApproved(false);
    setShowDeclineInput(true); 
  };

//   const handleApproved = () => {
//     setStatus('Approved');
//   };

//   const handleDeclined = () => {
//     setStatus('Declined');
//   };

//   const handlePending = () => {
//     setStatus('Pending');
//   };
  const logoutUser = () => {
    localStorage.clear();
    window.location.replace("/login")}

  return (
    <div>
         <div className='flex items-center justify-between bg-[#D99C00]'>
        <div className='block m-[20px] p-[5px] text-[20px] font-semibold text-gray-900 dark:text-white bg-[#'>
          <p className=' p-[10px] rounded-[15px]'>Status Page</p>
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
    <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span class="font-medium">Status: {isApproved ? 'Approved!' : 'Declined!'}</span>         
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    No.
                </th>
                <th scope="col" class="px-6 py-3">
                    Requested Item
                </th>
                <th scope="col" class="px-6 py-3">
                    Accept
                </th>
                <th scope="col" class="px-6 py-3">
                    Decline
                </th>
                <th scope="col" class="px-6 py-3">
                    If declined enter reason 
                </th>
                
            </tr>
        </thead>
        <tbody>
          {requestedItem?.map((item) => (
            <tr  
            key={item.id} 
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">          
                    {item.id} 
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.ProductName}
                </th>
                <td class="px-6 py-4">
                    <button 
                        class="  flex items-end justify-end text-[#000000] bg-[#AD8317] w-[100px] hover:bg-[#fcfcfc] border-[#AD8317] border-[1px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleApprove}>
                        Approve
                    </button>
                </td>
                <td class="px-6 py-4">
                    <button 
                    class=" flex items-end justify-end text-[#000000] bg-[#AD8317] w-[100px] hover:bg-[#fcfcfc] border-[#AD8317] border-[1px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleDecline}>
                        Decline
                    </button>
                </td>
                <td class="px-6 py-4">
                {showDeclineInput && (
                    <textarea 
                        type="text" 
                        id="declineReason"
                        class="bg-gray-50 border border-gray-300 text-[#d99000] text-[10px] front-regular rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Enter reason" 
                        value={declineReason}
                        onChange={handleDeclineReasonChange}
                        required
                    />        
                    )}       
                </td>
                <td class="px-6 py-4">
                
                </td>
            </tr>
            ))} 
        </tbody> 

        </table>

      {/* <p>Status: {isApproved ? 'Approved' : 'Declined'}</p>
      <button onClick={handleApprove}>Approve</button>
      <button onClick={handleDecline}>Decline</button>
      <p>Status: {status}</p>
      <button onClick={handleApprove}>Approve</button>
      <button onClick={handleDecline}>Decline</button>
      <button onClick={handlePending}>Pending</button> */}
    </div>
 
</div>
    </div>
  )
}
