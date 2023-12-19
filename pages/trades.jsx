import React from 'react'
import AccountTopNav from "../components/accountTopNav";
import TradingNav from "../components/tradingnav";
import TradingTopNav from "../components/tradingTopNav";
import Tradestable from '../components/tradesTable';
import '../styles/transactions.css'


const Trades = () => {
  return (
    <div className='trades-wrapper'>
       <TradingTopNav/>
       <div className='trades-body-wrapper'>
        <TradingNav/>
        <div className="trades-body">
            <div className="padding">
            <div className="trades-body-container">
            <AccountTopNav/>
            <Tradestable/>
            </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Trades
