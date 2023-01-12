import React, { useState } from "react";
import Tab from "../Common/tab";
import Client from "./Client";
import Representative from "./representative";
import Solutions from "./solutions";
import Projects from "./projects";
import Vendor from "./vendor";

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
	];
	
	
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const handleTabChange = (idx) => {
		          setActiveTabIndex(idx);
	};

	return (
		<div className="px-[50px] py-3">
			<div className="flex justify-between ">
				<div className="">
					<img
						className="w-[70px] h-[70px]"
						alt="IE Logo"
						src="https://ienetworks.co/pms/images/logos.png"
					/>
				</div>
				<Tab
				activeTab={activeTabIndex}
				data={OpportunityTabData}
				handlechange={handleTabChange}
				/>
			</div>
			<div >{OpportunityTabData[activeTabIndex]?.content} </div>
			
		</div>
	);
}
