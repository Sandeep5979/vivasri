import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HeaderUser from '../components/homePage/HeaderUser';
import { registerUserLogin } from '../store/authActions';

function PartnerBasicDetail() {

  const location = useLocation();
  const dispatch = useDispatch();
  const { userDetailLogin } = useSelector((state) => state.auth);
  
const { userDetail } = useSelector((state) => state.auth);
const navigate = useNavigate();
const [formData, setFormData] = useState({
  partner_age_from:18,
  partner_age_to:25,
  partner_weight_from:40,
  partner_weight_to:40,
  partner_height_from:4.1,
  partner_height_to:4.1,
  partner_income_from:1,
  partner_income_to:100000

});
const [error, setError] = useState({})
const [height, setHeight] = useState([])
const [maritalStatus, setMaritalStatus] = useState([])
const [language, setLanguage] = useState([])
const [country, setCountry] = useState([])
const [city, setCity] = useState([])
const [state, setState] = useState([])
const [education, setEducation] = useState([])
const [professional, setProfessional] = useState([])
const [occupation, setOccupation] = useState([])
const [religion, setReligion] = useState([])
const [caste, setCaste] = useState([])
const [subCaste, setSubCaste] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isScroll, setIsScroll] = useState(false)
const [showMessage, setShowMessage] = useState(false)
const [complexion, setComplexion] = useState([])
const [diet, setDiet] = useState([])
const [showChildren, setShowChildren] = useState(false)
const [workingWith, setWorkingWith] = useState([])
const [gotra, setGotra] = useState([])

const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(formData)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if(name === 'partner_country'){
      fetchState(value)
    }
    if(name === 'partner_state'){
      fetchCity(value)
    }
    if(name === 'partner_religion'){
      fetchCaste(value)
      fetchGotra(value)
    }

    if(name === 'partner_caste'){
      fetchSubCaste(value)
    }
    if(name === 'partner_marital_status'){
      
      if (value === '68cbc2783946bd183864e28d') {
      setShowChildren(false)
      } else {
        setShowChildren(true)
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
        fetchState(data.data[0].partner_country)
        fetchCity(data.data[0].partner_state)
        fetchCaste(data.data[0].partner_religion)
        fetchSubCaste(data.data[0].partner_caste)
        fetchGotra(data.data[0].partner_religion)

        if (data.data[0].partner_marital_status === '68cbc2783946bd183864e28d') {
          setShowChildren(false)
          } else {
            if(data.data[0].partner_marital_status){
            setShowChildren(true)
            }
          }

      setFormData((prev) => ({
      ...prev,
      email:data.data[0].email,
      mobile:data.data[0].mobile,
      partner_age_from:data.data[0].partner_age_from,
      partner_age_to:data.data[0].partner_age_to,
      partner_height_from:data.data[0].partner_height_from,
      partner_height_to:data.data[0].partner_height_to,
      partner_weight_from:data.data[0].partner_weight_from,
      partner_weight_to:data.data[0].partner_weight_to,
      partner_language:data.data[0].partner_language,
      partner_mother_tongue:data.data[0].partner_mother_tongue,
      partner_marital_status:data.data[0].partner_marital_status,
      partner_have_children:data.data[0].partner_have_children,
      partner_family_type:data.data[0].partner_family_type,
      partner_family_value:data.data[0].partner_family_value,
      partner_country:data.data[0].partner_country,
      partner_state:data.data[0].partner_state,
      partner_city:data.data[0].partner_city,
      partner_education:data.data[0].partner_education,
      partner_professional_qualification:data.data[0].partner_professional_qualification,
      partner_occupation:data.data[0].partner_occupation,
      partner_working_as:data.data[0].partner_working_as,
      partner_income_from:data.data[0].partner_income_from,
      partner_income_to:data.data[0].partner_income_to,
      partner_religion:data.data[0].partner_religion,
      partner_caste:data.data[0].partner_caste,
      partner_sub_caste:data.data[0].partner_sub_caste,
      partner_gotra:data.data[0].partner_gotra,
      partner_gotra_other:data.data[0].partner_gotra_other,
      partner_dosh:data.data[0].partner_dosh,
      partner_diet:data.data[0].partner_diet,
      partner_drinking:data.data[0].partner_drinking,
      partner_smoking:data.data[0].partner_smoking,
      partner_managed_by:data.data[0].partner_managed_by,
      partner_complexion:data.data[0].partner_complexion,

      
    }));

    }

  }

