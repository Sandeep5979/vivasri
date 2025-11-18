import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux';
import { useRef } from "react";
import { registerUserLogin, verifyOtp } from '../store/authActions';
import HeaderUser from '../components/homePage/HeaderUser';


function SendOtp() {
const dispatch = useDispatch();
const navigate = useNavigate();
const { userId } = useParams();
const { userDetailLogin } = useSelector((state) => state.auth);
const [isLoading, setIsLoading] = useState(false)




  const [error, setError] = useState("");
  //const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  

useEffect(() => {

if(user){
  //console.log('okkkkkkkkkkkkkkkllll', user)
  //navigate('/registration')

}

}, [user, navigate])

 

  

  const handleChange = (e, index) => {
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

    setError("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if(!fullOtp){
      setError("OTP is required")
      return 
    }
    
    
    setIsLoading(true)
    //console.log(user)
    
    
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, otp:fullOtp, userId}),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      dispatch(verifyOtp(data));

      // navigate('/basic-details')
     
     
      if(data.page){
             // console.log('okkkkkkkkkkkkkkkk', data)
             //navigate(`/${data.page}`)
             if(data.page === 'dashboard'){

              handleSubmitOTPButton({email:user.email})
             } else {
             document.location.href=`/${data.page}`
             }
            
            } else {
      
      
      document.location.href=`/basic-details`
      
            }
    
    
    } else {
        setError(data.message)
      }
      

      //console.log(data)
    
  };

  const handleSubmitOTPButton = async (formData) => {
      
      //e.preventDefault();
        //dispatch(registerUser(formData));
        
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/registration-login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
                credentials: "include"
    
            });
        
              const data = await res.json();
              setIsLoading(false)
              //console.log(data)
               
               dispatch(registerUserLogin(data));
                
              document.location.href=`/dashboard`
              
                
        
               
              
    
        
      };

 function maskEmail(email) {
  const [userEmail, domain] = email.split("@");  // split before and after @
  const visible = userEmail.slice(0, 3);         // first 3 chars
  return visible + "*****@" + domain;
}


  return (
    <>
      { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }
        
        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>OTP </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">OTP</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
    <div className="register-sec ">
      <div className="container-fluid con-flu-padd  ">
        <div className="container-fluid  bg-register ">
          <div className="row pb-70">
            <div className="col-12 p-0">
              <div className="headings">
                <h2>Find Your Soulmate</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-box">
                <img src="assets/img/register/subh-vivah.png" alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="con-reg">
                <h3>Enter the one time password</h3>
                <div className="col-11">
                  <div className="line-bg" />
                </div>
                 
                <div className=" form-otp ">
                  <form onSubmit={handleSubmit}>
                  <p style={{ fontWeight: 500, letterSpacing: 1 }}>
                    { 
                    user?.email ? 'A code has been sent to '+maskEmail(user.email) :
                    user?.mobile ? 'A code has been sent to ******'+String(user?.mobile).slice(-4) : "" 
                    }
                    
                    
                  </p>
                  
                    <input type="text"
                    key={1}
                    maxLength={1} 
                    min={0}
                    ref={(el) => (inputsRef.current[1] = el)}
                    onChange={(e) => handleChange(e, 1)}
                    style={{width:'48px'}}
                    value={otp[1]}
                    />
                    <input type="text" 
                    key={2}
                    maxLength={1} 
                    min={0}
                    ref={(el) => (inputsRef.current[2] = el)}
                    onChange={(e) => handleChange(e, 2)}
                    style={{width:'48px'}}
                    value={otp[2]}
                    />
                    <input type="text"
                    key={3}
                    maxLength={1}
                    min={0} 
                    ref={(el) => (inputsRef.current[3] = el)}
                    onChange={(e) => handleChange(e, 3)}
                    style={{width:'48px'}}
                    value={otp[3]}
                    />
                    <input type="text"
                    key={4}
                    maxLength={1}
                    min={0} 
                    ref={(el) => (inputsRef.current[4] = el)}
                    onChange={(e) => handleChange(e, 4)}
                    style={{width:'48px'}}
                    value={otp[4]}
                    />
                    {error && <p className='error'>{error}</p>}
                  <br />
                  <button className="back">
                    <Link style={{ color: "white" }} to="/registration">
                      Back
                    </Link>{" "}
                  </button>
                  <button className="verify-otp" type='submit' disabled={isLoading}>
                          {isLoading ? "Wait..." : "Verify OTP"}
                    
                      
                    
                  </button>
                  
                  </form>
                  
                </div>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="ic-con">
                <h3 className="">Why Register?</h3>
                <p>Exclusive Options From our Lovers</p>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="ic-img-con d-flex">
                  <div className="img-ic">
                    <img src="assets/img/register/file-search_.png" alt="" />
                  </div>
                  <div className="ic-cons">
                    <span>Lots of Genuine Profilesfor Marriage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>



      <FooterPage />
    </>
  )
}

export default SendOtp
