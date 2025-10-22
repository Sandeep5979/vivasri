import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // Get token from localStorage (or sessionStorage)
  const token = localStorage.getItem("adminToken");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
