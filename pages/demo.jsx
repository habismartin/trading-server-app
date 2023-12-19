import React, { useState } from 'react';
import { useEffect,useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'
import TradingTopNav from '../components/tradingTopNav';
import TradingNav from '../components/tradingnav';
import TradingWidget from '../components/tradingWidget';
import { MdRocketLaunch } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-hot-toast';
import { logout } from '../redux/userSlice';
import ChangeCurrency from '../components/changeCurrency';
import CurrencyFormatter from '../utilities/currencyFormatter'
import '../styles/tradingNav.css'
import '../styles/demo.css'




const Demo = () => {
  const [showChangeCurrency, setShowChangeCurrency] = useState(false);
  const handleShowChangeCurrency = () =>{
    setShowChangeCurrency((prev)=>!prev);
  }

  const userData = useSelector(state=>state?.user?.userAuth)

  console.log(userData)

  const demoBalance = userData.balance + 10000;

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const [prediction, setPrediction] = useState(null);
  const [result, setResult] = useState(null);

  const handlePrediction = (value) => {
    setPrediction(value);
    setResult(null); 
  };

  const handleTrade = () => {
    const randomResult = Math.random() < 0.5 ? 'even' : 'odd';
    setResult(randomResult);
  };


  //topnav

  const [showAccountSwitch, setShowAccountSwitch] = useState(false)

  const handleShowAccountSwitch = () =>{
    setShowAccountSwitch( prev => !prev )
  }

  let accountRef = useRef();
  useEffect(() => {
      let handler = (e)=> {
          if(!accountRef.current.contains(e.target)){
            setShowAccountSwitch(false);
          }
      }
      document.addEventListener("mousedown", handler);

      return()=>{
          document.removeEventListener("mousedown", handler);
      }
  },[]);

  const handleLogout = () =>{
    dispatch(logout())
    navigate("/")
    toast("Logged out successfully")
  }


  return (
    <div>

      <div className='check'>

          <div className="tradingNav">
          {
          showChangeCurrency &&
          <div className="change-currency-show">
          <ChangeCurrency />
          </div>
        }
          <div className="trading-topnav">
                <Link to ="/demo"><div className="trading-logo"></div></Link>
                <h5 className="web-text">WEB TRADING PLATFORM</h5>
                <Link to = "/deposit"><div className="bonus"><MdRocketLaunch color='#3b405b' size={30}/> <p>Get a 30% bonus on your first deposit</p> <h2>30%</h2></div></Link>
                <div className="right-top-nav">
                <div className="notification"><IoIosNotificationsOutline size={23}/></div>
                <div className="account-switch-container">

                <div ref={accountRef}>                
                     <div className="account-switch" onClick={handleShowAccountSwitch}><FaTelegramPlane className="plane" color='#35cb02'/><div className="live-account"><h6> DEMO ACCOUNT </h6><p>{CurrencyFormatter(userData?.currency,userData?.demoBalance)}</p></div><FaAngleDown className={`icon ${showAccountSwitch ? 'expanded' : ''}`}/></div>
                     
                     {
                      showAccountSwitch&&
                      <div className="account-swicthbox">
                      <div className="see">
                        <div className="standard-profit"><FaTelegramPlane color='#35cb02' size={20}/> <h5>STANDARD: <p>+0% profit</p></h5> </div>
                        <div className="eye"><IoEye size={15}/></div>
                      </div>
                      <h3>{userData.email}</h3>
                      <h6>ID:{userData._id}</h6>
                      <h2 className="currency-change"><p>Currency: {userData.currency}</p><button onClick={handleShowChangeCurrency}>CHANGE</button></h2>
                      <div className="buttons">
                        <Link to = "/trading"><div className='switch'><div className="round lives"></div><h5>Live account <p>{CurrencyFormatter(userData?.currency,userData?.balance)}</p></h5></div></Link>
                        <Link to = "/demo"><div className='switch'><div className="round demos"><FiCheck size={12}/></div><h5>Demo account <p>{CurrencyFormatter(userData?.currency,userData.demoBalance)}</p></h5></div></Link>
                      </div>
                      <p className='logout' onClick={handleLogout}><MdOutlineLogout/>Logout</p>
                      </div>
                     }
                     </div>

                </div>

                <div className="buttons">
                    <Link to = "/deposit"><button className='deposit'><FaPlus className='d-plus' size={14}/>Deposit</button></Link>
                    <Link to = "/withdrawal"><button className='withdrawal'>Withdrawal</button></Link>
                </div>
                </div>
            </div>
          </div>
        </div>

      <div className="trading-section">

      <div className='tradingnav'>
        <TradingNav/>
      </div>
      <div className='widget'>

      <TradingWidget/>

        {/* <div>

        <h2>Make a Prediction</h2>
      <div>
        <button onClick={() => handlePrediction('even')} disabled={prediction === 'even'}>
          Even
        </button>
        <button onClick={() => handlePrediction('odd')} disabled={prediction === 'odd'}>
          Odd
        </button>
      </div>

      <h2>Place a Trade</h2>
      <div>
        <button onClick={handleTrade} disabled={!prediction}>
          Place Trade
        </button>
      </div>

      {result && (
        <div>
          <h2>Result</h2>
          <p>{`You predicted ${prediction}, and the result is ${result}.`}</p>
        </div>
      )}

        </div> */}

      </div>

      </div>


    </div>
  );
};

export default Demo;
