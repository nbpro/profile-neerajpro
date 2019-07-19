import React from 'react'
import {FaBars, FaClose } from 'react-icons/fa';

function SidebarIcon({handleClick, isOpen}){
  return <span onClick={handleClick}>
    {isOpen ? <FaClose /> : <FaBars/>}
  </span>
}
export default SidebarIcon;
