import React, { useEffect, useRef, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HeaderUser from '../components/homePage/HeaderUser';

function ContactInformation() {

  const location = useLocation();
  const { userDetailLogin } = useSelector((state) => state.auth);

const { userDetail } = useSelector((state) => state.auth);
const navigate = useNavigate();
const [formData, setFormData] = useState({});
const [error, setError] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [isScroll, setIsScroll] = useState(false)

const contact_emailRef = useRef(null);
const contact_noRef = useRef(null);
const referenceRef = useRef(null);

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
        contact_no:data.data[0].contact_no,
        contact_email:data.data[0].contact_email,
        instagram:data.data[0].instagram,
        facebook:data.data[0].facebook,
        reference:data.data[0].reference,
        reference_other:data.data[0].reference_other,
        step:data.data[0].step

      })

    }

  }

useEffect(() => {
  if(userDetail?._id){
  fetchUserDetail(userDetail._id)
  }

  if(location.pathname === '/contact-information-edit'){
    if(userDetailLogin?._id){
      fetchUserDetail(userDetailLogin._id)
    } else {
      navigate('/')
    }

  }

}, [userDetail])

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
const validateMobile = (value) => {
    const regex = /^\d{10}$/;
    return regex.test(value);
};
const validate = () => {
    const errs = {};
    
    if (!formData.reference && !formData.reference_other) {
      errs.reference = "Reference is required";
      referenceRef.current.focus();
    }
    if (!formData.contact_email) {
      errs.contact_email = "Contact email is required";
      contact_emailRef.current.focus();
    }
    if (!formData.contact_no) {
      errs.contact_no = "Contact no. is required";
      contact_noRef.current.focus();
    }
    
    
    if (formData.contact_email){
      if(!isValidEmail(formData.contact_email)){
        errs.contact_email = "Please enter a valid email address";
        contact_emailRef.current.focus();
      }
    }
    if (formData.contact_no){
      if(!validateMobile(formData.contact_no)){
        errs.contact_no = "Please enter a valid 10-digit mobile number";
        contact_noRef.current.focus();
      }
    } 

    

    setError(errs);
    return Object.keys(errs).length === 0;
  };

const handleSubmit = async (e) => {
    e.preventDefault();
     if (!validate()){
       // setIsScroll(true)
       return;
     }
    setIsLoading(true)

     let userId;
     let formDataNew = formData
     if(location.pathname === '/contact-information-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

     }

     if(formData.step >= 2){ } else {
      formDataNew = {...formData, step:2}
      }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/contact-information`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData:formDataNew }),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));
        if(location.pathname === '/contact-information-edit'){
        navigate('/my-profile')
        } else {
          navigate('/aadhaar-verification')
        }
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

  useEffect(() => {
      
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsScroll(false)
      
    }, [isScroll]);

const skipButton = async (e) => {
  e.preventDefault()
  
  if(location.pathname === '/contact-information-edit'){
        navigate('/my-profile')
        } else {
          
      
     //--------------------
     if(formData.step >= 2){ 
      navigate('/aadhaar-verification')

     } else {
      let formDataNew = {step:2}
      
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/contact-information`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail, formData:formDataNew }),
        
      });
      const data = await res.json();
      if(data.status){
         
          navigate('/aadhaar-verification')
        
      }
    }
    //-----------------
        
        }

}

