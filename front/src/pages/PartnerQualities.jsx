import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function PartnerQualities() {
  
  const { userDetail } = useSelector((state) => state.auth);
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
  
  return (
    <>
      <HeaderPage />

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Partner’s Qualities </h1>
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
          <div className="col-md-12 col-lg-8">
            <div className="con-reg">
              <h3>Partner’s Desired Qualities</h3>
              <div className="col-12">
                <div className="line-bg" />
              </div>
              <div className=" form-bas-de ">
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
                        <div className="radio-wrapper-201s inputs-margs">
                          
                          {hobbies && hobbies.map((hobbiesList, index)  => {

                            return (

                                <label htmlFor={hobbiesList._id}>
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
                        <button className="back">
                          <Link
                            style={{ color: "white" }}
                            to="/profile-photo"
                          >
                            Back
                          </Link>
                        </button>
                        <button className="" type='submit' disabled={isLoading}>
                          {isLoading ? "Wait..." : "Continue"}
                          
                        </button>
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
