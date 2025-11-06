import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HeaderUser from '../components/homePage/HeaderUser';

function EducationDetail() {

  const location = useLocation();
  const { userDetailLogin } = useSelector((state) => state.auth);

const { userDetail } = useSelector((state) => state.auth);
const navigate = useNavigate();
const [formData, setFormData] = useState({});
const [error, setError] = useState({})
const [highest, setHighest] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isScroll, setIsScroll] = useState(false)
const [pgDegree, setPgDegree] = useState([])
const [ugDegree, setUgDegree] = useState([])
const [pgDegreeShow, setPgDegreeShow] = useState(false)
const [ugDegreeShow, setUgDegreeShow] = useState(false)
const [occupation, setOccupation] = useState([])
const [workingWith, setWorkingWith] = useState([])

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

  const handleChangePG = (e) => {
    const { name, value } = e.target;
    //console.log(name, value, typeId)
    const arrVal = value.split('|');
    const typeId = arrVal[1]

    setFormData((prev) => ({
      ...prev,
      [name]: arrVal[0],
      edu_type:arrVal[1],
      pg_degree:'',
      ug_degree:'',
      pg_college_name:'',
      ug_college_name:''
    }));
    
    if(parseInt(typeId) === 1){
      setPgDegreeShow(true)
      setUgDegreeShow(false)
      fetchPgEducation(1)
      fetchUgEducation(2)
    } else if(parseInt(typeId) === 2){
      setPgDegreeShow(false)
      setUgDegreeShow(true)
      //fetchPgEducation(1)
      fetchUgEducation(2)

    } else {
      setPgDegreeShow(false)
      setUgDegreeShow(false)
      //fetchPgEducation(1)
      //fetchUgEducation(2)
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
      //console.log(data.data[0])
      if(data.status){
      
      if(parseInt(data.data[0].highest_degree?.education_type) === 1){
      setPgDegreeShow(true)
      setUgDegreeShow(false)
      fetchPgEducation(1)
      fetchUgEducation(2)
    } else if(parseInt(data.data[0].highest_degree?.education_type) === 2){
      setPgDegreeShow(false)
      setUgDegreeShow(true)
      //fetchPgEducation(1)
      fetchUgEducation(2)

    } else {
      setPgDegreeShow(false)
      setUgDegreeShow(false)
      //fetchPgEducation(1)
      //fetchUgEducation(2)
    }
      
        setFormData({
        highest_degree:data.data[0].highest_degree?._id,
        edu_type:data.data[0].highest_degree?.education_type,
        pg_degree:data.data[0].pg_degree,
        pg_college_name:data.data[0].pg_college_name,
        ug_degree:data.data[0].ug_degree,
        ug_college_name:data.data[0].ug_college_name,
        school_name:data.data[0].school_name,
        other_education:data.data[0].other_education,
        annual_income:data.data[0].annual_income,
        working_with:data.data[0].working_with,
        occupation:data.data[0].occupation,
        organization_name:data.data[0].organization_name,
        prev_working_detail:data.data[0].prev_working_detail,
        step:data.data[0].step
        

      })

    }

  }

useEffect(() => {
  if(userDetail?._id){
  fetchUserDetail(userDetail._id)
  }

  if(location.pathname === '/education-detail-edit'){
    if(userDetailLogin?._id){
      fetchUserDetail(userDetailLogin._id)
    } else {
      navigate('/')
    }

  }

}, [userDetail])


const fetchEducation = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/education`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setHighest(data.data)
      }
}
const fetchPgEducation = async (educationId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/education/${educationId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setPgDegree(data.data)
      }
}
const fetchUgEducation = async (educationId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/education/${educationId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setUgDegree(data.data)
      }
}

const fetchOccupationList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/occupation`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setOccupation(data.data)
      }
}
const fetchWorkingWithList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/working-with`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setWorkingWith(data.data)
      }
}

useEffect(() => {
fetchEducation()
fetchOccupationList()
fetchWorkingWithList()

}, [])


const validate = () => {
    const errs = {};
    
    if (!formData.highest_degree) errs.highest_degree = "Highest degree is required";
    if (!formData.annual_income) errs.annual_income = "Annual income is required";
    if (!formData.working_with) errs.working_with = "Working with is required";
    if (!formData.occupation) errs.occupation = "Occupation is required";
    if (!formData.organization_name) errs.organization_name = "Organization name is required";
    
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
     let formDataNew = formData
     if(location.pathname === '/education-detail-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

     }

     if(formData.step >= 8){ } else {
      formDataNew = {...formData, step:8}
      }
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/education-detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData:formDataNew }),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));
       if(location.pathname === '/education-detail-edit'){ 
       navigate('/my-profile')
       } else {
        navigate('/profile-photo')

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


   const skipButton = async (e) => {
        e.preventDefault()


        //--------------------
     let userId;
     if(location.pathname === '/education-detail-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

     }
    if(formData.step >= 8){ 
      } else {
      let formDataNew = {step:8}
      
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/contact-information`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData:formDataNew }),
        
      });
      const data = await res.json();
      
    }
    //-----------------
        
        if(location.pathname === '/education-detail-edit'){ 
        navigate('/my-profile')
        } else {
          navigate('/profile-photo')

        }

  }



  return (
    <>
    { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

    <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Educational Details </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Educational Details</Link>
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
                              <h2>Educational Details</h2>
                              {location.pathname === '/education-detail-edit' ? null :
                              <p><Link to={`${location.pathname === '/education-detail-edit' ? '/my-profile' : '/family-detail'}`}> <span>Prev Step- Family & More Detail</span></Link></p>
                              }
                              </div>
                      </div>
                      {location.pathname === '/education-detail-edit' ? null :
                      <>
                      <div className="col-sm-4 text-center">
                          <div class="progress-bar" style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 80%, pink 0)"}}>
                              <span>8 of 11</span>
                          </div>                      
                      </div>
                      <div className="col-sm-4 text-sm-end">
                            <div class="step-info">
                              <h2>&nbsp;</h2>
                              <p><Link onClick={skipButton}>Next Step- Upload Photo</Link></p>
                            </div>
                      </div>
                      </>
}

                   </div>


              </div>

              <div className=" form-bas-de ">
                <form onSubmit={handleSubmit}>
                
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Highest Degree{" "}
                          <span style={{ color: "#FF0A0A" }}>*</span>{" "}
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='highest_degree'
                        onChange={(e) => handleChangePG(e)}
                        value={`${formData.highest_degree}|${formData.edu_type}`}
                        >
                          <option value="">-- Select --</option>
                          {highest && highest.map((highestList, index)  => {

                            return (

                                <option value={`${highestList._id}|${highestList.education_type}`}>{highestList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.highest_degree && <p className="error">{error.highest_degree}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                
                {pgDegreeShow &&         
                <>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">PG Degree&nbsp;</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='pg_degree'
                        onChange={handleChange}
                        value={formData.pg_degree}
                        >
                          <option value="">-- Select --</option>
                          {pgDegree && pgDegree.map((highestPgList, index)  => {

                            return (

                                <option value={highestPgList._id}>{highestPgList.name}</option>
                            )

                          })
                        }
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">College Name</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text"
                        name='pg_college_name'
                        onChange={handleChange}
                        value={formData.pg_college_name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">UG Degree&nbsp;</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='ug_degree'
                        onChange={handleChange}
                        value={formData.ug_degree}
                        >
                          <option value="">-- Select --</option>
                          {ugDegree && ugDegree.map((highestUgList, index)  => {

                            return (

                                <option value={highestUgList._id}>{highestUgList.name}</option>
                            )

                          })
                        }
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">College Name</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text"
                        name='ug_college_name'
                        onChange={handleChange}
                        value={formData.ug_college_name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                </>
}

{ugDegreeShow &&         
                <>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">UG Degree&nbsp;</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='ug_degree'
                        onChange={handleChange}
                        value={formData.ug_degree}
                        >
                          <option value="">-- Select --</option>
                          {ugDegree && ugDegree.map((highestUgList, index)  => {

                            return (

                                <option value={highestUgList._id}>{highestUgList.name}</option>
                            )

                          })
                        }
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">College Name</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text"
                        name='ug_college_name'
                        onChange={handleChange}
                        value={formData.ug_college_name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                </>
}



                <div className="row inputs-margs nam-inp ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">School Name</label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" 
                        name='school_name'
                        onChange={handleChange}
                        value={formData.school_name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12   p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Add Other Education Details If Any{" "}
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <textarea 
                        name='other_education'
                        onChange={handleChange}
                        value={formData.other_education}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Profession Details</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Annual Income{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='annual_income'
                        onChange={handleChange}
                        value={formData.annual_income}
                        >
                          <option value="">-- Select --</option>
                          <option value="0-100000">Upto 1 Lakh</option>
                          <option value="100000-200000">1 Lakh - 2 Lakh</option>
                          <option value="200000-400000">2 Lakh - 4 Lakh</option>
                          <option value="400000-700000">4 Lakh - 7 Lakh</option>
                          <option value="700000-1000000">7 Lakh - 10 Lakh</option>
                          <option value="1000000-1500000">10 Lakh - 15 Lakh</option>
                          <option value="1500000-2000000">15 Lakh - 20 Lakh</option>
                          <option value="2000000-3000000">20 Lakh - 30 Lakh</option>
                          <option value="3000000-5000000">30 Lakh - 50 Lakh</option>
                          <option value="5000000-7500000">50 Lakh - 75 Lakh</option>
                          <option value="7500000-10000000">75 Lakh - 1 Crore</option>
                          <option value="10000000-30000000">1 Crore - 3 Crore</option>
                          <option value="30000000-50000000">3 Crore - 5 Crore</option>
                          <option value="Above 50000000">Above 5 Crore</option>
                          <option value="Not Applicable">Not Applicable</option>
                        </select>
                        {error.annual_income && <p className="error">{error.annual_income}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Working With
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='working_with'
                        onChange={handleChange}
                        value={formData.working_with}
                        >
                          <option value="">-- Select --</option>
                          {workingWith && workingWith.map((workingWithList, index)  => {

                            return (

                                <option value={workingWithList._id}>{workingWithList.name}</option>
                            )

                          })
                        }
                        </select>
                        
                        
                        {error.working_with && <p className="error">{error.working_with}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Occupation
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='occupation'
                        onChange={handleChange}
                        value={formData.occupation}
                        >
                          <option value="">-- Select --</option>
                          {occupation && occupation.map((occupationList, index)  => {

                            return (

                                <option value={occupationList._id}>{occupationList.name}</option>
                            )

                          })
                        }
                        </select>
                        
                        
                        {error.occupation && <p className="error">{error.occupation}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Organization Name{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" 
                        name='organization_name'
                        onChange={handleChange}
                        value={formData.organization_name}
                        />
                        {error.organization_name && <p className="error">{error.organization_name}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12  p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">Add Previous Working Details </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <textarea 
                        name='prev_working_detail'
                        onChange={handleChange}
                        value={formData.prev_working_detail}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12 d-flex text-right p-0">
                    <div className="col-4" />
                    <div className="col-8">
                      <div className="maxwid">
                        
                        {location.pathname === '/education-detail-edit' ? 
                        <div className="d-flex align-items-center justify-content-end">
                                                          
                                <button className="countiniue" type='submit' disabled={isLoading}>
                                  {isLoading ? "Wait..." : "Save"}
                                </button>

                                
                          </div>
                        :
                        <div className="d-flex align-items-center justify-content-between ps-sm-2">
                                <Link className="backbtn"
                                  style={{ color: "white" }}
                                  to={`${location.pathname === '/education-detail-edit' ? '/my-profile' : '/family-detail'}`}
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

export default EducationDetail
