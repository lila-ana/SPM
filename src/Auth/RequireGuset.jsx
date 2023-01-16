import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequireGuest = () => {
  const token = localStorage.getItem("accessToken");
  // const token = true;
  if (token) {
    return <Navigate to="/" replace={true} />;
  } else return <Outlet />;
};

export default RequireGuest;
