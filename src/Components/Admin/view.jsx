import React, { useState } from "react";
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
import Partners from "../Home/Partners";
import PartnersImage from "./PartnersImage";
import registration from "../../pages/registration";

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
	];
	
	const BearerToken = localStorage.getItem("accessToken");

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const handleTabChange = (idx) => {
		          setActiveTabIndex(idx);
	};

	const logoutUser = () => {
		
		localStorage.clear();
		window.location.replace("/login");
	
  };
  function getrepresentative(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}registration`)
			// authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Ik5hb2xsbCIsImVtYWlsIjoiTmFvbGxsQGdtYWlsLmNvbSIsImdlbmRlciI6Im1hbGUiLCJkZXBhcnRtZW50IjoiU29mdHdhcmUgYXMgYSBTZXJ2aWMiLCJqb2IiOiJFUlAiLCJwYXNzd29yZCI6IjEyMzhnZ2ZqOCIsImlzQWRtaW4iOm51bGwsImNyZWF0ZWRfYXQiOm51bGwsInVwZGF0ZWRfYXQiOm51bGwsImlzX2RlbGV0ZWQiOnRydWUsImNyZWF0ZWRfYnkiOjIsInVwZGF0ZWRfYnkiOm51bGwsImlhdCI6MTY3MzUyNDcxOSwiZXhwIjoxNjczNjExMTE5fQ.n8D5nEppe3v49Btx4UZog6csO2gVeJpOKHVKJ5iZLws",
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      },[])
      return data;
}


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

				<div>
					<div className="font-medium text-[18px] text-[#1b9c85] font-nunito pl-[10px] pt-[15px]">
						Admin Name/ Team Lead Name
					</div>
				</div>
				<Tab
				activeTab={activeTabIndex}
				data={OpportunityTabData}
				handlechange={handleTabChange}
				/>

				<div className="border-l-[2px] border-[#1b9c85] flex items-center justify-between w-[150px]">
				<AiOutlineSetting className="m-[10px] fill-[#1b9c85] w-[25px] h-[25px]" />
				<MdOutlineNotificationsNone className="m-[10px] fill-[#1b9c85] w-[25px] h-[25px]" />
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
