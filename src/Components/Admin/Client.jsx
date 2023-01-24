import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ClientPop from "../modal/clientPop";
import get from "../../features/get";
import AddButton from "../Common/Button/addButton";
import ClientFill from "../Fill/ClientFill";

export default function Client(props) {
  // function scrollback (e,name)  { }
  const [clientmodal, setClientModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  // const [posts, setPosts] = useState([]);

  function HandleModal() {
    setClientModal(true);
  }
  function HandleAddModal() {
    setAddModal(true);
  }
  const HandleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${API_BASE_URL}client/${id}`, client, {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "application/json",
          // authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwiZW1haWwiOiJtdWxlc3NAZ21haWwuY29tIiwiZ2VuZGVyIjoiTWFsZSIsImRlcGFydG1lbnQiOiJTYWFTIiwidGVsIjpudWxsLCJwYXNzd29yZCI6IjEyMzhnZmo4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiaXNfZGVsZXRlZCI6dHJ1ZSwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiaWF0IjoxNjczNTk1OTI4LCJleHAiOjE2NzM2ODIzMjh9.XHYs6P7qOADLnWJGePBvJPs0PSqGcyUrY0fKcuUmZjo",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };

  const deletePost = (id) => {
    client.delete(`${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };
  return (
    <div className="grid gap-5">
      <div className="flex justify-center">
        {/* <button 
      className="bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]">
      Add Client
      </button> */}
        {}

        <AddButton
          styles="bg-[#1b9c85] w-[150px] text-white font-light p-[10px] flex items-center justify-center rounded-[10px]"
          name="Add Client"
          action={HandleAddModal}
        />
      </div>

      <div className="grid grid-cols-12 gap-4">
        {get?.getclient()?.map((items) => (
          <div className="col-span-4 stroke-[#1b9c85] w-[285px] h-[200px] rounded-sm hover:shadow-[#1b9c8585] inline-block ease-in-out duration-300 shadow-xl   text-[#4E4E4F] font-semibold font-nunito text-[20px] border-[#1b9c85] border-[1px]  ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBMI1jhJpZvoZZ7mTkeNc9LUqTuwx_k4Xgg&usqp=CAU"
              className="w-[285px] h-[125px]"
              onClick={HandleModal}
            />
            <div className="flex justify-between items-center h-[80px] px-5">
              <div
                className="text-[#1b9c85] font-semibold text-[18px] hover-pointer"
                onClick={HandleModal}
              >
                ERA
              </div>
              <div className="text-[#1b9c85] rounded-full border-[1px] border-[#1b9c85] w-[40px] h-[40px] grid items-center justify-center shadow-xl">
                <div>
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button>
                      <MdDelete className="fill-[#7c0a02]" />
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[70px] origin-top-right divide-y divide-[#1b9c85] bg-white shadow-lg ring-opacity-5 focus:outline-none">
                      {/* <div className="py-1"> */}
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
                              onClick={(e) => HandleDelete(e, id)}
                            >
                              <AiOutlineCloseCircle className="fill-white w-[20px] h-[20px]" />
                            </button>
                          </div>
                        </div>
                      </Menu.Item>
                      {/* </div> */}
                    </Menu.Items>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {clientmodal ? <ClientPop modal={setClientModal} /> : ""}
      {addModal ? <ClientFill modal={setAddModal} /> : ""}
    </div>
  );
}
