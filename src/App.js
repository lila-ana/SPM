import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Aboutus from "./pages/aboutus";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Dashboard/sidebar";
import AssetRegistration from "./Pages/Sidebar/AssetRegistration";
import Inventory from "./Pages/Sidebar/Inventory";
import Model_19 from "./Pages/Sidebar/Model_19";
import Model_20 from "./Pages/Sidebar/Model_20";
import Model_22 from "./Pages/Sidebar/Model_22";
import Report from "./Pages/Sidebar/Report";
import Setting from "./Pages/Sidebar/Setting";
import Login from "./Pages/Login/login";
import RequireAuth,{sidebarCheck} from "./Auth/RequireAuth";
import Registration from "./Pages/Signup/registration";
import Category from "./Components/Category/categoryCreate";

const App = () => {
  // const protect = (prop)=>{
  //   const access = localStorage.getItem("isAdmin")
  //   if()
  // }
  const InterfaceSelector = ({ userType }) => {
    if (userType === 'user') {
      return <UserInterface />;
    } else if (userType === 'admin') {
      return <AdminInterface />;
    } else if (userType === 'purchaser') {
      return <PurchaserInterface />;
    } else if (userType === 'auditor') {
      return <AuditorInterface />;
    } else if (userType === 'director') {
      return <DirectorInterface />;
    } else {
      return <div>Invalid User Type</div>;
    }
  };
  return (
    <>
    
    
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
      {/* {sidebarCheck()?<Sidebar > */}
          <Sidebar>
          <Routes>
              <Route>
                <Route path="/AssetRegistration" element={<AssetRegistration/>}/>
                <Route path="/Inventory" element={<Inventory/>}/>
                <Route path="/model_19" element={<Model_19/>}/>
                <Route path="/model_20" element={<Model_20/>}/>
                <Route path="/model_22" element={<Model_22/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/setting" element={<Setting/>}/>
              </Route>
          </Routes>
          </Sidebar>
          {/* </Sidebar>:<></>} */}
      
    </BrowserRouter>
    </>
  );
};

export default App;
