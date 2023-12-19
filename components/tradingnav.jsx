import React from 'react'
import { useState } from 'react';
import { Link, useNavigate,NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GiNetworkBars } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { PiChartLineFill } from "react-icons/pi";
import { LightModeContext } from '../context/lightModeContext';
import { Divide as Hamburger } from 'hamburger-react'
import { MdOutlineLogout } from "react-icons/md";
import { useContext } from 'react';
import { logout } from "../redux/userSlice";
import { toast } from 'react-hot-toast';
import '../styles/tradingNav.css'

const TradingNav = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    toast("Logged out successfully");
  };

  const userData = useSelector(state => state?.user?.userAuth);


  const {dispatches} = useContext(LightModeContext)

  const [showSupport, setShowSupport] = useState(false)

  const handleShowSupport = () =>{
    setShowSupport( prev => !prev )
  }
  const [showSettings, setShowSettings] = useState(false)

  const handleShowSettings = () =>{
    setShowSettings( prev => !prev )
  }

  const [showMb, setShowMb] = useState(false)

  const handleShowMb = () =>{
    setShowMb( prev => !prev )
  }

  return (

    <div className='trading-nav'>

      <div className='dt-nav'>
        <div className="trading-navbar">
            <div onClick={handleShowSupport}><MdContactSupport /><p>SUPPORT</p></div>
            <NavLink to = "/trading"><GiNetworkBars /><p>TRADE</p></NavLink>
            <NavLink to = "/demo"><RiGraduationCapFill /><p>DEMO</p></NavLink>
            <NavLink to = "/account"><FaUser /><p>ACCOUNT</p></NavLink>
            <NavLink to = "/analytics"><FaChartPie /><p>ANALYTICS</p></NavLink>
            <div onClick={handleShowSettings}><IoSettings /><p>SETTINGS</p></div>
        </div>

        {
          showSupport&&
          <div className="support">
          <h2><p>Help</p>  <IoMdClose onClick={handleShowSupport}/></h2>
          <Link to ="/faq"><div><BsFillQuestionSquareFill color='#016fd3'/><p>FAQ</p></div></Link>
          <div><RiGraduationCapFill color='#016fd3'/><p>Tutorials</p></div>
        </div>
        }

        {
          showSettings &&
          <div className="support settings">
          <h2><p>Settings</p>  <IoMdClose onClick={handleShowSettings}/></h2>
  
            <label htmlFor="language"> Language</label>
            <select name='newPassword' id='newPassword'>
  
              <option value="">eng</option>
              <option value="">eng</option>
              <option value="">eng</option>
              <option value="">eng</option>
              <option value="">eng</option>
              <option value="">eng</option>
              <option value="">eng</option>
              <option value="">eng</option>
              <option value="">eng</option>
              
            </select>
            <label htmlFor="time"> Time zone</label>
            <input type="time" name='time' id='time'/>
  
            <h5>Templates</h5>
  
            <div className="light mode" onClick={()=> dispatches({type:"LIGHT"}) }><MdLightMode color='#ff8a01'/> Light Mode</div>
            <div className="dark mode" onClick={()=> dispatches({type:"DARK"}) }><MdDarkMode color='#ff8a01'/> Dark Mode</div>
          </div>
        }
        </div>

        <div className="mb-trading-nav">
            <NavLink to = "/FAQ"><MdContactSupport /></NavLink>
            <NavLink to = "/trading"><PiChartLineFill/></NavLink>
            <NavLink to = "/account"><FaUser /></NavLink>
            <div><IoSettings /></div>
            <div onClick={handleShowMb}><Hamburger size={25}/></div>
        </div>
        {
          showMb &&
          <div className='mb-menu'>
          <h4>{userData?.email}</h4>
          <div className='mb-menu-links'>
          {userData?.email === process.env.REACT_APP_ADMIN_EMAIL && (
              <Link to="/admin">
                <div>Admin Dashboard</div>
              </Link>
            )}
          <Link to="/deposit">Deposit</Link>
          <Link to="/">Withdrawal</Link>
          <Link to="/">Transactions</Link>
          <Link to="/">Trades</Link>
          <Link to="/">Account</Link>
          </div>
          <p onClick={handleLogout}><MdOutlineLogout/>Logout</p>
        </div>
        }

    </div>
  )
}

export default TradingNav
