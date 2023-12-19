import React from "react";
import { Link } from 'react-router-dom'
import '../adminStyles/table.css'

const Withdrawalcard = ({email,amount,date,number,status, account,id, name}) => {
  return (
    <div>
      <Link to={`/adminwithdrawal/${id}`}>
        <div className="admin-deposit-card">
            <p>{id}</p>
            <p>{email}</p>
            <p>{amount}</p>
            <p>{date}</p>
            <p>{number}</p>
            <p>{status}</p>
            <p>{account}</p>
            <p>{name}</p>
        </div>
        </Link>
    </div>
  );
};

export default Withdrawalcard;