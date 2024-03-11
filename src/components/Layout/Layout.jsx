import React, { useState } from 'react'
import { FaBeer } from 'react-icons/fa'

import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Home from '../../pages/Home/Home';
import './Layout.css';
import Menu from '../Menu\'/Menu';

function Layout() {
  const [toggle,setoggle]=useState(true)
  const handle=()=>{
    setoggle(!toggle)
  }
  return (
    <div>
      <div className="sidebar-section">
        <div className={toggle ? ("sidebar-toggle sidebar"):("sidebar")}>
            <div className="toggleicon">
              
                <p onClick={handle}>
                 {
                   toggle?(< AiOutlineDoubleLeft/>):(<AiOutlineDoubleRight/>)  
                 }
                  </p>
            </div>
            <Menu toggle={toggle}></Menu>
        </div>
        <div className="container">
            <Home></Home>
        </div>
      </div>
    </div>
  )
}

export default Layout
