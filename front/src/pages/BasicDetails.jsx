import React, { useEffect, useRef, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HeaderUser from '../components/homePage/HeaderUser';

function BasicDetails() {

  const location = useLocation();
  const { userDetailLogin } = useSelector((state) => state.auth);  

const { userDetail } = useSelector((state) => state.auth);

const navigate = useNavigate();

const [lookingFor, setLookingFor] = useState([])
const [maritalStatus, setMaritalStatus] = useState([])
const [complexion, setComplexion] = useState([])
const [height, setHeight] = useState([])
const [weight, setWeight] = useState([])
const [day, setDay] = useState("");
const [hour, setHour] = useState([])
const [minute, setMinute] = useState([])
const [hobbies, setHobbies] = useState([])
const [state, setState] = useState([])
const [city, setCity] = useState([])
const [diet, setDiet] = useState([])
const [selected, setSelected] = useState([]);
const [formData, setFormData] = useState({ 
    name: "",
    gender: "",
    birth_day: "",
    birth_month: "",
    birth_year: "",
    birth_hour: "",
    birth_minute: "",
    birth_am: "AM",
    hobbies: [] 
  });
  const [showChildren, setShowChildren] = useState(false)

  
  const nameRef = useRef(null);
  const profileForRef = useRef(null);
  const genderRef = useRef(null);
    const birth_dayRef = useRef(null);
    const birth_monthRef = useRef(null);
    const birth_yearRef = useRef(null);
    const  hobbiesRef= useRef(null);
    const  marital_statusRef = useRef(null);
    const  have_childrenRef = useRef(null);
    const  manglikRef = useRef(null);
    const  heightRef = useRef(null);
    const  weightRef= useRef(null);
    const  complexionRef = useRef(null);
    const  birth_hourRef = useRef(null);
    const  birth_minuteRef = useRef(null);
    const  birth_stateRef = useRef(null);
    const  birth_cityRef= useRef(null);
    const  dietRef = useRef(null);
    const  aboutRef= useRef(null);


const [error, setError] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [isScroll, setIsScroll] = useState(false)

const fetchCreateProfileFor = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/looking-for`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setLookingFor(data.data)
      }
}
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
const fetchStateList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/state`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setState(data.data)
      }
}
const fetchCityList = async (stateId) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/city/${stateId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setCity(data.data)
      }
}


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
const fetchWeight = () => {

   const weights = [];

    for (let wt = 40; wt <= 150; wt++) {
      weights.push(wt)
    }

    setWeight(weights); 

}

const years = [];
  const currentYear = new Date().getFullYear() - 18;
  for (let y = currentYear; y >= 1950; y--) {
    years.push(y);
  }

  // Months
  const months = [
    { value: 1, label: "January", days: 31 },
    { value: 2, label: "February", days: 28 }, // handle leap separately
    { value: 3, label: "March", days: 31 },
    { value: 4, label: "April", days: 30 },
    { value: 5, label: "May", days: 31 },
    { value: 6, label: "June", days: 30 },
    { value: 7, label: "July", days: 31 },
    { value: 8, label: "August", days: 31 },
    { value: 9, label: "September", days: 30 },
    { value: 10, label: "October", days: 31 },
    { value: 11, label: "November", days: 30 },
    { value: 12, label: "December", days: 31 },
  ];

  // Leap year check
  const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

  // Filter months based on selected day
  const filteredMonths = months.filter((m) => {
    if (!day) return true; // no day selected → show all months
    if (m.value === 2) {
      // February case
      if (day <= 28) return true;
      if (day === 29 && formData.year && isLeapYear(formData.year)) return true;
      return false;
    }
    return day <= m.days;
  });

  const fetchHour = () => {

   const hours = [];

    for (let hr = 1; hr <= 12; hr++) {
      hours.push(hr)
    }

    setHour(hours); 

}
const fetchMinute = () => {

   const minutes = [];

    for (let mn = 1;  mn <= 59; mn++) {
      minutes.push(mn)
    }

    setMinute(minutes); 

}


useEffect(() => {

  fetchCreateProfileFor();
  fetchMaritalStatusList()
  fetchComplexionList()
  fetchHeight()
  fetchWeight()
  fetchHour()
  fetchMinute()
  fetchHobbiesList()
  fetchDietList()
  fetchStateList()


}, [])

const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if(name === 'birth_state'){
      fetchCityList(value)
    }
    if(name === 'birth_day'){
      setDay(Number(value));
      
    }
    
    if(name === 'hobbies'){
      if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value)); // remove
      } else {
        setSelected([...selected, value]); // add
      }
    }

    if(name === 'marital_status'){
      
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

    //console.log(formData)
    
  };

