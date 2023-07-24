// src/components/PrivateRoute.js
import { useState,useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({loader,setLoader}) => {
  const user = JSON.parse(localStorage.getItem("accessToken"))

  console.log("accessTokenaccessToken----------",user)

  return user ? <Outlet loader={loader} setLoader={setLoader}  /> : <Navigate to="/" />;
};

export default PrivateRoute;


