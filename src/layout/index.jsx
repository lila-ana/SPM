import React from "react";
import Footer from "../Components/Footer/footer";
import Navbar from "../Components/navbar/navbar";

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
