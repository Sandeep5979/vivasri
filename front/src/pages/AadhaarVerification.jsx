import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function AadhaarVerification() {
  
  const { userDetail } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  
  
  const handleChange = (e) => {
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
  
  
    const fetchUserDetail = async (userId) => {
      
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          });
  
        const data = await res.json();
        //console.log(data)
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
  
  
  const validate = () => {
      const errs = {};
      
      if (!formData.aadhaar_no) {
        errs.aadhaar_no = "Aadhaar no. is required";
      } else if (!/^\d{12}$/.test(formData.aadhaar_no)) {
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
      setIsLoading(true)
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/aadhaar-verification`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userDetail, formData }),
          
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
  
  return (
    <>
     <HeaderPage />

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Aadhaar Verification </h1>
        <ul className="inrbrnNav">
          <li>
            <a href="index.html">
              <img src="assets/img/icons/home.png" alt="home icon" />
            </a>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <a href="/#"> Login/Register</a>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <a href="/#">Register</a>
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
              <h3>Aadhaar Verification</h3>
              <div className="col-12">
                <div className="line-bg" />
              </div>
              <div className=" form-bas-de ">
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
                      <div className="col-md-8 col-sm-12">
                        <input
                          type="number"
                          placeholder="Your Aadhaar Number"
                          name="aadhaar_no"
                          onChange={handleChange}
                          value={formData.aadhaar_no}
                          
                          
                          
                        />
                        {error.aadhaar_no && <p className="error">{error.aadhaar_no}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12 d-flex text-right p-0">
                    <div className="col-4" />
                    <div className="col-8">
                      <div className="maxwid">
                        <button className="back">
                          <Link
                            style={{ color: "white" }}
                            to="/contact-information"
                          >
                            Back
                          </Link>{" "}
                        </button>
                        
                                                
                        <button className="send-aad-otp" type='submit' disabled={isLoading}>
                          {isLoading ? "Wait..." : "Send-OTP"}
                            
                          
                        </button>
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
