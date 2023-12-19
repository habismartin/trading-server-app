import React from 'react'
import { FiSearch } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { FaExpand } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import { Spin as Hamburger } from 'hamburger-react'
import adminImg from '../img/user-icon.png'
import { LightModeContext } from '../../context/lightModeContext';
import { useContext } from 'react';
import '../adminStyles/adminNav.css'

const AdminNav = () => {

  const {dispatch} = useContext(LightModeContext)

  return (
    <div className='adminNav'>
      <div className="wrapper">
        <div className="search"><input type="text" placeholder='Search...'/><FiSearch/></div>

        <div className="right-items">
            <div className="admin-language"><MdLanguage/>Eng</div>
            <div className="themes" onClick={()=> dispatch({type:"TOGGLE"}) }><FiMoon/></div>
            <div className="expand"><FaExpand/></div>
            <div className="notfication"><FaRegBell/><div className='num'>1</div></div>
            <div className="chat"><MdChatBubbleOutline/><div className='num'>2</div></div>
            <div className="menu"><Hamburger size={20}/></div>
            <div className='img'><img src={adminImg} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default AdminNav
