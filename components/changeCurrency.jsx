import React from "react";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import "../styles/changeCurrency.css";

const ChangeCurrency = () => {

    const [showChangeCurrency, setShowChangeCurrency] = useState(true);
    const handleShowChangeCurrency = () =>{
      setShowChangeCurrency((prev)=>!prev);
    }
  const userData = useSelector((state) => state.user);

  return (
    <div>
    {
    showChangeCurrency &&
    <div className="change-currency">
      <div className="change-currency-box">
        <div className="change-currency-container">
          <h1><span>Exchange Form</span> <span className="currency-close-icon" onClick={handleShowChangeCurrency}><IoMdClose /></span></h1>
          <form action="">
            <div className="change-currency-wrapper">
              <div className="currencies">
                <label htmlFor="currentcurrency">My Currency</label>
                <div className="current-currency" id="currentcurrency">{userData.currency}</div>
              </div>
              <div className="currencies">
                <label htmlFor="changecurrencyoptions">New currency</label>
                <input type="text" id="changecurrencyoptions" />
              </div>
            </div>
            <p>Exchange rate: 1,200 NGN<FaLongArrowAltRight/> 1 USD</p>
            <div className="change-currency-btns">
              <button className="currency-proceed"><FaCheck />Yes proceed</button>
              <button className="currency-back" onClick={handleShowChangeCurrency}>No, go back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    }
    </div>
  );
};

export default ChangeCurrency;
