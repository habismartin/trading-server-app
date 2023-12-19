import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  //check if user is logged in
  const userLogin = useSelector((state) => state?.user?.userAuth);
  return userLogin ? <Outlet /> : <Navigate to="/login" />;
  ;
};

export default ProtectedRoute;
