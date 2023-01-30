import { Menu } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import AddButton from "../Common/Button/addButton";
import get from "../../features/get";
import ProjectPop from "../modal/projectPop";
import ProjectFill from "../Fill/projectFill";
import axios from "axios";
import { API_BASE_URL } from "../../api/endPoint";

export default function Projects(props) {
    
   const [projectModal,setProjectModal]=useState(false)
   const [addModal,setAddModal]=useState(false)
   const [data, setData] = useState(null);
    const [editModal, setEditModal] = useState(false);

   function HandleModal(){
    setProjectModal(true)
   }
   function HandleAddModal () {
      setAddModal(true)
   }
   function HandleEditModal(e, items) {
      setEditModal(true);
      setData(items);
    }
      
      const [datas, setDatas] = useState();
      useEffect(() => {
        axios
          .get(`${API_BASE_URL}project`)
          .then((res) => setDatas(res.data?.data))
          .catch((err) => console.log(err));
      });
     function HandleModal () {
        setVendorModal(true)

   
   const HandleDelete=(e, id)=>{
      e.preventDefault();
          axios
          .delete(`${API_BASE_URL}project/${id}`, {
            headers: {
          'Content-Type': "application/json",
         //  accept:"application/json"
            //   authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwiZW1haWwiOiJtdWxlc3NAZ21haWwuY29tIiwiZ2VuZGVyIjoiTWFsZSIsImRlcGFydG1lbnQiOiJTYWFTIiwidGVsIjpudWxsLCJwYXNzd29yZCI6IjEyMzhnZmo4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiaXNfZGVsZXRlZCI6dHJ1ZSwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiaWF0IjoxNjczNTk1OTI4LCJleHAiOjE2NzM2ODIzMjh9.XHYs6P7qOADLnWJGePBvJPs0PSqGcyUrY0fKcuUmZjo",
    
            },
          })
          .then(function (response) {
            console.log(response);
           
          })
          .catch(function (error) {
            console.log(error, "errorrrrrrrrrrrrrrr");
          });
         }}
   //  console.log
    return (
    <div className="grid gap-5">
      <div className="flex justify-center">
        <AddButton
          styles="bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]"
          name="Add Project"
          action={HandleAddModal}
        />
      </div>
      {get?.getproject()?.length !== 0 ? (
        <div className="grid grid-cols-12 gap-4">
          {get?.getproject()?.map((items) => (
            <div className="col-span-4 stroke-[#1b9c85] w-[285px] h-[200px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl   text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
              <img
                src={`${IMG_API}/${items?.logo}`}
                className="w-[285px] h-[125px]"
                onClick={(e) => HandleModal(e, items)}
              />

              <div className="flex justify-between items-center h-[80px] px-5">
                <Tooltip title={items?.name}>
                  <div
                    className="text-[#1b9c85] font-semibold text-[18px] hover-pointer"
                    onClick={(e) => HandleModal(e, items)}
                  >
                    {items?.name?.length >= 20
                      ? items?.name?.slice(0, 20) + "..."
                      : items?.name}
                  </div>
                </Tooltip>
                <div className="flex justify-center items-center gap-[5px]">
                  <div
                    onClick={(e) => HandleEditModal(e, items)}
                    className="text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl"
                  >
                    <AiFillEdit className="fill-[#7c0a02] " />
                  </div>
                  <div className="text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button>
                        <MdDelete className="fill-[#7c0a02]" />
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-[70px] origin-top-right divide-y divide-[#1b9c85] bg-white shadow-lg ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <div className="flex rounded-[5px] gap-[15px] items-center justify-center bg-[#1b9c85] ">
                            <div className="pt-[5px]">
                              <button>
                                <IoIosCheckmarkCircleOutline className="fill-white w-[20px] h-[20px]" />
                              </button>
                            </div>
                            <div className="pt-[5px]">
                              <button
                                className="w-[15px]"
                                onClick={(e) => HandleDelete(e, items?.id)}
                              >
                                <AiOutlineCloseCircle className="fill-white w-[20px] h-[20px]" />
                              </button>
                            </div>
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

                    {/* <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                     <span class="font-medium">Successfully deleted!</span> 
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoRecord />
      )}

      {projectModal ? <ProjectPop modal={setProjectModal} /> : ""}
      {addModal ? <ProjectFill modal={setAddModal} /> : ""}
      {editModal ? <EditProject modal={setEditModal} data={data} /> : ""}
    </div>
  );
}
