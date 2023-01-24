import React from "react";
import noDataSvg from "../../Image/noData.svg"

export default function NoRecord() {
  return (
    <div className="grid justify-center ">
      <img src={noDataSvg} alt="" />
      <div className="text-center">No record has been found</div>
    </div>
  )
}