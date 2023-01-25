import React, { useState } from "react";
import clients from "../../utils/Clients.json";
import certificate1 from "../../Image/Certificate.jpg";
import certificate2 from "../../Image/Certificate2.webp";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import axios from 'axios';

export default function Partners() {
  const slideLeft = () => {
    let slider = document.getElementById("sliderclient");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("sliderclient");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // const [data,setData]=useState();
  //   axios.get(`http://172.16.34.117:8000/api/v1/client/all-clients`, {
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  // }).then(response => {
  //     setData(response.data);
  // }).catch((error) => {
  //     console.log(error.response);
  // });
  // // console.log(clients,"response data")

  return (
    <div className="px-[100px]">
      <div className="mt-[40px]">
        <h1 className="mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85]">
          {" "}
          Partners{" "}
        </h1>
      </div>
      <div className="relative flex justify-center items-center gap-5">
        <div className="hover:bg-[#1b9c85] hover:text-white rounded-full ">
          <div className="text-2xl" onMouseHover={slideLeft} />
        </div>
        <div className="bg-[#1b9c85] w-[350px] h-[350px] rounded-full shadow-xl shadow-[#bfbfbf] ">
          <div
            id="sliderclient"
            className="h-[300px] overflow-x-scroll scroll scrollbar-hide  scroll-smooth"
          >
            <div className="grid grid-flow-col gap-[20px] items-center">
              {clients?.map((items) => (
                <div
                  key={items.id}
                  className="w-[200px] hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] "
                >
                  <p className="pb-[10px]">
                    <img
                      src={items.id < 4 ? certificate1 : certificate2}
                      // src={require()}
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hover:bg-[#1b9c85] hover:text-white rounded-full ">
          <div className="text-2xl" onMouseEnter={slideRight} />
        </div>
      </div>
    </div>
  );
}
