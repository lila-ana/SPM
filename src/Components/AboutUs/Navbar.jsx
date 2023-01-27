import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import department from "../../utils/Department.json";
import get from "../../features/get";
export default function Navbar(props) {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }

  return (
    <div>
      {/* navbar, welcome, and logo */}

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
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button>Solutions</Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-[#1b9c85] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {get?.getsolutions()?.map((items) => (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href={`/solutions/${items?.id}`}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-[#1b9c85]"
                                    : "text-[#1b9c85]",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {items.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
