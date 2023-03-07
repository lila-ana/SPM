import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { MdAdminPanelSettings, MdEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import cbeLogo from "../../Image/cbe-logo.png"
import { API_BASE_URL, IMG_API } from "../../api/endPoint";
import get from "../../features/get";

export default function FullDetail(props) {
  const params = useParams();
  const [data, setData] = useState();

  const [clients, setClients] = useState([]);
  const [datas, setDatas] = useState();
  const [solutions, setSolutions] = useState();

  
  const getUser = ()=> {
    axios
    .get(`${API_BASE_URL}project`)
    // .get(`${API_BASE_URL}project/${params.id}`)
    .then((res) => setDatas(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUser()
  },[]);

  const getSolutions = ()=> {
    axios
    .get(`${API_BASE_URL}solution`)
    .then((res) => setSolutions(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUser()
  },[]);

console.log(datas,"datatta")
  // useEffect(() => {
  //   axios
  //   .get(`${API_BASE_URL}project/${params.id}`)
  //   .then((res) => setDatas(res.data?.data))
  //   .catch((err) => console.log(err));
  
  // },[])

  return (
    <div>
      <div className="mb-[15px] text-[#1b9c85] font-bold font-nunito text-[24px] border-b-2 w-[180px] border-[#1b9c85]">
        Description
      </div>
      <div className="grid justify-center grid-cols-5 gap-[5px]">
        <div className="flex col-span-3 font-light text-[20px] text-gray p-[10px]">
          <p>
          The Commercial Bank of Ethiopia (CBE) is the largest commercial bank in Ethiopia. As of June 2021, it had about 1.1 trillion birr in assets and held approximately 67% of deposits and about 53% of all bank loans in the country. The bank has around 22,908 employees, who staff its headquarters and its over 1000+ branches positioned in the main cities and regional towns.[1] The latter include 120 branches in the national capital Addis Ababa. With the opening of a branch in the Gechi in the Illubabor Zone, CBE's banking network has reached online 783 branches. The bank has reached 1284 branches as of 10 August 2018
          </p>
          {/* {datas?.description} */}
        </div>
        {/* {datas?.solutions?.map((items) => ( */}
        {/* {datas?.solutions?.map((items) => ( */}
          <div className="flex col-span-2">
          <img
            className="rounded-[5px] w-[400px] h-[300px]"
            src= {cbeLogo}
            // {`${IMG_API}/${items?.logo}`}
            alt= "Commerical bank of Ethiopia Logo"
            // {items.name}
          />
        </div>
        {/* ))}  */}
      </div>
      <div className="mb-[15px] text-[#1b9c85] font-bold font-nunito text-[24px] ">
        Solutions
      </div>
      <div className="flex items-center gap-[5px]">
        {/* {datas?.map((items) => (
           items?.clients?.map((item) => (
                  {item?.name}
                      ))
          </div>

        ))} */}
          <div className="flex p-[5px] m-[10px] items-center justify-center font-nunito font-light text-[20px] text-[#1b9c85] rounded-[20px] border-[1px] border-[#1b9c85] w-[250px] ">
            VDI Pilot Implementation
          </div>

      </div>
 
  
      <div className="flex items-center gap-[40px]">
      <div className="grid grid-cols-12 gap-[30px] mx-[0px] my-[50px] justify-center items-center">
          <div  class="col-span-6 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              {/* {datas?.map((items) => ( */}
                {/* // items?.clients?.map((item) => ( */}
                <>
                <div class="gird items-center justify-center mb-2 text-2xl font-bold tracking-tight text-[#1b9c85] dark:text-white">Commercial Bank of Ethiopia</div>
                </>
                {/* // )) */}
                
                {/* ))} */}
              <div class="grid items-center justify-center font-normal text-[18px] text-gray-700 dark:text-gray-400">Client</div>

          </div>
          <div  class="col-span-6 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {/* {get?.get()?.map((items) => ( */}
            {/* <> */}
            <div class="gird items-center justify-center mb-2 text-2xl font-bold tracking-tight text-[#1b9c85] dark:text-white">Prime Contractor{" "}</div>
            {/* </>))} */}
            <div class="grid items-center justify-center font-normal text-[18px] text-gray-700 dark:text-gray-400">Contract Role{" "}</div>
          </div>
          <div  class="grid items-center justify-center col-span-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="gird items-center justify-center mb-2 text-2xl font-bold tracking-tight text-[#1b9c85] dark:text-white">Addis Ababa, Ethiopia</div>
            <div class="grid items-center justify-center font-normal text-[18px] text-gray-700 dark:text-gray-400">Address{" "}</div>
          </div>
          <div  class="col-span-6 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {/* {get.getvendor()?.map ((items) => ( */}
            <div class="gird items-center justify-center mb-2 text-2xl font-bold tracking-tight text-[#1b9c85] dark:text-white">VMWare{" "}</div>
            {/* ))} */}
            <div class="grid items-center justify-center font-normal text-[18px] text-gray-700 dark:text-gray-400">Vendor{" "}</div>
          </div>
 
    </div>
  

        <div className="mx-[100px]">
          <div className="font-bold text-[24px] text-[#1b9c85] font-nunito col-span-2">
            Contact Person
          </div>
          <div className="mt-[20px]">
            <div className="flex items-center gap-[10px] m-[10px]">
              <FaUserCircle className="fill-[#1b9c85] w-[25px] h-[25px]" />
              <div className="text-[20px] font-normal font-nunito text-[#1b9c85]">
                {/* {data?.projects?.map((items) => (
                  <div value={items?.id}>
                    {items.name}
                  </div>
                ))} */}
                Mr. Daniel Gardew
                {/* {get?.getproject()?.map((items)=>(
                                <div 
                                    value={items?.id}>{items?.name}</div>           
                                ))} */}
              </div>
            </div>
            <div className="flex items-center gap-[10px] m-[10px]">
              <MdAdminPanelSettings className="fill-[#1b9c85] w-[25px] h-[25px]" />
              <div className="text-[20px] font-normal font-nunito text-[#1b9c85]">
                IT Manager
              </div>
            </div>
            <div className="flex items-center gap-[10px] m-[10px]">
              <MdEmail className="fill-[#1b9c85] w-[25px] h-[25px]" />
              <div className="text-[20px] font-normal font-nunito text-[#1b9c85]">
                danielgardew@cbe.com.et
              </div>
            </div>
            <div className="flex items-center gap-[10px] m-[10px]">
              <FaPhoneAlt className="fill-[#1b9c85] w-[25px] h-[25px]" />
              <div className="text-[20px] font-normal font-nunito text-[#1b9c85]">
                +251-91 148 7418
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[200px]"></div>
    </div>
  );
}
