import React from "react";
import { Link } from 'react-router-dom'
import '../adminStyles/table.css'

const Usercard = ({email,balance,date,isAdmin,status, edit,id}) => {
  return (
    <div>
      <Link to={`/adminusers/${id}`}>
        <div className="admin-deposit-card">
            <p>{id}</p>
            <p>{email}</p>
            <p>{balance}</p>
            <p>{date}</p>
            <p>{isAdmin}</p>
            <p>{status}</p>
            <p>{edit}</p>
        </div>
        </Link>
    </div>
  );
};

export default Usercard;