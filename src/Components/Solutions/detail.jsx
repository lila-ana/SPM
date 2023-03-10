import axios from "axios";
import React, { useEffect, useState } from "react";
import cbeLogo from "../../Image/cbe-logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import { API_BASE_URL, IMG_API } from "../../api/endPoint";
import get from "../../features/get";

export default function Detail(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [data, setData] = useState();
  const [datas, setDatas] = useState();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const params = useParams();

  const getUser = ()=> {
    axios
    .get(`${API_BASE_URL}client`)
    .then((res) => setDatas(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUser()
  },[]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}solution/${params?.id}`)
      .then((res) => setData(res.data?.data))
      .catch((err) => console.log(err));
  });
  props?.setName(data?.name);
  // console.log(data, "datadatadatadata");
  return (
    <div>
      <div>
        <h1 className="mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85] ">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div class="col-span-4">
          <div class="items-center justify-center flex relative w-[200px] h-[200px] border-[#99dbcf] border-[1px] mb-[30px] rounded-sm bg-gradient-to-t from-[#1b9c85] to-[#fffff] hover:from-[#1b9c85] hover:to-[#fcfcfc] group">
            <div className="flex items-center justify-center">
              <img
                class="absolute inset-0 object-cover w-[150px] h-[150px] group-hover:opacity-50 flex items-center justify-center"
                src= {cbeLogo}
                // {`${IMG_API}/${items?.logo}`}
              />
            </div>
            <div class="relative p-5">
              <div class="mt-10">
                <div
                  class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                >

                  <div class="p-2">
                  {/* {datas?.map((items) => ( */}
                  <div>
                    <p class="text-lg text-white">
                      {/* {items.name} */}
                      </p>  
                      <p className="flex items-center justify-center font-semibold text-[18px] text-white m-[10px] "
                        > Commerical Bank of Ethiopia</p>
                    <a
                      href={`/projectDescription/${1}`}
                      class="px-4 py-2 text-sm  text-white bg-green-600"
                    >
                      View More
                    </a>
                    </div>
                        {/* ))} */}

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4"></div>
      </div>

    </div>
    // <div>
    //     <div>
    //         <h1 className='mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85] '> Projects </h1>
    //     </div>

    //     <div >
    //       <div className='grid grid-cols-10 gap-[20px]'>
    //         <div
    //         onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
    //         className='col-span-4 border-[1px] border-[#1b9c85] mb-[30px] rounded-sm bg-gradient-to-t from-[#1b9c85] to-[#fffff] hover:from-[#1b9c85] hover:to-[#fcfcfc] '
    //         >
    //           <div>
    //               <img
    //                 className='col-span-4 hover:opacity-[25%]'
    //                 src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000'
    //                 alt='Company Image'
    //               />
    //             </div>
    //         </div>

    //     {isHovering && (

    //       <div className=' flex gap-[30px]'>
    //         <h1 className='font-regular text-[15px]'>ERA-MOT</h1>
    //         <div className='rounded-sm border-[1px] border-[#ffffff] w-[200px] h-[40px] font-nunito text-[10px] font-normal flex justify-center items-center'>
    //           Read More
    //           <IoIosArrowForward className='w-[18px] h-[18px]'/>
    //         </div>
    //       </div>

    //     )}
    //   </div>
    // </div>

    // <div >
    //       <div className='grid grid-cols-10 gap-[20px]'>
    //         <div
    //         onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
    //         className='col-span-4 border-[1px] border-[#1b9c85] mb-[30px] rounded-sm bg-gradient-to-t from-[#1b9c85] to-[#fffff] hover:from-[#1b9c85] hover:to-[#fcfcfc] '
    //         >
    //           <div>
    //               <img
    //                 className='col-span-4 hover:opacity-[25%]'
    //                 src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000'
    //                 alt='Company Image'
    //               />
    //             </div>
    //         </div>

    //     {isHovering && (

    //       <div className=' flex gap-[30px]'>
    //         <h1 className='font-regular text-[15px]'>ERA-MOT</h1>
    //         <div className='rounded-sm border-[1px] border-[#ffffff] w-[200px] h-[40px] font-nunito text-[10px] font-normal flex justify-center items-center'>
    //           Read More
    //           <IoIosArrowForward className='w-[18px] h-[18px]'/>
    //         </div>
    //       </div>

    //     )}
    //   </div>
    // </div>
    // <div >
    //       <div className='grid grid-cols-10 gap-[20px]'>
    //         <div
    //         onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
    //         className='col-span-4 border-[1px] border-[#1b9c85] mb-[30px] rounded-sm bg-gradient-to-t from-[#1b9c85] to-[#fffff] hover:from-[#1b9c85] hover:to-[#fcfcfc] '
    //         >
    //           <div>
    //               <img
    //                 className='col-span-4 hover:opacity-[25%]'
    //                 src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000'
    //                 alt='Company Image'
    //               />
    //             </div>
    //         </div>

    //     {isHovering && (

    //       <div className=' flex gap-[30px]'>
    //         <h1 className='font-regular text-[15px]'>ERA-MOT</h1>
    //         <div className='rounded-sm border-[1px] border-[#ffffff] w-[200px] h-[40px] font-nunito text-[10px] font-normal flex justify-center items-center'>
    //           Read More
    //           <IoIosArrowForward className='w-[18px] h-[18px]'/>
    //         </div>
    //       </div>

    //     )}
    //   </div>
    // </div>

    //     {/* <div className='grid grid-cols-8 gap-3'>
    //       <div className='col-span-4 m-[20px] h-[200px] border-[#1b9c85] stroke-[#1b9c85] rounded-sm border-[1px] hover:shadow-[#1b9c8585]'>
    //         <div className='stroke-[#1b9c85] w-[300px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl  p-[15px] text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  '>
    //         </div>
    //         <div className="">
    //             <div>
    //               <img
    //                 className=''
    //                 src=''
    //                 alt=''
    //               />
    //             </div>

    //         </div>
    //       </div>
    //     </div> */}

    // </div>
  );
}
