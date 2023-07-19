// src/components/PrivateRoute.js
import { useState,useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // state
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();

  // check if user is logged in
  // by making API request or from localStorage
  useEffect(() => {
    const authCheck = async () => {
 
    };
    authCheck();
  }, []);

  return loading ? navigate('/') : <Outlet />;
};

export default PrivateRoute;