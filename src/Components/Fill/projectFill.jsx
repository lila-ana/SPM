import React, { useState, useEffect } from "react";
import axios from "axios";
import get from "../../features/get";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";

export default function ProjectFill(props) {
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [solution, setSolution] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [representative_info, setRepresentative_info] = useState(null);

  function HandleClose() {
    props.modal(false);
  }
  const handleChange = (e) => {
    const img = {
      name: e?.target?.files[0].name,
      data: e?.target?.files[0],
    };
    setLogo(img?.data);
  };

  const form = new FormData();
  form.append("name", name);
  form.append("decsirption", description);
  form.append("solution", solution);
  form.append("vendor", vendor);
  form.append("representative_info", representative_info);

  let project = {
    name,
    description,
    solution,
    vendor,
    representative_info,
  };

  const getUser = ()=> {
    axios
    .get(`${API_BASE_URL}client`)
    .then((res) => setClients(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUser()
  },[]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}project/create`, project, {
        headers: {
          // "Content-Type": "multipart/form-data",
          accept: "multipart/",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJUZXNmYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgU2VydmljIiwiZmlyc3ROYW1lIjoidGVzZmFodW4iLCJnZW5kZXIiOiJtYWxlIiwiaXNfZGVsZXRlZCI6ZmFsc2UsImxhc3ROYW1lIjpudWxsLCJ0ZWwiOiIwOTI0MjMyNTIiLCJpYXQiOjE2NzU0MDMyMzIsImV4cCI6MTY3NTQ4OTYzMn0.8gaBOpbjq_wwav6ksURwSCz2byJYZRVVUDjEn8gls2s"
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };

console.log(clients, "Show me clients")

  return (
    <div
      onClick={(e) => props?.setmodal(false)}
      className="fixed left-0 right-0 top-0 bottom-0 bg-[#000000cc] flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[630px] h-[600px]  px-8 py-8 rounded-lg bg-white flex flex-col gap-4 overflow-x-hidden overflow-y-auto"
      >
        <div className="flex pb-4 justify-between">
          <span className="text-[28px] font-semibold">Add Project</span>
          <div onClick={HandleClose} className="pt-2">
            <GrClose className="w-[40px] h-[25px]" />
          </div>
        </div>
        <div className="grid items-center justify-center gap-3 ">
          <form
            onSubmit={HandleSubmit}
            className=" grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px]"
          >
            <div className="grid items-center justify-center gap-3 mt-3">
              <label className="block mb-[2px] text-sm font-nunito font-regular text-[#696969] w-[120px] dark:text-white">
                Client
              </label>
              <select className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                <option value="" disabled>
                  Choose client
                </option>
                {clients?.map((client) => (
                  <option value={client?.id}>{client?.name}</option>
                ))}
              </select>

              <div className=" gird justify-center items-center gap-[5px]">
              <label className="block mb-[2px] text-sm font-nunito font-normal text-[#696969] w-[120px] dark:text-white">
                Representative
              </label>
                <select className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                  <option value="" disabled>
                    Choose representative
                  </option>
                  {clients?.map((rep) => (
                                      rep?.representative_info?.map((items) => (
                                        <option value={items?.id}>{items?.name}</option>

                                      ))

                  ))}
                </select>
              </div>

              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="name"
                name="name"
                type="text"
                placeholder="Project Name"
                onChange={(e) => setName(e.target.value)}
              />
             
              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px] h-[200px] grid items-center justify-center"
                id="decsription"
                name="description"
                type="description"
                placeholder="Project description"
                onChange={(e) => setDescription(e.target.value)}
              />
              
             
              <div className="flex items-center justify-center gap-[60px] my-[25px]">
                <button
                  type="submit"
                  className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}
