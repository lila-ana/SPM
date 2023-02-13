import { React } from "react";

const ButtonTab = (props) => {
  return (
    <div className="mt-[80px] ml-[80px]">
      <div className="grid gap-4 text-sm">
        {props.data.map((tab, idx) => {
          return (
             <button 
             className={`bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px] ${
                    idx === props.activeTab
                      ? "bg-[#fff] w-[150px] border-[1px] border-[#1b9c85] text-[#1b9c85] font-light p-[10px] flex items-center justify-center rounded-[10px]"
                      : "bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]"
                  }`}
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

export default ButtonTab;