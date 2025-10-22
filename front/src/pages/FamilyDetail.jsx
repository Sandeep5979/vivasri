import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function FamilyDetail() {

  const location = useLocation();
  const { userDetailLogin } = useSelector((state) => state.auth);

  const { userDetail } = useSelector((state) => state.auth);
const navigate = useNavigate();
const [formData, setFormData] = useState({});
const [error, setError] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [isScroll, setIsScroll] = useState(false)
const [disabilityShow, setDisabilityShow] = useState(false)

const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if(name === 'disability'){
    if(value === "None"){
        setDisabilityShow(false)
    }
    if(value === "Physical Disability"){
        setDisabilityShow(true)
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

  useEffect(() => {
      
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsScroll(false)
      
    }, [isScroll]);


  const fetchUserDetail = async (userId) => {
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        if(data.data[0].disability === "None"){
        setDisabilityShow(false)
        }
        if(data.data[0].disability === "Physical Disability"){
            setDisabilityShow(true)
        }
        
      setFormData({
        family_type:data.data[0].family_type,
        family_value:data.data[0].family_value,
        no_of_sister:data.data[0].no_of_sister,
        married_sister:data.data[0].married_sister,
        no_of_brother:data.data[0].no_of_brother,
        married_brother:data.data[0].married_brother,
        no_of_sister_in_law:data.data[0].no_of_sister_in_law,
        married_sister_in_law:data.data[0].married_sister_in_law,
        no_of_brother_in_law:data.data[0].no_of_brother_in_law,
        married_brother_in_law:data.data[0].married_brother_in_law,
        health_information:data.data[0].health_information,
        disability:data.data[0].disability,
        add_disability:data.data[0].add_disability,
        blood_group:data.data[0].blood_group,

      })

    }

  }

useEffect(() => {
  if(userDetail?._id){
  fetchUserDetail(userDetail._id)
  }

  if(location.pathname === '/family-detail-edit'){
    if(userDetailLogin?._id){
      fetchUserDetail(userDetailLogin._id)
    } else {
      navigate('/')
    }

  }

}, [userDetail])


const validate = () => {
    const errs = {};
    
    if (!formData.health_information) errs.health_information = "Health information is required";
    
    if (!formData.disability) errs.disability = "Disability is required";
    
    if (formData.disability === 'None'){ } else {
    if (!formData.add_disability) errs.add_disability = "Add disability is required";

    }
    
    if (!formData.blood_group) errs.blood_group = "Blood group is required";
    
    

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

     let userId;
     if(location.pathname === '/family-detail-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

     }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/family-detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData }),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));
        if(location.pathname === '/family-detail-edit'){
          navigate('/my-profile')
        } else {
          navigate('/education-detail')
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


  return (
    <>
    <HeaderPage />

    <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Family Details </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to="/">
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Family Details</Link>
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
              <h3>Family &amp; More Detail</h3>
              <div className="col-12">
                <div className="line-bg" />
              </div>
              <div className=" form-bas-de ">
                <form onSubmit={handleSubmit}>
                <div className="row inputs-marg">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">Family Type </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="radio-wrapper-20">
                          <label htmlFor="example-20-1">
                            <input
                              id="example-20-1"
                              type="radio"
                              name="family_type"
                              onChange={handleChange}
                              value='Joint'
                              checked={formData.family_type === "Joint"}
                            />
                            <span className="name">Joint</span>
                          </label>
                          <label htmlFor="example-20-2">
                            <input
                              id="example-20-2"
                              type="radio"
                              name="family_type"
                              onChange={handleChange}
                              value='Nuclear'
                              checked={formData.family_type === "Nuclear"}
                            />
                            <span className="name">Nuclear</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">Family Value </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="radio-wrapper-201">
                          <label htmlFor="example-20-72">
                            <input
                              id="example-20-72"
                              type="radio"
                              name="family_value"
                              onChange={handleChange}
                              value='Orthodox'
                              checked={formData.family_value === "Orthodox"}
                            />
                            <span className="name">Orthodox</span>
                          </label>
                          <label htmlFor="example-20-73">
                            <input
                              id="example-20-73"
                              type="radio"
                              name="family_value"
                              onChange={handleChange}
                              value='Traditional'
                              checked={formData.family_value === "Traditional"}
                            />
                            <span className="name">Traditional</span>
                          </label>
                          <label htmlFor="example-20-74">
                            <input
                              id="example-20-74"
                              type="radio"
                              name="family_value"
                              onChange={handleChange}
                              value='Moderate'
                              checked={formData.family_value === "Moderate"}
                            />
                            <span className="name">Moderate</span>
                          </label>
                          <label htmlFor="example-20-75">
                            <input
                              id="example-20-75"
                              type="radio"
                              name="family_value"
                              onChange={handleChange}
                              value='Liberal'
                              checked={formData.family_value === "Liberal"}
                            />
                            <span className="name">Liberal</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">No. of Sister&nbsp;</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='no_of_sister'
                        onChange={handleChange}
                        value={formData.no_of_sister}
                        >
                          <option value="">-- Select --</option>
                           {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">Married Sister&nbsp;</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='married_sister'
                        onChange={handleChange}
                        value={formData.married_sister}
                        >
                          <option value="">-- Select --</option>
                           {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">No. of Brother&nbsp;</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='no_of_brother'
                        onChange={handleChange}
                        value={formData.no_of_brother}
                        >
                          <option value="">-- Select --</option>
                           {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">Married Brother&nbsp;</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='married_brother'
                        onChange={handleChange}
                        value={formData.married_brother}
                        >
                          <option value="">-- Select --</option>
                           {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">No. of Sister In Law</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        
                        name='no_of_sister_in_law'
                        onChange={handleChange}
                        value={formData.no_of_sister_in_law}
                        >
                          <option value="">-- Select --</option>
                           {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">Married Sister In Law</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='married_sister_in_law'
                        onChange={handleChange}
                        value={formData.married_sister_in_law}
                        >
                          <option value="">-- Select --</option>
                           {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">No. of Brother In Law</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='no_of_brother_in_law'
                        onChange={handleChange}
                        value={formData.no_of_brother_in_law}
                        >
                          <option value="">-- Select --</option>
                           {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">Married Brother In Law</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='married_brother_in_law'
                        onChange={handleChange}
                        value={formData.married_brother_in_law}
                        >
                          <option value="">-- Select --</option>
                           {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Family &amp; More Detail</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Health Information{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='health_information'
                        onChange={handleChange}
                        value={formData.health_information}
                        >
                          <option value="">-- Select --</option>
                          <option value="No Health Problems">No Health Problems</option>
                          <option value="HIV Positive">HIV Positive</option>
                          <option value="Diabetes">Diabetes</option>
                          <option value="Low BP">Low BP</option>
                          <option value="High BP">High BP</option>
                          <option value="Heart Ailments">Heart Ailments</option>
                          <option value="Others">Others</option>
                        </select>
                        {error.health_information && <p className="error">{error.health_information}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Any Disability{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>{" "}
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="radio-wrapper-20">
                          <label htmlFor="example-20-37">
                            <input
                              id="example-20-37"
                              type="radio"
                              name="disability"
                              onChange={handleChange}
                              value='None'
                              checked={formData.disability === "None"}
                            />
                            <span className="name">None</span>
                          </label>
                          <label htmlFor="example-20-38">
                            <input
                              id="example-20-38"
                              type="radio"
                              name="disability"
                              onChange={handleChange}
                              value='Physical Disability'
                              checked={formData.disability === "Physical Disability"}
                            />
                            <span className="name">Physical Disability</span>
                          </label>
                        </div>
                        {error.disability && <p className="error">{error.disability}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                {disabilityShow &&
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12   p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Add Disability{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <textarea  
                        name='add_disability'
                        onChange={handleChange}
                        value={formData.add_disability}
                        />
                        {error.add_disability && <p className="error">{error.add_disability}</p>}
                      </div>
                    </div>
                  </div>
                </div>
}
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Blood Group{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='blood_group'
                        onChange={handleChange}
                        value={formData.blood_group}
                        >
                          <option>-- Select Blood Group --</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </select>
                         {error.blood_group && <p className="error">{error.blood_group}</p>}
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
                            to="/location-detail"
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

export default FamilyDetail
