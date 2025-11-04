import React, { useEffect, useRef, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HeaderUser from '../components/homePage/HeaderUser';

function PartnerQualities() {

  const location = useLocation();
  
  const { userDetail } = useSelector((state) => state.auth);
  const { userDetailLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
  const [hobbies, setHobbies] = useState([])
  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useState({ 
      partner_qualities: "",
      partner_hobbies: [] 
    });
  
  
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  const  hobbiesRef= useRef(null);
  
  const fetchHobbiesList = async () => {
  
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/hobbies`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          });
  
        const data = await res.json();
        if(data.status){
  
          setHobbies(data.data)
        }
  }
  
  
  
  useEffect(() => {
    fetchHobbiesList()
  
  }, [])
  
  const handleChange = (e) => {
      const { name, value } = e.target;
      
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      
      
      if(name === 'partner_hobbies'){
        if (selected.includes(value)) {
        setSelected(selected.filter((item) => item !== value)); // remove
        } else {
          setSelected([...selected, value]); // add
        }
      }
  
  
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
        
        if(data.status){
          
          setSelected(data.data[0]?.partner_hobbies || [])
          
          
        setFormData({
  
          partner_qualities:data.data[0].partner_qualities,
          gender:data.data[0].gender,
         
  
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
      
      
      if (!Array.isArray(selected) || selected.length === 0) errs.partner_hobbies = "Select at least one hobbies";
  
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
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/partner-qualities`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userDetail, formData, selected }),
          
        });
  
        const data = await res.json();
        setIsLoading(false)
        if(data.status){
        //dispatch(verifyOtp(data));
  
         navigate('/partner-basic-detail')
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
  
      //  console.log(data)
      
    };

    useEffect(() => {
        
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsScroll(false)
        
      }, [isScroll]);