useEffect(() => {
  if(userDetail?._id){
  fetchUserDetail(userDetail._id)
  }

  if(location.pathname === '/partner-basic-detail-edit'){
    if(userDetailLogin?._id){
      fetchUserDetail(userDetailLogin._id)
    } else {
      navigate('/')
    }

  }

}, [userDetail])


const fetchHeight = () => {

   const heights = [];

    for (let ft = 4; ft <= 8; ft++) {
  
  let maxInches = ft === 8 ? 6 : 11;

  
  for (let inch = ft === 4 ? 1 : 0; inch <= maxInches; inch++) {
    if (inch === 0) {
      heights.push({
        label: `${ft} ft`,
        value: `${ft}.0`,
      });
    } else {
      heights.push({
        label: `${ft} ft ${inch} in`,
        value: `${ft}.${inch}`,
      });
    }
  }
}

    setHeight(heights); 

}

const incomeOptions = [
  { label: "1 Lakh", value: 100000 },
  { label: "2 Lakh", value: 200000 },
  { label: "3 Lakh", value: 300000 },
  { label: "4 Lakh", value: 400000 },
  { label: "5 Lakh", value: 500000 },
  { label: "7 Lakh", value: 700000 },
  { label: "10 Lakh", value: 1000000 },
  { label: "15 Lakh", value: 1500000 },
  { label: "20 Lakh", value: 2000000 },
  { label: "25 Lakh", value: 2500000 },
  { label: "35 Lakh", value: 3500000 },
  { label: "50 Lakh", value: 5000000 },
  { label: "70 Lakh", value: 7000000 },
  { label: "1 Crore", value: 10000000 },
  { label: "Above 1 Crore", value: "Above 10000000" },
];

