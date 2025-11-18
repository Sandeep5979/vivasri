import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, registerUserLogin, verifyOtp } from '../../store/authActions';

const LoginPopup = forwardRef(({ url, email }, ref) => {

    //console.log('urllllllllllllllllll', url, email)

  const [formData, setFormData] = useState({ email: "" });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errorOtp, setErrorOtp] = useState("")
  const inputsRef = useRef([]);
  const[isLoadingLogin, setIsLoadingLogin] = useState(false)



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
           dispatch(verifyOtp(data));
           //console.log('urlllllllkkkkkk', url) 
          if(url === 'reload'){
            window.location.reload();
          } else {
          document.location.href=url
          }
           
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

  useEffect(() => {
    if(email){
      setFormData({email:email})
    }

  }, [email])

  


  return (
    <>
     <div
  className="modal fade loginpop"
  id="loginModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  ref={ref}
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
              value={email}
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
    </>
  )
})

export default LoginPopup
