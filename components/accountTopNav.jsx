import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import '../styles/account.css'

const AccountTopNav = () => {

    const userData = useSelector((state) => state?.user?.userAuth);

  return (
    <div>
      <div className="account-options">
        {userData?.email === process.env.REACT_APP_ADMIN_EMAIL && (
          <NavLink to="/admin">
            <div>Admin Dashboard</div>
          </NavLink>
        )}
        <NavLink to="/deposit">
          <div>Deposit</div>
        </NavLink>
        <NavLink to="/withdrawal">
          <div>Withdrawal</div>
        </NavLink>
        <NavLink to="/transactions">
          <div>Transactions</div>
        </NavLink>
        <NavLink to="/trades">
          <div>Trades</div>
        </NavLink>
        <NavLink to="/account">
          <div>Account</div>
        </NavLink>
      </div>
    </div>
  );
};

export default AccountTopNav;
