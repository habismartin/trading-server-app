import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import '../styles/Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top-footer">
        <div className="logo-media">
            <div className="logo"></div>
            <div className="social-media"><a href="#"><h6><FaSquareFacebook size={18} color='#a6aec7'/></h6></a>  <a href="#"><h6><AiFillInstagram size={20} color='#a6aec7'/></h6></a></div>
        </div>
        <div className="links-cover">
            <div className="links">
                <h4>Affiliates</h4>
                <Link to="/signup"><p>Sign up</p></Link>
            </div>
            <div className="links">
                <h4>About us</h4>
                <Link to = "/about"><p>Contacts</p></Link>
            </div>
            <div className="links">
                <h4>FAQ</h4>
                <Link to = "/faq"><p>General questions</p></Link>
                <Link to = "/faq"><p>Financial questions</p></Link>
                <Link to = "/faq"><p>Verification</p></Link>
            </div>
            <div className="links links4">
                <h4>Regulations</h4>
                <Link to = "/about"><p>Privacy policy</p></Link>
                <Link to = "/about"><p>Payment policy</p></Link>
                <Link to = "/about"><p>Service agreement</p></Link>
                <Link to = "/about"><p>Risk disclosure</p></Link>
                <Link to = "/about"><p>Rules of trading operations</p></Link>
                <Link to = "/about"><p>Non-trading operations regulations</p></Link>
            </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>Maxbit LLC. Address: First Floor, First St Vincent Bank LTD Building, James Street, Kingstown, St. Vincent and Grenadines.</p>
        <p>The website services are not available in a number of countries, including USA, Canada, Hong Kong, EEA countries, Russia as well as for persons under 18 years of age.</p>
        <p>Risk Warning: Trading Forex and Leveraged Financial Instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Trading leveraged products may not be suitable for all investors. Trading non-leveraged products such as stocks also involves risk as the value of a stock can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results. Before trading, please take into consideration your level of experience, investment objectives and seek independent financial advice if necessary. It is the responsibility of the Client to ascertain whether he/she is permitted to use the services of the Quotex brand based on the legal requirements in his/her country of residence.</p>
        <p className='last-footer'>Maxbit LLC is the owner of the qxbroker.com domain. <br /> Copyright © 2023 Quotex. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
