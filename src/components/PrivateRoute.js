import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export default function PrivateRoute({ children}) {
  const { isAuthenticated } = useAppContext();

  return isAuthenticated ? children : <Navigate to="/" />;
}