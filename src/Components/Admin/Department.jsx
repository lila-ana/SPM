import { Menu } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import AddButton from "../Common/Button/addButton";
import axios from "axios";
import { Tooltip } from "@mui/material";
import { API_BASE_URL, IMG_API } from "../../api/endPoint";
import NoRecord from "./noRecord";
import DepartmentFill from "../Fill/DepartmentFill";
import EditDepartment from "../ModalEdit/editDepartment";
import DepartmentPop from "../Modal/DepartmentPop";

export default function Department() {

  const [clientmodal, setClientModal] = useState(false);
  const [data, setData] = useState(null);
  const [detail, setDetail] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [datas, setDatas] = useState();

  const BearerToken = localStorage.getItem("accessToken");

  function HandleModal(e, items) {
    setClientModal(true);
    setDetail(items);
  }
  function HandleAddModal() {
    setAddModal(true);
  }
  function HandleEditModal(e, items) {
    setEditModal(true);
    setData(items);
  }
  const getUser = ()=> {
   axios
   .get(`${API_BASE_URL}department`)
   .then((res) => setDatas(res.data?.data))
   .catch((err) => console.log(err));
 }
 useEffect(() => {
   getUser()
 },[]);

  const HandleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${API_BASE_URL}department/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + BearerToken
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };

  return (
    <div className="grid gap-5">
      <div className="flex justify-center">
        <AddButton
          styles="bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]"
          name="Add Department"
          action={HandleAddModal}
        />
      </div>
      {datas?.length !== 0 ? (
        <div className="grid grid-cols-12 gap-4">
          {datas?.map((items) => (
          <div  class="col-span-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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

      {clientmodal ? <DepartmentPop modal={setClientModal} data={detail} /> : ""}
      {addModal ? <DepartmentFill modal={setAddModal} /> : ""}
      {editModal ? <EditDepartment modal={setEditModal} data={data} /> : ""}
    </div>
  );
}