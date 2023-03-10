import React from "react";
import noDataSvg from "../../Image/noData.svg"

export default function NoRecord() {
  return (
    <div className="h-[400px] grid items-center justify-center">
      <div className="grid  items-center justify-center h-[200px] w-[200px]">
        <img src={noDataSvg} alt="" />
        <div className="text-center ">No record has been found</div>
      </div>
    </div>
  )
}