import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ageCalculate } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { userLogout } from '../../store/authActions';

function HeaderUser() {
  
  const { userDetailLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

const [formData, setFormData] = useState({})


const [isHeaderOpen, setHeaderOpen] = useState(false);
 
  const [openMegaMenu, setOpenMegaMenu] = useState(null);
  const [openMegaMenuMatch, setOpenMegaMenuMatch] = useState(null);
  const [openMegaMenuSearch, setOpenMegaMenuSearch] = useState(null);
  const [openMegaMenuInbox, setOpenMegaMenuInbox] = useState(null);

  const toggleHeader = () => {
    
    
    if(isHeaderOpen){
      setOpenMegaMenu(false);
      setOpenMegaMenuMatch(false);
      setOpenMegaMenuSearch(false);
      setOpenMegaMenuInbox(false);
    }
    
    setHeaderOpen((prev) => !prev);
    
  };

  

  const toggleMegaMenu = () => {
    setOpenMegaMenu((prev) => !prev);
  };
  const toggleMegaMenuMatch = () => {
    setOpenMegaMenuMatch((prev) => !prev);
  };
  const toggleMegaMenuSearch = () => {
    setOpenMegaMenuSearch((prev) => !prev);
  };
  const toggleMegaMenuInbox = () => {
    setOpenMegaMenuInbox((prev) => !prev);
  };


  


  const fetchUserDetail = async (userId) => {
      
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail-all/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          });
  
        const data = await res.json();
       
        if(data.status){
          
  
          const dob = new Date(data.data[0].dob);
          let ampm = "AM";
          let hour = dob.getHours();
          if (hour >= 12) {
            ampm = "PM";
            if (hour > 12) hour -= 12;
          } else if (hour === 0) {
            hour = 12; 
          }
  
          
        
            let profilePhoto;
                    if(data.data[0].profile_photo === 1){
                      profilePhoto = data.data[0].photo
                    } else if(data.data[0].profile_photo === 2){
                      profilePhoto = data.data[0].photo1
                    } else if(data.data[0].profile_photo === 3){
                      profilePhoto = data.data[0].photo2
                    } else if(data.data[0].profile_photo === 4){
                      profilePhoto = data.data[0].photo3
                    } else if(data.data[0].profile_photo === 5){
                      profilePhoto = data.data[0].photo4
                    } else {
                      profilePhoto = data.data[0].photo
                    }
          
          
        setFormData({
  
          
          name:data.data[0].name,
          photo:profilePhoto,
            
  
        })
  
      } 
  
    }
  
  useEffect(() => {
    
    if(userDetailLogin?._id){
    fetchUserDetail(userDetailLogin._id)
    } else {
      document.location.href='/';
    }
  
  }, [userDetailLogin])


  const userLogoutButton = () => {
      
      dispatch(userLogout())
      document.location.href=`/`
  
    }
  
  
  return (
    <>
    <button class="scrollToTop showBtn"><span id="progress-bar" style={{ "--scrollAmount": "19px" }}><svg width="48" height="48" viewBox="-5 -5 60 60" fill="none"><path stroke="#e85d95" stroke-width="2" d="M0.5,25a24.5,24.5 0 1,0 49,0a24.5,24.5 0 1,0 -49,0"></path></svg></span></button>
    <section
  className="headerSection headerTwo wow animate__fadeIn"
  data-wow-delay="0.2s"
>
  <div className="site-width sitewidths">
    <div className="headerWrapper">
      <div className="logoSection">
        <Link to="/dashboard">
          <img
            src="assets/img/logo-light.png"
            alt="Vivashri"
            title="Vivashri"
            oncontextmenu="return false;"
          />
        </Link>
      </div>
      <div className="allHeaders wow animate__fadeIn">
        <div className="mainHeaderSection">
          <div className="headerNav">
            <ul className="headerMenu">
              <li className="hasSub megaMenu">
                <a href="/#">
                  My Vivashri{" "}
                  <img
                    src="assets/img/icons/dropdown-arrow.svg"
                    alt="down Icon"
                    className="dropdownicon"
                    style={{ marginLeft: 5 }}
                  />
                </a>
                <div className="headerSubNav headerSubNavs">
                  <ul className="headerSubMenu">
                    {/* <li><h5>Horoscope</h5></li> */}
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/my-profile/partner">Partner Preferences</Link>
                    </li>
                  </ul>
                  <ul className="headerSubMenu">
                    <li>
                      <Link to="/my-profile">My Profile</Link>
                    </li>
                    <li>
                      <Link to="#">Settings</Link>
                    </li>
                  </ul>
                  <ul className="headerSubMenu">
                    <li>
                      <Link to="/profile-photo-edit">My Photos</Link>
                    </li>
                    <li>
                      <Link to="#">Notification</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hasSub megaMenu">
                <Link to="#">
                  Matches{" "}
                  <img
                    src="assets/img/icons/dropdown-arrow.svg"
                    alt="down Icon"
                    className="dropdownicon"
                    style={{ marginLeft: 5 }}
                  />
                </Link>
                <div className="headerSubNav headerSubNavsse ">
                  <ul className="headerSubMenu headerSubMenuss ">
                    {/* <li><h5>Horoscope</h5></li> */}
                    <li>
                      <Link to="#">My Matches</Link>
                    </li>
                    <li>
                      <Link to="#">Today Matches</Link>
                    </li>
                    <li>
                      <Link to="#">Near Me</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hasSub megaMenu">
                <Link to="#">
                  Search{" "}
                  <img
                    src="assets/img/icons/dropdown-arrow.svg"
                    alt="down Icon"
                    className="dropdownicon"
                    style={{ marginLeft: 5 }}
                  />
                </Link>
                <div className="headerSubNav headerSubNavsss">
                  <ul className="headerSubMenu headerSubMenuss">
                    {/* <li><h5>Horoscope</h5></li> */}
                    <li>
                      <Link to="/basic-search">Basic Search</Link>
                    </li>
                    <li>
                      <Link to="/advance-search">Advance Search</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hasSub megaMenu">
                <Link to="#">
                  Inbox{" "}
                  <img
                    src="assets/img/icons/dropdown-arrow.svg"
                    alt="down Icon"
                    className="dropdownicon"
                    style={{ marginLeft: 5 }}
                  />
                </Link>
                <div className="headerSubNav headerSubNavssss">
                  <ul className="headerSubMenu headerSubMenuss">
                    {/* <li><h5>Horoscope</h5></li> */}
                    <li>
                      <Link to="#">Received</Link>
                    </li>
                    <li>
                      <Link to="#">Accepted</Link>
                    </li>
                    <li>
                      <Link to="#">Request</Link>
                    </li>
                    <li>
                      <Link to="#">Sent</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="headerButns dnone-but butt-pro-siz">
        {/* <div class="headerRightMenuWrap">
                 <a href="/#"><img src="assets/img/my-profile-img.png" alt=""> <img src="assets/img/icons/dropdown-arrow.svg" alt="down Icon" class="dropdownicon" style="margin-left: 5px;"></a> 
                 
              </div>   */}
        <ul className="headerMenu">
          <li className="hasSub megaMenu" style={{padding:'0px'}}>
            <Link to="/dashboard" style={{ borderBottom: "none" }}>
              <img
                className="size-togle-pro"
                src={formData.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo}` : 'assets/img/no-image.jpg'}
                alt=""
              />
              <img
                src="assets/img/icons/dropdown-arrow.svg"
                alt="down Icon"
                className="dropdownicon"
                style={{ marginLeft: 5 }}
              />
            </Link>
            <div className="headerSubNav headerSubNavsssss">
              <ul className="headerSubMenu">
                {/* <li><h5>Horoscope</h5></li> */}
                <li
                  style={{ backgroundColor: "#FFF9F0", padding: "15px 30px" }}
                >
                  <h6 style={{ fontSize: 16, marginBottom: 10 }}>
                    {formData.name}{" "}
                    <span style={{ color: "#E4189F", fontSize: 12 }}>
                      { /* (ID :&nbsp;600155) */ }
                    </span>
                  </h6>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-7">
                        <h6 style={{ fontSize: 14 }}>
                          Active Plan: Standard Plan
                        </h6>
                      </div>
                      <div className="col-5">
                        <h6 style={{ color: "#E4189F", fontSize: 13 }}>
                          50% Profile Complete
                        </h6>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{ backgroundColor: "#ffffff", padding: "15px 30px" }}
                >
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <Link to="/my-profile" style={{ border: "none", fontSize: 13 }}>
                          <img
                            style={{ marginRight: 5 }}
                            src="assets/img/icons/user-alt-1_svgrepo.com.png"
                            alt=""
                          />
                          View My Profile
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link to="#" style={{ border: "none", fontSize: 13 }}>
                          <img
                            style={{ marginRight: 5 }}
                            src="assets/img/icons/setting-1_svgrepo.com.png"
                            alt=""
                          />
                          Setting
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link to="#" style={{ border: "none", fontSize: 13 }}>
                          <img
                            style={{ marginRight: 5 }}
                            src="assets/img/icons/key_svgrepo.com.png"
                            alt=""
                          />
                          Change Password
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link to="#" onClick={userLogoutButton} style={{ border: "none", fontSize: 13 }}>
                          <img
                            style={{ marginRight: 5 }}
                            src="assets/img/icons/logout.png"
                            alt=""
                          />
                          Logout
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      
      { /* <div className="headerButns dnone-butts">
        <div className="headerRightMenuWrap">
          <ul className="headerRightMenu">
            <div className="hamburger is-md">
              <span
                className="hamburger-line"
                style={{ background: "#7C172B" }}
              />
              <span
                className="hamburger-line"
                style={{ background: "#7C172B" }}
              />
              <span
                className="hamburger-line"
                style={{ background: "#7C172B" }}
              />
            </div>
          </ul>
        </div>
      </div>
      */ }

      <div className="dropdownmenu wow animate__fadeInDown">
        <div className="headerNav">
          <ul className="headerMenu">
            <li className="hasSub megaMenu">
              <Link to="#" style={{ color: "#7C172B" }}>
                My Vivashri{" "}
                <img
                  src="assets/img/icons/dropdown-arrow.svg"
                  alt="down Icon"
                  className="dropdownicon"
                  style={{ marginLeft: 5 }}
                />
              </Link>
              <div className="headerSubNav headerSubNavs">
                <ul className="headerSubMenu">
                  {/* <li><h5>Horoscope</h5></li> */}
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/my-profile/partner">Partner Preferences</Link>
                  </li>
                </ul>
                <ul className="headerSubMenu">
                  <li>
                    <Link to="/my-profile">My Profile</Link>
                  </li>
                  <li>
                    <Link to="#">Settings</Link>
                  </li>
                </ul>
                <ul className="headerSubMenu">
                  <li>
                    <Link to="/profile-photo-edit">My Photos</Link>
                  </li>
                  <li>
                    <Link to="#">Notification</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hasSub megaMenu">
              <Link to="#" style={{ color: "#7C172B" }}>
                Matches{" "}
                <img
                  src="assets/img/icons/dropdown-arrow.svg"
                  alt="down Icon"
                  className="dropdownicon"
                  style={{ marginLeft: 5 }}
                />
              </Link>
              <div className="headerSubNav headerSubNavss">
                <ul className="headerSubMenu headerSubMenuss">
                  {/* <li><h5>Horoscope</h5></li> */}
                  <li>
                    <Link to="#">My Matches</Link>
                  </li>
                  <li>
                    <Link to="#">Today Matches</Link>
                  </li>
                  <li>
                    <Link to="#">Near Me</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hasSub megaMenu">
              <Link to="#" style={{ color: "#7C172B" }}>
                Search{" "}
                <img
                  src="assets/img/icons/dropdown-arrow.svg"
                  alt="down Icon"
                  className="dropdownicon"
                  style={{ marginLeft: 5 }}
                />
              </Link>
              <div className="headerSubNav headerSubNavsss">
                <ul className="headerSubMenu headerSubMenuss">
                  {/* <li><h5>Horoscope</h5></li> */}
                  <li>
                    <Link href="/basic-search">Basic Search</Link>
                  </li>
                  <li>
                    <Link to="/advance-search">Advance Search</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hasSub megaMenu">
              <Link to="#" style={{ color: "#7C172B" }}>
                Inbox{" "}
                <img
                  src="assets/img/icons/dropdown-arrow.svg"
                  alt="down Icon"
                  className="dropdownicon"
                  style={{ marginLeft: 5 }}
                />
              </Link>
              <div className="headerSubNav headerSubNavssss">
                <ul className="headerSubMenu headerSubMenuss">
                  {/* <li><h5>Horoscope</h5></li> */}
                  <li>
                    <Link to="#">Received</Link>
                  </li>
                  <li>
                    <Link to="#">Accepted</Link>
                  </li>
                  <li>
                    <Link to="#">Request</Link>
                  </li>
                  <li>
                    <Link to="#">Sent</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>


          <div className="headerButns dnone-buttsss">
                              <div className="headerRightMenuWrap">
                                <ul className="headerRightMenu headerRightMenus">
                                  <div className="hamburger is-md" onClick={toggleHeader}>
                                    <span className="hamburger-line" style={{ background: "#7C172B" }} />
                                    <span className="hamburger-line" style={{ background: "#7C172B" }} />
                                    <span className="hamburger-line" style={{ background: "#7C172B" }} />
                                  </div>
                                </ul>
                              </div>
                            </div>
          
                            <div className={`dropdownmenu wow animate__fadeInDown ${isHeaderOpen ? "openMenu" : "closedMenu"}`}>
                              <div className="headerNav">
                                <ul className="headerMenu" style={{ color: "black" }}>
                                  <li className="hasSub megaMenu position-relative" onClick={toggleMegaMenu}>
                                    <Link to="#" style={{ color: "#7C172B" }}>
                                      My Vivashri {" "}
                                      <img
                                        src="assets/img/icons/dropdown-arrow.svg"
                                        alt="down Icon"
                                        className="dropdownicon"
                                        style={{ marginLeft: 5 }}
                                      />
                                    </Link>
                                    <div className={`headerSubNav ${openMegaMenu ? "openMegaMenu" : "openMegaMenuClosed"}`}>
                                      <ul className="headerSubMenu">
                                        {/* <li><h5>Horoscope</h5></li> */}
                                        <li>
                                          <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li>
                                          <Link to="/my-profile">My Profile</Link>
                                        </li>
                                        <li>
                                          <Link to="/profile-photo-edit">My Photos</Link>
                                        </li>
                                        <li>
                                          <Link to="/my-profile/partner">Partner Preference</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Setting</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Notification</Link>
                                        </li>
                                      </ul>
                                      
                                    </div>
                                  </li>
                                  <li className="hasSub megaMenu position-relative" onClick={toggleMegaMenuMatch}>
                                    <Link to="#" style={{ color: "#7C172B" }}>
                                      Matches {" "}
                                      <img
                                        src="assets/img/icons/dropdown-arrow.svg"
                                        alt="down Icon"
                                        className="dropdownicon"
                                        style={{ marginLeft: 5 }}
                                      />
                                    </Link>
                                    <div className={`headerSubNav ${openMegaMenuMatch ? "openMegaMenuMatch" : "openMegaMenuClosedMatch"}`}>
                                      <ul className="headerSubMenu">
                                        {/* <li><h5>Horoscope</h5></li> */}
                                        <li>
                                          <Link to="#">My Matches</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Today Matches</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Near Me</Link>
                                        </li>
                                        
                                      </ul>
                                      
                                    </div>
                                  </li>
                                  <li className="hasSub megaMenu position-relative" onClick={toggleMegaMenuSearch}>
                                    <Link to="#" style={{ color: "#7C172B" }}>
                                      Search {" "}
                                      <img
                                        src="assets/img/icons/dropdown-arrow.svg"
                                        alt="down Icon"
                                        className="dropdownicon"
                                        style={{ marginLeft: 5 }}
                                      />
                                    </Link>
                                    <div className={`headerSubNav ${openMegaMenuSearch ? "openMegaMenuSearch" : "openMegaMenuClosedSearch"}`}>
                                      <ul className="headerSubMenu">
                                        {/* <li><h5>Horoscope</h5></li> */}
                                        <li>
                                          <Link to="/basic-search">Basic Search</Link>
                                        </li>
                                        <li>
                                          <Link to="/advance-search">Advance Search</Link>
                                        </li>
                                        
                                        
                                      </ul>
                                      
                                    </div>
                                  </li>
                                  <li className="hasSub megaMenu position-relative" onClick={toggleMegaMenuInbox}>
                                    <Link to="#" style={{ color: "#7C172B" }}>
                                      Inbox {" "}
                                      <img
                                        src="assets/img/icons/dropdown-arrow.svg"
                                        alt="down Icon"
                                        className="dropdownicon"
                                        style={{ marginLeft: 5 }}
                                      />
                                    </Link>
                                    <div className={`headerSubNav ${openMegaMenuInbox ? "openMegaMenuInbox" : "openMegaMenuClosedInbox"}`}>
                                      <ul className="headerSubMenu">
                                        {/* <li><h5>Horoscope</h5></li> */}
                                        <li>
                                          <Link to="#">Received</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Accepted</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Request</Link>
                                        </li>
                                        <li>
                                          <Link to="#">Sent</Link>
                                        </li>
                                        
                                        
                                      </ul>
                                      
                                    </div>
                                  </li>
                                  <li>
                                                          {" "}
                                                          <Link to="#" onClick={userLogoutButton}>Logout</Link>
                                                        </li>
                                  
                                  
                                  

                                </ul>
                                
                              </div>
                            </div>

      {/* <div class="dropdownmenu wow animate__fadeInDown">
              <div class="headerNav">
                  <ul class="headerMenu">
                      <li class="hasSub megaMenu">
                          <a href="get-reaport.html"><img src="assets/img/icons/astro-ser.svg" alt="chat" style="margin-right: 5px;"> Get Report</a>
                      </li>
                      <li class="hasSub megaMenu">
                          <a href="about-us.html"><img src="assets/img/icons/astro-ser.svg" alt="chat" style="margin-right: 5px;"> About Us</a>
                      </li>
                      <li class="hasSub megaMenu">
                          <a href="contact-us.html"><img src="assets/img/icons/astro-ser.svg" alt="chat" style="margin-right: 5px;"> Contact Us </a>
                      </li>
                      <li class="hasSub megaMenu">
                          <a href="blogs.html"><img src="assets/img/icons/astro-ser.svg" alt="chat" style="margin-right: 5px;"> Blogs</a>
                      </li>
                  </ul>
              </div>
            </div> */}
    </div>
  </div>
</section>
</>


  )
}

export default HeaderUser
