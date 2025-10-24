import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AgeRange from '../components/profiePage/AgeRange';
import HeightRange from '../components/profiePage/HeightRange';


function AdvanceSearch() {

const location = useLocation();
      const { userDetailLogin } = useSelector((state) => state.auth);
    
    const { userDetail } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({minAge:18, maxAge:45, minHeight:120, maxHeight:183, gender:'Bride'});
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const [maritalStatus, setMaritalStatus] = useState([])
    const [country, setCountry] = useState([])
    const [state, setState] = useState([])
    const [city, setCity] = useState([])
    const [highest, setHighest] = useState([])
    const [language, setLanguage] = useState([])
    const [religion, setReligion] = useState([])
    const [occupation, setOccupation] = useState([])
    const [organization, setOrganization] = useState([])
    const [complexion, setComplexion] = useState([])
    const [diet, setDiet] = useState([])
    const [hobbies, setHobbies] = useState([])
    

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
const fetchState = async (id) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/state/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setState(data.data)
      }
}
const fetchCity = async (id) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/city/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setCity(data.data)
      }
}

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
const fetchLanguage = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/language`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setLanguage(data.data)
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
const fetchOccupation = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/occupation`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setOccupation(data.data)
      }
}
const fetchOrganization = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/organization-user`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setOrganization(data.data)
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


useEffect(() => {
fetchMaritalStatusList()
fetchCountry()
fetchEducation()
fetchLanguage()
fetchReligion()
fetchOccupation()
fetchOrganization()
fetchComplexionList()
fetchHobbiesList()
fetchDietList()

}, [])

const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if(name === 'country'){
        fetchState(value)
    }
    if(name === 'state'){
        fetchCity(value)
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

  const minAgeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      minAge: value,
    }));

  }
  const maxAgeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      maxAge: value,
    }));

  }

  const minHeightChange = (value) => {
    
    setFormData((prev) => ({
      ...prev,
      minHeight: value,
    }));

  }
  const maxHeightChange = (value) => {
    
    setFormData((prev) => ({
      ...prev,
      maxHeight: value,
    }));

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
     setIsLoading(true)

     let url = '/search-profile?' 
   
    if(formData.profile_id){
        url +='&profile_id='+formData.profile_id

    } else {
    
     if(formData.marital_status){
    url +='&marital_status='+formData.marital_status

    }
    if(formData.gender){
    url +='&gender='+formData.gender

    }
    if(formData.language){
    url +='&language='+formData.language

    }
    if(formData.country){
    url +='&country='+formData.country

    }
    if(formData.state){
    url +='&state='+formData.state

    }
    if(formData.education){
    url +='&education='+formData.education

    }
    if(formData.annual_income){
    url +='&annual_income='+formData.annual_income

    }
    if(formData.occupation){
    url +='&occupation='+formData.occupation

    }
    if(formData.manglik){
    url +='&manglik='+formData.manglik

    }
    
    if(formData.religion){
    url +='&religion='+formData.religion

    }
    if(formData.minAge){
    url +='&min='+formData.minAge

    }
    if(formData.maxAge){
    url +='&max='+formData.maxAge

    }
    if(formData.minHeight){
    url +='&minHeight='+formData.minHeight

    }
    if(formData.maxHeight){
    url +='&maxHeight='+formData.maxHeight

    }
    if(formData.city){
    url +='&city='+formData.city

    }
    if(formData.organization){
    url +='&organization='+formData.organization

    }
    if(formData.diet){
    url +='&diet='+formData.diet

    }
    if(formData.hobbies){
    url +='&hobbies='+formData.hobbies

    }
    if(formData.complexion){
    url +='&complexion='+formData.complexion

    }
    if(formData.managed_by){
    url +='&managed_by='+formData.managed_by

    }


}
    //console.log(url)
    //navigate(url)
    setIsLoading(false)
    document.location.href=url


    }


  return (
    <>
      
        
      <form onSubmit={handleSubmit}>
      

         
         <div className="col-lg-7 offset-lg-2">
                <div className="basicform-row">
                    <div className="row">
                        <div className="col-md-4">
                            <label className="basiclabel" htmlFor="example-20-10">Search Profile Id</label>
                        </div>
                        <div className="col-md-8">
                            <div className="basicfld">
                            <input
                                type="text"
                                placeholder="Search Profile Id"
                                name="profile_id"
                                onChange={handleChange}
                                value={formData.profile_id}
                                style={{paddingLeft:'20px'}}
                            />
                            </div>
                        </div>

                    </div>
                </div>
                {/* row end */}
            </div>
            <div className="basic-or">
                <span>or</span>
            </div>

            <div className="col-lg-7 offset-lg-2">
                                                                <div className="basicform-row">
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                        <label className="basiclabel" htmlFor="">Search</label>
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                            <div className="inp-bas-ser">
                                                                                <div className="radio-wrapper-basic-20">
                                                                                    <label htmlFor="example-20-101">
                                                                                    <input
                                                                                        id="example-20-101"
                                                                                        type="radio"
                                                                                        name="gender"
                                                                                        onChange={handleChange}
                                                                                        value='Bride'
                                                                                        checked={formData.gender === "Bride"}
                                                                                    />
                                                                                    <span className="name">Bride</span>
                                                                                    </label>
                                                                                    <label htmlFor="example-20-271">
                                                                                    <input
                                                                                        id="example-20-271"
                                                                                        type="radio"
                                                                                        name="gender"
                                                                                        onChange={handleChange}
                                                                                        value='Groom'
                                                                                        checked={formData.gender === "Groom"}
                                                                                    />
                                                                                    <span className="name">Groom</span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* row end */}
            
                                                                
            
                                                                <div className="basicform-row">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <label className="basiclabel" htmlFor="">Age</label>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="accordion-item mt-3">
                                                                                    <div
                                                                                        id="collapseOne"
                                                                                        className="accordion-collapse collapse show"
                                                                                        aria-labelledby="headingOne"
                                                                                        data-bs-parent="#myAccordion"
                                                                                    >
                                                                                        <div className="accordion-body">
                                                                                        {/* start */}
                                                                                        <AgeRange changeShow={0} minAgeChange={minAgeChange} maxAgeChange={maxAgeChange} />
                                                                                        {/* end */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
            
            
                                                                            </div>
                                                                </div>
                                                                {/* row end */}
            
                                                                <div className="basicform-row">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <label className="basiclabel" htmlFor="">Height</label>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="accordion-item mt-3">
                                                                                    {/* start */}
                                                                                    <HeightRange  changeShow={0} minHeightChange={minHeightChange} maxHeightChange={maxHeightChange} />
                                                                                    {/* end */}
                                                                                </div>
                                                                            </div>
            
            
                                                                            </div>
                                                                </div>
                                                                {/* row end */}
            
                                                                <div className="basicform-row">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <div className='basicfld'>
                                                                                    <label className="basiclabel" htmlFor="">Marital Status</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="basicfld">
                                                                                    <select className="form-select" name='marital_status'
                                                                                            onChange={handleChange}
                                                                                            value={formData.marital_status}
                                                                                            
                                                                                            >
                                                                                            <option value="">-- Select --</option>
                                                                                                {maritalStatus && maritalStatus.map((maritalList, index)  => {
                                                        
                                                                                                    return (
                                                        
                                                                                                        <option value={maritalList._id}>{maritalList.name}</option>
                                                                                                    )
                                                        
                                                                                                })
                                                                                                }
                                                                                </select>
                                                                                </div>
                                                                            </div>
            
            
                                                                            </div>
                                                                </div>
                                                                {/* row end */}
            
                                                                <div className="basicform-row">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <div className='basicfld'>
                                                                                    <label className="basiclabel" htmlFor="">Manglik Status</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="basicfld">
                                                                                   <select className="form-select"
                                                                                    name='manglik'
                                                                                        onChange={handleChange}
                                                                                        value={formData.manglik}
                                                                                    >
                                                                                        <option value="">--Select--</option>
                                                                                        <option value="Manglik">Manglik</option>
                                                                                        <option value="Non Manglik">Non Manglik</option>
                                                                                    <option value="Angshik Manglik">Angshik Manglik</option>
                                                                                    
                                                                                    
                                                                                    </select>
                                                                                </div>
                                                                            </div>
            
            
                                                                            </div>
                                                                </div>
                                                                {/* row end */}

                                                                {/*
                                                                   <div className="basicform-row">
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                            <div className='basicfld'>
                                                                                <label className="basiclabel" htmlFor="">Mother Tongue</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                            <div className="basicfld">
                                                                                  <select className="form-select" name='language'
                                                                                      onChange={handleChange}
                                                                                      value={formData.language}
                                                                                      
                                                                                      >
                                                                                      <option value="">-- Select --</option>
                                                                                      {language && language.map((languageList, index)  => {

                                                                                          return (

                                                                                              <option value={languageList._id}>{languageList.name}</option>
                                                                                          )

                                                                                      })
                                                                                      }
                                                                                    </select>
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </div>
                                                                 row end */}


                                                                <div className="basicform-row">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <div className='basicfld'>
                                                                        <label className="basiclabel" htmlFor="">Religion</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="basicfld">
                                                                      <select className="form-select" name='religion'
                                                                            onChange={handleChange}
                                                                            value={formData.religion}
                                                                            
                                                                            >
                                                                            <option value="">-- Select --</option>
                                                                            {religion && religion.map((religionList, index)  => {

                                                                                return (

                                                                                    <option value={religionList._id}>{religionList.name}</option>
                                                                                )

                                                                            })
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                </div>


                                                                </div>
                                                    </div>
                                                    {/* row end */}

                                                    
                                                    {/* row end */}
                                              </div>
                                             

                      <div className="hed-sers pt-4">
                          <h4>Location &amp; Grew up in details</h4>
                      </div>
                      <hr />

                      <div className="col-lg-7 offset-lg-2">

                              <div className="basicform-row">
                                      <div className="row">
                                          <div className="col-md-4">
                                              <div className='basicfld'>
                                                  <label className="basiclabel" htmlFor="">Country</label>
                                              </div>
                                          </div>
                                          <div className="col-md-8">
                                              <div className="basicfld">
                                                <select className="form-select" name='country'
                                                  onChange={handleChange}
                                                  value={formData.country}
                                                  
                                                  >
                                                  <option value="">-- Select --</option>
                                                  {country && country.map((countryList, index)  => {

                                                      return (

                                                          <option value={countryList._id}>{countryList.name}</option>
                                                      )

                                                  })
                                                  }
                                                </select>
                                              </div>
                                          </div>


                                          </div>
                              </div>
                              {/* row end */}

                              <div className="basicform-row">
                                      <div className="row">
                                          <div className="col-md-4">
                                              <div className='basicfld'>
                                                  <label className="basiclabel" htmlFor="">State</label>
                                              </div>
                                          </div>
                                          <div className="col-md-8">
                                              <div className="basicfld">
                                                <select className="form-select" name='state'
                                                    onChange={handleChange}
                                                    value={formData.state}
                                                    
                                                    >
                                                    <option value="">-- Select --</option>
                                                    {state && state.map((stateList, index)  => {

                                                        return (

                                                            <option value={stateList._id}>{stateList.name}</option>
                                                        )

                                                    })
                                                    }
                                                  </select>
                                              </div>
                                          </div>


                                          </div>
                              </div>
                              {/* row end */}

                              <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">City of Birth</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                               <select className="form-select"
                                                  name='city'
                                                  onChange={handleChange}
                                                  value={formData.city}
                                                  
                                                  >
                                                  <option value="">-- Select --</option>
                                                  {city && city.map((cityList, index)  => {

                                                      return (

                                                          <option value={cityList._id}>{cityList.name}</option>
                                                      )

                                                  })
                                                  }
                                                </select>
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}

                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor=""></label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                              
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}




                      </div>

                      <div className="hed-ser pt-4">
                        <h4>Education &amp; Profession Details</h4>
                      </div>
                      <hr />

                      <div className="col-lg-7 offset-lg-2">
                           <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">Highest Degree</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                              <select className="form-select" name='education'
                                                    onChange={handleChange}
                                                    value={formData.education}
                                                    
                                                    >
                                                    <option value="">-- Select --</option>
                                                    {highest && highest.map((highestList, index)  => {

                                                        return (

                                                            <option value={highestList._id}>{highestList.name}</option>
                                                        )

                                                    })
                                                    }
                                              </select>
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}

                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">Occupation</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                                    <select className="form-select" name='occupation'
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
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}

                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">Organization Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                                <select className="form-select"
                                                    name='organization'
                                                      onChange={handleChange}
                                                      value={formData.organization}
                                                      
                                                      >
                                                      <option value="">-- Select --</option>
                                                      {organization && organization.map((organizationList, index)  => {

                                                          return (

                                                              <option value={organizationList._id}>{organizationList.organization_name}</option>
                                                          )

                                                      })
                                                      }
                                                    </select>
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}

                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">Annual Income</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
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
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}

                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor=""></label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                              
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}
                      </div>


                      <div className="hed-ser pt-4">
                        <h4>Lifestyle &amp; Appearance</h4>
                      </div><hr />

                      <div className="col-lg-7 offset-lg-2">
                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">Diet</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                              <select className="form-select"
                                                name='diet'
                                                  onChange={handleChange}
                                                  value={formData.diet}
                                                  
                                                  >
                                                  <option value="">-- Select --</option>
                                                  {diet && diet.map((dietList, index)  => {

                                                      return (

                                                          <option value={dietList._id}>{dietList.name}</option>
                                                      )

                                                  })
                                                  }
                                                </select>
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}

                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">Complexion</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                              <select className="form-select"
                                                name='complexion'
                                                  onChange={handleChange}
                                                  value={formData.complexion}
                                                  
                                                  >
                                                  <option value="">-- Select --</option>
                                                  {complexion && complexion.map((complexionList, index)  => {

                                                      return (

                                                          <option value={complexionList._id}>{complexionList.name}</option>
                                                      )

                                                  })
                                                  }
                                                </select>
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}

                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">Hobbies</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                              <select className="form-select"
                                                name='hobbies'
                                                  onChange={handleChange}
                                                  value={formData.hobbies}
                                                  
                                                  >
                                                  <option value="">-- Select --</option>
                                                  {hobbies && hobbies.map((hobbiesList, index)  => {

                                                      return (

                                                          <option value={hobbiesList._id}>{hobbiesList.name}</option>
                                                      )

                                                  })
                                                  }
                                                </select>
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}

                            <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor=""></label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                              
                                            </div>
                                        </div>


                                        </div>
                            </div>
                            {/* row end */}
                      </div>
                      
                      <div className="hed-ser">
                        <h4>Search using Keywords</h4>
                      </div>

                      <hr />

                      <div className="col-lg-7 offset-lg-2">
                        <div className="basicform-row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className='basicfld'>
                                                <label className="basiclabel" htmlFor="">Profile Managed by</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="basicfld">
                                              <select className="form-select"
                                                  name='managed_by'
                                                    onChange={handleChange}
                                                    value={formData.managed_by}
                                                    >
                                                    <option value="">-- Select --</option>
                                                    <option value="Open to All">Open to All</option>
                                                    <option value="Self">Self</option>
                                                    <option value="Parent / Guardian">Parent / Guardian</option>
                                                    <option value="Sibling / Friend / Other">Sibling / Friend / Other</option>
                                              </select>
                                            </div>
                                            
                                            
                                            <div className="ser-button d-flex justify-content-end">
                                                {/* <button className="ad-ser2">Reset</button> */}
                                                <button className="basi-ser2" type='submit' disabled={isLoading}>{isLoading ? 'Wait...' : 'Search Now'}
                                                </button>
                                             </div>



                                        </div>


                                        </div>
                            </div>
                            {/* row end */}


                      </div>









                      

            {/* end */}




      
      </form>
                  
    </>
  )
}

export default AdvanceSearch
