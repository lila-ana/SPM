import React, { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../Assests/ambo-5fe0cb63411f830df0d3e80b91d3f1b9ffa9ce11970b1efbec2a09f2f404f1d2.png"

export default function Navbar(props) {
  const [show, setShow] = useState(false);
  const params = useParams();


  function handleShow() {
    setShow(true);
  }

  return (
    <div>
      <div className='bg-[url("../public/bg-image.jpg")]  bg-no-repeat bg-cover h-[500px]'>
        <div className="flex justify-between p-5">
          <div>
            <img
              className="w-[100px] h-[100px]"
              alt="Ambo University Logo"
              src={image}
            />
          </div>
          <div className="items-center">
            <ul className="flex gap-[50px] text-[#000000] font-semibold mr-[25px] ">
              <li className=" hover:text-grey hover:font-extrabold text-[20px]">
                <a href="/login">Login </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid  justify-center items-center ">
          <p className="text-[#000000] text-[50px] text-center font-extrabold storke font-Raleway">
            {" "}
            {props?.name == null ? "AMBO UNIVERSITY" : props?.name}{" "}
          </p>
          <p className="text-center text-[24px] font-Raleway font-semibold text-[#000000]">
            {" "}
            Hachalu Hundessa Campus 
          </p>
          <p className=" pt-[150px] text-center text-[24px] font-extrabold drop-shadow text-[#000000]">
            Web based Inventory Management System 
          </p>
        </div>
      </div>
    </div>
  );
}
