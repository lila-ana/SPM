import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  // sessionStorage.setItem("token", JSON.stringify(userToken));
  const token = localStorage.getItem("accessToken");
  // const token = true;
  return token ? <Outlet /> : <Navigate to="/login" />;
};
export default RequireAuth;
