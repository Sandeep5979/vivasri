import React, { useEffect, useRef, useState } from 'react'
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
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ageCalculate, decimalToFeetInches } from '../utils/utils'
import ProfieSkeleton from '../components/skeleton/ProfieSkeleton'
import HeaderUser from '../components/homePage/HeaderUser'
import { useSelector } from 'react-redux'
import Cookies from "js-cookie";
import CasteWiseSearchList from './CasteWiseSearchList'
import SearchProfileList from '../components/homePage/SearchProfileList'
import LoginPopup from '../components/homePage/LoginPopup'
import ConfirmPopup from '../components/homePage/ConfirmPopup'
import SuccessPopup from '../components/homePage/SuccessPopup'



function SearchProfile() {

  const location = useLocation();
  const navigate = useNavigate()
  //console.log(location.search)
  const [searchParams] = useSearchParams();
  const { caste } = useParams();
  // console.log('gggggg', searchParams.get('gender'))
  const { userDetailLogin } = useSelector((state) => state.auth);
  const [searchLooking, setSearchLooking] = useState(searchParams.get('looking'))
  const [searchReligion, setSearchReligion] = useState(searchParams.get('religion')?searchParams.get('religion').split(','):[])
  const [searchCaste, setSearchCaste] = useState(searchParams.get('caste')?searchParams.get('caste').split(','):[])
  const [searchMinAge, setSearchMinAge] = useState(searchParams.get('min'))
  const [searchMaxAge, setSearchMaxAge] = useState(searchParams.get('max'))
  const [searchMinHeight, setSearchMinHeight] = useState(searchParams.get('minHeight'))
  const [searchMaxHeight, setSearchMaxHeight] = useState(searchParams.get('maxHeight'))

  const [searchMarital_status, setSearchMarital_status] = useState([searchParams.get('marital_status')])
  const [searchGender, setSearchGender] = useState(searchParams.get('gender')?searchParams.get('gender'): '')
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
  const [formDataMatch, setFormDataMatch] = useState({})
  const [showPartner, setShowPartner] = useState(true)

  const [loginProps, setLoginProps] = useState(null);
  const modalBrideRef = useRef(null);
  const modalInstance = useRef(null);
  const [userBride, setUserBride] = useState([]) 
  const [userGrooms, setUserGrooms] = useState([])
  const [totalValue, setTotalValue] = useState(0)

  const modalConfirmRef = useRef(null)
  const modalInstanceConfirm = useRef(null);
  const modalSuccessRef = useRef(null)
  const modalInstanceSuccess = useRef(null);
  const [popupMessage, setPopupMessage] = useState("")
  const [userProfileId, setUserProfileId] = useState("")
  const [userProfileIndex, setUserProfileIndex] = useState("")
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState(1)
  const [hasMore, setHasMore] = useState(true);
  const [planDetailUser, setPlanDetailUser] = useState({})
  const [totalUserSentInterest, setTotalUserSentInterest] = useState(0)
  const [expiryDate, setExpiryDate] = useState(false)


  const searchList = async () => {
   

    //console.log('okkkkkkkkkkk')
    setSearchData([])
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
          searchHobbies:searchHobbies,
          member_id : userDetailLogin?._id,
          formDataMatch,
          brideGroom:caste,
          page:page,
          sortBy:sortBy
         }),
         
        
      });

      const data = await res.json();
      //console.log(data)
      setIsLoader(false)
      setSearchData(data.data)
      //setSearchData((prev) => [...prev, ...data.data]);
      setUserBride(data.usersBride)
      setUserGrooms(data.usersGrooms)
      if(caste){
        setTotalValue(data.usersBride?.length)
        setShowPartner(true)
      } else {
        setTotalValue(data.total)
      }
      
      setIsScroll(true)
      //console.log('total page', data.totalPages)
      setTotalPages(data.totalPages);
       // append, don’t overwrite
      //setHasMore(data.data.hasMore);

  }

  

  useEffect(() => {
    if(location.pathname === '/my-matches' || location.pathname === '/today-matches' || location.pathname === '/near-me'){
     // console.log('locatiooooooooooo', formDataMatch)

      const hasAnyValue = Object.values(formDataMatch).some(value => {
      if (Array.isArray(value)) return value.length > 0;
      if (value === null || value === undefined) return false;
      if (typeof value === 'string') return value.trim() !== '';
      return true;
    });

   // console.log('llllllllll', hasAnyValue)
    if(hasAnyValue){
      searchList()
    }
    } else {
     // console.log('nnnnnnn', caste, searchGender)
    searchList()
    }
    

  }, [sortBy, page, caste, formDataMatch, location.pathname,  searchLooking, searchMarital_status, searchReligion, searchCaste, searchCountry, searchState, searchCity, searchEducation, searchProfession, searchManglik, searchAnnual_income, searchMinAge, searchMaxAge, searchMinHeight, searchMaxHeight])

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
  
  const windowReload = () => {
    window.location.reload();
  } 

  useEffect(() => {
         // Initialize Bootstrap modal once (after first render) loginModal
         const modalEl = document.getElementById("loginModal");
         if (modalEl) {
           modalInstance.current = new window.bootstrap.Modal(modalEl);
         }
       }, []);

       useEffect(() => {
         // Initialize Bootstrap modal once (after first render)
         const modalConfirmEl = document.getElementById("confirmPopupId");
         if (modalConfirmEl) {
           modalInstanceConfirm.current = new window.bootstrap.Modal(modalConfirmEl);
         }

         const modalSuccessEl = document.getElementById("successPopup");
         if (modalSuccessEl) {
           modalInstanceSuccess.current = new window.bootstrap.Modal(modalSuccessEl);
         }

       }, []);
  
  // send interest

  const sendInterest = (id, index) => {
     
    setLoginProps('reload');
    if(userDetailLogin?._id){
      /* setUserProfileId(id)
      setUserProfileIndex(index)
      setPopupMessage('are you sure you want to express interest?')
      modalInstanceConfirm.current?.show();
      */  
     if(planDetailUser?.plan_id?.name === 'Gold' && totalUserSentInterest >= 50){
      setPopupMessage(`You've reached the limit of 50 member interests. Kindly upgrade your plan to continue.`)
      modalInstanceConfirm.current?.show();

     } else if(expiryDate && (planDetailUser?.plan_id?.name === 'Gold' || planDetailUser?.plan_id?.name === 'Premium')){
      setPopupMessage(`Your membership plan has expired. Kindly upgrade your plan to continue.`)
      modalInstanceConfirm.current?.show();
      

     } else {
      interest(id, userDetailLogin?._id, index);
      }
        } else {
         
       modalInstance.current?.show();
           
       return;
   
         }
      
      
  }
  const showPopUpButton = (e, url) => {
     e.preventDefault()
    setLoginProps(url);
    if(userDetailLogin?._id){

      navigate(url) 
       
        } else {
         
       modalInstance.current?.show();
           
       return;
   
         }
      
      
  }

  const yesNoButton = (value) => {
    
    //console.log('confirm', value)
    if(value === 'Yes'){
    navigate("/membership-plan")
    }
    modalInstanceConfirm.current?.hide();
  }

  // send interest API
   const interest = async (partner_id, member_id, index) => {
          try {
            const response = await fetch(
              `${process.env.REACT_APP_BASE_URL_API}/api/user/sent-interest`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  partner_id: partner_id,
                  member_id : member_id 
                }),
              }
            );

            const data = await response.json();

            if (response.ok) {
              // console.log("Interest sent successfully:", data);
              modalInstanceSuccess.current?.show();
              setTimeout(() => {
                modalInstanceSuccess.current?.hide();
              }, 2000)
              setSearchData((prevData) => {
                      const updated = [...prevData];
                      updated[index] = {
                        ...updated[index],
                        interest_sent: true,
                      };
                      return updated;
                    });

            } else {
              console.error("Failed to send interest:", data.message || data);
            }
          } catch (error) {
            console.error("Error while sending interest:", error);
          }
        }

   const fetchUserDetailMatch = async (userId) => {
           
           const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail-all/${userId}`, {
               method: "GET",
               headers: { "Content-Type": "application/json" },
               });
       
             const data = await res.json();
             //console.log(data)
             if(data.status){
               
                //console.log('interest', data.data[0].interest_user)
              const isExpired = new Date(data.data[0].plan_detail?.expiry_date) < new Date();          
                
              setExpiryDate(isExpired)
              setTotalUserSentInterest(data.data[0].interest_user)
              setPlanDetailUser(data.data[0].plan_detail)
               
             if(location.pathname === '/my-matches' || location.pathname === '/today-matches' || location.pathname === '/near-me'){    
               
               
             setFormDataMatch({
       
               
             partner_age_from:data.data[0].partner_age_from,
             partner_age_to:data.data[0].partner_age_to,
             partner_height_from:data.data[0].partner_height_from,
             partner_height_to:data.data[0].partner_height_to,
             partner_marital_status:data.data[0].partner_marital_status, 
             partner_religion:data.data[0].partner_religion,
             partner_caste:data.data[0].partner_caste, 
             partner_mother_tongue:data.data[0].partner_mother_tongue,
             partner_education:data.data[0].partner_education,
             partner_occupation:data.data[0].partner_occupation, 
             partner_diet:data.data[0].partner_diet,
             partner_country:data.data[0].partner_country,
             partner_state:data.data[0].partner_state,
             partner_city:data.data[0].partner_city,
             gender:data.data[0].gender,
             city:data.data[0].loc_city?._id,
             today:location.pathname === '/today-matches' ? 1:null,
             near_me:location.pathname === '/near-me' ? 1:null 

             })

             
     
            }
       
           } else {
     
           }
       
         }
       
       
         useEffect(() => {
             
         if(userDetailLogin?._id){
         fetchUserDetailMatch(userDetailLogin?._id)
         }
   
       }, [userDetailLogin, location.pathname])


       
       
           const showPartnerButton = (value, val) => {
             if(value === 1){
               setShowPartner(false)
             } else {
               setShowPartner(true)
             }
             setTotalValue(val)
       
           }

      const shortByOrder = (e) => {

        
        setSortBy(e.target.value)
        //console.log(e.target.value)

      }
      
  /* const fetchNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      hasMore
    ) {
      setPage((prev) => prev + 1);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [hasMore]);
*/

  
  return (
    <>
     
    { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

    <LoginPopup ref={modalBrideRef} url={loginProps} />
    <ConfirmPopup ref={modalConfirmRef} message={popupMessage} yesNoButton={yesNoButton} />
    <SuccessPopup ref={modalSuccessRef} message="Your interest has been sent!" />
    
    <>

      



  <section className="inrbnr">
    <div className="container-fluid">
      <div className="inrbnrContent">
        <div className="searchtxt">
          Search Partner For:{" "}
          <span>
           {(searchMinAge && searchMaxAge) ? `Age ${searchMinAge} to ${searchMaxAge}`
           : null
           }
          </span>
        </div>
        <Link to="#" className="filter">
          <img src="assets/img/icons/filter.png" alt="filter icon" /> Modify
          Search
        </Link>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section className="astrologersList pt-30 pb-50">
    <div className="container-fluid">
      <div className="astroList">
        <div className="row">
          <div className="col-md-3 col-lg-3 pe-lg-5">
            <div className="productSideBar">
              <div className="filterbar">
                <div className="leftbarhd filterhd">
                  <img src='assets/img/filter-icon.png' alt='' /> Refine Search

                  <Link to="#" onClick={windowReload}>Clear All</Link>
                </div>
                <div className="accordion filteraccordion" id="myAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <img src='assets/img/age.png' alt='' /> Age
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
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
                        <img src='assets/img/height.png' alt='' /> Height
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
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
                        <img src='assets/img/marital-status.png' alt='' /> Marital Status
                      </button>
                    </h2>
                    <div
                      id="collapseTwo2"
                      className="accordion-collapse collapse"
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
                        <img src='assets/img/manglik.png' alt='' /> Manglik Status
                      </button>
                    </h2>
                    <div
                      id="collapseTwo11"
                      className="accordion-collapse collapse"
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
                        <img src='assets/img/education.png' alt='' /> Education
                      </button>
                    </h2>
                    <div
                      id="collapseTwo8"
                      className="accordion-collapse collapse"
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
                        <img src='assets/img/profession.png' alt='' /> Profession
                      </button>
                    </h2>
                    <div
                      id="collapseTwo9"
                      className="accordion-collapse collapse"
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
                        data-bs-target="#collapseTwo12"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <img src='assets/img/income.png' alt='' /> Annual Income
                      </button>
                    </h2>
                    <div
                      id="collapseTwo12"
                      className="accordion-collapse collapse"
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
                        <img src='assets/img/user-alt.png' alt='' /> Profile Percentage
                      </button>
                    </h2>
                    <div
                      id="collapseTwo10"
                      className="accordion-collapse collapse"
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
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-lg-9 ps-lg-0 lg-rev">
            <div className="row">
              <div className={`${userDetailLogin?._id ? 'col-md-10 col-lg-9':'col-md-12 col-lg-12'}`}>
                <div className="d-lg-flex align-items-center justify-content-between">
                  <h2 className="showingpro">Showing {totalValue} Profiles</h2>
                  <div className="sortby">
                    <h6>Sort By</h6>
                    <select name="sort" onChange={shortByOrder} value={sortBy}  className="form-select-new">
                      <option value="1">Default Order</option>
                      <option value="new">Newest First</option>
                      { /* <option value="">Most Shortlisted</option> */ }
                    </select>
                  </div>
                </div>

                {caste ? 
                
                <>
                     <div className="astroDetailsWrap detailbdrcont">
                  <div className="navWrapper">
                    <ul className="navcontaienr gap-2 d-flex flex-wrap justify-content-center">
                      <li>
                        {" "}
                        <Link className={`navibtn ${showPartner ? 'active':''}`} data-target="#detpro" to="#" onClick={() => showPartnerButton(0, userBride?.length)}>
                          {" "}
                          <img src="assets/img/femalee.png" alt="" style={{width:'25px'}} /> {caste} Brides{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link className={`navibtn ${showPartner ? '':'active'}`} data-target="#parterpre" to="#" onClick={() => showPartnerButton(1, userGrooms?.length)}>
                          {" "}
                          <img src="assets/img/malee.png" alt="" style={{width:'25px'}} /> {caste} Grooms{" "}
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                
                
                  {showPartner && 
                  <div className="sectionTop tabContentBox" id="detpro">
                    
                    <SearchProfileList searchData={userBride} sendInterest={sendInterest} showPopUpButton={showPopUpButton} showInterest={false} planDetailUser={planDetailUser} totalUserSentInterest={totalUserSentInterest} expiryDate={expiryDate} />
                
                  </div> 
                  }
                
                  {!showPartner && 
                  <div className="sectionTop tabContentBox" id="parterpre">

                     <SearchProfileList searchData={userGrooms} sendInterest={sendInterest} showPopUpButton={showPopUpButton} showInterest={false} planDetailUser={planDetailUser} totalUserSentInterest={totalUserSentInterest} expiryDate={expiryDate} />
                    
                   </div>
                  }
                
                
                
                  </div>
                    </>
                
                
                :
                
                <SearchProfileList searchData={searchData} sendInterest={sendInterest} showPopUpButton={showPopUpButton} showInterest={true} planDetailUser={planDetailUser} totalUserSentInterest={totalUserSentInterest} expiryDate={expiryDate} />
            
              
              }


            {isLoader && 
              
              <ProfieSkeleton /> 
              
              }

           { /*   <div className="flex gap-2 mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "font-bold" : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
                
      */ }                



                


              </div>
              {userDetailLogin?._id &&
              <div className="col-md-2 col-lg-3 ps-lg-0">
                <RightPanel />


              </div>
              }
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
