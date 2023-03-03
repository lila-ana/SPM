import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { API_BASE_URL, IMG_API } from "../../api/endPoint";


export default function Clients() {
 
  const [datas, setDatas] = useState();

  const slideLeft = () => {
    let slider = document.getElementById("sliderclient");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("sliderclient");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

    const getUser = ()=> {
      axios
      .get(`${API_BASE_URL}client`)
      .then((res) => setDatas(res.data?.data))
      .catch((err) => console.log(err));
    }
    useEffect(() => {
      getUser()
    },[]);

  return (
    <div className="px-[100px]">
      <div className="mt-[40px]">
        <h1 className="mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85]">
          {" "}
          Clients{" "}
        </h1>
      </div>
      <div className="relative flex items-center gap-5">
        <div className="hover:bg-[#1b9c85] hover:text-white rounded-full ">
          <AiOutlineLeft className="text-2xl" onMouseEnter={slideLeft} />
        </div>
        <div
          id="sliderclient"
          className="w-full h-full overflow-x-scroll scroll scrollbar-hide  scroll-smooth"
        >
          <div className="grid grid-flow-col gap-[20px] items-center">
            {datas?.map((items) => (
              <div
                key={items.id}
                className="stroke-[#1b9c85] w-[300px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[0.5px]  "
              >
                <p className="pb-[10px]">
                  <img
                    alt={items.name}
                    className="pb-[10px]"
                    src={`${IMG_API}/${items?.logo}`}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="hover:bg-[#1b9c85] hover:text-white rounded-full ">
          <AiOutlineRight className="text-2xl" onMouseEnter={slideRight} />
        </div>
      </div>
    </div>
  );
}
