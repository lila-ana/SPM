import React, { useEffect, useState } from "react";
import Tab from "../../Common/tab";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { Menu } from "@headlessui/react";
import axios from "axios";
// import { API_BASE_URL } from "../../api/endPoint";
import { MenuItem } from "@mui/material";
import AssetRegistration from "../../Pages/Sidebar/AssetRegistration";
import Inventory from "../../Pages/Sidebar/Inventory";
import Model_19 from "../../Pages/Sidebar/Model_19";
import Model_20 from "../../Pages/Sidebar/Model_20";
import Model_22 from "../../Pages/Sidebar/Model_22";
import Report from "../../Pages/Sidebar/Report";
import Setting from "../../Pages/Sidebar/Setting";

export default function HorizontalBar() {
	const OpportunityTabData = [
		{
			label: "AssetRegistration",
			available: 0,
			content: <AssetRegistration/>,
		},
		{
			label: "Inventory",
			available: 1,
			content: <Inventory/>,
		},
		{
			label: "Model-19",
			available: 3,
			content: <Model_19/>,
		},
		{
			label: "Model-20",
			available: 4,
			content: <Model_20/>,
		},
		{
			label: "Model-22",
			available: 4,
			content: <Model_22/>,
		},
		{
			label: "Report",
			available: 5,
			content: <Report/>
		  },
		  {
			label: "Setting",
			available: 6,
			content: <Setting/>
		  },

	];
	
    const [users, setUsers] = useState();

	const BearerToken = localStorage.getItem("accessToken");

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const handleTabChange = (idx) => {
		          setActiveTabIndex(idx);
	};

// 	const logoutUser = () => {
// 		localStorage.clear();
// 		window.location.replace("/login")
//   };
//   const getUser = ()=> {
//     axios
//     .get(`${API_BASE_URL}user/authUser`,{
// 		headers: {
// 			// "Content-Type": "application/json",
// 			accept: "application/json",
// 			authorization: "Bearer " + BearerToken
// 		  },
// 	})
//     .then((res) => setUsers(res.data?.data))
//     .catch((err) => console.log(err));
//   }
//   useEffect(() => {
//     getUser()
//   },[]);

// const userNames = users.map((user) => user.name);
let user = users==undefined?{}:users
console.log(user, "Display users")

	return (	
		<div className="px-[50px] py-3">
			
			<div className="m-[20px] flex justify-between border-b-[2px] border-[#1b9c85] mb-[20px]" >
				<div className="">
					<img
						className="w-[70px] h-[70px]"
						alt="IE Logo"
						src="https://ienetworks.co/pms/images/logos.png"
					/>
				</div>

				{/* <div>
					<div className="font-medium text-[18px] text-[#1b9c85] font-nunito pl-[10px] pt-[15px]">
						Admin Name/ Team Lead Name
					</div>
				</div> */}
				<Tab
				activeTab={activeTabIndex}
				data={OpportunityTabData}
				handlechange={handleTabChange}
				/>

				<div className="border-l-[2px] border-[#1b9c85] flex items-center justify-between w-[150px]">
				<div>
				<Menu as="div" className="relative inline-block text-left">
						<Menu.Button>
							<AiOutlineSetting className="m-[10px] fill-[#1b9c85] w-[25px] h-[25px]" />
						</Menu.Button>
						<Menu.Items className=" grid absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-[#1b9c85] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<MenuItem>
							<div className="font-semibold text-[16px] text-[#602234]">
								Create User 
							</div>
							<a
									href="/registration"
									className="font-medium text-[#10a37f] hover:underline"
								>
									Sign up
								</a>
							</MenuItem>
						</Menu.Items>
				</Menu>
				</div>
				<MdOutlineNotificationsNone 
				
				className="m-[10px] fill-[#1b9c85] w-[25px] h-[25px]" />
				{/* <Menu as="div" className="relative inline-block text-left"> */}
					<div>
					<Menu>
					<Menu.Button>
						<FaUserCircle className="m-[10px] fill-[#1b9c85] w-[25px] h-[25px]" />
					</Menu.Button>
					{/* <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              > */}
					<Menu.Items 
					className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-[#1b9c85] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							<Menu.Item>
								<div className="grid m-[5px] gap-[5px] items-center justify-center">
									<div>
										<div className="grid justify-center items-center pt-[5px] text-nunito text-[#602234] font-semibold text-[15px]">
											{user.firstName + " " + user.lastName}
										</div>
										<div className="text-nunito text-[#602234] font-light text-[16px]">
											{user.department}
										</div>
									</div>
								 {/* ))}    */}
									<div className="flex items-center justify-center">
									<button
										onClick={logoutUser}
										className="border-[1px] border-[#1b9c85] w-[70px] rounded-[2px] bg-[#1b9c85] text-white flex items-center justify-center" /*  */
									>Logout</button>
									</div>
								</div>
							</Menu.Item>
						</div>
					</Menu.Items>
					{/* </Transition> */}
				</Menu>
				</div>
			</div>
			</div>


			<div >{OpportunityTabData[activeTabIndex]?.content} </div>
			
		</div>
	);
}
