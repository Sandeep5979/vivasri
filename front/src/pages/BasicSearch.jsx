import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AgeRange from '../components/profiePage/AgeRange';
import HeightRange from '../components/profiePage/HeightRange';
import AdvanceSearch from './AdvanceSearch';
import HeaderUser from '../components/homePage/HeaderUser';

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
    const [height, setHeight] = useState([])
    const [tabShow, setTabShow] = useState(true)
    

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

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/occupation`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setOccupation(data.data)
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


useEffect(() => {
fetchMaritalStatusList()
fetchCountry()
fetchEducation()
fetchLanguage()
fetchReligion()
fetchOccupation()
fetchHeight()

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

    useEffect(() => {
          //console.log(location.pathname)
          if(location.pathname === '/advance-search'){
            setTabShow(false)
          } else {
            setTabShow(true)
          } 
        }, [location])


  return (
    <>
    { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }
    <>
  <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent inrbnrContentss">
        {/* <h1>Look for Partner</h1> */}
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
    <div className="register-sec">
      <div className="container-fluid con-flu-padd">
        <div className="col-lg-10 offset-lg-1 pt-2">
          <ul
            className="nav nav-tabs nav-tabs basicsrc-tabbing"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${tabShow ? 'active':''}`}
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <img src="assets/img/search.png" alt="Search Icon" /> Basic
                Search
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${tabShow ? '':'active'}`}
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <img src="assets/img/setting.png" alt="Setting Icon" /> Advanced
                Search
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className={`tab-pane fade ${tabShow ? 'show active':''}`}
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
             <form onSubmit={handleSubmit}>
                                        <div className="bgser-basic">                      


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

                                                    {/* caste here */}

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
                                                                        <label className="basiclabel" htmlFor="">Education</label>
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
                                                                    <div className="ser-button">
                                                                        <button className="basi-ser" type='submit' disabled={isLoading}>{isLoading ? 'Wait...' : 'Search Now'}</button>
                                                                        
                                                                    </div>
                                                                </div>


                                                                </div>
                                                    </div>
                                                    {/* row end */}




                                                    






                                            </div>
                                            


                                            </div>
                                            
                                            
                                            
                                            
                                            
                                            <div className="col-6" />
                                            
                                          </form>
              
            </div>
            <div
              className={`tab-pane fade ${tabShow ? '':'show active'}`}
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              
              
              <div className="bgser-basic">
                

                                   <AdvanceSearch />                                             

                     {/* end    */}
                
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  </section>
</>

</>

<FooterPage /> 
    
    </>
  )
}

export default BasicSearch
