import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Settingcard from "./settingcard";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Heading() {
	
	
	
	
	const [user, setUser] = useState(false);
	const handleUser = () => {
		setUser(true);
	};

	const [setting, setSetting] = useState(false);
	const handleSetting = () => {
		setSetting(true);
	};

	return (
		<div className="m-[20px] flex justify-between border-b-[2px] border-[#1b9c85] mb-[20px] ">
			<div className="font-medium text-[18px] text-[#1b9c85] font-nunito pl-[10px] pt-[15px]">
				Admin Name/ Team Lead Name
			</div>
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
									<div className="grid justify-center items-center pt-[5px] text-nunito text-[#602234] font-semibold text-[15px]">
										Hawi Tesfaye
									</div>
									<div className="text-nunito text-[#602234] font-light text-[16px]">
										Software Team Lead
									</div>
									           <button
										className="border-[1px] border-[#1b9c85] w-[40px]" /*  */
									>
										Logout
									</button>
								</div>
							</Menu.Item>
						</div>
					</Menu.Items>
					{/* </Transition> */}
				</Menu>
			</div>
			{/* {setting?<Settingcard/>:""} */}
		</div>
	);
}
