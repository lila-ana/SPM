import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./pages/aboutus";
import Home from "./pages/home";
import Login from "./pages/Login";
import Solutions from "./pages/solutions";
import Fill from "./pages/fill";
import Admin from "./pages/admin";
import ProjectDescription from "./pages/ProjectDescription";
import Modal from "./pages/Modal";
import RequireAuth from "./Auth/RequireAuth";
import RequireGuest from "./Auth/RequireGuset";
import Card from "./Components/Common/card";
import Registration from "./pages/registration";
import SolutionsDashboard from "./pages/SolutionsDashboard";
import Multiselect from "./pages/multiSelect";
import MultiSelectDropdownWithAxios from "./pages/MultiSelectDropdownWithAxios";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<RequireAuth />}>
            <Route path="/fill" element={<Fill />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="/modal" element={<Modal />} />
          </Route>
          <Route element={<RequireGuest />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/solutions/:id" element={<Solutions />} />
        <Route
          path="/projectDescription/:id"
          element={<ProjectDescription />}
        />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/solutionsDashboard" element ={<SolutionsDashboard/>}/>
        <Route path="/MultiSelectDropdownWithAxios" element ={<MultiSelectDropdownWithAxios/>}/>
        <Route path="/Multiselect" element ={<Multiselect/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
