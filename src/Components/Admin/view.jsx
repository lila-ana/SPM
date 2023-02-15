import React, { useEffect, useState } from "react";
import Tab from "../Common/tab";
import Client from "./Client";
import Representative from "./representative";
import Solutions from "./solutions";
import Projects from "./projects";
import Vendor from "./vendor";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { Menu } from "@headlessui/react";
import Certificate from "./certificate";
import PartnersImage from "./PartnersImage";
import Department from "./Department";
import Sector from "./Sector";
import axios from "axios";
import { API_BASE_URL } from "../../api/endPoint";

export default function View() {
	const OpportunityTabData = [
		{
			label: "Clients",
			available: 0,
			content: <Client/>,
		},
		{
			label: "Solutions",
			available: 1,
			content: <Solutions/>,
		},
		{
			label: "Representatives",
			available: 3,
			content: <Representative/>,
		},
		{
			label: "Projects",
			available: 4,
			content: <Projects/>,
		},
		{
			label: "Vendors",
			available: 4,
			content: <Vendor/>,
		},
		{
			label: "Certificates",
			available: 5,
			content: <Certificate/>
		  },
		  {
			label: "Partner",
			available: 6,
			content: <PartnersImage/>
		  },
		  {
			label: "Department ",
			available: 6,
			content: <Department/>
		  },
		  
		  {
			label: "Sector",
			available: 6,
			content: <Sector/>
		  },

	];
	const [data,setData]=useState();
    const [datas,setDatas]=useState();

	const BearerToken = localStorage.getItem("accessToken");

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const handleTabChange = (idx) => {
		          setActiveTabIndex(idx);
	};

	const logoutUser = () => {
		
		localStorage.clear();
		window.location.replace("/login");
	
  };
  const getUser = ()=> {
    axios
    .get(`${API_BASE_URL}user/authUser`,{
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
			 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNmdUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgc2VydmljIiwiZmlyc3ROYW1lIjoiVGVzZmFodW4iLCJnZW5kZXIiOiJNYWxlIiwiaXNfZGVsZXRlZCI6ZmFsc2UsImxhc3ROYW1lIjoiQmlyZWdhIiwidGVsIjoiMDkxMjM0MjM0NSIsImlhdCI6MTY3NTkzMjUwMiwiZXhwIjoxNjc2MDE4OTAyfQ.-z21UG3Pufm8A7Xy0L5GmaxaD_YLJZ-77ilgn80X3aY",
		  },
	})
    .then((res) => setDatas(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUser()
  },[datas]);

console.log(datas, "datas")

	return (
		
		<div className="px-[50px] py-3">
			
			<div className="m-[20px] flex justify-between border-b-[2px] border-[#1b9c85] mb-[20px]" >
			{/* // className="flex justify-between "> */}
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
				<AiOutlineSetting className="m-[10px] fill-[#1b9c85] w-[25px] h-[25px]" />
				<MdOutlineNotificationsNone 
				
				className="m-[10px] fill-[#1b9c85] w-[25px] h-[25px]" />
				<Menu as="div" className="relative inline-block text-left">
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
					<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-[#1b9c85] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							<Menu.Item>
								<div className="grid m-[5px] gap-[5px] items-center justify-center">
								{/* {registration?.map((items)=> (  */}
									<div>
										<div className="grid justify-center items-center pt-[5px] text-nunito text-[#602234] font-semibold text-[15px]">
											{/* {items.name} */}
											Hawi Tesfaye
										</div>
										<div className="text-nunito text-[#602234] font-light text-[16px]">
											{/* {items.department} */}
											Software Team Lead
										</div>
									</div>
								{/* ))} */}
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


			<div >{OpportunityTabData[activeTabIndex]?.content} </div>
			
		</div>
	);
}
