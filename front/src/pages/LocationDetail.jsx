import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { validateMobile } from '../utils/utils';
import HeaderUser from '../components/homePage/HeaderUser';

function LocationDetail() {
  
  const location = useLocation();
  const { userDetailLogin } = useSelector((state) => state.auth);

  const { userDetail } = useSelector((state) => state.auth);
const navigate = useNavigate();
const [formData, setFormData] = useState({});
const [error, setError] = useState({})
const [country, setCountry] = useState([])
const [city, setCity] = useState([])
const [state, setState] = useState([])
const [tempCity, setTempCity] = useState([])
const [tempState, setTempState] = useState([])
const [relation, setRelation] = useState([])
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

    if(name === 'loc_state'){
      fetchCity(value)
    }
    if(name === 'loc_temp_state'){
      fetchTempCity(value)
    }
    
  };


  

useEffect(() => {
  if(userDetail?._id){
  fetchUserDetail(userDetail._id)
  }

  if(location.pathname === '/location-detail-edit'){
    if(userDetailLogin?._id){
      fetchUserDetail(userDetailLogin._id)
    } else {
      navigate('/')
    }

  }

}, [userDetail])


const fetchCountry = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/country`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setCountry(data.data)
      }
}
const fetchState = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/state`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setState(data.data)
      }
}
const fetchCity = async (stateId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/city/${stateId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setCity(data.data)
      }
}

const fetchTempState = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/state`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setTempState(data.data)
      }
}
const fetchTempCity = async (stateId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/city/${stateId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setTempCity(data.data)
      }
}


const fetchRelation = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/looking-for`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setRelation(data.data)
      }
}

useEffect(() => {

fetchCountry();
fetchState()
fetchRelation()
fetchTempState()

}, [])

