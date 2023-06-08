import { Menu } from '@headlessui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { API_BASE_URL } from '../../../api/endPoint';

export default function AssetRegistrationCreate() {
  
   const BearerToken = localStorage.getItem("accessToken");

    const [users, setUsers] = useState();
    const [category, setCategory] = useState();
    const [productName, setProductName] = useState();
    const [itemPerPrice, setItemPerPrice] = useState();
    const [productUniqueNumber, setProductUniqueNumber] = useState();
    const [productImage, setProductImage] = useState();  
    const [productId, setProductId]=useState(null)

    const handleChange = (e) => {
      const img = {
        name: e?.target?.files[0].name,
        data: e?.target?.files[0],
      };
      setLogo(img?.data);
    };
    
    const form = new FormData();
    form.append("category", category);
    form.append("itemPerPrice", itemPerPrice);
    form.append("productUniqueNumber", productUniqueNumber);
    form.append("productImage", productImage);
    form.append("productName", productName);
    
    let asset = {
      category,
      itemPerPrice,
      productUniqueNumber,
      productImage,
      productName,
    };
    const HandleSubmit = (e) => {
      e.preventDefault();
      axios
        .post(`${API_BASE_URL}storage/create`, asset, {
          headers: {
            // accept: "multipart/form-data",
            accept: "application/json",
            authorization: "Bearer " + BearerToken
          },
        })
        .then(function (response) {
          console.log(response);
          HandleClose();
        })
        .catch(function (error) {
          console.log(error, "errorrrrrrrrrrrrrrr");
        });
    };
  
    const logoutUser = () => {
		localStorage.clear();
		window.location.replace("/login")}

    const getUser = ()=> {
      axios
      .get(`${API_BASE_URL}user/auth`,{
      headers: {
        // "Content-Type": "application/json",
        accept: "application/json",
        authorization: "Bearer " + BearerToken
        },
    })
      .then((res) => setUsers(res.data?.data))
      .catch((err) => console.log(err));
    }
    useEffect(() => {
      getUser()
    },[]);
  
  return (
    <div>
      <div className='flex items-center justify-between bg-[#D99C00]'>
        <div className='block m-[20px] p-[5px] text-[20px] font-semibold text-gray-900 dark:text-white bg-[#'>
          <p className=' p-[10px] rounded-[15px]'>Asset Registration</p>
        </div>
        <div className='p-[10px]'>
        <Menu>
					<Menu.Button>
						<FaUserCircle className="m-[10px] fill-[#fcfcfc] w-[40px] h-[40px]" />
					</Menu.Button>
        <Menu.Items 
					className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-[#1b9c85] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							<Menu.Item>
								<div className="grid m-[5px] gap-[5px] items-center justify-center">
									<div>
										<div className="grid justify-center items-center pt-[5px] text-nunito text-[#602234] font-semibold text-[15px]">
											{/* {users.fullName} */}
										</div>
										<div className="text-nunito text-[#602234] font-light text-[16px]">
											{/* {users.department} */}
										</div>
									</div>
								 {/* ))}    */}
									<div className="flex items-center justify-center">
									<button
										onClick={logoutUser}
										className="border-[1px] border-[#d99000] w-[70px] rounded-[2px] bg-[#AD8317] text-white flex items-center justify-center" /*  */
									>Logout</button>
									</div>
								</div>
							</Menu.Item>
						</div>
					</Menu.Items>
            </Menu>
        </div>
      </div>

      <div className=''>
        <form
          className=' m-[20px] p-[20px] border-[2px]  rounded-[25px] items-center justify-center bg-rgba(173, 131, 23, 0.5) '
          onSubmit={HandleSubmit}
        >
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label 
                    for="product_name" 
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Product name
                  </label>
                    <input 
                      type="text" 
                      id="product_name" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Product Name" 
                      onChange={(e)=>setProductName(e.target.value)}
                      required
                    />
                </div>
                <div>
                  <label 
                    for="product_name" 
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Product per price
                  </label>
                    <input 
                      type="text" 
                      id="product_price" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Product per price" 
                      onChange={(e)=>setProductPerPrice(e.target.value)}
                      required
                    />
                </div>
                <div>
                  <label 
                    for="product_unique_number" 
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Product Unique Number
                  </label>
                    <input 
                      type="text" 
                      id="product_unique_number" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Product Unique Number" 
                      onChange={(e)=>setProductUniqueNumber(e.target.value)}
                      required
                    />
                </div>
                <div>
                  <label 
                    for="Product_image" 
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                      Product Image
                  </label>
                    <input 
                      type="file" 
                      id="file_input" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Product Image" 
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      // required
                    />
                </div>
                <div>
                  <label 
                    for="product_name" 
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                     Product Category 
                  </label>
                  <input 
                      type="text" 
                      id="category" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Category" 
                      onChange={(e)=>setCategory(e.target.value)}
                    />
                </div>
                
              </div>
              <div className='mx-[80px] flex justify-center items-center gap-[50px]'>
              <button 
              type="submit" 
              class="text-[#000000] bg-[#AD8317] w-[50px] hover:bg-[#fcfcfc] border-[#AD8317] border-[1px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add product 
                </button>
                <button 
              type="reset" 
              class="text-[#000000] bg-[#AD8317] w-[100px] hover:bg-[#fcfcfc] border-[#AD8317] border-[1px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Cancel
                </button>
                </div>
          </form>
      </div>
    </div>
  )
}
