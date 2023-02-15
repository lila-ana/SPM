import React, { useState, useEffect } from "react";
import axios from "axios";
import get from "../../features/get";
import { API_BASE_URL } from "../../api/endPoint";
import { GrClose } from "react-icons/gr";
import Select from 'react-select';


export default function ProjectFill(props) {
  const BearerToken = localStorage.getItem("accessToken");

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [clients, setClients] = useState(null);
  const [vendors, setVendors] = useState(null);
  const [solutions, setSolutions] = useState(null);
  const [sectors, setSectors] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [vendorId, setVendorId] = useState(null);
  const [solutionId, setSolutionId] = useState(null);
  const [representativeId, setRepresentativeId] = useState(null);
  const [sectorId, setSectorId] = useState(null);
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])

  const loadOptions = async (inputValue, callback) => {
    try {
      const response = await 
      axios.get(`${API_BASE_URL}client?query=${inputValue}`);
      const data = response.data.map((item) => ({
        value: item.value,
        label: item.label,
      }));
      setOptions(data);
      callback(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  function HandleClose() {
    props.modal(false);
  }
 
  let project = {
    name: name,
    description: description,
    client_id: clientId ,
    // vendor_id: vendorId,
    // solution_id: solutionId,
    // representative_id: representativeId,
    // sector_id: sectorId,

  };

  const form = new FormData();
  form.append("name", name);
  form.append("description", description);
  form.append("client_id", clientId);
  form.append("vendor_id", vendorId);
  form.append("solution_id", solutionId);
  form.append("representative_id", representativeId);
  form.append("sector_id", sectorId);

 
  const getUser = ()=> {
    axios
    .get(`${API_BASE_URL}client`)
    .then((res) => setClients(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUser()
  },[]);

  const getVendor = ()=> {
    axios
    .get(`${API_BASE_URL}vendor`)
    .then((res) => setVendors(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getVendor()
  },[]);

  const getSolution = ()=> {
    axios
    .get(`${API_BASE_URL}solution`)
    .then((res) => setSolutions(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getSolution()
  },[]);

  const getSector = ()=> {
    axios
    .get(`${API_BASE_URL}sector`)
    .then((res) => setSectors(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getSector()
  },[]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}project/create`, project, {
        headers: {
          // "Content-Type": "application/json",
           accept: "application/json",
          authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNmdUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaXNBZG1pbiI6bnVsbCwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9ieSI6bnVsbCwidXBkYXRlZF9ieSI6bnVsbCwiZGVwYXJ0bWVudCI6IlNvZnR3YXJlIGFzIGEgc2VydmljIiwiZmlyc3ROYW1lIjoiVGVzZmFodW4iLCJnZW5kZXIiOiJNYWxlIiwiaXNfZGVsZXRlZCI6ZmFsc2UsImxhc3ROYW1lIjoiQmlyZWdhIiwidGVsIjoiMDkxMjM0MjM0NSIsImlhdCI6MTY3NjQ1MTY5NSwiZXhwIjoxNjc2NTM4MDk1fQ.6XK0YUf4x7NnZu0cfIhhDQfxygN1KJgiQ3s0s7vvD1M"
        },
      })
      .then((response) => {
        console.log(response);
        HandleClose();
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
              <Select 
              
              isMulti
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      onChange={(event) => handleSelectChange(event.target.value)}
              className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                <option value="" disabled>
                  Choose client
                </option>
                {clients?.map((client) => (
                  <option value={client?.id}>{client?.name}</option>
                ))}
              </Select>

              {/* <div className=" gird justify-center items-center gap-[5px]">
              <label className="block mb-[2px] text-sm font-nunito font-normal text-[#696969] w-[120px] dark:text-white">
                Representative
              </label>
                <select onChange={(event)=>setRepresentativeId(event.target.value)} className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
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
                <div>
                <label className="block mb-[2px] text-sm font-nunito font-regular text-[#696969] w-[120px] dark:text-white">
                Vendor
              </label>
              <select onChange={(event)=>setVendorId(event.target.value)} className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                <option value="" disabled>
                  Choose vendor
                </option>
                {vendors?.map((vendor) => (
                  <option value={vendor?.id}>{vendor?.name}</option>
                ))}
              </select>
              </div>
                <div>
                <label className="block mb-[2px] text-sm font-nunito font-regular text-[#696969] w-[120px] dark:text-white">
                Sector
              </label>
              <select onChange={(event)=>setSectorId(event.target.value)} className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                <option value="" disabled>
                  Choose Sector
                </option>
                {sectors?.map((sector) => (
                  <option value={sector?.id}>{sector?.name}</option>
                ))}
              </select>
              </div>
              <div>
              <label className="block mb-[2px] text-sm font-nunito font-regular text-[#696969] w-[120px] dark:text-white">
                Solution 
              </label>
              <select onChange={(event)=>setSolutionId(event.target.value)} className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                <option value="" disabled>
                  Choose solution
                </option>
                {solutions?.map((solution) => (
                  <option value={solution?.id}>{solution?.name}</option>
                ))}
              </select>
              </div> */}

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
