import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const TOKEN_EXPIRY = 2 * 60 * 60 * 1000; 

  const checkInactivity = () => {
    const lastActivity = localStorage.getItem("lastActivity");
    if (lastActivity) {
      const now = Date.now();
      const diff = now - parseInt(lastActivity, 10);

      if (diff > TOKEN_EXPIRY) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("lastActivity");
        navigate("/"); 
      }
    }
  };
  useEffect(() => {
    const updateActivity = () => {
      localStorage.setItem("lastActivity", Date.now());
    };

    window.addEventListener("mousemove", updateActivity);
    window.addEventListener("keydown", updateActivity);
    window.addEventListener("click", updateActivity);
    const interval = setInterval(checkInactivity, 60000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", updateActivity);
      window.removeEventListener("keydown", updateActivity);
      window.removeEventListener("click", updateActivity);
    };
  }, []);

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
