import React, { useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL || "";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <div className="navbar nav_title" style={{ border: 0 }}>
          <Link to={`${BASE_URL}/dashboard`} className="site_title">
            <img src={`${BASE_URL}/assets/images/logo.png`} alt="Vivashri logo" />
          </Link>
        </div>

        <div className="clearfix"></div>

        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <ul class="nav side-menu">
                    <li class="active"><Link to={`${BASE_URL}/dashboard`}><i class="fa fa-home"></i> Dashboard</Link></li>
                    <li><Link onClick={() => toggleMenu("members")} style={{ cursor: "pointer" }}><i class="fa fa-user"></i> Members <span class="fa fa-chevron-down"></span></Link>
                       
                        <ul class="nav child_menu" style={{ display: openMenu.members ? "block" : "none" }}>
                          { /* <li><Link to={`${BASE_URL}/members/new-member`}>New Registrations</Link></li> */ }
                          <li><Link to={`${BASE_URL}/members/member-list`}>View Members</Link></li>
                          <li><Link to={`${BASE_URL}/members/paid-member-list`}>View Paid Members</Link></li>
                          <li><Link to={`${BASE_URL}/members/member-enquiry`}>Members Enquiry</Link></li>
                          
                        </ul>
                     
                    </li>
                    <li><Link onClick={() => toggleMenu("attribute")} style={{ cursor: "pointer" }}><i class="fa fa-table"></i> Attribute <span class="fa fa-chevron-down"></span></Link>
                     
                          <ul class="nav child_menu" style={{ display: openMenu.attribute ? "block" : "none" }}>
                              <li><Link to={`${BASE_URL}/attribute/religion`}>Religion</Link></li>
                              <li><Link to={`${BASE_URL}/attribute/cast`}>Cast</Link></li>
                              <li><Link to={`${BASE_URL}/attribute/sub-cast`}>Sub Caste</Link></li>
                              <li><Link to={`${BASE_URL}/attribute/gotra`}>Gotra</Link></li>
                              <li><Link to={`${BASE_URL}/attribute/language`}>Language</Link></li>
                              <li><Link to={`${BASE_URL}/attribute/occupation`}>Occupation</Link></li>
                              <li><Link to={`${BASE_URL}/attribute/working-with`}>Working With</Link></li>
                              
                              <li><Link to={`${BASE_URL}/attribute/hobbies`}>Hobbies</Link></li>
                              <li><Link to={`${BASE_URL}/attribute/education`}>Education</Link></li>
                              <li><Link to={`${BASE_URL}/attribute/professional-education`}>Professional Education</Link></li>
                          </ul>
                         
                    </li>      
                    <li><Link onClick={() => toggleMenu("master")} style={{ cursor: "pointer" }}><i class="fa fa-table"></i> Master <span class="fa fa-chevron-down"></span></Link>
                     
                          <ul class="nav child_menu" style={{ display: openMenu.master ? "block" : "none" }}>
                              <li><Link to={`${BASE_URL}/master/country`}>Country</Link></li>
                              <li><Link to={`${BASE_URL}/master/state`}>State</Link></li>
                              <li><Link to={`${BASE_URL}/master/city`}>City</Link></li>
                          </ul>
                         
                    </li>  

                    <li><Link onClick={() => toggleMenu("staff")} style={{ cursor: "pointer" }}><i class="fa fa-users"></i> Staff <span class="fa fa-chevron-down"></span></Link>
                       
                          <ul class="nav child_menu" style={{ display: openMenu.staff ? "block" : "none" }}>
                              <li><Link to={`${BASE_URL}/staff/add-staff`}>Add Staff</Link></li>
                              <li><Link to={`${BASE_URL}/staff/view-staff`}>View Staff</Link></li>
                          </ul>
                      
                    </li>
                    <li><Link to={`${BASE_URL}/view-lead`}><i class="fa fa-calendar"></i> View Leads</Link></li>

                   <li><Link onClick={() => toggleMenu("Plan")} style={{ cursor: "pointer" }}><i class="fa fa-tag"></i> Membership Plans <span class="fa fa-chevron-down"></span></Link>
                     
                        <ul class="nav child_menu" style={{ display: openMenu.Plan ? "block" : "none" }}>
                            <li><Link to={`${BASE_URL}/membership-plans/add-plan`}>View Plan</Link></li>
                            { /* <li><Link to={`${BASE_URL}/membership-plans/view-plan`}>View Plan</Link></li>
                            */ }
                        </ul>
                    
                    </li>
                    
                    <li><Link onClick={() => toggleMenu("coupon")} style={{ cursor: "pointer" }}><i class="fa fa-ticket"></i> Coupon <span class="fa fa-chevron-down"></span></Link>
                      
                        <ul class="nav child_menu" style={{ display: openMenu.coupon ? "block" : "none" }}>
                            <li><Link to={`${BASE_URL}/coupon/add-coupon`}>Add Coupon</Link></li>
                            <li><Link to={`${BASE_URL}/coupon/view-coupon`}>View Coupon</Link></li>
                        </ul>
                       
                    </li>
                    <li><Link to={`${BASE_URL}/transaction-history`}><i class="fa fa-history"></i> Transaction History</Link></li>
                    <li>
                        <Link
                          onClick={() => toggleMenu("testimonials")}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-comments"></i> Testimonials{" "}
                          <span className="fa fa-chevron-down"></span>
                        </Link>

                        <ul
                          className="nav child_menu"
                          style={{ display: openMenu.testimonials ? "block" : "none" }}
                        >
                          <li>
                            <Link to={`${BASE_URL}/testimonials/add-testimonials`}>Add Testimonials</Link>
                          </li>
                          <li>
                            <Link to={`${BASE_URL}/testimonials/view-testimonials`}>View Testimonials</Link>
                          </li>
                        </ul>
                    </li>

                    
                    <li><Link to={`${BASE_URL}/faq`}><i class="fa fa-files-o"></i> FAQ/Help</Link></li>
                    <li><Link to={`${BASE_URL}/feedback`}><i class="fa fa-files-o"></i> Feedback</Link></li>
                    <li><Link to={`${BASE_URL}/disclaimer`}><i class="fa fa-list-ul"></i> Disclaimer</Link></li>
                    <li><Link to={`${BASE_URL}/privacy-policy`}><i class="fa fa-shield"></i> Privacy Policy</Link></li>
                    <li><Link to={`${BASE_URL}/terms-condition`}><i class="fa fa-sticky-note-o"></i> Terms & Conditions</Link></li>

                    <li><Link to={`${BASE_URL}/logout`}><i class="fa fa-sign-out-o"></i> Logout</Link></li>
                  
                  </ul>
              </div>

            </div>

      </div>
    </div>
  );
};

export default Sidebar;
