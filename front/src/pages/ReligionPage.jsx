import React, { useEffect, useRef, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HeaderUser from '../components/homePage/HeaderUser';

function ReligionPage() {
  
  const { userDetail } = useSelector((state) => state.auth);
  const { userDetailLogin } = useSelector((state) => state.auth);
  const location = useLocation();
const navigate = useNavigate();
const [formData, setFormData] = useState({});
const [error, setError] = useState({})
const [religion, setReligion] = useState([])
const [caste, setCaste] = useState([])
const [subCaste, setSubCaste] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isScroll, setIsScroll] = useState(false)
const [gotra, setGotra] = useState([])

const religionRef = useRef(null);
const casteRef = useRef(null);

  const fetchUserDetail = async (userId) => {
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      console.log(data)
      if(data.status){
        fetchCaste(data.data[0].religion)
        fetchSubCaste(data.data[0].caste)
        fetchGotra(data.data[0].religion)
      
        setFormData({
        religion:data.data[0].religion,
        caste:data.data[0].caste,
        sub_caste:data.data[0].sub_caste,
        gotra:data.data[0].gotra,
        gotra_other:data.data[0].gotra_other,
        dosh:data.data[0].dosh,
        step:data.data[0].step,

      })

    }

  }

useEffect(() => {
  if(userDetail?._id){
  fetchUserDetail(userDetail._id)
  }

  if(location.pathname === '/religion-edit'){
    if(userDetailLogin?._id){
      fetchUserDetail(userDetailLogin._id)
    } else {
      navigate('/')
    }

  }

}, [userDetail])

const fetchReligion = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/religion`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setReligion(data.data)
      }
}
const fetchCaste = async (religionId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/caste/${religionId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setCaste(data.data)
      }
}
const fetchSubCaste = async (casteId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/sub-caste/${casteId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setSubCaste(data.data)
      }
}
const fetchGotra = async (religionId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/gotra/${religionId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setGotra(data.data)
      }
}

useEffect(() => {
  fetchReligion();

}, [])


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

    if(name === 'religion'){
      fetchCaste(value)
      fetchGotra(value)
    }

    if(name === 'caste'){
      fetchSubCaste(value)
    }
    
  };

const validate = () => {
    const errs = {};
    
    if (!formData.caste) {
      errs.caste = "Caste is required";
      casteRef.current.focus();
    }
    if (!formData.religion) {
      errs.religion = "Religion is required";
      religionRef.current.focus();
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
     if(location.pathname === '/religion-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

     }

     if(formData.step >= 5){ } else {
      formDataNew = {...formData, step:5}
      }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/religion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData:formDataNew }),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));
      if(location.pathname === '/religion-edit'){
        navigate('/my-profile')
        } else {
          navigate('/location-detail')
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
        
        //--------------------
     let userId;
     if(location.pathname === '/religion-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

     }
    if(formData.step >= 5){ 
      } else {
      let formDataNew = {step:5}
      
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/contact-information`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData:formDataNew }),
        
      });
      const data = await res.json();
      
    }
    //-----------------
        
        
        if(location.pathname === '/religion-edit'){
              navigate('/my-profile')
              } else {
                navigate('/location-detail')
              }

  }
  
  return (
    <>
      { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }
      <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Religion </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Religion</Link>
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
          <div className="col-lg-8 col-md-12">
            <div className="con-reg">
              <div class="step-container">
                 

                  <div className="row">
                                        
                                        <div className="col-sm-4">
                                             <div class="step-info">
                                                <h2>Religion Details</h2>
                                                {location.pathname === '/religion-edit'?null:
                                                <p><Link to="/aadhaar-verification"> <span>Prev Step- Aadhaar Verification</span></Link></p>
                                                }
                                                </div>
                                        </div>
                                        {location.pathname === '/religion-edit'?null:
                                        <>
                                        <div className="col-sm-4 text-center">
                                            <div class="progress-bar" style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 50%, pink 0)"}}>
                                              <span>5 of 11</span>
                                          </div>
                                        </div>
                                        <div className="col-sm-4 text-sm-end">
                                              <div class="step-info">
                                                <h2>&nbsp;</h2>
                                                <p><Link onClick={skipButton}>Next Step- Location Details</Link></p>
                                              </div>
                                        </div>
                                        </>
}
                  
                                     </div>
                    </div>



              <div className=" form-bas-de ">
                
                <form onSubmit={handleSubmit}>
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Religion{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='religion'
                        onChange={handleChange}
                        value={formData.religion}
                        ref={religionRef}
                        >
                          <option value="">-- Select Religion --</option>

                          {religion && religion.map((religionList, index)  => {

                            return (

                                <option value={religionList._id}>{religionList.name}</option>
                            )

                          })
                        }

                        </select>
                        {error.religion && <p className="error">{error.religion}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Caste{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='caste'
                        onChange={handleChange}
                        value={formData.caste}
                        ref={casteRef}
                        >
                          <option value="">-- Select Caste --</option>
                          {caste && caste.map((casteList, index)  => {

                            return (

                                <option value={casteList._id}>{casteList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.caste && <p className="error">{error.caste}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Sub Caste{" "}
                          
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='sub_caste'
                        onChange={handleChange}
                        value={formData.sub_caste}
                        >
                          <option value="">-- Select Sub Caste--</option>
                          {subCaste && subCaste.map((subCasteList, index)  => {

                            return (

                                <option value={subCasteList._id}>{subCasteList.name}</option>
                            )

                          })
                        }
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Gotra{" "}
                          
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='gotra'
                        onChange={handleChange}
                        value={formData.gotra}
                        
                        >
                          <option value="">-- Select Gotra --</option>
                          {gotra && gotra.map((gotraList, index)  => {

                            return (

                                <option value={gotraList._id}>{gotraList.name}</option>
                            )

                          })
                        }
                        </select>
                        
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Other{" "}
                          
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        
                        <input type="text" name="gotra_other" 
                        onChange={handleChange}
                        value={formData.gotra_other}
                        />

                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Dosh 
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" name="dosh" 
                        onChange={handleChange}
                        value={formData.dosh}
                        />

                        {error.dosh && <p className="error">{error.dosh}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12 d-flex text-right p-0">
                    <div className="col-4" />
                    <div className="col-8">
                      <div className="maxwid">
                        
                        {location.pathname === '/religion-edit'?
                        <div className="d-flex align-items-center justify-content-end">
                                                        
                              <button className="countiniue" type='submit' disabled={isLoading}>
                                {isLoading ? "Wait..." : "Save"}
                              </button>

                                                      </div>
                        :
                        <div className="d-flex align-items-center justify-content-between">
                              <Link className="backbtn"
                                style={{ color: "white" }}
                                to="/aadhaar-verification"
                              >
                                Back
                              </Link>{" "}                          
                              <button className="countiniue" type='submit' disabled={isLoading}>
                                {isLoading ? "Wait..." : "Continue"}
                              </button>

                              <Link className="backbtn skipbtn" style={{ color: "white", marginLeft: "2%", paddingLeft: "5px", paddingRight: "5px", float: "right" }} onClick={skipButton}>
                                                                                                        Skip
                                                                                                      </Link>
                        </div>
}
                        
                        
                        
                        
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="ic-con">
              <h3 className="">Why Get Started?</h3>
              <p>Special Choices for You</p>
              <div className="col-12">
                <div className="line-bg" />
              </div>
              <div className="ic-img-con d-flex align-items-center">
                <div className="img-ic">
                  <img src="assets/img/register/file-search_.png" alt="" />
                </div>
                <div className="ic-cons">
                  <span>Verified Matches for a Happy Future</span>
                </div>
              </div>
              <div className="ic-img-con d-flex align-items-center">
                <div className="img-ic">
                  <img src="assets/img/register/phone_svgrepo.com.png" alt="" />
                </div>
                <div className="ic-cons">
                  <span>Trusted &amp; Authentic Details</span>
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
                  <span>Keep Your Photos Safe</span>
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

export default ReligionPage
