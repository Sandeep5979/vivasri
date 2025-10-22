import React from "react";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";

export default function Dashboard(){
    
    return (
         <div class="container body">
                <div class="main_container">
                <Sidebar />
               
                <Header />
                {/* page */}
                    <div className="right_col" role="main">
                    {/* top tiles */}
                    <div className="tile_count">
                        <div className="row">
                        <div className="col pr-sm-0">
                            <Link to="/admin/dashboard">
                            <div className="overview-box d-lg-flex align-items-start justify-content-start">
                                <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/user-icon.png`} alt="" />
                                <div>
                                <h2>Total Members</h2>
                                <div className="count">36163</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link>
                            <div className="overview-box d-lg-flex align-items-start justify-content-start">
                                <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/male-icon.png`} alt="" />
                                <div>
                                <h2>Male Members</h2>
                                <div className="count">26962</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link>
                            <div className="overview-box d-lg-flex align-items-start justify-content-start">
                                <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/female-icon.png`} alt="" />
                                <div>
                                <h2>Female Members</h2>
                                <div className="count">11500</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link>
                            <div className="overview-box d-lg-flex align-items-start justify-content-start">
                                <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/asign-icon.png`} alt="" />
                                <div>
                                <h2>Total Lead Work</h2>
                                <div className="count">3563</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    
                        </div>
                    </div>
                    {/* /top tiles */}
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                            <div className="dashboard-stat">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="statdevider" />
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start">
                                    <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/newuser.png`} alt="new user icon" />
                                    <div>
                                        New Members
                                        <span>606</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start flex-row-reverse text-right">
                                    <img
                                        src={`${process.env.REACT_APP_BASE_URL}/assets/images/sales.png`}
                                        alt="sales icon"
                                        className="ml-sm-2 mr-0"
                                    />
                                    <div>
                                        Sales
                                        <span>606</span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* row end */}
                            <div className="dashboard-stat">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="statdevider" />
                                    <Link>
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/daily-paid.png`} alt="daily paid icon" />
                                        <div>
                                        Free Members
                                        <span>606</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <Link>
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start flex-row-reverse text-right">
                                        <img
                                        src={`${process.env.REACT_APP_BASE_URL}/assets/images/monthly-paid.png`}
                                        alt="monthly paid icon"
                                        className="ml-sm-2 mr-0"
                                        />
                                        <div>
                                        Paid Members
                                        <span>606</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {/* row end */}
                            <div className="dashboard-stat">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="statdevider" />
                                    <Link>
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/online.png`} alt="icon" />
                                        <div>
                                        New Leads
                                        <span>498</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <Link>
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start flex-row-reverse text-right">
                                        <img
                                        src={`${process.env.REACT_APP_BASE_URL}/assets/images/offline.png`}
                                        alt="icon"
                                        className="ml-sm-2 mr-0"
                                        />
                                        <div>
                                        Converted Leads
                                        <span>606</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {/* row end */}
                            <div className="dashboard-stat">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="statdevider" />
                                    <Link>
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/wfh.png" alt="icon`} />
                                        <div>
                                        Pending Leads
                                        <span>606</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <Link>
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start flex-row-reverse text-right">
                                        <img
                                        src={`${process.env.REACT_APP_BASE_URL}/assets/images/matches.png`}
                                        alt="icon"
                                        className="ml-sm-2 mr-0"
                                        />
                                        <div>
                                        Membership Plans
                                        <span>3</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {/* row end */}
                            <div className="dashboard-stat">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="statdevider" />
                                    <Link>
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/staff.png`} alt="icon" />
                                        <div>
                                        Staff Count
                                        <span>41</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <Link>
                                    <div className="dashboard-statbox d-sm-flex align-items-sm-center justify-content-sm-start flex-row-reverse text-right">
                                        <img
                                        src={`${process.env.REACT_APP_BASE_URL}/assets/images/invitation.png`}
                                        alt="icon"
                                        className="ml-sm-2 mr-0"
                                        />
                                        <div>
                                        Not Interested
                                        <span>2</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {/* row end */}
                            <br />
                            <br />
                            <br />
                            </div>
                            <div className="col-md-6 col-sm-12 ">
                            <div>
                                <div className="x_title">
                                <h2>Top Five leads</h2>
                                <div className="clearfix" />
                                </div>
                                <ul className="list-unstyled top_profiles scroll-view">
                                <li className="media event">
                                    <Link className="pull-left border-aero profile_thumb">
                                    <img
                                        src={`${process.env.REACT_APP_BASE_URL}/assets/images/profile-pic.jpg`}
                                        alt=""
                                        style={{ maxWidth: "100%" }}
                                    />
                                    </Link>
                                    <div className="media-body">
                                    <Link className="title" href="#">
                                        Ms. Janvi{" "}
                                    </Link>
                                    <p>
                                        <strong>Female</strong> 23 Yrs, Hindu, Arora{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <small>Delhi, NCR</small>
                                    </p>
                                    </div>
                                </li>
                                <li className="media event">
                                    <Link className="pull-left border-aero profile_thumb">
                                    <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/img.jpg`} alt="" style={{ maxWidth: "100%" }} />
                                    </Link>
                                    <div className="media-body">
                                    <Link className="title" href="#">
                                        Mr. Rahul{" "}
                                    </Link>
                                    <p>
                                        <strong>Male</strong> 28 Yrs, Hindu, Arora{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <small>Delhi, NCR</small>
                                    </p>
                                    </div>
                                </li>
                                <li className="media event">
                                    <Link className="pull-left border-aero profile_thumb">
                                    <img
                                        src={`${process.env.REACT_APP_BASE_URL}/assets/images/profile-pic.jpg`}
                                        alt=""
                                        style={{ maxWidth: "100%" }}
                                    />
                                    </Link>
                                    <div className="media-body">
                                    <Link className="title" href="#">
                                        Ms. Janvi{" "}
                                    </Link>
                                    <p>
                                        <strong>Female</strong> 23 Yrs, Hindu, Arora{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <small>Delhi, NCR</small>
                                    </p>
                                    </div>
                                </li>
                                <li className="media event">
                                    <Link className="pull-left border-aero profile_thumb">
                                    <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/img.jpg`} alt="" style={{ maxWidth: "100%" }} />
                                    </Link>
                                    <div className="media-body">
                                    <Link className="title" href="#">
                                        Mr. Rahul{" "}
                                    </Link>
                                    <p>
                                        <strong>Male</strong> 28 Yrs, Hindu, Arora{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <small>Delhi, NCR</small>
                                    </p>
                                    </div>
                                </li>
                                <li className="media event">
                                    <Link className="pull-left border-aero profile_thumb">
                                    <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/img.jpg`} alt="" style={{ maxWidth: "100%" }} />
                                    </Link>
                                    <div className="media-body">
                                    <Link className="title" href="#">
                                        Mr. Rahul{" "}
                                    </Link>
                                    <p>
                                        <strong>Male</strong> 28 Yrs, Hindu, Arora{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <small>Delhi, NCR</small>
                                    </p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                
                </div>

                {/* page end */}
                <Footer />
            </div>
         </div>
    );
}