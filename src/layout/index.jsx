import React from "react";
import Footer from "../Components/AboutUs/footer";
import Navbar from "../Components/AboutUs/Navbar";
// import ProjectDescription from '../pages/ProjectDescription'

export default function index(props) {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <div className="px-[100px]">{props.children}</div>
      <Footer />
    </div>
  );
}
