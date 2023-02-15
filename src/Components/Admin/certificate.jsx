import { Menu } from '@headlessui/react';
import { Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { API_BASE_URL, IMG_API } from '../../api/endPoint';
import AddButton from '../Common/Button/addButton';
import Certificates from '../Fill/certificates';
import CertificatePop from '../Modal/certificatePop';
import EditCertificate from '../ModalEdit/editCertificate';
import NoRecord from './noRecord';

export default function Certificate(props) {
   
  const BearerToken = localStorage.getItem("accessToken");

    const [certificateModal, setCertificateModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [detail, setDetail] = useState(null);
    const [data, setData] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [datas, setDatas] = useState();

    
    function HandleModal(e, items) {
        setCertificateModal(true);
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
        .get(`${API_BASE_URL}certeficate`)
        .then((res) => setDatas(res.data?.data))
        .catch((err) => console.log(err));
      }
      useEffect(() => {
        getUser()
      },[]);

     
      const HandleDelete = (e, id) => {
        e.preventDefault();
        axios
          .delete(`${API_BASE_URL}certeficate/${id}`, {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNmdUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgc2VydmljIiwiZmlyc3ROYW1lIjoiVGVzZmFodW4iLCJnZW5kZXIiOiJNYWxlIiwiaXNfZGVsZXRlZCI6ZmFsc2UsImxhc3ROYW1lIjoiQmlyZWdhIiwidGVsIjoiMDkxMjM0MjM0NSIsImlhdCI6MTY3NjQ1MTY5NSwiZXhwIjoxNjc2NTM4MDk1fQ.6XK0YUf4x7NnZu0cfIhhDQfxygN1KJgiQ3s0s7vvD1M"
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
    <div>
        <div className="grid gap-5">
      <div className="flex justify-center">

        <AddButton
          styles="bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]"
          name="Add Certificate"
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
                <Tooltip >
                {/* // title={items?.name} */}
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

      {certificateModal ? <CertificatePop modal={setCertificateModal} data={detail} /> : ""}
      {addModal ? <Certificates modal={setAddModal} /> : ""}
      {editModal ? <EditCertificate modal={setEditModal} data={data} /> : ""}
    </div>
    </div>
  )
}
