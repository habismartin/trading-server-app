import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { GiTrade } from "react-icons/gi";
import '../styles/trading.css'

let tvScriptLoadingPromise;

export default function TradingViewWidget() {

  const [prediction, setPrediction] = useState(null);
  const [result, setResult] = useState(null);

  const handlePrediction = (selectedPrediction) => {
    setPrediction(selectedPrediction);

    // Simulated trading logic
    const randomOutcome = Math.random() < 0.5 ? 'Over' : 'Under';
    setResult(randomOutcome === selectedPrediction ? 'Win' : 'Loss');
  };

  const[switchOptions, setSwitchOptions] = useState()

  const handleSwitch =()=>{
    setSwitchOptions ((prev)=>!prev)
  }
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://app.requestly.io/delay/1200000/s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_ee15e') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            // enable_publishing: true,
            gridColor: "rgba(240, 243, 250, 0.07)",
            // withdateranges: true,
            // range: "YTD",
            // hide_side_toolbar: false,
            allow_symbol_change: true,
            // details: true,
            // hotlist: true,
            // calendar: true,
            // show_popup_button: true,
            popup_width: "1000",
            popup_height: "650",
            container_id: "tradingview_ee15e"
          });
        }
      }
    },
    []
  );

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div className='tradingview-widget-container' style={{ height: "88.5vh", width: "100%" }}>
      <div id='tradingview_ee15e' style={{ height: "calc(100%)", width: "100%" }} />

      <div className="place-trades">
        <div className="switch-trade-option" onClick={handleSwitch}><HiOutlineSwitchHorizontal/></div>
        <div className="buttons">

          {
            switchOptions ? 
          <form action="" onSubmit={handleSubmit}>
            <h1><GiTrade/>Even/Odd</h1>

            <div className="inputs-trade-wrapper">
            <div>
            <label htmlFor="time">Timer</label>
            <input type="timer" name='time' id='time'/>
            </div>
            <div>
            <label htmlFor="investment">Investment</label>
            <input type="number" name='investment' id='investment'/>
            </div>
            </div>

            <p className='payout-text-mb'>Your payout: <h6>N5,000</h6></p>
            <div className="trade-btns-wrapper">
            <button onClick={() => handlePrediction('Even')} className='trade-btn even'>Even <PiDiamondsFourDuotone className='icon'/></button>
            <p className='payout-text-dt'>Your payout: <h6>N5,000</h6></p>
            <button onClick={() => handlePrediction('Odd')} className='trade-btn odd'>Odd <TbTriangleSquareCircle className='icon'/></button>
            {prediction && (
             <p>Your prediction: <strong>{prediction}</strong></p>
             )}
             {result && (<p>Result: <strong>{result}</strong></p>
             )}
            </div>
          </form>:  

          <form action="" onSubmit={handleSubmit}>
            <h1><GiTrade/>Over/Under</h1>

            <div className="inputs-trade-wrapper">
            <div>
            <label htmlFor="time">Timer</label>
            <input type="timer" name='time' id='time'/>
            </div>
            <div>
            <label htmlFor="investment">Investment</label>
            <input type="number" name='investment' id='investment'/>
            </div>
            </div>

            <p className='payout-text-mb'>Your payout: <h6>N5,000</h6></p>
            <div className="trade-btns-wrapper">
            <button onClick={() => handlePrediction('Over')} className='trade-btn over'>Over <IoMdArrowRoundUp className='icon'/></button>
            <p className='payout-text-dt'>Your payout: <h6>N5,000</h6></p>
            <button onClick={() => handlePrediction('Under')} className='trade-btn under'>Under <IoMdArrowRoundDown className='icon'/></button>
            </div>
            {prediction && (
             <p>Your prediction: <strong>{prediction}</strong></p>
             )}
             {result && (<p>Result: <strong>{result}</strong></p>
             )}
          </form>
          }
        </div>
      </div>
    </div>
  );
}