const skipButton = (e) => {
        e.preventDefault()
        
        if(location.pathname === '/partner-qualities-edit'){
          navigate('/my-profile')
        } else {
          navigate('/partner-basic-detail')
        }

  }



  
  return (
    <>
      { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

    { /*  <div
    className="modal fade"
    id="hobbiesModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Hobbies
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body" style={{ background: "#FFF0F9" }}>
          <div className="radio-wrapper-301s inputs-margs">
            {hobbies && hobbies.map((hobbiesList, index)  => {

                            if(index > 6){
                              return (

                                <label htmlFor={hobbiesList._id} className='mb-3'>  
                                <input
                                  id={hobbiesList._id}
                                  type="checkbox"
                                  name={`partner_hobbies`}
                                  checked={selected.includes(hobbiesList._id)}
                                  value={hobbiesList._id}
                                  onChange={handleChange}
                                  ref={hobbiesRef}
                                />
                                <span className="name">{hobbiesList.name}</span>
                              </label>
                            )
                          }

                          })
                        }
          </div>
          
                  
        </div>
      </div>
    </div>
  </div>
  */ }

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>
          {formData.gender == 'Male' ?
          <img src="assets/img/femalee.png" alt="male icons" style={{margin: '-2px 10px -3px 0px', maxHeight: '46px'}}/>
          : 
          <img src="assets/img/malee.png" alt="female icons" style={{margin: '-2px 10px -3px 0px', maxHeight: '46px'}}/>
          }

          Partner’s Qualities </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Partner’s Qualities</Link>
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
          <div className="col-md-12 col-lg-8">
            <div className="con-reg">
              <div class="step-container">

                <div className="row">
                  <div className="col-sm-4">
                        <div class="step-info">
                          <h2>Partner’s Qualities</h2>
                          <p><Link to="/profile-photo"> <span>Prev Step- Upload Photo</span></Link></p>
                        </div>
                  </div>
                  <div className="col-sm-4 text-center">
                      <div class="progress-bar" style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 90%, pink 0)"}}>
                          <span>10 of 11</span>
                      </div>                  
                  </div>
                  <div className="col-sm-4 text-sm-end">
                        <div class="step-info">
                          <h2>&nbsp;</h2>
                          <p><Link onClick={skipButton}>Next Step- Partner’s Basic</Link></p>
                        </div>
                  </div>
                </div>

              </div>

              <div className="form-bas-de mt-4">
                <form onSubmit={handleSubmit}>
                <div className="row inputs-marg">
                  <div className="col-12 d-flex align-items-center p-0">
                    <div className="col-12">
                      <div className="radio-wrapper-203part-qul">
                        <label htmlFor="example-20-72">
                          <input
                            id="example-20-72"
                            type="radio"
                            name="partner_qualities"
                            onChange={handleChange}
                            value='Independent'
                            checked={formData.partner_qualities === "Independent"}
                          />
                          <span className="name">Independent</span>
                        </label>
                        <label htmlFor="example-20-73">
                          <input
                            id="example-20-73"
                            type="radio"
                            name="partner_qualities"
                            onChange={handleChange}
                            value='Affectionate'
                            checked={formData.partner_qualities === "Affectionate"}
                          />
                          <span className="name">Affectionate</span>
                        </label>
                        <label htmlFor="example-20-74">
                          <input
                            id="example-20-74"
                            type="radio"
                            name="partner_qualities"
                            onChange={handleChange}
                            value='Curious'
                            checked={formData.partner_qualities === "Curious"}
                          />
                          <span className="name">Curious</span>
                        </label>
                        <label htmlFor="example-20-75">
                          <input
                            id="example-20-75"
                            type="radio"
                            name="partner_qualities"
                            onChange={handleChange}
                            value='Extrovert Kind'
                            checked={formData.partner_qualities === "Extrovert Kind"}
                          />
                          <span className="name">Extrovert Kind</span>
                        </label>
                        <label htmlFor="example-20-76">
                          <input
                            id="example-20-76"
                            type="radio"
                            name="partner_qualities"
                            onChange={handleChange}
                            value='Calm'
                            checked={formData.partner_qualities === "Calm"}
                          />
                          <span className="name">Calm</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3">Partner’s Hobbies or Likings</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg">
                  <div className="col-12   p-0">
                    <div className="row">
                      <div className="col-lg-4 col-md-12">
                        <label htmlFor="">
                          Hobbies{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-lg-8 col-md-12">
                        <div className='hobies-overflow'>
                              <div className="radio-wrapper-301s inputs-margs">
                                
                                {hobbies && hobbies.map((hobbiesList, index)  => {
                                  
                                  return (

                                      <label htmlFor={hobbiesList._id} className='mb-3'>
                                      <input
                                        id={hobbiesList._id}
                                        type="checkbox"
                                        name={`partner_hobbies`}
                                        checked={selected.includes(hobbiesList._id)}
                                        value={hobbiesList._id}
                                        onChange={handleChange}
                                      />
                                      <span className="name">{hobbiesList.name}</span>
                                    </label>
                                  )
                                

                                })
                              }


                              </div>
                        </div>

                        {/* <Link href="#" data-bs-toggle="modal" data-bs-target="#hobbiesModal" class="pinklink m-1">+ Add More Hobbies</Link> */}

                        {error.partner_hobbies && <p className="error">{error.partner_hobbies}</p>}
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12 d-flex text-right p-0">
                    <div className="col-4" />
                    <div className="col-8">
                      <div className="maxwid">
                        
                        <div className="d-flex align-items-center justify-content-between">
                              <Link className="backbtn"
                                style={{ color: "white" }}
                                to="/profile-photo"
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
                      
                        
                        
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
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
              <div className="ic-img-con d-flex align-items-center">
                <div className="img-ic">
                  <img
                    src="assets/img/register/privacy-dashboard_svgrepo.com.png"
                    alt=""
                  />
                </div>
                <div className="ic-cons">
                  <span>Advanced Privacy Controls</span>
                </div>
              </div>
              <div className="ic-img-con d-flex align-items-center">
                <div className="img-ic">
                  <img src="assets/img/register/users_svgrepo.com.png" alt="" />
                </div>
                <div className="ic-cons">
                  <span>Verified Profiles, Real Relationships</span>
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

export default PartnerQualities
