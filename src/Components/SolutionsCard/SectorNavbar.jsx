import React, { useState } from "react";
import Tab from "../Common/tab";
import BFSI from "./Sectors/BFSI";
import Educational from "./Sectors/Educational";
import Governmental from "./Sectors/Governmetal";
import MultiNational from "./Sectors/MultiNational";

export default function SectorNavbar() {
	const OpportunityTabData = [
		{
			label: "BFSI",
			available: 0,
			content: <BFSI/>,
		},
        {
			label: "Educational",
			available: 1,
			content: <Educational/>,
		},
		
        {
			label: "Governmental",
			available: 2,
			content: <Governmental/>,
		},
		
		{
			label: "Multi-National",
			available: 3,
			content: <MultiNational/>,
		},
		
	];
	
	// const BearerToken = localStorage.getItem("accessToken");

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	
    const handleTabChange = (idx) => {
		setActiveTabIndex(idx);
	};

	return (
		<div className="px-[50px] py-3">
            <div className="flex items-center justify-left">
                <div className="m-[20px] flex justify-center items-right border-[#10a37f] mb-[30px]" >
                    <Tab
                    activeTab={activeTabIndex}
                    data={OpportunityTabData}
                    handlechange={handleTabChange}
                    />
                </div>
            </div>

			<div >{OpportunityTabData[activeTabIndex]?.content} </div>
			
		</div>
	);
}
