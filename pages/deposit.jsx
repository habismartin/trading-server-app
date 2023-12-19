import React from "react";
import { useSelector } from "react-redux";
import TradingNav from "../components/tradingnav";
import TradingTopNav from "../components/tradingTopNav";
import { FaCreditCard } from "react-icons/fa6";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { BsBank2 } from "react-icons/bs";
import Depositcard from "../components/depositcard";
import DepositFooter from "../components/depositFooter";
import AccountTopNav from "../components/accountTopNav";
import "../styles/deposit.css";

const Deposit = () => {
  const depositData = useSelector((state) => state.method.methodList);
  const depositCardList = depositData.slice();

  //categories depositmethods
  const depositCardListCryptocurrencies = depositData.filter(el => el.category === "Cryptocurrencies",[]) 
  console.log(depositCardListCryptocurrencies)

  const depositCardListTransfers = depositData.filter(el => el.category === "Transfers",[]) 
  console.log(depositCardListTransfers)

  const depositCardListCards = depositData.filter(el => el.category === "Cards",[]) 
  console.log(depositCardListCards)

  const loadingArray = new Array(1).fill(null)
  
  return (
    <div>
      <div className="check">
        <div className="tradingNav">
          <TradingTopNav />
        </div>
      </div>

      <div className="tradingnav-deposit">
        <TradingNav />
        <div className="payment-methods-wrapper">
          <AccountTopNav/>
        <div className="payment-methods">
        <div className="cards methods">
          <h1><FaCreditCard /> Bank Cards</h1>
          
          {depositCardListCards[0] ?
            depositCardListCards.map((el) => {
              return (
                <Depositcard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  number={el.number}
                  user={el.user}
                  category={el.category}
                />
              );
            })
          :loadingArray.map(el=>{
            return(
              <Depositcard/>
            )
          })
          }
           
        </div>

        <div className="crypto methods">
          <h1><PiCurrencyBtcFill /> Cryptocurrencies</h1>

          {depositCardListCryptocurrencies[0] ?
            depositCardListCryptocurrencies.map((el) => {
              return (
                <Depositcard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  number={el.number}
                  user={el.user}
                  category={el.category}
                />
              );
            })
          :loadingArray.map(el=>{
            return(
              <Depositcard/>
            )
          })
          }
        </div>

        <div className="transfers methods">
          <h1><BsBank2 />Bank transfers</h1>

          {depositCardListTransfers[0] ?
            depositCardListTransfers.map((el) => {
              return (
                <Depositcard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  number={el.number}
                  user={el.user}
                  category={el.category}
                />
              );
            })
          :loadingArray.map(el=>{
            return(
              <Depositcard/>
            )
          })
          }
        </div>

        </div>
          <DepositFooter/>
        </div>

      </div>
    </div>
  );
};

export default Deposit;
