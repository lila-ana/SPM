import React from "react";
import Footer from "../Components/AboutUs/Footer";
import Navbar from "../Components/AboutUs/Navbar";
// import ProjectDescription from '../pages/ProjectDescription'

export default function index(props) {
  return (
    <div className="flex flex-col gap-5">
      <Navbar name={props?.name} />
      <div
        className={
          props?.paddings == undefined ? "px-[100px]" : props?.paddings
        }
      >
        {props.children}
      </div>
      <Footer />
      
    </div>
  );
}
