import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
  //check if user is logged in
  const userLogin = useSelector((state) => state?.user?.userAuth);
  return userLogin?.isAdmin ? <Outlet /> : <Navigate to="/not-admin" />;
  ;
};

export default AdminRoute;