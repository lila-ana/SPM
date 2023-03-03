import React, { useEffect, useState } from "react";
import detail from "../../utils/Detail.json";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import get from "../../features/get";
import { NavLink } from "react-router-dom";
import { API_BASE_URL } from "../../api/endPoint";

export default function Projects() {
  const slideLeft = () => {
    let slider = document.getElementById("sliderproject");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("sliderproject");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [datas, setDatas] = useState([]);

  const getUser = ()=> {
    axios
    .get(`${API_BASE_URL}project`)
    .then((res) => setDatas(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUser()
  },[]);


  return (
    <div className="">
      <div>
        <h1 className="mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85] ">
          {" "}
          Projects{" "}
        </h1>
      </div>
      {datas?.length !== 0 ? (

      <div className="relative flex items-center gap-5">
        <div className="hover:bg-[#1b9c85] hover:text-white rounded-full ">
          <AiOutlineLeft className="text-2xl" onMouseEnter={slideLeft} />
        </div>
        <div
          id="sliderproject"
          className="w-full h-full overflow-x-scroll scroll scrollbar-hide  scroll-smooth"
        >
          <div className="grid grid-flow-col gap-[20px] items-center">
            {/* {datas?.map((items) => ( */}
              <div className="stroke-[#1b9c85] w-[300px] h-[290px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
                <p className="pb-[10px]">
                  ERA/MoTL
                </p>
                <p className="font-normal text-[16px]">
                  Ethiopian Road Authority/ Ministry of Transport & Logistics. <br></br>
                  Implementation of the Exchange Mailing Service for Ministry of Transport 
 
                </p>
                <NavLink 
                  // to={`/projectDescription/${items.id}`}
                  className="p-[8px] m-[15px] text-[15px] font-light border-[#1b9c85] font-nunito border-[1px] rounded-3xl flex justify-center bg-[#1b9c85] text-[#FCFCFC]"
                >
                  <div>View More</div>
                </NavLink>
                </div>
                <div className="stroke-[#41a190] w-[300px] h-[290px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
                  <p className="pb-[10px]">
                    Bahirdar University 
                  </p>
                  <p className="font-normal text-[16px]">
                    In publishing and graphic design, Lorem ipsum is a 
                    placeholder text commonly used to demonstrate the 
                    visual form of a document or a typeface without 
                    relying on meaningful content. 
                  </p>
                  <NavLink 
                  // to={`/projectDescription/${items.id}`}
                  className="p-[8px] m-[15px] text-[15px] font-light border-[#1b9c85] font-nunito border-[1px] rounded-3xl flex justify-center bg-[#1b9c85] text-[#FCFCFC]"
                >
                  <div>View More</div>
                </NavLink>
                </div>
                <div className="stroke-[#1b9c85] w-[300px] h-[290px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
                  <p className="pb-[10px]">
                  Ethiopian Shipping & Logistics Service Enterprise (ESLSE )
                  </p>
                  <p className="font-normal text-[16px]">
                  Design and configuration of HCI implemented solutions at the Ethiopian Shipping and Logistics Service Enterprise IT Datacenter.
                  </p>
                  <NavLink 
                  // to={`/projectDescription/${items.id}`}
                  className="p-[8px] m-[15px] text-[15px] font-light border-[#1b9c85] font-nunito border-[1px] rounded-3xl flex justify-center bg-[#1b9c85] text-[#FCFCFC]"
                >
                  <div>View More</div>
                </NavLink>
                </div>
                <div className="stroke-[#1b9c85] w-[300px] h-[290px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
                  <p className="pb-[10px]">
                    ERA
                  </p>
                  <p className="font-normal text-[16px]">
                    In publishing and graphic design, Lorem ipsum is a 
                    placeholder text commonly used to demonstrate the 
                    visual form of a document or a typeface without 
                    relying on meaningful content. 
                  </p>
                  <NavLink 
                  // to={`/projectDescription/${items.id}`}
                  className="p-[8px] m-[15px] text-[15px] font-light border-[#1b9c85] font-nunito border-[1px] rounded-3xl flex justify-center bg-[#1b9c85] text-[#FCFCFC]"
                >
                  <div>View More</div>
                </NavLink>
                </div>
                {/* <div className="stroke-[#1b9c85] w-[300px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  "> */}
                {/* </div> */}

                {/* {datas.name}   
                                    {datas?.name?.length >= 20
                                    ? datas?.name?.slice(0, 20) + "..."
                                    : datas?.name}   */}
                {/* <p className="font-light text-[15px]"> {items.description} */}
                {/* {datas?.description?.length >= 20
                                    ? datas?.description?.slice(0, 20) + "..."
                                    : datas?.description}  */}
                {/* </p> */}
                {/* <NavLink 
                  // to={`/projectDescription/${items.id}`}
                  className="p-[8px] m-[15px] text-[15px] font-light border-[#1b9c85] font-nunito border-[1px] rounded-3xl flex justify-center bg-[#1b9c85] text-[#FCFCFC]"
                >
                  <div>View More</div>
                </NavLink> */}
            {/* ))} */}
          </div>
        </div>
        <div className="hover:bg-[#1b9c85] hover:text-white rounded-full ">
          <AiOutlineRight className="text-2xl" onMouseEnter={slideRight} />
        </div> 
      </div> ) : ("") }
     

    </div>
  );
}
