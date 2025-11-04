import React, { useEffect, useRef, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HeaderUser from '../components/homePage/HeaderUser';

function AadhaarOtp() {
  
  
const navigate = useNavigate();
const { userDetail } = useSelector((state) => state.auth);
const { userDetailLogin } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({})

  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  
  const fetchUserDetail = async (userId) => {
        
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            });
    
          const data = await res.json();
          if(data.status){
          setFormData({
            aadhaar_no:data.data[0].aadhaar_no,
           
    
          })
    
        }
    
      }
    
    useEffect(() => {
      if(userDetail?._id){
      fetchUserDetail(userDetail._id)
      }
    
    }, [userDetail])

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
  };

  const validate = () => {
      const errs = {};
      const fullOtp = otp.join("");
      if (Number(fullOtp) !== Number(123456)) {
        errs.otp = "Invalid OTP";
      }
            
  
      setError(errs);
      return Object.keys(errs).length === 0;
    };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validate()){
        setIsScroll(true)
       return;
     }
      setIsLoading(true)
      //const fullOtp = otp.join("");
     setIsLoading(false)
      navigate('/registration-success')

  }

  useEffect(() => {
      
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsScroll(false)
      
    }, [isScroll]);

const skipButton = (e) => {
      e.preventDefault()
      
    navigate('/registration-success')
            

}


  return (
    <>
     { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

    <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>OTP Verification </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <a href="/#">OTP Verification</a>
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
        <div className="row pb-50 pt-40">
          <div className="col-md-8 ">
            <div className="con-reg">
              <div class="step-container">                   

                    <div className="row">
                      <div className="col-sm-4">
                            <div class="step-info">
                              <h2>OTP Verification</h2>
                              <p><Link to="/aadhaar-verification"> <span>Prev Step- Aadhaar Verification</span></Link></p>
                            </div>
                      </div>
                      <div className="col-sm-8 text-right">
                          <div class="progress-bar" style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 100%, pink 0)"}}>
                              <span>4 of 4</span>
                          </div>                  
                      </div>
                      { /* 
                      <div className="col-sm-4 text-sm-end">
                            <div class="step-info">
                              <h2>&nbsp;</h2>
                              <p><Link onClick={skipButton}>Next Step- Religion Details</Link></p>
                            </div>
                      </div>
                      */ }
                    </div>

                    


                </div>

              <div className=" form-bas-de ">
                <form onSubmit={handleSubmit}>
                <div className="row inputs-marg    ">
                  <div className="col-12   p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Enter One Time Password{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="form-otp ms-0">
                          
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
                            <input type="text" 
                            key={5}
                            maxLength={1}
                            min={0} 
                            ref={(el) => (inputsRef.current[5] = el)}
                            onChange={(e) => handleChange(e, 5)}
                            style={{width:'48px'}}
                            value={otp[5]}
                            />
                            <input type="text" 
                            key={6}
                            maxLength={1}
                            min={0} 
                            ref={(el) => (inputsRef.current[6] = el)}
                            onChange={(e) => handleChange(e, 6)}
                            style={{width:'48px'}}
                            value={otp[6]}
                            />
                          {error.otp && <p className="error">{error.otp}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 pt-3">
                    <div className="row">
                      <div className="col-4" />
                      <div className="col-8">
                        <p
                          style={{
                            fontWeight: 500,
                            letterSpacing: 1,
                            marginBottom: 0
                          }}
                        >
                          
                          {formData?.aadhaar_no ? 'A code has been sent to ******'+String(formData?.aadhaar_no).slice(-4) : ""}
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12 d-flex text-right p-0">
                    <div className="col-4" />
                    <div className="col-8">
                      <div className="maxwid-aadhar">
                        
                        <div className="d-flex align-items-center justify-content-between">
                                                                <Link className="backbtn" style={{ color: "white" }} to="/aadhaar-verification">Back</Link>{" "}                          
                                                              <button className="send-aad-otp" type='submit' disabled={isLoading}>
                                                              {isLoading ? "Wait..." : "Verify Code"}
                                                                
                                                              
                                                            </button>
                                                                                          </div>
                                                            { /* <br/>
                                                            <hr />
                                                            <div className="d-flex align-items-center justify-content-center">
                                                              <Link to="#" className="skipbtn" onClick={skipButton}>Skip</Link>
                                                            </div>
                                                            */ }
                        
                        
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="ic-con">
              <h3 className="">Why Get Started?</h3>
              <p>Special Choices for You</p>
              <div className="col-12">
                <div className="line-bg" />
              </div>
              <div className="ic-img-con d-flex">
                <div className="img-ic">
                  <img src="assets/img/register/file-search_.png" alt="" />
                </div>
                <div className="ic-cons">
                  <span>Verified Matches for a Happy Future</span>
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

export default AadhaarOtp
