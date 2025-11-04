import React, { useEffect, useRef, useState } from 'react'
import NumberStats from '../components/homePage/NumberStats'
import MinAge from '../components/homePage/MinAge'
import GroomList from '../components/homePage/GroomList'
import BrideList from '../components/homePage/BrideList'
import LatestVideo from '../components/homePage/LatestVideo'
import LatestBride from '../components/homePage/LatestBride'
import BannerHome from '../components/homePage/BannerHome'
import FaqList from '../components/homePage/FaqList'
import { Link, useNavigate } from 'react-router-dom'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import HeaderUser from '../components/homePage/HeaderUser'
import { useSelector } from 'react-redux'
import LoginPopup from '../components/homePage/LoginPopup'

function HomePage() {

  const { userDetailLogin } = useSelector((state) => state.auth);

   const [searchLookingFor, setSearchLookingFor] = useState("Bride")
   const [searchReligion, setSearchReligion] = useState("")
   const [searchMinAge, setSearchMinAge] = useState("")
   const [searchMaxAge, setSearchMaxAge] = useState("")
   const [lookingFor, setLookingFor] = useState([])
   const [formData, setFormData] = useState({});
   const [isLoading, setIsLoading] = useState(false)
   const [religion, setReligion] = useState([])
   const navigate = useNavigate()

   /* function searchLookingButton(value){
   // console.log(value)
   // setSearchLookingFor(value?.lookingfor)

   }
   */

   
   const [loginProps, setLoginProps] = useState(null);
   const modalBrideRef = useRef(null);
    const modalInstance = useRef(null);

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

   function handleChange(e){
   // console.log(value)
   const { value } = e.target;
   setSearchLookingFor(value)

   }
   function handleChangeReligion(e){
   // console.log(value)
   const { value } = e.target;
   setSearchReligion(value)

   }

   function searchReligionButton(value){
    
    setSearchReligion(value)

   }
   function searchMinAgeButton(value){
    
    setSearchMinAge(value)
    setSearchMaxAge("")

   }
   function searchMaxAgeButton(value){
    
    setSearchMaxAge(value)

   }



   const searchSubmitButton = (e) => {
    e.preventDefault();
   //console.log(searchLookingFor, searchReligion, searchMinAge, searchMaxAge)
   let url = '/search-profile?' 
   if(searchLookingFor){
    url +='&gender='+searchLookingFor

    }
    if(searchReligion){
    url +='&religion='+searchReligion

    }
    if(searchMinAge){
    url +='&min='+searchMinAge

    }
    if(searchMaxAge){
    url +='&max='+searchMaxAge

    }
    //console.log(url)
    //navigate(url)
    document.location.href=url


   }


   useEffect(() => {
    if(userDetailLogin?._id){
      document.location.href=`/dashboard`
    }

   }, [userDetailLogin])


   useEffect(() => {
      fetchCreateProfileFor()

   }, [])


   const handleChangeHome = (e) => {
    let { name, value } = e.target;
    
    if(name === 'mobile'){
      value = value.replace(/[^0-9]/g, "");
      if (value && value.length > 10) {
          return false; 
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));



   }


   const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.mobile){
    setIsLoading(true)
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/home-registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
        navigate(`/registration/${data.user?._id}`)

      }
    } else {
      navigate('/registration')
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
   
   useEffect(() => {
   fetchReligion()
   
   }, [])

   useEffect(() => {
       // Initialize Bootstrap modal once (after first render)
       const modalEl = document.getElementById("loginModal");
       if (modalEl) {
         modalInstance.current = new window.bootstrap.Modal(modalEl);
       }
     }, []);
   
     
   
      const loginDetailPopup = (e, url) => {
       e.preventDefault();
       setLoginProps(url); 
       if(userDetailLogin?._id){
         document.location.href=url;
       } else {
         
       modalInstance.current?.show();
           
       return;
   
         }
   
      }
   

  return (
    
    <>
    { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }
  {/* start of hero */}
  
  <LoginPopup ref={modalBrideRef} url={loginProps} />
  
  <section className="bannerSection wow animate__fadeIn" data-wow-delay="0.2s">
    <div className="bannerWrapperSection">
      <div className="hero-slider hero-style">
        
            
            <BannerHome />
          
          
        
      </div>
    </div>
  </section>
  {/* Section End */}
  <div className="homebnr-form">
    <form onSubmit={handleSubmit}>
    <div className="site-width">
      <h2 className="text-white text-center">
        Find Your Perfect Search for lifetime
      </h2>
      <h4 className="text-white text-center">
        5 Times higher success rates | Assured meetings | Top consultants
      </h4>
      <div className="homeformouter">
        <div className="row d-lg-flex justify-content-lg-center">
          <div className="col-lg-9">
            <div className="homeform">
              <div className="row">
                <div class="col-lg-3 col-md-3">
                  <div className="hormformrow">
                     <label for="" class="d-block d-lg-none text-white">Create Profile For</label>
                     {/* <RelationSelect /> */}

                     <div className="hormformrow">
                          <select className="form-select" name='create_profile' 
                            onChange={handleChangeHome}
                            value={formData.create_profile}
                            
                        >
                          <option value="">Select</option>
                          {lookingFor && lookingFor.map((profileList, index)  => {

                            return (

                                <option value={profileList._id}>{profileList.name}</option>
                            )

                          })
                        }
                          </select>
                        </div>      
                  </div>

                </div>
                <div class="col-6 col-lg-3 col-md-3">
                  <div className="hormformrow">
                    <label for="" class="d-block d-lg-none text-white">Name</label>
                    <input
                      type="text"
                      className="form-control border-none"
                      placeholder="Name"
                      name='name'
                      onChange={handleChangeHome}
                      value={formData.name}
                    />
                  </div>
                </div>
                <div class="col-6 col-lg-3 col-md-3">
                  <div className="hormformrow">
                    <label for="" class="d-block d-lg-none text-white">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control border-none"
                      placeholder="Mobile Number"
                      name='mobile'
                      onChange={handleChangeHome}
                      value={formData.mobile}
                      maxLength={10} 
                      min={0}
                    />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <div className="hormformrow">
                    <button
                    type='submit'
                      className="button homeform-btn"
                    >
                      Register Free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
  <section className="afterbnr-section pt-50 pb-50">
    <div className="site-width">
      <div className="text-center pagehd">
        <h2>Find Your Right Search Here</h2>
        <h6>Most Trusted matrimony brand in the world.</h6>
        <img src="assets/img/border/hdbdr.png" alt="" />
      </div>
      <div className="homesearch">
        <div className="row">
          <div className="col-lg-3">

          <div className="hormformrow">
          <label htmlFor="">I’m looking for</label>
        <select className="form-select"
          name="lookingfor"
          onChange={handleChange}
          value={searchLookingFor} 
          
        >
          
              <option value="Bride">Bride</option>
              <option value="Groom">Groom</option>

          </select>
          </div>

          </div>
          <div className="col-lg-3">
            <div className="hormformrow">
              <div className="row">
                <div className="col-6 agefield">
                  <label htmlFor="">Age</label>
                  {/* Dropdown 1 */}
                  <MinAge searchMinAgeButton={searchMinAgeButton} minValue={1} placeholder="Min Age" />
                </div>
                <div className="col-6 agefield">
                  <label htmlFor="">To</label>
                  {/* Dropdown 2 */}
                  <MinAge searchMaxAgeButton={searchMaxAgeButton} minValue={2} placeholder="Max Age" min={searchMinAge || 18} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">

            <div className="hormformrow">
              <label htmlFor="">Religion</label>
            <select className="form-select"
              name="lookingfor"
              onChange={handleChangeReligion}
              value={searchReligion} 
              
            >
              <option value="">Select</option>
                  {religion && religion.map((religionList, index)  => {

                            return (

                                <option key={index} value={religionList._id}>{religionList.name}</option>
                            )

                          })
                        }

              </select>
              </div>

          </div>
          <div className="col-lg-3">
            <div className="hormformrow mt-lg-4 pt-lg-1">
              <Link to="#" onClick={searchSubmitButton} className="button homeform-btn">
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="px-lg-4">
            <div className="text-center pagehd mt-5 mb-4">
              <h2>Grooms</h2>
            </div>
            {/* groom carousal start */}
            <GroomList loginDetailPopup={loginDetailPopup} />
            {/* groom carousal end */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="px-lg-4">
            <div className="text-center pagehd mt-5 mb-4">
              <h2>Brides</h2>
            </div>
            {/* bride carousal start */}
            <BrideList loginDetailPopup={loginDetailPopup} />
            {/* bride carousal end */}
          </div>
        </div>
      </div>
    </div>
    {/* site width end */}
  </section>

  <NumberStats />
  
  
  {/* services */}
  <section className="howitwork pb-50">
    <div className="site-width">
      <div className="text-center pagehd mt-5 mb-4">
        <h2>How It Work?</h2>
      </div>
      <div className="serviceWrap">
        <div className="row">
          <div className="col-md-4">
            <div className="serviceCard">
              <div className="serviceContent text-center">
                <img src="assets/img/icons/howit-icon1.png" alt="img" />
                <h4>Signup</h4>
                <p>Register for free &amp; put up your matrimony</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serviceCard">
              <div className="serviceContent text-center">
                <img src="assets/img/icons/howit-icon2.png" alt="img" />
                <h4>Connect</h4>
                <p>Select &amp; connect with Matches you like</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serviceCard">
              <div className="serviceContent text-center">
                <img src="assets/img/icons/howit-icon3.png" alt="img" />
                <h4>Interact</h4>
                <p>Become a Premium Member &amp; start a conversation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Why Vivashri */}
  <section className="testoupter pt-50 pb-100">
    <div className="site-width">
      <div className="text-center pagehd mt-1 mb-0">
        <h2 className="text-white">
          Testimonials &amp; Success Stories For Trust.
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="text-center pagehd testmonialslidehd mt-5 mb-4">
            <h2 className="text-white">Watch Our Latest Video</h2>
          </div>
          {/* groom carousal start */}
          
          <LatestVideo />
          
          {/* groom carousal end */}
        </div>
        <div className="col-lg-6">
          <div className="px-lg-4">
            <div className="text-center pagehd testmonialslidehd mt-5 mb-4">
              <h2 className="text-white">Brides</h2>
            </div>
            {/* bride carousal start */}
            <LatestBride />
            {/* bride carousal end */}
          </div>
        </div>
      </div>
    </div>
  </section>


  {/* Our Astrologers */}
  <section className="ourAstrologers pt-70 pb-70">
    <div className="site-width">
      <div className="row d-lg-flex align-items-lg-center justify-content-lg-center">
        <div className="col-lg-4">
          <img src="assets/img/welcome-img.jpg" alt="" />
        </div>
        <div className="col-lg-8 ps-lg-5 pe-lg-5">
          <div className="welcomehd mt-1 mb-0">
            <h2>Welcome To</h2>
            <h6>Vivashri</h6>
          </div>
          <div className="welcomepara">
            <p className="mb-5 d-block">
              “Where meaningful connections turn into lifelong relationships. We
              believe every journey to love begins with trust, respect, and
              understanding. Our platform is designed to bring together
              like-minded individuals and families who share common values,
              traditions, and aspirations. At Perfect Match, it’s not just about
              finding a partner—it’s about discovering your true companion for
              life”.
            </p>
            <a
              href="/#"
              className="button homeform-btn d-inline px-4 py-3 mt-5"
            >
              About Us <i className="fa-solid fa-arrow-right-long" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* New Products */}
  
  
 <section className="mobileappcont pt-50 pb-50 ">
  <div className="site-width">
    <div className="row">
      <div className="col-lg-9 col-md-9">
        <div className="col-lg-10">
          <div className="d-flex d-fl-col flex-direction-xs-column align-items-lg-center justify-content-lg-center">
            <div className="qrcode">
              <img src="assets/img/qrcode.jpg" alt="" />
            </div>
            <div className="qrtext">
              <h4 className="text-white mb-3">
                Download our "Vivashri" Mobile Application from Google Play
                &amp; Apple Store where you can also use Chat Feature.
              </h4>
              <div className="d-flex">
                <Link to="#"
                  title="Download App On Google Play Store"
                  className="me-lg-2"
                >
                  <img src="assets/img/google-play.png" alt="" />
                </Link>
                <Link to="#" title="Download App On Apple Play Store">
                  <img src="assets/img/apple-play.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="mobileapp">
          <img src="assets/img/mobileapp.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>





  <section className="faqsSection pt-0 pb-50">
    
    <FaqList />

  </section>
  <section className="readysection pt-50 pb-50">
    <div className="site-width">
      <div className="d-md-flex align-items-md-center justify-content-md-between">
        <div>
          <h2>Ready to Find Your Perfect Match?</h2>
          <p>
            Join thousands of happy couples who found love through Vivashri.
          </p>
        </div>
        <a href="/#" className="button d-inline px-5 py-3">
          Register Now - It’s Free{" "}
        </a>
      </div>
    </div>
  </section>


   <FooterPage /> 


  
</>

    
  )
}

export default HomePage
