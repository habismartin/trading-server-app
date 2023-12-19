import React from 'react'
import "../styles/about.css"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import step1 from '../images/about-us-work-step-1@2x.png'
import step2 from '../images/about-us-work-step-2@2x.png'
import step3 from '../images/about-us-work-step-3@2x.png'
import step4 from '../images/about-us-work-step-4@2x.png'
import quote from '../images/quote.jpeg'

const About = () => {
  return (
    <div className='about'>
      <Navbar/>
      <div className="about-us-flag">
        <div className="about-us-left">
          <h1>About us</h1>
          <h3>QUOTEX — it is a new level trading platform.</h3>
          <p>Our team launched the project in 2019, but has already managed to declare itself. Each of our developers is a specialist of the highest level with many years of experience. Some of them gave more than 10 years of their life to upgrade their development skills, and the team's total experience is 200 years.This experience helped us to find the best mechanisms to create a modern platform.</p>
        </div>  
        <div className="about-us-right"></div>
      </div>

      <div className="fulfill">
        <div className="fulfill-img"></div>
        <div className="fulfill-text">
            <h1>We want everyone to be able to fulfill their desires and opportunities.</h1>
            <p>Our team has created not just another project for traders. First of all, we developed a platform for the widest possible audience. For people who want to learn how to use advanced financial instruments and develop their financial skills. <br /><br />Speaking of tools. QUOTEX provides over 400 free tools to each client so that you can trade and earn money the way you like. Choose any assets: currency quotes, stocks, majors, metals, oil or gas, as well as the main trend of recent years - cryptocurrencies.</p>
        </div>
      </div>

      <div className="modern">
        <h1>A modern platform for modern people</h1>
        <div className="modern-boxes">
          <div><p>The main advantage of QUOTEX is its premium quallity in everything and there is no exceptions. Transparency of the platform, advanced technologies, attractive conditions for participants - all this makes us unique.</p></div>
          <div><p>Thanks to cooperation with reliable brokers, we have achieved maximum control over quotations by the client. You can always check all the indicators in person!</p></div>
          <div><p>Working to create a comfortable environment for all users of the platform, we have implemented the best functionality in terms of financial management. The lightning-fast speed of updating quotes and the interface is what creates comfort of working with the platform.</p></div>
          <div><p>Our support service deserves special attention. Each of support staff member is a fan of his job. 24/7 lightning fast feedback and a sincere desire to help that is why we are ahead of alternative platforms. We are doing everything for your comfortable pastime.</p></div>
        </div>
      </div>

      <div className="how">
        <div className="how-top">
           <h1>How does the platform work?</h1>
           <h4>4 simple steps</h4>
           <div className="how-boxes">
              <div className="how-boxes1">
                <div className="img"><img src={step1} alt="" /> </div>
                <h2>We choose</h2>
                <p>asset of interest.</p>
              </div>
              <div className="how-boxes2">
              <div className="img"><img src={step2} alt="" /> </div>
                <h2>Install</h2>
                <p>the size of the bet and the time of closing the deal.</p>
              </div>
              <div className="how-boxes3">
              <div className="img"><img src={step3} alt="" /> </div>
                <h2>We do</h2>
                <p>forecast according to the schedule for a given time.</p>
              </div>
              <div className="how-boxes4">
              <div className="img"><img src={step4} alt="" /> </div>
                <h2>We get</h2>
                <p>result of the transaction.</p>
              </div>
           </div>
        </div>

        <div className="quote">
          <div className="quote-cover"><div className='quote-mark'><img src={quote} alt="" /></div>
          <p>The problem is that all the opportunities are usually provided in private for close circle of people. And participating in trading on the exchange, according to the majority, is something complicated. Brokers, exchanges - all this is incomprehensible to an ordinary person. Therefore, we are making a public platform for everyone.</p></div>
        </div>

        <div className="doubts">
          <div className="doubts-text">
            <h1>Any doubts?<br />Practice without risk with a demo account.</h1>
            <p>We are open to our visitors. Therefore, if you have distrust amid hundreds of projects related to trading on the stock exchange, we hasten to reassure you. On our site you can use a demo account. It has nothing to do with real money. So you can safely and without risk test the mechanism of the platform. QUOTEX: while others doubt, you act!</p>
            <Link to="/signup"><button className='about-demo'>Demo account</button></Link>
          </div>
          <div className="doubts-img"><p>QUOTEX: while others doubt, you act!</p></div>
        </div>
      </div>

      <div className="innovation">
        <h1>Quotex: Innovation Platform <br /> Digital Asset Trading</h1>
        <div className="innovation-btns">
          <Link to="/signup"><button className='about-open'>Open real account</button></Link>
          <Link to="/signup"><button className='about-demo'>Demo account</button></Link>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default About
