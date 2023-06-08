import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../api/endPoint";

export default function Model_19Get(props) {

  const [data, setData] = useState()

  const getModel_19 = ()=> {
    axios
    .get(`${API_BASE_URL}model_19`)
    .then((res) => setData(res.data?.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getModel_19()
  },[]);


  return (
    <div>  
       <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 w-[100px]">
                    No.
                </th>
                <th scope="col" class="px-6 py-3 w-[250px]">
                    Detailed description of articles or property                        
                </th>
                <th scope="col" class="px-6 py-3 w-[150px]">
                    Model                        
                </th>
                <th scope="col" class="px-6 py-3 w-[120px]">
                    Serial                        
                </th>
                <th scope="col" class="px-6 py-3 w-[80px] ">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3 w-[120px] ">
                    Unit Price
                </th>
                <th scope="col" class="px-6 py-3 w-[120px] ">
                    Total Price
                </th>
                <th scope="col" class="px-6 py-3 w-[120px]">
                    Remark
                </th>
                <th scope="col" class="px-6 py-3 w-[120px] font-bold">
                    Add
                </th>
            </tr>
        </thead>
                <tbody>
                   {data?.map((item => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item?.id}
                        </td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item?.itemType}
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item?.model}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {item?.serial}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item?.quantity}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {item?.unitPrice}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item?.totalPrice}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <button 
                            type="submit" 
                            class="mt-[10px] p-[5px] text-white bg-[#000000] hover:bg-[#AD8317] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Update
                        </button>
                        </th>
                    </tr>
                   )))}
                </tbody>
            </table>
  </div>
              
  );
}
