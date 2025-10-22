import React from "react";


export default function LoginHeader(){
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    return (
         <div className="login-header text-center">
                <img src={`${BASE_URL}/assets/images/logo.png`} alt="Vivashri" className="mb-4" />
                <h1>Admin Panel</h1>
                </div>
    );
}