import React from "react";
import { useState } from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/FAQ.css";

const FAQ = () => {
  const faqData1 = [
    {
      question: "What are digital options?",
      answer:
        "Option is a derivative financial instrument based on any underlying asset, such as a stock, a currency pair, oil, etc. Digital option - a non-standard option that is used to make a profit on price movements of such assets for a certain period of time. A digital option, depending on the terms agreed upon by the parties to the transaction, at a time determined by the parties, brings a fixed income (the difference between the trade income and the price of the asset) or loss (in the amount of the value of the asset). Since the digital option is purchased in advance at a fixed price, the size of the profit, as well as the size of the potential loss, are known even before the trade. Another feature of these deals is the time limit. Any option has its own term (expiration time or conclusion time). Regardless of the degree of change in the price of the underlying asset (how much it has become higher or lower), in case of winning an option, a fixed payment is always made. Therefore, your risks are limited only by the amount for which the option is acquired..",
    },
    {
      question: "What are the varieties of dogutal options?",
      answer:
        "Making an option trade, you must choose the underlying asset that will underlie the option. Your forecast will be carried out on this asset. Simply, buying a digital contract, you are actually betting on the price movement of such an underlying asset. An underlying asset is an “item” whose price is taken into account when concluding a trade.As the underlying asset of digital options, the most sought-after products on the markets usually act. There are four types of them: securities (shares of world companies), currency pairs (EUR / USD, GBP / USD, etc.), raw materials and precious metals (oil, gold, etc.), indices (S&P 500, Dow, dollar index, etc.) There is no such thing as a universal underlying asset. When choosing it, you can only use your own knowledge, intuition, and various kinds of analytical information, as well as market analysis for a particular financial instrument.",
    },
    {
      question: "What is the gist of digital options trading?",
      answer:
        "The fact is that a digital option is the simplest type of derivative financial instrument. In order to make money in the digital options market, you do not need to predict the value of the market price of an asset that it can reach. The principle of the trading process is reduced only to the solution of one single task - the price of an asset will increase or decrease by the time the contract is executed. The aspect of such options is that it does not matter to you at all, that the price of the underlying asset will go one hundred points or only one, from the moment the trade is concluded to its close. It is important for you to determine only the direction of movement of this price. If your prognosis is correct, in any case you get a fixed income.",
    },
    {
      question:
        "How to learn quickly how to make money in the digital options market?",
      answer:
        "To get a profit in the digital options market, you only need to correctly predict which way the price of the asset you have chosen will go (up or down). Therefore, for a stable income you need: develop your own trading strategies, in which the number of correctly predicted trades will be maximum, and follow them, diversify your risks. In developing strategies, as well as in searching for diversification options, market monitoring, studying analytical and statistical information that can be obtained from various sources (Internet resources, expert opinions, analysts in this field, etc.) will help you, one of which is the Company website.",
    },
    {
      question:
        "At what expense does the Company pay profit to the Client in case of a successful trade?",
      answer:
        "Company earns with customers. Therefore, it is interested in the share of profitable transactions significantly prevailing over the share of unprofitable ones, due to the fact that the Company has a percentage of payments for a successful trading strategy chosen by the Client. In addition, trades conducted by the Client together constitute the trading volume of the Company, which is transferred to a broker or exchange, which in turn are included in the pool of liquidity providers, which together leads to an increase in the liquidity of the market itself.",
    },
    {
      question: "Can I close my account? How to do it?",
      answer:
        "You can delete an account in your Individual Account by clicking on the “Delete Account” button located at the bottom of the profile page.",
    },
    {
      question: "What is the expiration period of a trade?",
      answer:
        "The expiration period is the time after which the trade will be considered completed (closed) and the result is automatically summed up. When concluding a trade with digital options, you independently determine the time of execution of the transaction (1 minute, 2 hours, month, etc.).",
    },
    {
      question: "What is trading platform and why is it needed?",
      answer:
        "Trading platform - a software complex that allows the Client to conduct trades (operations) using different financial instruments. It has also accesses to various information such as the value of quotations, real-time market positions, actions of the Company, etc.",
    },
    {
      question: "What are the possible results of the lpaced trde?",
      answer:
        "There are three possible outcomes in the digital options market: 1) in the event that your prognosis of determining the direction of the price movement of the underlying asset is correct, you receive income. 2) if by the time the option was concluded your forecast turned out to be erroneous, you incur a loss limited by the size of the asset value (i.e., in fact, you can only lose your investment). 3) if the outcome of the trade is zero (the price of the underlying asset has not changed, the option is concluded at the price at which it was purchased), you return your investment.Thus, the level of your risk is always limited only by the size of the asset value.",
    },
    {
      question:
        "Is the download of the program to a computer or smartphone required?",
      answer:
        "No, its not required. You just need to register on the Companys website in the presented form and open a individual account.",
    },
    {
      question:
        "In what currency is the clients account opened? Can i chnage the currency of the client account?",
      answer:
        "By default, a trading account is opened in US dollars. But for your convenience, the currency can be switched at any time in your profile. A list of available currencies can be found on your profile page in your Clients account.",
    },
    {
      question:
        "is there a minimum amount I can deposit to my account at registration?",
      answer:
        "The advantage of the Companys trading platform is that you dont have to deposit large amounts to your account. You can start trading by investing a small amount of money. The minimum deposit is 10 US dollars.",
    },
  ];

  function FAQItem({ question, answer }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={`faq-item ${isExpanded ? "faq-style" : ""}`}>
        <div className="question" onClick={() => setIsExpanded(!isExpanded)}>
          {question}
          <span className={`icon ${isExpanded ? "expanded" : ""}`}>
            <FiChevronDown />
          </span>
        </div>
        {isExpanded && <div className="answer">{answer}</div>}
      </div>
    );
  }

  const faqData2 = [
    {
      question: "What determines profit size?",
      answer:
        "There are several factors that affect the size of your profit: the liquidity of the asset you have chosen in the market (the more the asset is in demand in the market, the more profit you will receive), the time of the trade (the liquidity of an asset in the morning and the liquidity of an asset in the afternoon can vary significantly), tariffs of a brokerage company changes in the market (economic events, changes in part of a financial asset, etc.)",
    },
    {
      question: "How can I calculate the profit for a trade?",
      answer:
        "You do not have to calculate the profit yourself. A feature of digital options is a fixed amount of profit per transaction, which is calculated as a percentage of the value of the option and does not depend on the degree of change in this value. Suppose if the price changes in the direction predicted by you by only 1 position, you will earn 90% of the value of the option. You will earn the same amount if the price changes to 100 positions in the same direction. To determine the amount of profit, you must perform the following steps: choose the asset that will underlie your option, indicate the price for which you would have purchased the option, determine the time of the trade, after these actions, the platform will automatically display the exact percentage of your profit, in case of a correct prognosis.  The profit from the trade can be up to 98% of the amount of the investment. The yield of a digital option is fixed immediately upon its acquisition, therefore you do not need to wait for unpleasant surprises in the form of a reduced percentage at the end of the trade. As soon as the trade is closed, your balance will automatically be replenished by the amount of this profit.",
    },
    {
      question: "Whay is the minimum depsoit amount?",
      answer:
        "The advantage of the Companys trading platform is that you dont have to deposit large amounts to your account. You can start trading by investing a small amount of money. The minimum deposit is 10 US dollars.",
    },
    {
      question: "How to withdraw money from the account?",
      answer:
        'The procedure for withdrawing capital is extremely simple and is carried out through your individual account. The method that you have chosen to deposit the account is also a method of withdrawing funds (see the question "How can I deposit?"). For example, if you made a deposit to your account via the Visa payment system, you will also withdraw money via the Visa payment system. When it comes to the withdrawal of a sufficiently large amount, the Company may request verification (verification is requested at the Companys sole discretion), which is why it is very important to register an account individually for yourself in order to confirm your rights to it at any time.',
    },
    {
      question:
        "Is there any fee for depositing or withdrawing funds from the account?",
      answer:
        "No. The company does not charge any fee for either the deposit or for the withdrawal operations. However, it is worth considering that payment systems can charge their fee and use the internal currency conversion rate.",
    },
    {
      question:
        "Do I need to deposit the account of the trading platform and how often do I need to do this?",
      answer:
        "To work with digital options you need to open an individual account. To conclude real trades, you will certainly need to make a deposit in the amount of options purchased. You can start trading without cash, only using the companys training account (demo account). Such an account is free of charge and created to demonstrate the functioning of the trading platform. With the help of such an account, you can practice acquiring digital options, understand the basic principles of trading, test various methods and strategies, or evaluate the level of your intuition.",
    },
    {
      question: "How can i deposit?",
      answer:
        'It is very easy to do. The procedure will take a couple of minutes. 1) Open the trade execution window and click on the green "Deposit" button in the upper right corner of the tab. You can also deposit the account through your Personal Account by clicking the "Deposit" button in the account profile. 2) After it is necessary to choose a method of depositing the account (the Company offers a lot of convenient methods that are available to the Client and are displayed in his individual account). 3) Next, indicate the currency in which the account will be deposited, and accordingly the currency of the account itself. 4) Enter the amount of the deposit. 5) Fill out the form by entering the requested payment details. 6) Make a payment.',
    },
    {
      question: "How long does it take to withdraw funds?",
      answer:
        "On average, the withdrawal procedure takes from one to five days from the date of receipt of the corresponding request of the Client and depends only on the volume of simultaneously processed requests. The company always tries to make payments directly on the day the request is received from the Client.",
    },
    {
      question: "What is the minimum withdrawal amount?",
      answer:
        "The minimum withdrawal amount starts from 10 USD for most payment systems. For cryptocurrencies this amount starts from 50 USD (and may be higher for certain currencies e.g. Bitcoin).",
    },
    {
      question: "Do I need to provide any documents to make a withdrawal?",
      answer:
        "Usually, additional documents to withdraw funds are not needed . But the Company at its discretion may ask you to confirm your personal data by requesting certain documents. Usually this is done in order to prevent activities related to illegal trade, financial fraud, as well as the use of funds obtained illegally. The list of such documents is minimum, and the operation to provide them will not take you much time and effort.",
    },
  ];

  function FAQItem({ question, answer }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={`faq-item ${isExpanded ? "faq-style" : ""}`}>
        <div className="question" onClick={() => setIsExpanded(!isExpanded)}>
          {question}
          <span className={`icon ${isExpanded ? "expanded" : ""}`}>
            <FiChevronDown />
          </span>
        </div>
        {isExpanded && <div className="answer">{answer}</div>}
      </div>
    );
  }

  const faqData3 = [
    {
      question: "What data is rquired to register on the company website?",
      answer: `To earn money on digital options, you must first open an account that allows you to conduct trades. To do this, you need to register on the Company website. The registration process is simple and does not take much time. It is necessary to fill out a questionnaire on the proposed form. You will be required to enter the following information: name (in English), email address (indicate the current, work, address),telephone (with a code, for example, + 44123 ....), a password that you will use in future to enter the system (in order to minimize the risk of unauthorized access to your individual account, we recommend that you create a complex password using lowercase, uppercase letters and numbers. Do not disclose the password to third parties)After filling out the sign-up form, you will be offered various ways to fund your account for trading.`,
    },
    {
      question:
        "Is it possible to indicate other peoples (fake) data when registering on the website?",
      answer:
        "No. The client performs self-registration on the Companys website, providing complete and accurate information about himself on issues asked in the registration form, and maintains this information up to date. If it is necessary to conduct various kinds of checks of the Clients identity, the Company can request documents or invite the Client to its office. If the data entered in the registration fields does not match the data of the submitted documents, your individual profile may be blocked.",
    },
    {
      question:
        "How do i understand that i need to go through account verification?",
      answer:
        "If it becomes necessary to pass verification, you will receive a notification by e-mail and / or SMS notification. However, the Company uses the contact details that you specified in the registration form (in particular, your email address and phone number). Therefore, be careful to provide relevant and correct information.",
    },
    {
      question: "How long does the verification process take?",
      answer:
        "No more than 5 (five) business days from the date the Company receives the requested documents.",
    },
    {
      question:
        "If i made a mistake during entering data into my indivdual account, how do  fix this?",
      answer:
        "You have to contact the technical support service on the Companys website and edit the profile.",
    },
    {
      question: "What is account verification?",
      answer:
        'Verification in digital options is a confirmation by the Client of his personal data by providing the Company with additional documents. Verification conditions for the Client are as simple as possible, and the list of documents is minimum. For example, a Company may ask: provide a color scan copy of the first spread of the Clients passport (passport page with photo), identify with the help of a "selfie" (photograph of himself), confirm the address of registration (residence) of the Client, etc. The Company may request any documents if it is not possible to fully identify the Client and the data entered by him. After the electronic copies of documents have been submitted to the Company, the Client will have to wait some time to verify the data provided.',
    },
    {
      question: "How do I know I successfully passed the verification?",
      answer:
        "You will receive a notification by e-mail and / or SMS notification about the completion of the verification process of your account and the ability to proceed with operations on the Companys trading platform.",
    },
  ];

  function FAQItem({ question, answer }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={`faq-item ${isExpanded ? "faq-style" : ""}`}>
        <div className="question" onClick={() => setIsExpanded(!isExpanded)}>
          {question}
          <span className={`icon ${isExpanded ? "expanded" : ""}`}>
            <FiChevronDown size={20} />
          </span>
        </div>
        {isExpanded && <div className="answer">{answer}</div>}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="faq-main">
        <div className="question-boxes">
          <h1>FAQ</h1>
          <div className="qboxes">
            <a href="#general-questions">
              <div className="first-qbox">
                <h2>General questions</h2>
                <p>12 questions</p>
              </div>
            </a>

            <a href="#financial-questions">
              <div className="qbox">
                <h2>Financial questions</h2>
                <p>10 questions</p>
              </div>
            </a>

            <a href="#verification">
              <div className="qbox">
                <h2>Verification</h2>
                <p>7 questions</p>
              </div>
            </a>
          </div>
        </div>

        <div className="faq-questions">
          <div className="general-questions" id="general-questions">
            <h1>
              <IoDocumentTextSharp color="#2f80ed" />
              General questions
            </h1>
            <div className="faq-list">
              {faqData1.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="financial-questions" id="financial-questions">
            <h1>
              <IoDocumentTextSharp color="#2f80ed" />
              Financial questions
            </h1>
            <div className="faq-list">
              {faqData2.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="verification" id="verification">
            <h1>
              <IoDocumentTextSharp color="#2f80ed" />
              Regstration and Verification
            </h1>
            <div className="faq-list">
              {faqData3.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="questions-container"></div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
