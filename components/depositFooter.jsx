import React from "react";
import "../styles/depositMenu.css";
import { AiFillBank } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { PiPercentBold } from "react-icons/pi";
import Visaverify from '../images/visaverify.png'
import Securepay from '../images/securepayment@2x.png'
import Mcard from '../images/mcard.png'
import Sslsecure from '../images/sslsecure.png'
import Dsecure from '../images/3dsecure.png'

const DepositFooter = () => {
  return (
    <div>
      <div className="deposit-footer">
        <div className="amounts">
          <p><AiFillBank color="#10a959"/> Minimum deposit amount: <span>N5,000</span></p>
          <p><FaCreditCard color="#10a959"/> Maximum withdrawal amount: <span>N50,0000</span></p>
          <p><FaAngleDoubleRight color="#10a959"/> Quick withdrawal from your account</p>
          <p><PiPercentBold color="#10a959"/> No hidden charges</p>
        </div>
        <div className="verifiers">
            <img src={Visaverify}/>
            <img src={Securepay}/>
            <img src={Mcard}/>
            <img src={Sslsecure}/>
            <img src={Dsecure}/>
        </div>
      </div>
    </div>
  );
};

export default DepositFooter;
