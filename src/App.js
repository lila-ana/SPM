import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./pages/aboutus";
import Home from "./pages/home";
import Login from "./pages/Login";
import Solutions from "./pages/solutions";
import Fill from "./pages/fill";
import Admin from "./pages/admin";
import Registration from "./pages/registration";
import ProjectDescription from "./pages/ProjectDescription";
import Modal from "./pages/Modal";
import RequireAuth from "./Auth/RequireAuth";
import RequireGuest from "./Auth/RequireGuset";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<RequireAuth />}>
            <Route path="/fill" element={<Fill />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/projectDescription/:id"
              element={<ProjectDescription />}
            />
            <Route path="/modal" element={<Modal />} />
          </Route>
          <Route element={<RequireGuest />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/solutions/:id" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
