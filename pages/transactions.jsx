import React from 'react'
import AccountTopNav from "../components/accountTopNav";
import TradingNav from "../components/tradingnav";
import TradingTopNav from "../components/tradingTopNav";
import Transactionstable from '../components/transactionsTable';
import '../styles/transactions.css'


const Transactions = () => {
  return (
    <div className='transactions-wrapper'>
       <TradingTopNav/>
       <div className='transactions-body-wrapper'>
        <TradingNav/>
        <div className="transactions-body">
            <div className="padding">
            <div className="transactions-body-container">
                <AccountTopNav/>
                <Transactionstable/>
            </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Transactions
