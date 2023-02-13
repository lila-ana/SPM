import { React } from "react";

const Tab = (props) => {
  return (
    <div className="mt-6 ">
      <div className="flex space-x-10 text-md text-[#1b9c85]">
        {/* Loop through tab data and render button for each. */}
        {props.data.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`border-b-4 px-2 text-sm transition-colors duration-300 ${
                idx === props.activeTab
                  ? "border-[#e0e0e0] text-[#1b9c85] font-bold "
                  : "border-none text-[#1b9c85]"
              }`}
              // Change the active tab on click.
              onClick={() => props.handlechange(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      {/* <div className="py-4">{profileTabData[activeTabIndex].content}</div> */}
    </div>
  );
};

export default Tab;