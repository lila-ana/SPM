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
      axios.get(`${API_BASE_URL}vendor?query=${inputValue}`);
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
  
  const Vendorlist = [];
  vendors?.map((items) =>
  Vendorlist.push({
      value: items?.id,
      label: items?.name,
    })
  )
  const Vendors_Ids = [];
  if (vendorId !== null) {
    for (let id in vendorId) {
      Vendors_Ids.push(vendorId[id]?.value);
    }
  }
  const loadOptionss = async (inputValue, callback) => {
    try {
      const response = await 
      axios.get(`${API_BASE_URL}solution?query=${inputValue}`);
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
  
  const solutionlist = [];
  solutions?.map((items) =>
  solutionlist.push({
      value: items?.id,
      label: items?.name,
    })
  )
  const Solution_Ids = [];
  if (solutionId !== null) {
    for (let id in solutionId) {
      Solution_Ids.push(solutionId[id]?.value);
    }
  }

  function HandleClose() {
    props.modal(false);
  }
 
  let project = {
    name: name,
    description: description,
    client_id: clientId ,
    vendor_id: Vendors_Ids,
    solution_id: Solution_Ids,
    representative_id: representativeId,
    sector_id: sectorId,

  };

  const form = new FormData();
  form.append("name", name);
  form.append("description", description);
  form.append("client_id", clientId);
  form.append("vendor_id", Vendors_Ids);
  form.append("solution_id", Solution_Ids);
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
           authorization: "Bearer " + BearerToken
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
console.log(project, "show me projects")

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
              <select onChange={(event)=>setClientId(event.target.value)} className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]">
                  <option value="" disabled>
                    Choose client
                  </option>
                  {clients?.map((items) => (
                        <option value={items?.id}>{items?.name}</option>
                  ))}
                </select>

              <div className=" gird justify-center items-center gap-[5px]">
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
              <Select
              options={Vendorlist}
              isMulti
              cacheOptions
              defaultOptions
              loadOptions={loadOptions}
              onChange={(e) => {
                setVendorId(e);
              }}              
              className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
              >
                </Select>
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
              <Select
              options={solutionlist}
              isMulti
              cacheOptions
              defaultOptions
              loadOptions={loadOptionss}
              onChange={(e) => {
                setSolutionId(e);
              }}              
              className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
              >
                </Select>
              </div>

              <input
                className="border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]"
                id="name"
                name="name"
                type="text"
                placeholder="Project Name"
                onChange={(e) => setName(e.target.value)}
              />
             
              <textarea
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