return (
    <>
     { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Contact Information </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Contact Information</Link>
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
            <div className="col-md-8">
              <div className="con-reg">
                <div class="step-container">
                   <div className="row">
                      
                      <div className="col-sm-4">
                           <div class="step-info">
                              <h2>Contact Details</h2>
                              {location.pathname === '/contact-information-edit' ? null : 
                              <p><Link to={`${location.pathname === '/contact-information-edit' ? '/my-profile' : '/basic-details'}`}> <span>Prev Step- Basic Details</span></Link></p>
                              }
                              </div>
                      </div>
                     {location.pathname === '/contact-information-edit' ? null:
                      <>
                      <div className="col-sm-4 text-center">
                          <div class="progress-bar" style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 50%, pink 0)"}}>
                              <span>2 of 4</span>
                          </div>
                      </div>
                      <div className="col-sm-4 text-sm-end">
                            <div class="step-info">
                              <h2>&nbsp;</h2>
                              <p><Link onClick={skipButton}>Next Step- Aadhaar Verification</Link></p>
                            </div>
                      </div>
                      </>
}

                   </div>                  

                </div>
                
                <div className=" form-bas-de ">
                  <form onSubmit={handleSubmit}>
                  <div className="row inputs-marg  nam-inp  ">
                    <div className="col-12 d-flex align-items-center p-0">
                      <div className="col-4">
                        <label htmlFor="">
                          Contact Number{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="number" name="contact_no"
                        onChange={handleChange}
                        value={formData.contact_no}
                        ref={contact_noRef}
                        />
                        {error.contact_no && <p className="error">{error.contact_no}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="row  inputs-margs nam-inp  ">
                    <div className="col-12 d-flex align-items-center p-0">
                      <div className="col-4">
                        <label htmlFor="">
                          Contact Email Address{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="text" name="contact_email" 
                        onChange={handleChange}
                        value={formData.contact_email}
                        ref={contact_emailRef}
                        />
                        {error.contact_email && <p className="error">{error.contact_email}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="row  inputs-margs nam-inp  ">
                    <div className="col-12 d-flex align-items-center p-0">
                      <div className="col-4">
                        <label htmlFor="">
                          Instagram ID{" "}
                          
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="text" name="instagram"
                        onChange={handleChange}
                        value={formData.instagram}
                        />
                        
                      </div>
                    </div>
                  </div>
                  <div className="row  inputs-margs nam-inp  ">
                    <div className="col-12 d-flex align-items-center p-0">
                      <div className="col-4">
                        <label htmlFor="">
                          Facebook ID{" "}
                          
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="text" name='facebook'
                        onChange={handleChange}
                        value={formData.facebook}
                        />
                      </div>
                    </div>
                  </div>
                  <h3>Reference</h3>
                  <div className="col-12">
                    <div className="line-bg" />
                  </div>
                  <div className="row inputs-marg  nam-inp  ">
                    <div className="col-12 d-flex align-items-center p-0">
                      <div className="col-4">
                        <label htmlFor="">
                          Reference Details
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-8">
                        <select className="form-select" name='reference'
                        onChange={handleChange}
                        value={formData.reference}
                        ref={referenceRef}
                        >
                          <option value="">-- Select Reference --</option>
                          <option value='Google Search'>Google Search</option>
                          <option value='Facebook'>Facebook</option>
                          <option value='Instagram'>Instagram</option>
                          <option value='WhatsApp'>WhatsApp</option>
                          <option value='Event'>Event</option>
                          <option value='Linked In'>Linked In</option>
                          
                        </select>
                        
                        {error.reference && <p className="error">{error.reference}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="row inputs-marg  nam-inp  ">
                    <div className="col-12 d-flex align-items-center p-0">
                      <div className="col-4">
                        <label htmlFor="">
                          Other
                          
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="text" name='reference_other'
                        onChange={handleChange}
                        value={formData.reference_other}
                        />
                        
                        
                      </div>
                    </div>
                  </div>
                  <div className="row inputs-margs nam-inp  ">
                    <div className="col-12 d-flex text-right p-0">
                      <div className="col-4" />
                      <div className="col-8">
                        <div className="maxwid">
                              
                                    
                                    {location.pathname === '/contact-information-edit' ? 
                                    <div className="d-flex align-items-center justify-content-end">
                                    <button className="countiniue" type='submit' disabled={isLoading}>
                                      {isLoading ? "Wait..." : "Save"}
                                    </button>
                                    </div>

                                    :
                                    <>
                                    <div className="d-flex align-items-center justify-content-between">
                                    <Link className="backbtn"
                                      style={{ color: "white" }}
                                      to={`${location.pathname === '/contact-information-edit' ? '/my-profile' : '/basic-details'}`}
                                     
                                    >
                                      Back
                                    </Link>{" "}                          
                                    <button className="countiniue" type='submit' disabled={isLoading}>
                                      {isLoading ? "Wait..." : "Continue"}
                                    </button>

                                    <Link className="backbtn skipbtn" style={{ color: "white" }} onClick={skipButton}>
                                      Skip
                                    </Link>
                                    </div>
                                    </>
}
                              

                              {/* <br/><hr />
                              <div className="d-flex align-items-center justify-content-center">
                                    <Link to="#" className="skipbtn" onClick={skipButton}>Skip</Link>
                              </div> */}
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
                <h3 className="">Why Register?</h3>
                <p>Exclusive Options From our Lovers</p>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="ic-img-con d-flex align-items-center">
                  <div className="img-ic">
                    <img src="assets/img/register/file-search_.png" alt="" />
                  </div>
                  <div className="ic-cons">
                    <span>Lots of Genuine Profilesfor Marriage</span>
                  </div>
                </div>
                <div className="ic-img-con d-flex align-items-center">
                  <div className="img-ic">
                    <img
                      src="assets/img/register/phone_svgrepo.com.png"
                      alt=""
                    />
                  </div>
                  <div className="ic-cons">
                    <span>Verified Contact Numbers</span>
                  </div>
                </div>
                <div className="ic-img-con d-flex align-items-center">
                  <div className="img-ic">
                    <img
                      src="assets/img/register/images_svgrepo.com.png"
                      alt=""
                    />
                  </div>
                  <div className="ic-cons">
                    <span>Photo Protection Features</span>
                  </div>
                </div>
                <div className="ic-img-con d-flex align-items-center">
                  <div className="img-ic">
                    <img
                      src="assets/img/register/privacy-dashboard_svgrepo.com.png"
                      alt=""
                    />
                  </div>
                  <div className="ic-cons">
                    <span>Exclusive Privacy Options</span>
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

export default ContactInformation
