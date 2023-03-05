import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Navbar(props) {
  const [show, setShow] = useState(false);
  const params = useParams();


  function handleShow() {
    setShow(true);
  }

  return (
    <div>
      <div className='bg-[url("../public/fabio-oyXis2kALVg-unsplash.jpg")]  bg-no-repeat bg-cover h-[500px]'>
        <div className="flex justify-between p-5">
          <div>
            <img
              className="w-[100px] h-[100px]"
              alt="IE Logo"
              src="https://ienetworks.co/pms/images/logos.png"
            />
          </div>
          <div className="items-center">
            <ul className="flex gap-[50px] text-[#FFFFFF] font-normal mr-[25px] ">
              <li className=" hover:text-[#1b9c85] hover:font-semibold">
                <a href="/">Home </a>
              </li>
              <li className=" hover:text-[#1b9c85] hover:font-semibold">
                <a href="/aboutus">About </a>
              </li>
              <li className=" hover:text-[#1b9c85] hover:font-semibold">
                <a href={`solutions/${1}`}>
                  Solutions 
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid  justify-center items-center ">
          <p className="text-[#ffffff] text-[50px] text-center font-semibold storke font-sans">
            {" "}
            {props?.name == null ? "Welcome to IE Networks" : props?.name}{" "}
          </p>
          <p className="text-center text-[24px] font-semibold text-[#ffffff]">
            {" "}
            Get Job Done
          </p>
        </div>
      </div>
    </div>
  );
}
