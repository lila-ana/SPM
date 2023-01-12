import React, { useState } from 'react'
import ButtonTab from '../Common/Button/ButtonTab';
import ClientFill from './ClientFill';
import ProjectDropDown from './ProjectDropDown';
import RepresentativeFill from './RepresentativeFill';
import VendorFill from './VendorFill';
import SolutionsFill from './SolutionsFill';
import ProjectFill from './projectFill';

export default function SidePanal() {

    const OpportunityTabData = [
        {
          label: "Client",
          available: 0,
          content: <ClientFill/>,
        },
        {
          label: "Solutions",
          available: 1,
          content: <SolutionsFill/>,
        },
        {
          label: "Reperesentative",
          available: 2,
          content: <RepresentativeFill/>,
        },
        {
          label: "Projects",
          available: 3,
          content: <ProjectDropDown/>,
        },
        {
          label: "Project Fill",
          available: 3,
          content: <ProjectFill/>,
        },
        {
          label: "Vendors",
          available: 4,
          content: <VendorFill/>
        },
      ];

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const handleTabChange = (idx) => {
    setActiveTabIndex(idx);

  };
  return (
    <div className='grid grid-cols-12 gap-4 mx-[80px]'>
        <div className='col-span-2'> 
            <ButtonTab
                activeTab={activeTabIndex}
                data={OpportunityTabData}
                handlechange={handleTabChange}
            />
        </div>
        <div className='col-span-10'>{OpportunityTabData[activeTabIndex]?.content} </div>
    </div>
  )
}
