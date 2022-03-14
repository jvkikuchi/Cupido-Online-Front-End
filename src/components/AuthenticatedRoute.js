import React from "react";
import { Route, useLocation, Navigate } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export const AuthenticatedRoute = ({ children, ...rest }) => {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to={
          `/login?redirect=${pathname}${search}`
        } />
      )}
    </Route>
  );
}