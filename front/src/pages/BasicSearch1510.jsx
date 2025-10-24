import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AgeRange from '../components/profiePage/AgeRange';
import HeightRange from '../components/profiePage/HeightRange';
import AdvanceSearch from './AdvanceSearch';

function BasicSearch() {

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
    const [highest, setHighest] = useState([])
    const [language, setLanguage] = useState([])
    const [religion, setReligion] = useState([])
    const [occupation, setOccupation] = useState([])
    

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

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/occupation-user`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setOccupation(data.data)
      }
}


useEffect(() => {
fetchMaritalStatusList()
fetchCountry()
fetchEducation()
fetchLanguage()
fetchReligion()
fetchOccupation()

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


}
    //console.log(url)
    //navigate(url)
    setIsLoading(false)
    document.location.href=url


    }


  return (
    <>
    <HeaderPage />
    <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent inrbnrContentss">
        <h1>Look for Partner </h1>
        <ul className="inrbrnNav">
          <ul className="nav nav-tabss nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-links active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Basic
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-links"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Advanced
              </button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
    <div className="register-sec ">
      <div className="container-fluid con-flu-padd  ">
        <div className="container-fluid mt-5  ">
          <div className="row">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="col-12">
                  <div className="ser-con-basic">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="assets/img/search-img.png" alt="" />
                      </div>
                      <div className="col-md-8 pad-ser-right">
                        <form onSubmit={handleSubmit}>
                        <div className="bgser-basic">
                          <div className="row">
                            <div className="col-12">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Search Profile Id</h5>
                                </div>
                                <div className="inp-bas-sers">
                                  <input
                                    type="text"
                                    placeholder="Search Profile Id"
                                    name="profile_id"
                                    onChange={handleChange}
                                    value={formData.profile_id}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12 ">
                              <div className="border-line-basi "></div>
                              <div className="or-bsic-ser text-center ">
                                <p>or</p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Search</h5>
                                </div>
                                <div className="inp-bas-ser">
                                  <div className="radio-wrapper-basic-20">
                                    <label htmlFor="example-20-10">
                                      <input
                                        id="example-20-10"
                                        type="radio"
                                        name="gender"
                                        onChange={handleChange}
                                        value='Bride'
                                        checked={formData.gender === "Bride"}
                                      />
                                      <span className="name">Bride</span>
                                    </label>
                                    <label htmlFor="example-20-27">
                                      <input
                                        id="example-20-27"
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
                            <div className="col-md-6 mt-1">
                              <div className="items-ser">
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="headingOne"
                                  >&nbsp;</h2>
                                  <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#myAccordion"
                                  >
                                    <div className="accordion-body">
                                      {/* start */}
                                      <AgeRange name="Age" changeShow={0} minAgeChange={minAgeChange} maxAgeChange={maxAgeChange} />
                                      {/* end */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Marital Status</h5>
                                </div>
                                <div className="inp-bas-sers">
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
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="accordion-item">
                                  <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#myAccordion"
                                  >
                                    <div className="accordion-body">
                                      {/* start */}
                                      <HeightRange name="Height" changeShow={0} minHeightChange={minHeightChange} maxHeightChange={maxHeightChange} />
                                      {/* end */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Mother Tongue</h5>
                                </div>
                                <div className="inp-bas-sers">
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
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Religion</h5>
                                </div>
                                <div className="inp-bas-sers">
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
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Country</h5>
                                </div>
                                <div className="inp-bas-sers">
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
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>State </h5>
                                </div>
                                <div className="inp-bas-sers">
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
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Education </h5>
                                </div>
                                <div className="inp-bas-sers">
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
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Annual Income </h5>
                                </div>
                                <div className="inp-bas-sers">
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
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Occupation </h5>
                                </div>
                                <div className="inp-bas-sers">
                                  <select className="form-select" name='occupation'
                                    onChange={handleChange}
                                    value={formData.occupation}
                                    
                                    >
                                    <option value="">-- Select --</option>
                                    {occupation && occupation.map((occupationList, index)  => {

                                        return (

                                            <option value={occupationList.occupation}>{occupationList.occupation}</option>
                                        )

                                    })
                                    }
                                    </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="items-ser">
                                <div className="labels">
                                  <h5>Manglik Status </h5>
                                </div>
                                <div className="inp-bas-sers">
                                  <select className="form-select"
                                  name='manglik'
                                    onChange={handleChange}
                                    value={formData.manglik}
                                  >
                                    <option value="">--Select--</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-6" />
                            <div className="col-6">
                              <div className="ser-button">
                                <button className="basi-ser" type='submit' disabled={isLoading}>{isLoading ? 'Wait...' : 'Search Now'}</button>
                                <button className="ad-ser">
                                  Advanced Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                          </form>        

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                
                 <AdvanceSearch />                   



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

export default BasicSearch
