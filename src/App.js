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
import RequireAuth from "./Auth/RequireAuth";
import Registration from "./Pages/Signup/registration";

const App = () => {
  return (
    <>
    
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
      <Sidebar >
          <Routes>
              <Route element={<RequireAuth />}>
                <Route path="/" element={<AssetRegistration/>}/>
                <Route path="/AssetRegistration" element={<AssetRegistration/>}/>
                <Route path="/Inventory" element={<Inventory/>}/>
                <Route path="/model_19" element={<Model_19/>}/>
                <Route path="/model_20" element={<Model_20/>}/>
                <Route path="/model_22" element={<Model_22/>}/>
                <Route path="/report" element={<Report/>}/>
                <Route path="/setting" element={<Setting/>}/>
              </Route>
          </Routes>
          </Sidebar>
    </BrowserRouter>
    </>
  );
};

export default App;
