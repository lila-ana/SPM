import React from "react";
import { Navigate } from "react-router-dom";
import AssetRegistration from "../Pages/Sidebar/AssetRegistration";
import Inventory from "../Pages/Sidebar/Inventory";
import Model_19 from "../Pages/Sidebar/Model_19";
import Model_20 from "../Pages/Sidebar/Model_20";
import Model_22 from "../Pages/Sidebar/Model_22";
import Setting from "../Pages/Sidebar/Setting";
import { Route } from "react-router-dom";


const RequireAuth = () => {
  // sessionStorage.setItem("token", JSON.stringify(userToken));
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("data");

    
  // const token = true;
  return roleCheck(role,token);
  
};

export const sidebarCheck = () =>{
  const token = localStorage.getItem("accessToken");
  
  return token != null;
}
export const roleCheck = (userType, token)=>{
  if(token){
  userType === 'user' ? 
     <>
     <Route path="/model_20" element={<Model_20/>}/>
     <Route path="/Inventory" element={<Inventory/>}/>
    </>
   : userType === 'admin' ?
    <>
    <Route path="/model_20" element={<Model_20/>}/>
     <Route path="/Inventory" element={<Inventory/>}/>
    <Route path="/AssetRegistration" element={<AssetRegistration/>}/>
    <Route path="/model_19" element={<Model_19/>}/>
    <Route path="/model_22" element={<Model_22/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/setting" element={<Setting/>}/>
    <Route path="/registration" element={<Registration/>}/>
    </>
  : userType === 'purchaser'?
    <>
    <Route path="/model_20" element={<Model_20/>}/>
    
    </>
   :  userType === 'auditor' ? 
    <>
    <Route path="/model_20" element={<Model_20/>}/>
    <Route path="/Inventory" element={<Inventory/>}/>
    <Route path="/AssetRegistration" element={<AssetRegistration/>}/>
    <Route path="/model_19" element={<Model_19/>}/>
    <Route path="/model_22" element={<Model_22/>}/>
    <Route path="/category" element={<Category/>}/>
    </>
  :(userType === 'director') ?
     <></> : <></>
  
}else return <Navigate to={props.to}/>

}

export default RequireAuth;

