import React from "react";
import Table from "../components/table";
import Sidebar from '../components/adminSideNav.jsx'
import TopNav from '../components/adminNav'
import '../adminStyles/transaction.css'

const Transactions = () => {
  return (
    <div className="list-container">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="list">
      <TopNav/>
      <div className="padding">
      <div className="list-wrapper">
      <div className="list-title">Latest Transactions</div>
        <Table />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Transactions;
