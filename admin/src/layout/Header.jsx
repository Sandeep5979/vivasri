import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const toggleBodyClass = () => {
    const body = document.body; // select body
    if (body.classList.contains("nav-md")) {
      body.classList.remove("nav-md");
      body.classList.add("nav-sm");
    } else {
      body.classList.remove("nav-sm");
      body.classList.add("nav-md");
    }
  };

  return (
    <div className="top_nav">
      <div className="nav_menu">
        <div className="nav toggle">
          <Link id="menu_toggle"  onClick={toggleBodyClass}><i className="fa fa-bars" aria-hidden="true"></i></Link>
        </div>
        <nav className="nav navbar-nav">
          <ul className="navbar-right">
            <li className="nav-item dropdown open" style={{ paddingLeft: "15px" }}>
              <Link href="#" className="user-profile">
                <img src={`${BASE_URL}/assets/images/adminicon.png`}  alt="admin" /> Welcome Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