const fetchMaritalStatusList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/marital-status`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setMaritalStatus(data.data)
      }
}
const fetchLanguageList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/language`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setLanguage(data.data)
      }
}
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
const fetchState = async (countryId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/state/${countryId}`, {
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
const fetchEducationList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/education`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setEducation(data.data)
      }
}
const fetchProfessionalList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/professional-education`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setProfessional(data.data)
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

const fetchComplexionList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/complexion`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setComplexion(data.data)
      }
}
const fetchDietList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/diet`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setDiet(data.data)
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



useEffect(() => {
fetchHeight()
fetchMaritalStatusList()
fetchLanguageList()
fetchCountry()
fetchEducationList()
fetchProfessionalList()
fetchOccupationList()
fetchReligion()
fetchComplexionList()
fetchDietList()
fetchWorkingWithList()

}, [])


useEffect(() => {
    
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsScroll(false)
    
  }, [isScroll]);


const validate = () => {
    const errs = {};
    //console.log('incom', formData.partner_income_from)
    //if (!formData.partner_income_from) errs.partner_income_from = "Annual income range is required";
    //if (!formData.partner_income_to) errs.partner_income_to = "Annual income range is required"; 
    if (!formData.partner_language) errs.partner_language = "Language is required";
    if (!formData.partner_complexion) errs.partner_complexion = "Complexion is required";
    
    
    if (!formData.partner_marital_status) errs.partner_marital_status = "Marital status is required";
    // if (!formData.partner_have_children) errs.partner_have_children = "Have children is required";
    if (!formData.partner_mother_tongue) errs.partner_mother_tongue = "Mother tongue is required";
    if (!formData.partner_country) errs.partner_country = "Country is required";
    if (!formData.partner_state) errs.partner_state = "State is required";
    if (!formData.partner_city) errs.partner_city = "City is required";
    if (!formData.partner_education) errs.partner_education = "Highest Qualification is required";
    if (!formData.partner_professional_qualification) errs.partner_professional_qualification = "Professional qualification is required";
    if (!formData.partner_occupation) errs.partner_occupation = "Occupation is required";
    if (!formData.partner_working_as) errs.partner_working_as = "Working as is required";
    if (!formData.partner_religion) errs.partner_religion = "Religion is required";
    if (!formData.partner_caste) errs.partner_caste = "Caste is required";
    if (!formData.partner_diet) errs.partner_diet = "Diet Preference is required";
    if (!formData.partner_drinking) errs.partner_drinking = "Drinking Habit is required";
    if (!formData.partner_smoking) errs.partner_smoking = "Smoking Habit is required";
    if (!formData.partner_managed_by) errs.partner_managed_by = "Profile Managed by is required";

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
     if(location.pathname === '/partner-basic-detail-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

     }
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/partner-basic-detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData }),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));
        setShowMessage(true);
        setIsScroll(true)
        if(location.pathname === '/partner-basic-detail-edit'){
            navigate('/my-profile')
        } else {
          


          loginSubmitButton()
         // navigate('/dashboard')
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


  const loginSubmitButton = async () => {
        let email;
        
          if(formData.email){
            email=formData.email
          } else {
            email=formData.mobile
          }

          
          const resLogin = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/registration-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email:email}),
            credentials: "include"

        });
    
          const dataLogin = await resLogin.json();

          //console.log('okkkkk', dataLogin)
          if(dataLogin.status){
            dispatch(registerUserLogin(dataLogin));
            document.location.href=`/dashboard`
          } else {


          }

  }


  const skipButton = (e) => {
        e.preventDefault()
        if(location.pathname === '/partner-basic-detail-edit'){
            navigate('/my-profile')
        } else {
        loginSubmitButton()
        }
  }
  
  
  return (
    <>
     { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

     

        <>
  <section className="inrbnr">
    
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Partner’s Basic Details </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Partner’s Basic Details</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
  <div className="register-sec ">
    
    
    
    <div className="container-fluid con-flu-padd  ">

      {showMessage && <div className="alert alert-success mt-20 text-center">Partner Basic Detail Updated Successfully</div>
}
      
      <div className="container-fluid  bg-register ">
        <div className="row pb-50 pt-40">
          <div className="col-md-10 col-lg 8 ">
            <div className="con-reg">
              <div class="step-container">
                <div class="step-info">
                  <h2>Partner’s Basic Details</h2>
                  <p><span>Prev Step- Partner’s Qualities</span></p>
                </div>
                <div class="progress-bar" style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 100%, pink 0)"}}>
                    <span>11 of 11</span>
                </div>
              </div>


              <div className=" form-bas-de ">
                <form onSubmit={handleSubmit}>
                <div className="row inputs-marg ">
                  <div className="col-12 align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Age Range&nbsp;{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12 ">
                        <select className="form-selectss"
                        name='partner_age_from'
                        onChange={handleChange}
                        value={formData.partner_age_from}
                        >
                          {[...Array(61)].map((_, i) => (
                            <option key={i + 18} value={i + 18}>
                              {i + 18} Years
                            </option>
                          ))}
                          
                        </select>
                        <div className="pf-betwn-con text-center">
                          <p style={{}}>To</p>
                        </div>
                        <select className="form-selectss"
                        name='partner_age_to'
                        onChange={handleChange}
                        value={formData.partner_age_to}
                        >
                          {[...Array(61)].map((_, i) => {
                            
                            const age = i + parseInt(formData.partner_age_from || 25, 10);
                            return (
                            <option key={age} value={i + 25}>
                              {age} Years
                            </option>
                            )}
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Body Weight&nbsp;{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12 ">
                        <select className="form-selectss"
                        name='partner_weight_from'
                        onChange={handleChange}
                        value={formData.partner_weight_from}
                        >
                          {[...Array(111)].map((_, i) => (
                            <option key={i + 40} value={i + 40}>
                              {i + 40} Kg
                            </option>
                          ))}
                        </select>
                        <div className="pf-betwn-con text-center">
                          <p style={{}}>To</p>
                        </div>
                        <select className="form-selectss"
                        name='partner_weight_to'
                        onChange={handleChange}
                        value={formData.partner_weight_to}
                        >
                          {[...Array(111)].map((_, i) => {
                            const weight = i + parseInt(formData.partner_weight_from || 40, 10);
                            
                            return (
                            <option key={weight} value={weight}>
                              {weight} Kg
                            </option>

                            )}
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Height Range&nbsp;{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-selectss"
                        name='partner_height_from'
                        onChange={handleChange}
                        value={formData.partner_height_from}
                        >
                          {height && height.map((heightList, index)  => {
                            
                            return (

                                <option value={heightList.value}>{heightList.label}</option>
                            )

                          })
                        }
                        </select>
                        <div className="pf-betwn-con text-center">
                          <p>To</p>
                        </div>
                        <select className="form-selectss"
                        name='partner_height_to'
                        onChange={handleChange}
                        value={formData.partner_height_to}
                        >
                          {height &&
                            height
                              .filter(
                                (heightItem) =>
                                  parseFloat(heightItem.value) >=
                                  parseFloat(formData.partner_height_from || "4.1")
                              )
                              .map((heightItem) => (
                                <option key={heightItem.value} value={heightItem.value}>
                                  {heightItem.label}
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
                        <label htmlFor="">
                          Complexion{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='partner_complexion'
                        onChange={handleChange}
                        value={formData.partner_complexion}
                        >
                          <option value="">-- Select --</option>
                          {complexion && complexion.map((complexionList, index)  => {

                            return (

                                <option value={complexionList._id}>{complexionList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.partner_complexion && <p className="error">{error.partner_complexion}</p>}
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-sm-4 col-md-4">
                        <label htmlFor="">
                          Languages Known{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-sm-8 col-md-8">
                        <select className="form-select"
                        name='partner_language'
                        onChange={handleChange}
                        value={formData.partner_language}
                        >
                          <option>-- Select --</option>
                          {language && language.map((languageList, index)  => {

                            return (

                                <option value={languageList._id}>{languageList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.partner_language && <p className="error">{error.partner_language}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Marital Status{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_marital_status'
                        onChange={handleChange}
                        value={formData.partner_marital_status}
                        >
                          <option>-- Select --</option>
                          {maritalStatus && maritalStatus.map((maritalList, index)  => {

                            return (

                                <option value={maritalList._id}>{maritalList.name}</option>
                            )

                          })
                        }
                        </select>
                         {error.partner_marital_status && <p className="error">{error.partner_marital_status}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                {showChildren && 
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Have Children&nbsp;{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='partner_have_children'
                        onChange={handleChange}
                        value={formData.partner_have_children}
                        //ref={have_childrenRef}
                        >
                          <option value="">-- Select --</option>
                          <option value="No">No</option>
                          <option value="Yes - Living together">Yes - Living together</option>
                          <option value="Yes - Living separately">Yes - Living separately</option>
                        </select>
                        {error.partner_have_children && <p className="error">{error.partner_have_children}</p>}
                      </div>
                    </div>
                  </div>
                </div>       
}
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Mother Tongue{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_mother_tongue'
                        onChange={handleChange}
                        value={formData.partner_mother_tongue}
                        >
                          <option>-- Select --</option>
                          {language && language.map((languageList, index)  => {

                            return (

                                <option value={languageList._id}>{languageList.name}</option>
                            )

                          })
                        }
                        </select>
                         {error.partner_mother_tongue && <p className="error">{error.partner_mother_tongue}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3">Partner’s Family Details</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">Family Type </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="radio-wrapper-20bp0">
                          <label htmlFor="example-20-1">
                            <input
                              id="example-20-1"
                              type="radio"
                              name="partner_family_type"
                              onChange={handleChange}
                              value='Joint'
                              checked={formData.partner_family_type === "Joint"}
                            />
                            <span className="name">Joint</span>
                          </label>
                          <label htmlFor="example-20-2">
                            <input
                              id="example-20-2"
                              type="radio"
                              name="partner_family_type"
                              onChange={handleChange}
                              value='Nuclear'
                              checked={formData.partner_family_type === "Nuclear"}
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
                        <div className="radio-wrapper-2014bp">
                          <label htmlFor="example-20-72">
                            <input
                              id="example-20-72"
                              type="radio"
                              name="partner_family_value"
                              onChange={handleChange}
                              value='Orthodox'
                              checked={formData.partner_family_value === "Orthodox"}
                            />
                            <span className="name">Orthodox</span>
                          </label>
                          <label htmlFor="example-20-73">
                            <input
                              id="example-20-73"
                              type="radio"
                              name="partner_family_value"
                              onChange={handleChange}
                              value='Traditional'
                              checked={formData.partner_family_value === "Traditional"}
                            />
                            <span className="name">Traditional</span>
                          </label>
                          <label htmlFor="example-20-74">
                            <input
                              id="example-20-74"
                              type="radio"
                              name="partner_family_value"
                              onChange={handleChange}
                              value='Moderate'
                              checked={formData.partner_family_value === "Moderate"}
                            />
                            <span className="name">Moderate</span>
                          </label>
                          <label htmlFor="example-20-75">
                            <input
                              id="example-20-75"
                              type="radio"
                              name="partner_family_value"
                              onChange={handleChange}
                              value='Liberal'
                              checked={formData.partner_family_value === "Liberal"}
                            />
                            <span className="name">Liberal</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3">&nbsp;Partner’s Location Details</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg  nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Nationality{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name="partner_country"
                        onChange={handleChange}
                        value={formData.partner_country}
                        >
                          <option>-- Select Country --</option>
                          {country && country.map((countryList, index)  => {

                            return (

                                <option value={countryList._id}>{countryList.name}</option>
                            )

                          })
                        }
                        </select>
                         {error.partner_country && <p className="error">{error.partner_country}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs  nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          State{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name="partner_state"
                        onChange={handleChange}
                        value={formData.partner_state}
                        >
                          <option>-- Select State --</option>
                          {state && state.map((stateList, index)  => {

                            return (

                                <option value={stateList._id}>{stateList.name}</option>
                            )

                          })
                        }
                        </select>
                         {error.partner_state && <p className="error">{error.partner_state}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          City/District{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm12">
                        <select className="form-select" name="partner_city"
                        onChange={handleChange}
                        value={formData.partner_city}
                        >
                          <option>-- Select --</option>
                          {city && city.map((cityList, index)  => {

                            return (

                                <option value={cityList._id}>{cityList.name}</option>
                            )

                          })
                        }
                        </select>
                         {error.partner_city && <p className="error">{error.partner_city}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3">&nbsp;Partner’s Education &amp; Career</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Highest Qualification{" "}
                          <span style={{ color: "#FF0A0A" }}>*</span>{" "}
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_education'
                        onChange={handleChange}
                        value={formData.partner_education}
                        >
                          <option>-- Select Education --</option>
                          {education && education.map((educationList, index)  => {

                            return (

                                <option value={educationList._id}>{educationList.name}</option>
                            )

                          })
                        }
                        </select>
                         {error.partner_education && <p className="error">{error.partner_education}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Professional Qualification{" "}
                          <span style={{ color: "#FF0A0A" }}>*</span>{" "}
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_professional_qualification'
                        onChange={handleChange}
                        value={formData.partner_professional_qualification}
                        >
                          <option>-- Select --</option>
                          {professional && professional.map((professionalList, index)  => {

                            return (

                                <option value={professionalList._id}>{professionalList.name}</option>
                            )

                          })
                        }
                        </select>
                         {error.partner_professional_qualification && <p className="error">{error.partner_professional_qualification}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Occupation <span style={{ color: "#FF0A0A" }}>*</span>{" "}
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_occupation'
                        onChange={handleChange}
                        value={formData.partner_occupation}
                        >
                          <option value="">-- Select --</option>
                          {occupation && occupation.map((occupationList, index)  => {

                            return (

                                <option value={occupationList._id}>{occupationList.name}</option>
                            )

                          })
                        }
                        </select>
                         {error.partner_occupation && <p className="error">{error.partner_occupation}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Working as
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_working_as'
                        onChange={handleChange}
                        value={formData.partner_working_as}
                        >
                          <option value="">-- Select --</option>
                          {workingWith && workingWith.map((workingWithList, index)  => {

                            return (

                                <option value={workingWithList._id}>{workingWithList.name}</option>
                            )

                          })
                        }
                        </select>
                        
                        
                        
                        {error.partner_working_as && <p className="error">{error.partner_working_as}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Annual Income Range{" "}
                          <span style={{ color: "#FF0A0A" }}>*</span>{" "}
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12 ">
                        <select className="form-selectss"
                        name='partner_income_from'
                        onChange={handleChange}
                        value={formData.partner_income_from}
                        >
                          {incomeOptions.map((inc) => (
                          <option key={inc.value} value={inc.value}>
                            {inc.label}
                          </option>
                        ))}
                          
                        </select>
                        <div className="pf-betwn-con text-center">
                          <p style={{}}>To</p>
                        </div>
                        <select className="form-selectss"
                        name='partner_income_to'
                        onChange={handleChange}
                        value={formData.partner_income_to}
                        >
                          {incomeOptions
                          .filter((inc) => {
                            
                            if (inc.value === "Above 10000000") return true;
                            return parseInt(inc.value) >= parseInt(formData.partner_income_from || 100000);
                          })
                          .map((inc) => (
                            <option key={inc.value} value={inc.value}>
                              {inc.label}
                            </option>
                          ))}
                        </select>

                         {error.partner_income_from && <p className="error">{error.partner_income_from}</p>}
                         {error.partner_income_to && <p className="error">{error.partner_income_to}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3">&nbsp;Partner’s Religion &amp; Caste</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>


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
                        name='partner_religion'
                        onChange={handleChange}
                        value={formData.partner_religion}
                        >
                          <option value="">-- Select Religion --</option>

                          {religion && religion.map((religionList, index)  => {

                            return (

                                <option value={religionList._id}>{religionList.name}</option>
                            )

                          })
                        }

                        </select>
                        {error.partner_religion && <p className="error">{error.partner_religion}</p>}
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
                        name='partner_caste'
                        onChange={handleChange}
                        value={formData.partner_caste}
                        >
                          <option value="">-- Select Cast --</option>
                          {caste && caste.map((casteList, index)  => {

                            return (

                                <option value={casteList._id}>{casteList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.partner_caste && <p className="error">{error.partner_caste}</p>}
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
                        name='partner_sub_caste'
                        onChange={handleChange}
                        value={formData.partner_sub_caste}
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
                { /* <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Gotra{" "}
                          
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_gotra'
                        onChange={handleChange}
                        value={formData.partner_gotra}
                        
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
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" name="partner_gotra_other" 
                        onChange={handleChange}
                        value={formData.partner_gotra_other}
                        />

                        {error.partner_gotra && <p className="error">{error.partner_gotra}</p>}
                      </div>
                    </div>
                  </div>
                </div>
*/ }


                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Dosh 
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" name="partner_dosh" 
                        onChange={handleChange}
                        value={formData.partner_dosh}
                        />

                        {error.partner_dosh && <p className="error">{error.partner_dosh}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3">&nbsp;Partner’s Other Details</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="row  inputs-marg nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Diet Preference{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_diet'
                        onChange={handleChange}
                        value={formData.partner_diet}
                        >
                          <option value="">-- Select --</option>
                          {diet && diet.map((dietList, index)  => {

                            return (

                                <option value={dietList._id}>{dietList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.partner_diet && <p className="error">{error.partner_diet}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Drinking Habit{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_drinking'
                        onChange={handleChange}
                        value={formData.partner_drinking}
                        >
                          <option value="">-- Select --</option>
                          <option value="Doesn't Matter">Doesn't Matter</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Occasionally">Occasionally</option>
                        </select>
                        {error.partner_drinking && <p className="error">{error.partner_drinking}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Smoking Habit
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select"
                        name='partner_smoking'
                        onChange={handleChange}
                        value={formData.partner_smoking}
                        >
                          <option value="">-- Select --</option>
                          <option value="Doesn't Matter">Doesn't Matter</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Occasionally">Occasionally</option>
                        </select>
                        {error.partner_smoking && <p className="error">{error.partner_smoking}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Profile Managed by
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-112">
                        <select className="form-select"
                        name='partner_managed_by'
                        onChange={handleChange}
                        value={formData.partner_managed_by}
                        >
                          <option value="">-- Select --</option>
                          <option value="Open to All">Open to All</option>
                          <option value="Self">Self</option>
                          <option value="Parent / Guardian">Parent / Guardian</option>
                          <option value="Sibling / Friend / Other">Sibling / Friend / Other</option>
                        </select>
                        {error.partner_managed_by && <p className="error">{error.partner_managed_by}</p>}
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
                                                                                                              to="/partner-qualities"
                                                                                                            >
                                                                                                              Back
                                                                                                            </Link>{" "}                          
                                                                                                            <button className="countiniue" type='submit' disabled={isLoading}>
                                                                                                              {isLoading ? "Wait..." : "Continue"}
                                                                                                            </button>
                                                                                                      </div>
                                                                        <br/>
                                                                                                      <hr />
                                                                        
                                                                                                      <div className="d-flex align-items-center justify-content-center">
                                                                                                            <Link to="#" className="skipbtn" onClick={skipButton}>Skip</Link>
                                                                                                      </div>
                        
                        
                        
                        


                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5  col-lg-4">
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

export default PartnerBasicDetail