const fetchUserDetail = async (userId) => {
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      //console.log(data)
      if(data.status){
        fetchCityList(data.data[0].birth_state)
        setSelected(data.data[0].hobbies)

        const dob = new Date(data.data[0].dob);
        let ampm = "AM";
        let hour = dob.getHours();
        if (hour >= 12) {
          ampm = "PM";
          if (hour > 12) hour -= 12;
        } else if (hour === 0) {
          hour = 12; 
        }

        
      
          if (data.data[0].marital_status === '68cbc2783946bd183864e28d') {
          setShowChildren(false)
          } else {
            setShowChildren(true)
          }
        //console.log('step', data.data[0].step)
        
      setFormData({

        profile_for:data.data[0].profile_for,
        name:data.data[0].name,
        about:data.data[0].about,
        height:data.data[0].height,
        weight:data.data[0].weight,
        manglik:data.data[0].manglik,
        gender:data.data[0].gender,
        marital_status:data.data[0].marital_status,
        have_children:data.data[0].have_children,
        complexion:data.data[0].complexion,
        birth_state:data.data[0].birth_state,
        birth_city:data.data[0].birth_city,
        diet:data.data[0].diet,
        birth_year:dob.getFullYear(),
        birth_month:dob.getMonth() + 1,
        birth_day:dob.getDate(),
        birth_hour:hour,
        birth_minute:dob.getMinutes(),
        birth_am:ampm,
        step:data.data[0].step,
       

      })

    }

  }

useEffect(() => {
    
  if(userDetail?._id){
  fetchUserDetail(userDetail._id)
  }

  if(location.pathname === '/basic-details-edit'){
    if(userDetailLogin?._id){
      fetchUserDetail(userDetailLogin._id)
    } else {
      navigate('/')
    }

  }

}, [userDetail])

useEffect(() => {
    
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsScroll(false)
    
  }, [isScroll]);


const validate = () => {
    const errs = {};
    
    
    
    if (!formData.about) {
      
      errs.about = "About is required";
      aboutRef.current.focus();
    }
    if (!formData.diet) {
      errs.diet = "Diet is required";
      dietRef.current.focus();
    }
    if (!formData.birth_city) {
      errs.birth_city = "City is required";
      birth_cityRef.current.focus();
    }
    if (!formData.birth_state) {
      errs.birth_state = "State is required";
      birth_stateRef.current.focus();
    }
    if (!Array.isArray(selected) || selected.length === 0) {
      errs.hobbies = "Select at least one hobbies";
      hobbiesRef.current.focus();
    }
     
    if (formData.birth_day < 1 || formData.birth_day > 31) {
      errs.birth_day = "Day is required";
      birth_dayRef.current.focus();
    }
    if (formData.birth_month < 1 || formData.birth_month > 12) {
      errs.birth_month = "Month is required";
      birth_monthRef.current.focus();
    }
    if (formData.birth_year < 1900) {
      errs.birth_year = "Year is required";
      birth_yearRef.current.focus();
    }
    if (!formData.birth_hour) {
      errs.birth_hour = "Hour is required";
      birth_hourRef.current.focus();
    }
    if (!formData.birth_minute) {
      errs.birth_minute = "Minute is required";
      birth_minuteRef.current.focus();
    }
    if (!formData.complexion) {
      
      errs.complexion = "Complexion is required";
      complexionRef.current.focus();
    }
    if (!formData.weight) {
      errs.weight = "Weight is required";
      weightRef.current.focus();
    }
    if (!formData.height) {
      errs.height = "Height is required";
      heightRef.current.focus();
    }
    if (!formData.manglik) {
      errs.manglik = "Manglik is required";
      manglikRef.current.focus();
    }
    if (!formData.marital_status) {
      errs.marital_status = "Marital status is required";
      marital_statusRef.current.focus();
    }
    /* if (!formData.have_children) {
      errs.have_children = "Have children is required";
      have_childrenRef.current.focus();
    }
      */
    
    if (!formData.name) {
      errs.name = "Name is required";
       nameRef.current.focus();
    }
    if (!["Male", "Female", "Other"].includes(formData.gender)) {
      errs.gender = "Gender is required";
      genderRef.current.focus();
    }
    if (!formData.profile_for) {
      
      errs.profile_for = "Profile for is required";
      profileForRef.current.focus();
    }
   

    setError(errs);
    return Object.keys(errs).length === 0;
  };

