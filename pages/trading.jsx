import React from 'react'
import TradingNav from '../components/tradingnav';
import TradingTopNav from '../components/tradingTopNav';
import TradingWidget from '../components/tradingWidget';
import "../styles/trading.css"


const Trading = () => {
  return (
    <div>
        <div className='check'>
          <div className="tradingNav">
              <TradingTopNav/>
          </div>
        </div>

      <div className="trading-section">

      <div className='tradingnav'>
        <TradingNav/>
      </div>
      <div className='widget'>
        <TradingWidget/>
      </div>

      </div>


    </div>
  )
}

export default Trading;
