import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from "react";
import '../styles/Navbar.css'
import '../App.css'
import { FiGlobe } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { Cross as Hamburger } from 'hamburger-react'

const Navbar = () => {


  //show language opions
  const [showLanguage,setShowLanguage] = useState(false);
  const handleShowLanguage = () => {
        setShowLanguage( prev => !prev )
  }
  let languageRef = useRef();
  useEffect(() => {
      let handler = (e)=> {
          if(!languageRef.current.contains(e.target)){
              setShowLanguage(false);
          }
      }
      document.addEventListener("mousedown", handler);

      return()=>{
          document.removeEventListener("mousedown", handler);
      }
  },[]);

  //responsivepart
  const [showNavLanguage,setShowNavLanguage] = useState(false);
  const handleShowNavLanguage = () => {
        setShowNavLanguage( prev => !prev )
  }
  let languageNavRef = useRef();
  useEffect(() => {
    if (languageNavRef.current) {
        let handler = (e) => {
            if (!languageNavRef.current.contains(e.target)) {
                setShowNavLanguage(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }
}, []);

  //display responsve nav

  const [showNav,setShowNav] = useState(false);
  const handleShowNav = () => {
          setShowNav( prev => !prev )
  }


  showNav?document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  
  return (
    <div className="nav-container">
      <div className='navbar'>
      <div className="nav-left">
        <Link to="/"><div className="logo"></div></Link>
        <div className="navlinks">
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/about">About us</NavLink>
        </div>
      </div>
      <div className="nav-right">
        <div className="language-container" ref={languageRef}>
          <div className="language" style={showLanguage ? { background: '#232634', color: '#2b99ff' } : {}} onClick={handleShowLanguage}><FiGlobe/>EN{showLanguage? <FiChevronUp/>:<FiChevronDown/>}
          </div>
          { 
              showLanguage &&
                      <div className="language-select">
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                      <div>English</div>
                    </div>
          }

        </div>
      <Link to="/login"><button className='login-btn'>Log in</button></Link>
      <Link to="/signup"><button className='signup-btn'>Sign up</button></Link>


    
      {/* responsive */}
      <p className="menu" onClick={handleShowNav}> <Hamburger distance="lg" rounded size={20} color="#fff" /></p>
  
      </div>


    </div>
    {
      showNav&&
      <div className="responsive-menu">
      <div className='res-links'>
      <Link to="/faq" onClick={handleShowNav}>FAQ <FiChevronRight size={25} color="#5c5e68"/></Link>
      <Link to="/about" onClick={handleShowNav}>About us <FiChevronRight size={25} color="#5c5e68"/></Link>
      </div>

      <div className="reslanguage-container" ref ={languageNavRef}>
      <div className="res-language" onClick={handleShowNavLanguage}><div className="globe-en"><FiGlobe size={23}/>English</div><FiChevronUp size={25} color="#5c5e68"/>
      </div>
      {
        showNavLanguage &&
        <div className="reslanguage-select">
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
             <div>English</div>
      </div>
      }
      <p>Copyright © 2023 Quotex. All rights reserved</p>
      </div>
    </div>
    }
    </div>

    
  )
}

export default Navbar;