const handleSubmit = async (e) => {
    e.preventDefault();
     if (!validate()){
        //setIsScroll(true)
       return;
     }
    
     setIsLoading(true)
     
     let userId;
     let formDataNew = formData
     if(location.pathname === '/basic-details-edit'){
      
      userId = userDetailLogin
     } else {
      userId = userDetail

      //console.log(formDataNew)
      if(formData.step >= 1){ } else {
      formDataNew = {...formData, step:1}
      }
      
      //console.log(formDataNew)
     }
    
     const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/basic-profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail:userId, formData:formDataNew, selected }),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));
        if(location.pathname === '/basic-details-edit'){
       navigate('/my-profile')
        } else {
          navigate('/contact-information')
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
        

    //  console.log(data)
    
  };


  return (
    <>
     { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

     <>
  {/* hobbies Modal */}
  { /* <div
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
                                  name={`hobbies`}
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
</>


        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Basic Details </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Basic Details</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
  <div className="register-sec ">
    <div className="container-fluid con-flu-padd">
      <div className="container-fluid  bg-register ">
        <div className="row pb-50 pt-40">
          <div className="col-lg-8 ">
            <div className="con-reg">
              <div class="step-container">                  

                  <div className="row">
                    <div className="col-sm-6">
                          <div class="step-info">
                            <h2 className='mt-sm-4'>Basic Details</h2>
                            {/* <p><Link onClick={skipButton}><span>Next Step- Contact Details</span></Link></p> */}
                          </div>
                    </div>
                    <div className="col-sm-6 text-end">
                        {location.pathname === '/basic-details-edit' ? null:
                        <div class="progress-bar"  style={{background:"radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 25%, pink 0)"}}>
                            <span>1 of 4</span>
                        </div>
                        }                  
                    </div>
                  </div>
              </div>


              {/* <h3>Basic details</h3>
              <div className="col-12">
                <div className="line-bg" />
              </div> */}


              <form onSubmit={handleSubmit}>
              <div className=" form-bas-de ">
                
                <div className="row inputs-marg ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Create profile for&nbsp;{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='profile_for' 
                        onChange={handleChange}
                        value={formData.profile_for}
                        ref={profileForRef}
                        >
                          <option value="">-- Select --</option>
                          {lookingFor && lookingFor.map((profileList, index)  => {

                            return (

                                <option value={profileList._id}>{profileList.name}</option>
                            )

                          })
                        }
                          
                          
                        </select>
                        {error.profile_for && <p className="error">{error.profile_for}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Gender{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="radio-wrapper-20">
                          
                          <label htmlFor="example-20-1">
                            
                            <input
                              id="example-20-1"
                              type="radio"
                              name="gender"
                              onChange={handleChange}
                              value='Male'
                              checked={formData.gender === "Male"}
                              ref={genderRef}
                            />
                            <span className="name">Male</span>

                          </label>

                          <label htmlFor="example-20-2">
                            <input
                              id="example-20-2"
                              type="radio"
                              name="gender"
                              onChange={handleChange}
                              value='Female'
                              checked={formData.gender === "Female"}
                            />
                            <span className="name">Female</span>
                          </label>
                          
                        </div>
                        {error.gender && <p className="error">{error.gender}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Name <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <input type="text" name="name" 
                        onChange={handleChange}
                        value={formData.name}
                         ref={nameRef}
                        />

                        {error.name && <p className="error">{error.name}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Marital Status&nbsp;{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='marital_status'
                        onChange={handleChange}
                        value={formData.marital_status}
                        ref={marital_statusRef}
                        >
                          <option value="">-- Select --</option>
                          {maritalStatus && maritalStatus.map((maritalList, index)  => {

                            return (

                                <option value={maritalList._id}>{maritalList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.marital_status && <p className="error">{error.marital_status}</p>}
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
                        <select className="form-select" name='have_children'
                        onChange={handleChange}
                        value={formData.have_children}
                        ref={have_childrenRef}
                        >
                          <option value="">-- Select --</option>
                          <option value="No">No</option>
                          <option value="Yes - Living together">Yes - Living together</option>
                          <option value="Yes - Living separately">Yes - Living separately</option>
                        </select>
                        {error.have_children && <p className="error">{error.have_children}</p>}
                      </div>
                    </div>
                  </div>
                </div>       
} 


                <div className="row inputs-margs">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Manglik&nbsp; Status{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="radio-wrapper-20 d-block">
                          <label htmlFor="example-20-11">
                            <input
                              id="example-20-11"
                              type="radio"
                              name="manglik"
                              checked={formData.manglik === "Manglik"}
                              value='Manglik'
                              onChange={handleChange}
                              ref={manglikRef}
                            />
                            <span className="name" style={{width:'auto'}}>Manglik</span>
                          </label>
                          <label htmlFor="example-20-22">
                            <input
                              id="example-20-22"
                              type="radio"
                              name="manglik"
                              value='Non Manglik'
                              onChange={handleChange}
                              checked={formData.manglik === "Non Manglik"}
                            />
                            <span className="name" style={{width:'auto'}}>Non Manglik</span>
                          </label>
                          <label htmlFor="example-20-23">
                            <input
                              id="example-20-23"
                              type="radio"
                              name="manglik"
                              value='Angshik Manglik'
                              onChange={handleChange}
                              checked={formData.manglik === "Angshik Manglik"}
                            />
                            <span className="name" style={{width:'auto'}}>Angshik Manglik</span>
                          </label>
                        </div>
                        {error.manglik && <p className="error">{error.manglik}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Height&nbsp;{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='height'
                        onChange={handleChange}
                        value={formData.height}
                        ref={heightRef}
                        >
                          <option value="">-- Select --</option>
                          {height && height.map((heightList, index)  => {

                            return (

                                <option value={heightList.value}>{heightList.label}</option>
                            )

                          })
                        }
                        </select>
                        {error.height && <p className="error">{error.height}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Weight (in Kg){" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='weight'
                        onChange={handleChange}
                        value={formData.weight}
                        ref={weightRef}
                        >
                          <option value="">-- Select --</option>
                          {weight && weight.map((weightList, index)  => {

                            return (

                                <option value={weightList}>{weightList}</option>
                            )

                          })
                        }
                        </select>
                        {error.weight && <p className="error">{error.weight}</p>}
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
                        <select className="form-select" name='complexion'
                        onChange={handleChange}
                        value={formData.complexion}
                        ref={complexionRef}
                        >
                          <option value="">-- Select --</option>
                          {complexion && complexion.map((complexionList, index)  => {

                            return (

                                <option value={complexionList._id}>{complexionList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.complexion && <p className="error">{error.complexion}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Date of Birth{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12 ">
                         

                         <select
                          className="form-selects"
                          name="birth_day"
                          onChange={handleChange}
                          value={formData.birth_day}
                          ref={birth_dayRef}
                        >
                          <option value="">Day</option>
                          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>

                        
                        
                        <select
                        className="form-selects"
                        disabled={!day} 
                        name='birth_month'
                        onChange={handleChange}
                        value={formData.birth_month}
                        ref={birth_monthRef}
                      >
                        <option value="">Month</option>
                        {filteredMonths.map((m) => (
                          <option key={m.value} value={m.value}>
                            {m.label}
                          </option>
                        ))}
                      </select>
                      
                        
                        
                        <select
                        onChange={handleChange}
                        value={formData.birth_year}
                        className="form-selects"
                        name='birth_year'
                        ref={birth_yearRef}
                      >
                        <option value="">Year</option>
                        {years.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                       
                      </div>
                      {(error.birth_day || error.birth_month || error.birth_year) && 
                        <>
                        <div className="col-md-4 col-sm-12 ">&nbsp;</div>
                        <div className="col-md-8 col-sm-12 " style={{maxWidth:'470px'}}>
                          <div className='row'>
                          <div className="col-md-4 col-sm-12 ">
                            {error.birth_day && <p className="error">{error.birth_day}</p>}
                          </div>
                          <div className="col-md-4 col-sm-12 ">{error.birth_month && <p className="error">{error.birth_month}</p>}</div>
                          <div className="col-md-4 col-sm-12 ">{error.birth_year && <p className="error">{error.birth_year}</p>}</div>


                          </div>

                        </div>
                        </>
}



                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Time of Birth{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12 ">
                        <select className="form-selects"
                        name="birth_hour"
                        onChange={handleChange}
                        value={formData.birth_hour}
                        ref={birth_hourRef}
                        >
                          <option value="">Hour</option>
                          {hour && hour.map((hourList, index)  => {

                            return (

                                <option value={hourList}>{hourList}</option>
                            )

                          })
                        }
                        </select>
                        <select className="form-selects"
                        name="birth_minute"
                        onChange={handleChange}
                        value={formData.birth_minute}
                        ref={birth_minuteRef}
                        >
                          <option value="">Min</option>
                          
                          {minute && minute.map((minuteList, index)  => {

                            return (

                                <option value={minuteList}>{minuteList}</option>
                            )

                          })
                        }

                          
                        </select>
                        <select className="form-selects"
                        name='birth_am'
                        onChange={handleChange}
                        value={formData.birth_am}
                        
                        >
                          
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                        {(error.birth_hour || error.birth_minute) && 
                        <>
                        <div className="col-md-4 col-sm-12 ">&nbsp;</div>
                        <div className="col-md-8 col-sm-12 " style={{maxWidth:'470px'}}>
                          <div className='row'>
                          <div className="col-md-4 col-sm-12 ">
                            {error.birth_hour && <p className="error">{error.birth_hour}</p>}
                          </div>
                          <div className="col-md-4 col-sm-12 ">{error.birth_minute && <p className="error">{error.birth_minute}</p>}</div>
                          <div className="col-md-4 col-sm-12 ">{error.birth_am && <p className="error">{error.birth_am}</p>}</div>


                          </div>

                        </div>
                        </>
}

                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          State{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='birth_state' 
                        onChange={handleChange}
                        value={formData.birth_state}
                        ref={birth_stateRef}
                        >
                          <option value="">-- Select State --</option>
                          {state && state.map((stateList, index)  => {

                            return (

                                <option value={stateList._id}>{stateList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.birth_state && <p className="error">{error.birth_state}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          City of Birth{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='birth_city'
                        onChange={handleChange}
                        value={formData.birth_city}
                        ref={birth_cityRef}
                        >
                          <option value="">-- Select City --</option>
                          {city && city.map((cityList, index)  => {

                            return (

                                <option value={cityList._id}>{cityList.name}</option>
                            )

                          })
                        }
                        </select>
                        {error.birth_city && <p className="error">{error.birth_city}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs">
                  <div className="col-12   p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Hobbies{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                          <div className="hobies-overflow">
                            <div className="radio-wrapper-301s inputs-margs mb-0">
                              {hobbies && hobbies.map((hobbiesList, index)  => {

                                
                                  return (

                                    <label htmlFor={hobbiesList._id} className='mb-3'>  
                                    <input
                                      id={hobbiesList._id}
                                      type="checkbox"
                                      name={`hobbies`}
                                      checked={selected.includes(hobbiesList._id)}
                                      value={hobbiesList._id}
                                      onChange={handleChange}
                                      ref={hobbiesRef}
                                    />
                                    <span className="name">{hobbiesList.name}</span>
                                  </label>
                                )
                              

                              })
                            }
                              
                              

                              
                            </div>
                          </div>

                        {/* <Link href="#" data-bs-toggle="modal" data-bs-target="#hobbiesModal" class="pinklink m-1">+ More Hobbies</Link> */}

                        { /* <div className='nam-inp pt-3'>
       
                            <input type="text" className="form-control" name="hobbies_other" 
                        onChange={handleChange} value={formData.hobbies_other} placeholder="Add New Hobbies"/>
                        </div>
                        */ }
                        
                        
                        {error.hobbies && <p className="error">{error.hobbies}</p>}


                        
                        


                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs ">
                  <div className="col-12  align-items-center p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          Diet <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <select className="form-select" name='diet'
                        onChange={handleChange}
                        value={formData.diet}
                        ref={dietRef}
                        >
                          <option value="">-- Select --</option>
                          {diet && diet.map((dietList, index)  => 
                            dietList.name !== "Doesn't Matter" ? (
                       
                                
                                <option value={dietList._id}>{dietList.name}</option>
                                
                          
                          )
                          :null

                        )}
                        
                        </select>
                        {error.diet && <p className="error">{error.diet}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12   p-0">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="">
                          About{" "}
                          <span style={{ color: "#FF0A0A" }}>&nbsp;*</span>
                        </label>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <textarea defaultValue={""} 
                        name='about'
                        onChange={handleChange}
                        value={formData.about}
                        ref={aboutRef}
                        />
                        {error.about && <p className="error">{error.about}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row inputs-margs nam-inp  ">
                  <div className="col-12 d-flex text-right p-0">
                    <div className="col-4" />
                    <div className="col-8">
                      <div className="maxwid">
                        {location.pathname === '/basic-details-edit' ? 
                        <button type='submit' disabled={isLoading}>
                          {isLoading ? "Wait..." : "Save"}</button>
                        :
                          <button type='submit' disabled={isLoading}>
                          {isLoading ? "Wait..." : "Continue"}</button>
}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 ">
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
                  <img src="assets/img/register/phone_svgrepo.com.png" alt="" />
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
              <div className="ic-img-con d-flex align-items-center">
                <div className="img-ic">
                  <img src="assets/img/register/users_svgrepo.com.png" alt="" />
                </div>
                <div className="ic-cons">
                  <span>Thousand of Genuine Profiles</span>
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

export default BasicDetails
