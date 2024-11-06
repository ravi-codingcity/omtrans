// src/ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem("token"); // Check for token in local storage

  return (
    <Route
      {...rest}
      element={token ? <Component /> : <Navigate to="/log-in" replace />}
    />
  );
};

export default ProtectedRoute;
