import React from "react";
import { Navigate } from "react-router-dom";
import AssetRegistration from "../Pages/Sidebar/AssetRegistration";
import Inventory from "../Pages/Sidebar/Inventory";
import Model_19 from "../Pages/Sidebar/Model_19";
import Model_20 from "../Pages/Sidebar/Model_20";
import Model_22 from "../Pages/Sidebar/Model_22";
import Setting from "../Pages/Sidebar/Setting";
import { Route } from "react-router-dom";


// const RequireAuth = () => {
//   // sessionStorage.setItem("token", JSON.stringify(userToken));
//   const token = localStorage.getItem("accessToken");
//   const role = localStorage.getItem("data");

    
//   // const token = true;
//   return roleCheck(role,token);
  
// };

export const sidebarCheck = () =>{
  const token = localStorage.getItem("accessToken");
  
  return token != null;
}

// export default RequireAuth;

