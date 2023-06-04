import React, { useState } from 'react';
import image from "../../Assests/ambo-5fe0cb63411f830df0d3e80b91d3f1b9ffa9ce11970b1efbec2a09f2f404f1d2.png"
import "./sidebar.css";
import {
    FaBars,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaFileInvoiceDollar
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import HorizontalBar from '../HorizontalBar/horizontalBar';
import { MdOutlineInventory } from 'react-icons/md';
import { AiFillFileAdd, AiOutlineSetting } from 'react-icons/ai';

<HorizontalBar/>
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
   
    const menuItem=[
        {
            path:"/AssetRegistration",
            name:"Asset Registartion",
            icon:<AiFillFileAdd/>
        },
        {
            path:"/Inventory",
            name:"Inventory",
            icon:<MdOutlineInventory/>
        },
        {
            path:"/Model_19",
            name:"Model-19",
            icon:<FaFileInvoiceDollar/>
        },
        {
            path:"/Model_20",
            name:"Model-20",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Model_22",
            name:"Model-22",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Report",
            name:"Report",
            icon:<FaThList/>
        },
        {
            path:"/Setting",
            name:"Setting",
            icon:<AiOutlineSetting/>
        }
    ]
    return (
        <div className="container">
           <div
           style={{width: isOpen ? "250px" : "50px"}} 
           className="sidebar w-max-widith">
               <div className="top_section">
                   <div className='flex items-center justify-between gap-[10px]'>
                        <img
                            className=''
                            alt='Ambo University Logo'
                            src={image}
                         />
                    <h1 style={{display: isOpen ? "block" : "none"}} className="text-[20px] font-extrabold"> IMS </h1>
                    
                    </div>
                   <div style={{marginLeft: isOpen ? "100px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="text-[15px] font-semibold">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="text-[15px] font-semibold">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar; 