import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../services/Auth/auth";
const PrivateRoute = () => {
  const user = useAuth();
  console.log('user.token', user.token)
  if (!user.token) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;