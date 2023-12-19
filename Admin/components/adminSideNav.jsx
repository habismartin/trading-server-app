import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { RiHomeLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { TbCircleArrowDownLeftFilled } from "react-icons/tb";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { HiMiniSignal } from "react-icons/hi2";
import { LightModeContext } from '../../context/lightModeContext';
import { useContext } from 'react';
import '../adminStyles/sideNav.css'


const AdminSideNav = () => {

  const {dispatch} = useContext(LightModeContext)

  return (
    <div className='adminSideNav'>
      <div className="logo"></div>
      <hr />
      <div className="links">
        <NavLink to = "/admin"><RiHomeLine/><p>DashBoard</p></NavLink>
        <NavLink to = "/adminusers"><FaUsers/><p>Users management</p></NavLink>
        <NavLink to = "/admindeposit"><TbCircleArrowUpRightFilled/><p>Deposits</p></NavLink>
        <NavLink to = "/adminwithdrawal"><TbCircleArrowDownLeftFilled/><p>Withdrawals</p></NavLink>
        <NavLink to = "/admintransactions"><PiArrowsClockwiseBold/><p>Transactions</p></NavLink>
        <NavLink to = "/"><IoMdSettings/><p>Settings</p></NavLink>
        <NavLink to = "/"><MdOutlineLogout/><p>Logout</p></NavLink>
      </div>
      <h5>THEMES</h5>
      <div className="themes">
        <div className="dark" onClick={()=> dispatch({type:"DARK"}) }></div>
        <div className="light" onClick={()=> dispatch({type:"LIGHT"}) }></div>
      </div>
    </div>
  )
}

export default AdminSideNav
