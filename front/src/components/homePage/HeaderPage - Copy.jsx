import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUserLogin, userLogout } from '../../store/authActions';



function HeaderPage() {

  const { userDetailLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "" });
  const dispatch = useDispatch();
  const { otpSent, loading } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errorOtp, setErrorOtp] = useState("")
  const inputsRef = useRef([]);
  const [formDataLogin, setFormDataLogin] = useState({});
  const [loginShow, setLoginShow] = useState(false);

  const[isLoadingLogin, setIsLoadingLogin] = useState(false)


const [isHeaderOpen, setHeaderOpen] = useState(false);
 
  const [openMegaMenu, setOpenMegaMenu] = useState(null);

  const toggleHeader = () => {
    
    
    if(isHeaderOpen){
      setOpenMegaMenu(false);
    }
    
    setHeaderOpen((prev) => !prev);
    
  };

  

  const toggleMegaMenu = () => {
    setOpenMegaMenu((prev) => !prev);
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
          
          
        setFormDataLogin({
  
          profile_for:data.data[0].profile_for?.name,
          name:data.data[0].name,
          photo:profilePhoto,
            
  
        })
  
      } 
  
    }
  
  useEffect(() => {
    
    if(userDetailLogin?._id){
    setLoginShow(true)
      fetchUserDetail(userDetailLogin._id)
    } else {
      setLoginShow(false)
    }
  
  }, [userDetailLogin])

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    
  };


  const handleChangeOTP = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
        
    if (value && value.length > 1) {
        return false; 
  }
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

 const handleSubmitOTPButton = async (e) => {
  //console.log(formData)  
  setIsLoading(true)
  e.preventDefault();
    //dispatch(registerUser(formData));

    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/registration-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            credentials: "include"

        });
    
          const data = await res.json();
          setIsLoading(false)
          const fullOtp = otp.join("");
          //console.log('okkkkk', fullOtp.length)
          
          
          if(data.status){
           
          if(fullOtp.length === 0){
              setErrorOtp('OTP is required')
              return
          }
          if(fullOtp.length === 4){ } else {
              setErrorOtp('OTP is invalid')
              return
          } 
           
           dispatch(registerUserLogin(data));
            
           document.location.href=`/dashboard`
          
            
    
           
          } else {
            setError(data.message)
          }

    
  };
 
 
 
  const handleSubmit = async (e) => {
  //console.log(formData)  
  //setIsLoading(true)
  e.preventDefault();
    //dispatch(registerUser(formData));

    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/registration-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            credentials: "include"

        });
    
          const data = await res.json();
          //setIsLoading(false)
          if(data.status){
           //dispatch(registerUserLogin(data));
            
            //document.location.href=`/dashboard`
            setIsLoadingLogin(true)
            setError("")
            
    
           
          } else {
            setError(data.message)
          }

    
  };

  const userLogoutButton = () => {
    
    dispatch(userLogout())
    document.location.href=`/`

  }

  return (
    <>
      
      <div
  className="modal fade loginpop"
  id="loginModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content position-relative">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      />
      <div className="modal-body">
        <div className="poplogo">
          <img
            src="assets/img/logo-light.png"
            alt="Vivashri"
            title="Vivashri"
          />
        </div>
        <h5>Welcome Back! Please Login</h5>
        <div className="normal-login d-none">
          <div className="loginformrow">
            <label htmlFor="">
              Mobile No./ Email ID <span className="red">*</span>
            </label>
            <input
              type="text"
              placeholder="Mobile No./ Email ID"
              className="form-control"
            />
          </div>
          <div className="loginformrow">
            <label htmlFor="">
              Password <span className="red">*</span>
            </label>
            <input
              type="password"
              placeholder="Mobile No./ Email ID"
              className="form-control"
            />
            <div className="text-end">
              <a href="/#" className="forgotpass">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="loginformrow pt-2">
            <a href="/#" className="button login-btn d-block text-center">
              Login
            </a>
          </div>
          <div className="or">
            <span className="">or</span>
          </div>
          <div className="loginformrow">
            <a href="/#" className="button login-btn d-block text-center">
              Login with OTP
            </a>
          </div>
        </div>
        <div className="otp-login ">
          
          
          <div className="loginformrow" >
            <form onSubmit={handleSubmit}>
            <label htmlFor="">
              Mobile No./ Email ID <span className="red">*</span>
            </label>
            <input
              type="text"
              placeholder="Mobile No./ Email ID"
              className="form-control"
              onChange={handleChange}
              name='email'
              disabled={isLoadingLogin}
              
            />
            

            <div className="d-flex align-items-center justify-content-between">
              <span className="otpnot">We will send you an OTP to login</span>
              <div className="text-end">
                {isLoadingLogin && 
                <Link to="#" className="sendotp" onClick={() => {
                  setIsLoadingLogin(false)
                  setOtp(["","","",""])
                }}>
                  Back
                </Link>
}
              </div>
            </div>

            <p className='otpnot red'>{error}</p>
          {!isLoadingLogin &&
          <div className="loginformrow pt-2">
            <button type='submit'  className="button login-btn d-block text-center" style={{width:'100%'}}>
              Send OTP
            </button>
          </div>
          }

          </form>
          </div>
          
          
          <div>
            {isLoadingLogin && 
          <form onSubmit={handleSubmitOTPButton}>
          <div className="loginformrow mt-0">
            <label className="mt-0" htmlFor="">
              Enter OTP <span className="red">*</span>
            </label>
            <div className="otp-boxes">
              <input type="text" maxLength={1} className="otp-input"  
                    key={1}
                    min={0}
                    ref={(el) => (inputsRef.current[1] = el)}
                    onChange={(e) => handleChangeOTP(e, 1)}
                   value={otp[1]}
                   autoFocus
                     />
              <input type="text" maxLength={1} className="otp-input" 
              key={2}
                    min={0}
                    ref={(el) => (inputsRef.current[2] = el)}
                    onChange={(e) => handleChangeOTP(e, 2)}
                    value={otp[2]}
              />
              <input type="number" maxLength={1} className="otp-input" 
              key={3}
                    min={0}
                    ref={(el) => (inputsRef.current[3] = el)}
                    onChange={(e) => handleChangeOTP(e, 3)}
                    value={otp[3]}
              />
              <input type="number" maxLength={1} className="otp-input" 
              key={4}
                    min={0}
                    ref={(el) => (inputsRef.current[4] = el)}
                    onChange={(e) => handleChangeOTP(e, 4)}
                    value={otp[4]}
              />
              
            </div>
            { errorOtp && <p className='otpnot red'>{errorOtp}</p> }
          </div>
          <div className="loginformrow pt-2">
            <button type='submit'  className="button login-btn d-block text-center" style={{width:'100%'}}>
              Submit OTP
            </button>
          </div>
          </form>
}
          </div>
          
          
          
          { /* <div className="or">
            <span className="">or</span>
          </div>
          <div className="loginformrow">
            <button href="/#" className="button login-btn d-block text-center" style={{width:'100%'}}>
              Login with Password
            </button>
          </div>
          */ }
        </div>
        <div className="loginformrow">
          { /* <div className="d-flex align-items-center justify-content-between">
            <a href="/#" className="button loginwdfb me-2">
              <i className="fa-brands fa-facebook-f" /> Facebook
            </a>
            <a href="/#" className="button loginwdgoogle">
              <i className="fa-brands fa-google" /> Google
            </a>
          </div> */ }
          <p className="newto text-center">
            New to Vivashri? <a href="/registration">Sign Up Free</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      
      <div className="socialSticky mobile">
               <img src="assets/img/contact-btn.gif" alt="contact us button" />
          </div>
          <button  className="scrollToTop showBtn"><span id="progress-bar" style={{ "--scrollAmount": "19px" }}><svg width="48" height="48" viewBox="-5 -5 60 60" fill="none"><path stroke="#e85d95" stroke-width="2" d="M0.5,25a24.5,24.5 0 1,0 49,0a24.5,24.5 0 1,0 -49,0"></path></svg></span></button>
        <section
          className="headerSection headerTwo wow animate__fadeIn"
          data-wow-delay="0.2s"
        >
          <div className="site-width">
            <div className="headerWrapper">
              <div className="logoSection">
                <Link to="/">
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
                      <li>
                        {" "}
                        <a href="/">
                          <img
                            src="assets/img/icons/home-icon.svg"
                            alt="Home Icon"
                            style={{ marginRight: 5 }}
                          />
                        </a>
                      </li>
                      <li className="hasSub megaMenu">
                        <a href="/#">
                          Browse Profile By{" "}
                          <img
                            src="assets/img/icons/dropdown-arrow.svg"
                            alt="down Icon"
                            className="dropdownicon"
                            style={{ marginLeft: 5 }}
                          />
                        </a>
                        <div className="headerSubNav">
                          <ul className="headerSubMenu">
                            {/* <li><h5>Horoscope</h5></li> */}
                            <li>
                              <Link to="#">Aggarwal</Link>
                            </li>
                            <li>
                              <Link to="#">Brahmin</Link>
                            </li>
                            <li>
                              <Link to="#">Khatri</Link>
                            </li>
                            <li>
                              <Link to="#">Arora</Link>
                            </li>
                            <li>
                              <Link to="#">Sunni</Link>
                            </li>
                            <li>
                              <Link to="#">Bania</Link>
                            </li>
                          </ul>
                          <ul className="headerSubMenu">
                            <li>
                              <Link to="#">Sikh jat</Link>
                            </li>
                            <li>
                              <Link to="#">Jat</Link>
                            </li>
                            <li>
                              <Link to="#">Vaishnav</Link>
                            </li>
                            <li>
                              <Link to="#">Kanyakubj</Link>
                            </li>
                            <li>
                              <Link to="#">Kanyakubj</Link>
                            </li>
                            <li>
                              <Link to="#">Yadava</Link>
                            </li>
                          </ul>
                          <ul className="headerSubMenu">
                            <li>
                              <Link to="#">Teli</Link>
                            </li>
                            <li>
                              <Link to="#">Kshatriya</Link>
                            </li>
                            <li>
                              <Link to="#">Sindhi</Link>
                            </li>
                            <li>
                              <Link to="#">Shwetamber</Link>
                            </li>
                            <li>
                              <Link to="#">Scheduled Caste</Link>
                            </li>
                            <li>
                              <Link to="#">Digamber</Link>
                            </li>
                          </ul>
                          <ul className="headerSubMenu">
                            <li>
                              <Link to="#">Gupta</Link>
                            </li>
                            <li>
                              <Link to="#">Kurmi Kshatriya</Link>
                            </li>
                            <li>
                              <Link to="#">Gaur Brahmin</Link>
                            </li>
                            <li>
                              <Link to="#">Kayastha</Link>
                            </li>
                            <li>
                              <Link to="#">Maratha</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        {" "}
                        <Link to="/basic-search">Search</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to="/contact-us">Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
                    
          {loginShow ?  (
              <div className="headerButns dnone-but butt-pro-siz">
                      {/* <div class="headerRightMenuWrap">
                               <a href="/#"><img src="assets/img/my-profile-img.png" alt=""> <img src="assets/img/icons/dropdown-arrow.svg" alt="down Icon" class="dropdownicon" style="margin-left: 5px;"></a> 
                               
                            </div>   */}
                      <ul className="headerMenu">
                        <li className="hasSub megaMenu" style={{padding:'0px'}}>
                          <Link to="/dashboard" style={{ borderBottom: "none" }}>
                            <img
                              className="size-togle-pro"
                              src={formDataLogin.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formDataLogin.photo}` : 'assets/img/no-image.jpg'}
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
                                  {formDataLogin.name}{" "}
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
                                      <Link to="/#" style={{ border: "none", fontSize: 13 }}>
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
          )

                    :
                    (

                          <div className="headerButns d-none d-lg-block">
                            <div className="headerRightMenuWrap">
                              <ul className="headerRightMenu">
                                <li>
                                  <div className="defaultBtn">
                                    <a href="/#" class="loginbtn" data-bs-toggle="modal" data-bs-target="#loginModal">
                                    <img src="assets/img/free-gif.gif" alt="user icon" /> 
                                    <span class="headerCareer">Login / Register </span>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                    )}


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
      <li>
        {" "}
        <Link to="/">
          <img
            src="assets/img/icons/home-icon.svg"
            alt="Home Icon"
            style={{ marginRight: 5 }}
          />
        </Link>
      </li>
      <li className="hasSub megaMenu position-relative" onClick={toggleMegaMenu}>
        <Link to="#" style={{ color: "#7C172B" }}>
          Browse Profile By{" "}
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
              <Link to="#">Aggarwal</Link>
            </li>
            <li>
              <Link to="#">Brahmin</Link>
            </li>
            <li>
              <Link to="#">Khatri</Link>
            </li>
            <li>
              <Link to="#">Arora</Link>
            </li>
            <li>
              <Link to="#">Sunni</Link>
            </li>
            <li>
              <Link to="#">Bania</Link>
            </li>
          </ul>
          <ul className="headerSubMenu">
            <li>
              <Link to="#">Sikh jat</Link>
            </li>
            <li>
              <Link to="#">Jat</Link>
            </li>
            <li>
              <Link to="#">Vaishnav</Link>
            </li>
            <li>
              <Link to="#">Kanyakubj</Link>
            </li>
            <li>
              <Link to="#">Kanyakubj</Link>
            </li>
            <li>
              <Link to="#">Yadava</Link>
            </li>
          </ul>
          <ul className="headerSubMenu">
            <li>
              <Link to="#">Teli</Link>
            </li>
            <li>
              <Link to="#">Kshatriya</Link>
            </li>
            <li>
              <Link to="#">Sindhi</Link>
            </li>
            <li>
              <Link to="#">Shwetamber</Link>
            </li>
            <li>
              <Link to="#">Scheduled Caste</Link>
            </li>
            <li>
              <Link to="#">Digamber</Link>
            </li>
          </ul>
          <ul className="headerSubMenu">
            <li>
              <Link to="#">Gupta</Link>
            </li>
            <li>
              <Link to="#">Kurmi Kshatriya</Link>
            </li>
            <li>
              <Link to="#">Gaur Brahmin</Link>
            </li>
            <li>
              <Link to="#">Kayastha</Link>
            </li>
            <li>
              <Link to="#">Maratha</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        {" "}
        <Link to="/basic-search" style={{ color: "#7C172B" }}>
          Search
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/contact-us" style={{ color: "#7C172B" }}>
          Support
        </Link>
      </li>

      {loginShow ? (

        <li>
                                                                  {" "}
                                                                  <Link to="#" onClick={userLogoutButton}>Logout</Link>
                                                                </li>

      )
      
      
      : null

      }


    </ul>
    
    {loginShow ? null : (
    <div className="headerButns headerButns-res">
      <div className="headerRightMenuWrap">
        <ul className="headerRightMenu">
          <li>
            <div className="defaultBtn">
              <Link
                to="#"
                className="loginbtn"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                <img src="assets/img/free-gif.gif" alt="user icon" />
                <span className="headerCareer">Login / Register </span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    )
  }


  </div>
</div>



                    
              

              {/* <div class="dropdownmenu wow animate__fadeInDown">
                    <div class="headerNav">
                        <ul class="headerMenu">
                            <li class="hasSub megaMenu">
                                <Link to="get-reaport.html"><img src="assets/img/icons/astro-ser.svg" alt="chat" style="margin-right: 5px;"> Get Report</a>
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

export default HeaderPage