const fetchUserDetail = async (userId) => {
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){
        fetchCity(data.data[0].loc_state)
        fetchTempCity(data.data[0].loc_temp_state)

      setFormData({
        loc_nationality:data.data[0].loc_nationality,
        loc_residence_type:data.data[0].loc_residence_type,
        loc_house_type:data.data[0].loc_house_type,
        loc_state:data.data[0].loc_state,
        loc_city:data.data[0].loc_city,
        loc_pincode:data.data[0].loc_pincode,
        loc_temp_state:data.data[0].loc_temp_state,
        loc_temp_city:data.data[0].loc_temp_city,
        loc_temp_pincode:data.data[0].loc_temp_pincode,
        loc_relation:data.data[0].loc_relation,
        loc_relation_name:data.data[0].loc_relation === 'Self' ? null : data.data[0].loc_relation_name,
        loc_relation_email:data.data[0].loc_relation === 'Self' ? null : data.data[0].loc_relation_email,
        loc_relation_mobile:data.data[0].loc_relation === 'Self' ? null : data.data[0].loc_relation_mobile,
        loc_landmark:data.data[0].loc_landmark,
        loc_temp_landmark:data.data[0].loc_temp_landmark,

      })

    }

  }

 function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const validate = () => {
    const errs = {};
    
    if (!formData.loc_nationality) errs.loc_nationality = "Nationality is required";
    if (!formData.loc_residence_type) errs.loc_residence_type = "Residence type is required";
    if (!formData.loc_house_type) errs.loc_house_type = "House type is required";
    if (!formData.loc_state) errs.loc_state = "State is required";
    if (!formData.loc_city) errs.loc_city = "City is required";
    if (!formData.loc_pincode) errs.loc_pincode = "Pin Code is required";
    if (!formData.loc_temp_state) errs.loc_temp_state = "State is required";
    if (!formData.loc_temp_city) errs.loc_temp_city = "City is required";
    if (!formData.loc_temp_pincode) errs.loc_temp_pincode = "Pin Code is required";
    
    if (!formData.loc_relation) errs.loc_relation = "Relation is required";
    if(formData.loc_relation === 'Self'){ } else {
    if (!formData.loc_relation_name) errs.loc_relation_name = "Name is required";
    if (!formData.loc_relation_email) errs.loc_relation_email = "Email is required";
    if (!formData.loc_relation_mobile) errs.loc_relation_mobile = "Mobile is required";
    }
    if(formData.loc_relation_email){
      if(!isValidEmail(formData.loc_relation_email)){
        errs.loc_relation_email = "Please enter a valid email address";

      }
    }
    if(formData.loc_relation_mobile){
      if(!validateMobile(formData.loc_relation_mobile)){
        errs.loc_relation_mobile = "Please enter a valid 10-digit mobile number";

      }
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

    let userId;
     if(location.pathname === '/location-detail-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

     }
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/location-detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData }),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));
        if(location.pathname === '/location-detail-edit'){
          navigate('/my-profile')
        } else {
          navigate('/family-detail')

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

  const showState = (e) => {
    const { checked } = e.target;
    if(checked){
      if(formData.loc_state){
        fetchTempCity(formData.loc_state)
      }
    setFormData((prev) => ({
      ...prev,
      'loc_temp_state': formData.loc_state,
      'loc_temp_city': formData.loc_city,
      'loc_temp_pincode': formData.loc_pincode,
    }));
    } else {
      setFormData((prev) => ({
      ...prev,
      'loc_temp_state': "",
      'loc_temp_city': "",
      'loc_temp_pincode': "",
    }));
    }

  }

  useEffect(() => {
      
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsScroll(false)
      
    }, [isScroll]);

    const skipButton = (e) => {
        e.preventDefault()
        
        if(location.pathname === '/location-detail-edit'){
          navigate('/my-profile')
        } else {
          navigate('/family-detail')

        }

  }
  
  
  return (
    <>
      { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Location Details </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Location Details</Link>
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
                              <h2>Location Details</h2>
                              {location.pathname === '/location-detail-edit'? null:
                              <p><Link to={`${location.pathname === '/location-detail-edit' ? '/my-profile' : '/religion'}`}> <span>Prev Step- Religion Details</span></Link></p>
                              }
                              </div>
                              
                      </div>
                      {location.pathname === '/location-detail-edit'? null:
                      <>
                      <div className="col-sm-4 text-center">
                          <div class="progress-bar" style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 60%, pink 0)"}}>
                              <span>6 of 11</span>
                          </div>
                      </div>
                      <div className="col-sm-4 text-sm-end">
                            <div class="step-info">
                              <h2>&nbsp;</h2>
                              <p><Link onClick={skipButton}>Next Step- Family & More Detail</Link></p>
                            </div>
                      </div>
                      </>
}

                   </div>
              </div>
              <div className=" form-bas-de ">
                <form onSubmit={handleSubmit}>
                
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12 align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Nationality{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='loc_nationality'
                        onChange={handleChange}
                        value={formData.loc_nationality}
                        >
                          <option>-- Select Country --</option>
                          {country && country.map((countryList, index)  => {

                            return (

                                <option value={countryList._id}>{countryList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.loc_nationality && <p className="error">{error.loc_nationality}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Residence Type{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='loc_residence_type'
                        onChange={handleChange}
                        value={formData.loc_residence_type}
                        >
                          <option>-- Select Residence Type --</option>
                          <option value="Owned House">Owned House</option>
                          <option value="Rented House">Rented House</option>
                          <option value="Staying with Family">Staying with Family</option>
                          <option value="Hostel / PG">Hostel / PG</option>
                          <option value="Company Accommodation">Company Accommodation</option>
                          <option value="Living Alone">Living Alone</option>
                          <option value="Living Abroad">Living Abroad</option>
                          <option value="Other">Other</option>
                        </select>
                        {error.loc_residence_type && <p className="error">{error.loc_residence_type}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Permanent House Type{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='loc_house_type'
                        onChange={handleChange}
                        value={formData.loc_house_type}
                        >
                          <option>-- Select Permanent House Type --</option>
                          <option value="Independent House">Independent House</option>
                          <option value="Apartment / Flat">Apartment / Flat</option>
                          <option value="Bungalow">Bungalow</option>
                          <option value="Ancestral Home">Ancestral Home</option>
                          <option value="Government Quarters / Staff Housing">Government Quarters / Staff Housing</option>
                          <option value="Temporary / Rented House">Temporary / Rented House</option>
                          <option value="Other">Other</option>
                        </select>
                        {error.loc_house_type && <p className="error">{error.loc_house_type}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Permanent Address Location</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          State{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='loc_state'
                        onChange={handleChange}
                        value={formData.loc_state}
                        >
                          <option value="">-- Select State --</option>
                          {state && state.map((stateList, index)  => {

                            return (

                                <option value={stateList._id}>{stateList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.loc_state && <p className="error">{error.loc_state}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12 d-fl align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          City <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='loc_city'
                        onChange={handleChange}
                        value={formData.loc_city}
                        >
                          <option value="">-- Select City --</option>
                          {city && city.map((cityList, index)  => {

                            return (

                                <option value={cityList._id}>{cityList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.loc_city && <p className="error">{error.loc_city}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Landmark/Remarks
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" 
                        name='loc_landmark'
                        onChange={handleChange}
                        value={formData.loc_landmark}
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12 d-f align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Pin Code/Zip Code{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" 
                        name='loc_pincode'
                        onChange={handleChange}
                        value={formData.loc_pincode}
                        />
                        {error.loc_pincode && <p className="error">{error.loc_pincode}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-sec-loc ">
                    <div className="row">
                      <div className=" col-lg-8 col-md-8 col-xs-8 hed md-w-50">
                        <h3>Temporary Address Location</h3>
                      </div>
                      <div className="col-lg-4 col-md-4 col-xs-6 cheack  d-flex   justify-content-lg-center ">
                        <div className="checkbox-wrapper-28">
                          <input
                            id="tmp-28"
                            type="checkbox"
                            className="promoted-input-checkbox"
                            onChange={showState}
                          />
                          <svg>
                            <use xlinkHref="#checkmark-28" />
                          </svg>
                          <label htmlFor="tmp-28">same fill</label>
                          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                            <symbol id="checkmark-28" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                fill="none"
                                d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                              ></path>
                            </symbol>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12 d align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          State{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='loc_temp_state'
                        onChange={handleChange}
                        value={formData.loc_temp_state}
                        >
                          <option value="">-- Select State --</option>
                          {tempState && tempState.map((stateList, index)  => {

                            return (

                                <option value={stateList._id}>{stateList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.loc_temp_state && <p className="error">{error.loc_temp_state}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          City <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='loc_temp_city'
                        onChange={handleChange}
                        value={formData.loc_temp_city}
                        >
                          <option value="">-- Select City --</option>
                          {tempCity && tempCity.map((cityList, index)  => {

                            return (

                                <option value={cityList._id}>{cityList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.loc_temp_city && <p className="error">{error.loc_temp_city}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Landmark/Remarks
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" 
                        name='loc_temp_landmark'
                        onChange={handleChange}
                        value={formData.loc_temp_landmark}
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
                          Pin Code/Zip Code{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" 
                        name='loc_temp_pincode'
                        onChange={handleChange}
                        value={formData.loc_temp_pincode}
                        />
                        {error.loc_temp_pincode && <p className="error">{error.loc_temp_pincode}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Reference</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Relation{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='loc_relation'
                        onChange={handleChange}
                        value={formData.loc_relation}
                        >
                          <option value="">-- Select Relation --</option>
                          {relation && relation.map((relationList, index)  => {
                            
                            return (

                                <option value={relationList.name}>{relationList.name}</option>
                            );

                          

                          })
                        }
                        </select>
                        {error.loc_relation && <p className="error">{error.loc_relation}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                
                {formData.loc_relation === 'Self' ? null : (
                <>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Name <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" 
                        name='loc_relation_name'
                        onChange={handleChange}
                        value={formData.loc_relation_name}
                        />
                        {error.loc_relation_name && <p className="error">{error.loc_relation_name}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Email Id{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" 
                        name='loc_relation_email'
                        onChange={handleChange}
                        value={formData.loc_relation_email}
                        />
                        {error.loc_relation_email && <p className="error">{error.loc_relation_email}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Mobile No.{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="number" 
                        name='loc_relation_mobile'
                        onChange={handleChange}
                        value={formData.loc_relation_mobile}
                        />
                        {error.loc_relation_mobile && <p className="error">{error.loc_relation_mobile}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                </>
                )}


                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12 d-flex text-right p-0">
                    <div className="col-4" />
                    <div className="col-8">
                      <div className="maxwid ps-sm-2">
                        {location.pathname === '/location-detail-edit'? 
                        <div className="d-flex align-items-center justify-content-end">
                                                        
                              <button className="countiniue" type='submit' disabled={isLoading}>
                                {isLoading ? "Wait..." : "Save"}
                              </button>

                              
                        </div>
                        :
                        <div className="d-flex align-items-center justify-content-between">
                              <Link className="backbtn"
                                style={{ color: "white" }}
                                to={`${location.pathname === '/location-detail-edit' ? '/my-profile' : '/religion'}`}
                                
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
          <div className="col-md-5 col-lg-4">
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

export default LocationDetail
