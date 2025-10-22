
import React from "react";

export default function LoginFooter(){
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    return (
        <div className="login-footer mt-4 text-center">
                <p>
                    Copyright © {new Date().getFullYear()}, Vivashri. All Rights Reserved.
                </p>
                <a
                    href="https://www.akswebsoft.com/"
                    className="akslogo-login"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src={`${BASE_URL}/assets/images/aks.png`}
                    alt="AKS Websoft Consulting Pvt. Ltd."
                    title="AKS Websoft Consulting Pvt. Ltd."
                    />
                </a>
            </div>
    );
}