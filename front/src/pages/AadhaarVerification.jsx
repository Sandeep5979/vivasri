import React, { useEffect, useRef, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HeaderUser from '../components/homePage/HeaderUser';

function AadhaarVerification() {
  
  const { userDetail } = useSelector((state) => state.auth);
  const { userDetailLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", ""]);
  
  
  /* const handleChange = (e) => {
      const { name, value } = e.target;
      
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      
      
  
  
      if (error[name]) {
        setError(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
      
    };
  */ 

    const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value && value.length > 4) {
        return false; 
    }
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 4);
    setOtp(newOtp);

    
    if (value && value.length > 3 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };
  
    const fetchUserDetail = async (userId) => {
      
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          });
  
        const data = await res.json();
       // console.log('adddhar', data.data[0])
        if(data.status){
          const aadhaar = data?.data?.[0]?.aadhaar_no;
          const newOtp = []
          if (aadhaar) {
            newOtp[1] = String(aadhaar).slice(0, 4);
            newOtp[2] = String(aadhaar).slice(4, 8);
            newOtp[3] = String(aadhaar).slice(8, 12);
            setOtp(newOtp);
          }
        
        
          setFormData({
          aadhaar_no:data.data[0].aadhaar_no,
          step:data.data[0].step
         
  
        })
  
      }
  
    }
  
  useEffect(() => {
    if(userDetail?._id){
    fetchUserDetail(userDetail._id)
    }
  
  }, [userDetail])
  
  
  const validate = () => {
      const errs = {};
      const fullOtp = otp.join("");
      if (!fullOtp) {
        errs.aadhaar_no = "Aadhaar no. is required";
      } else if (!/^\d{12}$/.test(fullOtp)) {
        errs.aadhaar_no = "Aadhaar no. must be a 12-digit number";
      }
      
      
      
  
      setError(errs);
      return Object.keys(errs).length === 0;
    };

    useEffect(() => {
        
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsScroll(false)
        
      }, [isScroll]);
  
  const handleSubmit = async (e) => {
      e.preventDefault();
       if (!validate()){
        setIsScroll(true)
       return;
     }
     //console.log(formData)
     const fullOtp = otp.join("");
      setIsLoading(true)
      
      let formDataNew = {aadhaar_no:fullOtp}
      if(formData.step >= 3){ } else {
        formDataNew = {...formDataNew, step:3}
      }
      
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/aadhaar-verification`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userDetail, formData:formDataNew }),
          
        });
  
        const data = await res.json();
        setIsLoading(false)
        if(data.status){
        //dispatch(verifyOtp(data));
  
         navigate('/aadhaar-otp')
        } else {
          
          if (data.errors) {
          // Convert array to object keyed by field
          const errorObj = {};
          data.errors.forEach(error => {
            errorObj[error.path] = error.msg;
          });
          setError(errorObj);
        }
          
          
          //setError(data.message)
        }
  
        //console.log(data)
      
    };

    const skipButton = async (e) => {
      e.preventDefault()
      
      //--------------------
     if(formData.step >= 4){ 
      navigate('/registration-success')

     } else {
      let formDataNew = {step:4}
      
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/contact-information`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail, formData:formDataNew }),
        
      });
      const data = await res.json();
      if(data.status){
         
          navigate('/registration-success')
        
      }
    }
    //-----------------
        
      
      
      
            

}
  
  return (
    <>
     { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Aadhaar Verification </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Aadhaar Verification</Link>
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
          <div className="col-lg-8 col-md-12 col-sm-12 ">
            <div className="con-reg">
                <div class="step-container">
                    

                    <div className="row">
                                          
                                          <div className="col-sm-4">
                                               <div class="step-info">
                                                  <h2>Aadhaar Verification</h2>
                                                  <p><Link to="/contact-information"> <span>Prev Step- Contact Details</span></Link></p>
                                                </div>
                                          </div>
                                          <div className="col-sm-8 text-right">
                                              <div class="progress-bar" style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 75%, pink 0)"}}>
                                                  <span>3 of 4</span>
                                              </div>
                                          </div>
                                          { /* <div className="col-sm-4 text-sm-end">
                                                <div class="step-info">
                                                  <h2>&nbsp;</h2>
                                                  <p><Link onClick={skipButton}>Next Step- OTP Verification</Link></p>
                                                </div>
                                          </div>
                                          */ }
                                          
                    
                                       </div>
                </div>
                
              

              <div className="form-bas-de pt-2">
                <form onSubmit={handleSubmit}>
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Enter Aadhaar Number{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                        
                      </div>
                      <div className="col-md-5 col-sm-12">
                           
                        <div className="d-flex align-items-center adhaarfld">
                        <input type="text" style={{marginRight:'10px'}} key={1}
                            maxLength={4} 
                            min={0}
                            ref={(el) => (inputsRef.current[1] = el)}
                            onChange={(e) => handleChange(e, 1)}
                            value={otp[1]}
                        /> -
                        <input type="text" style={{ width: 100, marginRight: 10, marginLeft: 10 }} 
                        key={2}
                            maxLength={4} 
                            min={0}
                            ref={(el) => (inputsRef.current[2] = el)}
                            onChange={(e) => handleChange(e, 2)}
                            value={otp[2]}
                        /> -
                        <input type="text" style={{ width: 100, marginLeft: 10 }} 
                        key={3}
                            maxLength={4} 
                            min={0}
                            ref={(el) => (inputsRef.current[3] = el)}
                            onChange={(e) => handleChange(e, 3)}
                            value={otp[3]}
                        
                        />
                      </div>


                      {/*  <input
                          type="number"
                          placeholder="Your Aadhaar Number"
                          name="aadhaar_no"
                          onChange={handleChange}
                          value={formData.aadhaar_no}
                          
                          
                          
                        />
                        */ }
                        {error.aadhaar_no && <p className="error">{error.aadhaar_no}</p>}

                        <div className="row inputs-margs nam-inp row">
                              <div className="col-12 px-0 pt-3">
                                  <div className="">
                                    
                                    <div className="d-flex align-items-center justify-content-between">
                                        <Link className="backbtn" style={{ color: "white" }} to="/contact-information">Back</Link>{" "}                          
                                      <button className="continue" type='submit' disabled={isLoading}>
                                      {isLoading ? "Wait..." : "Send OTP"}</button>
                                    <Link className="backbtn skipbtn" style={{ color: "white", marginLeft: "2%", paddingLeft: "5px", paddingRight: "5px", float: "right" }} onClick={skipButton}>
                                                                          Skip
                                                                        </Link>
                                    </div>
                                                                         
                                    
                                    
                                    
                                    
                                  </div>
                            </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
                
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-6 ">
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

export default AadhaarVerification
