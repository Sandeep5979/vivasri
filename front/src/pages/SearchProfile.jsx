import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import AgeRange from '../components/profiePage/AgeRange'
import HeightRange from '../components/profiePage/HeightRange'
import MaritalStatus from '../components/profiePage/MaritalStatus'
import Religion from '../components/profiePage/Religion'
import Cast from '../components/profiePage/Cast'
import Country from '../components/profiePage/Country'
import State from '../components/profiePage/State'
import City from '../components/profiePage/City'
import Education from '../components/profiePage/Education'
import Profession from '../components/profiePage/Profession'
import ProfilePercentage from '../components/profiePage/ProfilePercentage'
import ManglikStatus from '../components/profiePage/ManglikStatus'
import AnnualIncome from '../components/profiePage/AnnualIncome'
import RightPanel from '../components/profiePage/RightPanel'
import { useSearchParams } from 'react-router-dom'
import { ageCalculate, decimalToFeetInches } from '../utils/utils'
import ProfieSkeleton from '../components/skeleton/ProfieSkeleton'



function SearchProfile() {
  
  const [searchParams] = useSearchParams();
  const [searchLooking, setSearchLooking] = useState(searchParams.get('looking'))
  const [searchReligion, setSearchReligion] = useState(searchParams.get('religion')?searchParams.get('religion').split(','):[])
  const [searchCaste, setSearchCaste] = useState(searchParams.get('caste')?searchParams.get('caste').split(','):[])
  const [searchMinAge, setSearchMinAge] = useState(searchParams.get('min'))
  const [searchMaxAge, setSearchMaxAge] = useState(searchParams.get('max'))
  const [searchMinHeight, setSearchMinHeight] = useState(searchParams.get('minHeight'))
  const [searchMaxHeight, setSearchMaxHeight] = useState(searchParams.get('maxHeight'))

  const [searchMarital_status, setSearchMarital_status] = useState([searchParams.get('marital_status')])
  const [searchGender, setSearchGender] = useState(searchParams.get('gender'))
  const [searchLanguage, setSearchLanguage] = useState(searchParams.get('language'))
  const [searchCountry, setSearchCountry] = useState(searchParams.get('country')?searchParams.get('country').split(','):[])
  const [searchState, setSearchState] = useState(searchParams.get('state')?searchParams.get('state').split(','):[])
  const [searchCity, setSearchCity] = useState(searchParams.get('city')?searchParams.get('city').split(','):[])
  const [searchEducation, setSearchEducation] = useState(searchParams.get('education')?searchParams.get('education').split(','):[])
  const [searchProfession, setSearchProfession] = useState(searchParams.get('profession')?searchParams.get('profession').split(','):[])
  const [searchAnnual_income, setSearchAnnual_income] = useState(searchParams.get('annual_income')?searchParams.get('annual_income').split(','):[])
  const [searchOccupation, setSearchOccupation] = useState(searchParams.get('occupation'))
  const [searchManglik, setSearchManglik] = useState(searchParams.get('manglik'))
  const [searchProfile_id, setSearchProfile_id] = useState(searchParams.get('profile_id'))
    
  const [searchOrganization, setSearchOrganization] = useState(searchParams.get('organization')?searchParams.get('organization').split(','):[])
  const [searchDiet, setSearchDiet] = useState(searchParams.get('diet')?searchParams.get('diet').split(','):[])
  const [searchComplexion, setSearchComplexion] = useState(searchParams.get('complexion')?searchParams.get('complexion').split(','):[])
  const [searchManaged_by, setSearchManaged_by] = useState(searchParams.get('managed_by')?searchParams.get('managed_by').split(','):[])
  const [searchHobbies, setSearchHobbies] = useState(searchParams.get('hobbies')?searchParams.get('hobbies').split(','):[])
  
  
  
  
  const [isLoader, setIsLoader] = useState(false)
  const [searchData, setSearchData] = useState([])
  const [isScroll, setIsScroll] = useState(false)


  const searchList = async () => {
      
    //console.log('okkkkkkkkkkk')
    setIsLoader(true)
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/search-list`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          looking:searchLooking,
          religion:searchReligion,
          caste:searchCaste,
          minAge:searchMinAge,
          maxAge:searchMaxAge,
          searchMinHeight:searchMinHeight,
          searchMaxHeight:searchMaxHeight,
          searchMarital_status:searchMarital_status,
          searchGender:searchGender,
          searchLanguage:searchLanguage,
          searchCountry:searchCountry,
          searchState:searchState,
          searchCity:searchCity,
          searchEducation:searchEducation,
          searchProfession:searchProfession,
          searchAnnual_income:searchAnnual_income,
          searchOccupation:searchOccupation,
          searchManglik:searchManglik,
          searchProfile_id:searchProfile_id,
          searchOrganization:searchOrganization,
          searchDiet:searchDiet,
          searchComplexion:searchComplexion,
          searchManaged_by:searchManaged_by,
          searchHobbies:searchHobbies

         }),
         
        
      });

      const data = await res.json();
      setIsLoader(false)
      setSearchData(data.data)
      setIsScroll(true)

  }

  

  useEffect(() => {
    
    searchList()
    

  }, [searchLooking, searchMarital_status, searchReligion, searchCaste, searchCountry, searchState, searchCity, searchEducation, searchProfession, searchManglik, searchAnnual_income, searchMinAge, searchMaxAge, searchMinHeight, searchMaxHeight])

  const maritalStatusButton = (value) => {
    //console.log(value)
    setSearchMarital_status(value)


  }
  const religionButton = (value, name) => {
    
    if(name === 'caste'){
      setSearchCaste(value)
    } else {
    setSearchReligion(value)
    }

  }
  const countryButton = (value, name) => {
    
    if(name === 'state'){
      setSearchState(value)
    } else if(name === 'city'){
      setSearchCity(value)
    } else {
    setSearchCountry(value)
    }

  }
  const educationButton = (value) => {
    
    
    setSearchEducation(value)
  

  }
  const professionButton = (value) => {
    
    
    setSearchProfession(value)
  

  }
  const manglikButton = (value) => {
    
    
    setSearchManglik(value)
  

  }
  const annualIncomeButton = (value) => {
    
    
    setSearchAnnual_income(value)
  

  }

  const minAgeChangeRange = (value) => {
    setSearchMinAge(value)

  }
  const maxAgeChangeRange = (value) => {
    setSearchMaxAge(value)

  }
  const minHeightChangeRange = (value) => {
    setSearchMinHeight(value)

  }
  const maxHeightChangeRange = (value) => {
    setSearchMaxHeight(value)

  }

  useEffect(() => {
        
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsScroll(false)
        
      }, [isScroll]);
  
  
  return (
    <>
     <HeaderPage />
    
    <>
  <section className="inrbnr">
    <div className="container-fluid">
      <div className="inrbnrContent">
        <div className="searchtxt">
          Search Partner For:{" "}
          <span>
            Age {searchMinAge} to {searchMaxAge}
          </span>
        </div>
        <a href="/#" className="filter">
          <img src="assets/img/icons/filter.png" alt="filter icon" /> Modify
          Search
        </a>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section className="astrologersList pt-30 pb-50">
    <div className="container-fluid">
      <div className="astroList">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div className="productSideBar">
              <div className="pinksidebar">
                <div className="leftbarhd">
                  <i className="fa-solid fa-filter" /> Refine Search
                </div>
                <div className="accordion" id="myAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Age
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body">
                        {/* start */}
                        <AgeRange changeShow={1} minAgeChangeRange={minAgeChangeRange} maxAgeChangeRange={maxAgeChangeRange} searchMinAge={searchMinAge} searchMaxAge={searchMaxAge} />
                        {/* end */}
                      </div>
                    </div>
                  </div>
                  {/* item end */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Height
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body">
                        {/* start */}
                        <HeightRange changeShow={1} minHeightChangeRange={minHeightChangeRange} maxHeightChangeRange={maxHeightChangeRange} searchMinHeight={searchMinHeight} searchMaxHeight={searchMaxHeight} />
                        {/* end */}
                      </div>
                    </div>
                  </div>
                  {/* item end */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo2"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Marital Status
                      </button>
                    </h2>
                    <div
                      id="collapseTwo2"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body">
                        {/* start */}
                        <MaritalStatus maritalStatusButton={maritalStatusButton} searchMarital_status={searchMarital_status} />
                        {/* end */}
                      </div>
                    </div>
                  </div>
                  {/* item end */}
                  <Religion religionButton={religionButton} searchReligion={searchReligion} />

                  {/* item end */}
                  <Country countryButton={countryButton} searchCountry={searchCountry} searchState={searchState} searchCity={searchCity} />
                  {/* item end */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo8"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Education
                      </button>
                    </h2>
                    <div
                      id="collapseTwo8"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body">
                        {/* start */}
                        <Education educationButton={educationButton} searchEducation={searchEducation} />
                        {/* end */}
                      </div>
                    </div>
                  </div>
                  {/* item end */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo9"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Profession
                      </button>
                    </h2>
                    <div
                      id="collapseTwo9"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body">
                        {/* start */}
                        <Profession professionButton={professionButton} searchProfession={searchProfession} />
                        {/* end */}
                      </div>
                    </div>
                  </div>
                  {/* item end */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo10"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Profile Percentage
                      </button>
                    </h2>
                    <div
                      id="collapseTwo10"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body">
                        {/* start */}
                        <ProfilePercentage />
                        {/* end */}
                      </div>
                    </div>
                  </div>
                  {/* item end */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo11"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Manglik Status
                      </button>
                    </h2>
                    <div
                      id="collapseTwo11"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body">
                        {/* start */}
                        <ManglikStatus manglikButton={manglikButton} searchManglik={searchManglik} />
                        {/* end */}
                      </div>
                    </div>
                  </div>
                  {/* item end */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo12"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Annual Income
                      </button>
                    </h2>
                    <div
                      id="collapseTwo12"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body">
                        {/* start */}
                        <AnnualIncome annualIncomeButton={annualIncomeButton} searchAnnual_income={searchAnnual_income} />
                        {/* end */}
                      </div>
                    </div>
                  </div>
                  {/* item end */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9">
            <div className="row">
              <div className="col-md-10 col-lg-9">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <h2 className="showingpro">Showing {searchData.length} Profiles</h2>
                  <div className="sortby">
                    <h6>Sort By</h6>
                    <select name="" className="form-select-new">
                      <option value="">Default Order</option>
                      <option value="">Newest First</option>
                      <option value="">Most Shortlisted</option>
                    </select>
                  </div>
                </div>
                
                {searchData && searchData.length > 0 ? (
                
                  searchData.map((searchList, index) => {

                  return (

                <div className="profilelist-box d-md-flex align-items-md-start justify-content-md-start mb-2">
                  <div className="profilelist-img">
                    <img src={searchList.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${searchList.photo}` : 'assets/img/no-image.jpg'} alt="" width={223} />
                  </div>
                  <div className="profilelist-det">
                    <h2>
                      {searchList.name}{" "}
                      <span>
                        <img src="assets/img/icons/verified.png" alt="" />
                      </span>
                    </h2>
                    { /* <h6 className="pinkhd">Profile ID : 600155</h6> */ }
                    <div className="profilelist-detwhite d-md-flex align-items-md-stretch justify-content-md-between">
                      <div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Age / Height</span>: {(searchList?.dob || searchList?.height)
  ? `${searchList?.dob ? ageCalculate(searchList.dob) : ""}${searchList?.dob && searchList?.height ? ", " : ""}${searchList?.height ? decimalToFeetInches(searchList.height) : ""}`
  : ""}
                          
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Religion</span>: {searchList.religion?.name}
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Occupation</span>: {searchList.occupation}
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Location</span>: {[searchList?.loc_state?.name, searchList?.loc_city?.name].filter(Boolean).join(", ")}
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Education</span>: {searchList.highest_degree?.name}
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Manglik Status</span>: {searchList.manglik}
                        </div>
                      </div>
                      <div>
                        <div className="profilelist-pinkbox">
                          <a href="/#" className="button expressint-btn mb-2">
                            Express Interest
                          </a>
                          <a
                            href="profile-details.html"
                            className="button viewpro-btn"
                          >
                            <img src="assets/img/icons/eye.png" alt="" /> View
                            Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  )


                })
              ):(
                !isLoader && 
                <div className="profilelist-box d-md-flex align-items-md-start justify-content-md-start mb-2">
                  No profile found
                </div>
                
              )
            
              }

              {isLoader && 
              
              <ProfieSkeleton /> 
              
              }
                
                



                


              </div>
              <div className="col-md-2 col-lg-3 ps-lg-0">
                <RightPanel />


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

export default SearchProfile
