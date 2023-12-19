import React from "react";
import { Link } from 'react-router-dom'
import '../adminStyles/table.css'

const Depositcard = ({email,amount,date,method,status, edit,id}) => {
  return (
    <div>
      <Link to={`/admindeposit/${id}`}>
        <div className="admin-deposit-card">
            <p>{id}</p>
            <p>{email}</p>
            <p>{amount}</p>
            <p>{date}</p>
            <p>{method}</p>
            <p>{status}</p>
            <p>{edit}</p>
        </div>
        </Link>
    </div>
  );
};

export default Depositcard;