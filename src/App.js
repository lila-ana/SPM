import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Aboutus from "./pages/aboutus";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Dashboard/sidebar";
import Login from "./Pages/Login/login";
import RequireAuth,{sidebarCheck} from "./Auth/RequireAuth";
import Registration from "./Pages/Signup/registration";
import Category from "./Components/Category/categoryCreate";
import AssetRegistration from "./Pages/Sidebar/AssetRegistration";
import Inventory from "./Pages/Sidebar/Inventory";
import Model_19 from "./Pages/Sidebar/Model_19";
import Model_20 from "./Pages/Sidebar/Model_20";
import Model_22 from "./Pages/Sidebar/Model_22";
import Setting from "./Pages/Sidebar/Setting";

const App = () => {
  const localData = localStorage.getItem("role");
  const [role,setRole] = useState(localData != null ? localData:{})
  console.log('---->',localData)
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setData={setRole}/>}/>
      </Routes>
      {sidebarCheck()?<Sidebar >
          {/* <Sidebar> */}
          <Routes>
              <Route>
                {
                  role === 'User' ? 
                  <>
                  <Route path="/model_20" element={<Model_20/>}/>
                  <Route path="/Inventory" element={<Inventory/>}/>
                 </>
                : role === 'Admin' ?
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
               : role === 'Purchaser'?
                 <>
                 <Route path="/model_20" element={<Model_20/>}/>
                 
                 </>
                :  role === 'Auditor' ? 
                 <>
                 <Route path="/model_20" element={<Model_20/>}/>
                 <Route path="/Inventory" element={<Inventory/>}/>
                 <Route path="/AssetRegistration" element={<AssetRegistration/>}/>
                 <Route path="/model_19" element={<Model_19/>}/>
                 <Route path="/model_22" element={<Model_22/>}/>
                 <Route path="/category" element={<Category/>}/>
                 </>
               :(role === 'Director') ?
                  <></> : <></>
                  
                }
                
      {/* <Route path="/model_20" element={<Model_20/>}/>
     <Route path="/Inventory" element={<Inventory/>}/>
    <Route path="/AssetRegistration" element={<AssetRegistration/>}/>
    <Route path="/model_19" element={<Model_19/>}/>
    <Route path="/model_22" element={<Model_22/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/setting" element={<Setting/>}/>
    <Route path="/registration" element={<Registration/>}/> */}
                
              </Route>
          </Routes>
          {/* </Sidebar> */}
          </Sidebar>:<></>}
      
    </BrowserRouter>
    </>
  );
};

export default App;
