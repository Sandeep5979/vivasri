import React, { useEffect, useRef, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage';
import FooterPage from '../components/homePage/FooterPage'
import { useSelector } from 'react-redux';
import { ageCalculate, decimaltocm, decimalToFeetInches, decimaltoWithoutcm, isIncomeRangeCompatible, maskEmail, maskMobileNumber } from '../utils/utils';
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeaderUser from '../components/homePage/HeaderUser';
import ProfileDetailImage from '../components/profiePage/ProfileDetailImage';
import SuccessPopup from '../components/homePage/SuccessPopup';
import ConfirmPopup from '../components/homePage/ConfirmPopup';


function ProfileDetail() {

  const { profileId } = useParams();
  const { userDetailLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate()

const [formData, setFormData] = useState({})
const [formDataPartner, setFormDataPartner] = useState({})
const [formDataMatch, setFormDataMatch] = useState({})
const [isScroll, setIsScroll] = useState(false)
const [showPartner, setShowPartner] = useState(true)
const [copied, setCopied] = useState(false);
const [partnerMaritalStatus, setPartnerMaritalStatus] = useState([])
const [totalMatchValue, setTotalMatchValue] = useState("")
const modalSuccessRef = useRef(null)
const modalInstanceSuccess = useRef(null);
const [planDetailUser, setPlanDetailUser] = useState(0)
const modalConfirmRef = useRef(null)
const modalInstanceConfirm = useRef(null);
const [popupMessage, setPopupMessage] = useState("")
const [totalUserSentInterest, setTotalUserSentInterest] = useState(0)
const [totalUserView, setTotalUserView] = useState(0)


  const fetchUserDetail = async (userId) => {
      
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail-all/${userId}?member_id=${userDetailLogin?._id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          
          });
  
        const data = await res.json();
        //console.log(data)
        if(data.status){
          
  
          const dob = new Date(data.data[0].dob);
          let ampm = "AM";
          let hour = dob.getHours();
          if (hour >= 12) {
            ampm = "PM";
            if (hour > 12) hour -= 12;
          } else if (hour === 0) {
            hour = 12; 
          }
  
          
      // console.log(data.data[0].hobbies)

                    let profilePhoto;
                    if(data.data[0].profile_photo === 1){
                      profilePhoto = data.data[0].photo
                    } else if(data.data[0].profile_photo === 2){
                      profilePhoto = data.data[0].photo1
                    } else if(data.data[0].profile_photo === 3){
                      profilePhoto = data.data[0].photo2
                    } else if(data.data[0].profile_photo === 4){
                      profilePhoto = data.data[0].photo3
                    } else if(data.data[0].profile_photo === 5){
                      profilePhoto = data.data[0].photo4
                    } else {
                      profilePhoto = data.data[0].photo
                    }
            
          setPartnerMaritalStatus(data.data[0]?.partner_marital_status || [])
          let mobile;
          let email;
          if(data.data[0]?.mobile && data.data[0]?.mobile !==''){
            mobile = data.data[0].mobile
            // console.log('mob', mobile)

          } else {
            mobile = data.data[0].contact_no
            // console.log('mobn', mobile)
          }

          if(data.data[0]?.email && data.data[0]?.email !==''){
            email = data.data[0].email
            // console.log('email', email)

          } else {
            email = data.data[0].contact_email
           // console.log('emailn', email)
          }

          
          
        setFormData({
          _id:data.data[0]._id,
          profile_for:data.data[0].profile_for?.name,
          profile_id:data.data[0].profile_id,
          name:data.data[0]?.name,
          about:data.data[0].about,
          height:data.data[0].height,
          weight:data.data[0].weight,
          manglik:data.data[0].manglik,
          gender:data.data[0].gender,
          marital_status:data.data[0].marital_status?.name,
          have_children:data.data[0].have_children,
          complexion:data.data[0].complexion?.name,
          birth_state:data.data[0].birth_state?.name,
          birth_city:data.data[0].birth_city?.name,
          diet:data.data[0].diet?.name,
          birth_year:dob.getFullYear(),
          birth_month:dob.getMonth() + 1,
          birth_day:dob.getDate(),
          birth_hour:hour,
          birth_minute:dob.getMinutes(),
          birth_am:ampm,
          dobYear:ageCalculate(data.data[0].dob),
          religion:data.data[0].religion?.name,
          caste:data.data[0].caste?.name,
          gotra:data.data[0].gotra?.name,
          gotra_other:data.data[0].gotra_other,
          occupation:data.data[0].occupation?.name,
          education:data.data[0].highest_degree?.name,
          photo:data.data[0]?.photo,
          photo1:data.data[0]?.photo1,
          photo2:data.data[0]?.photo2,
          photo3:data.data[0]?.photo3,
          photo4:data.data[0]?.photo4,
          loc_state:data.data[0].loc_state?.name,
          loc_city:data.data[0].loc_city?.name,
          health_information:data.data[0].health_information,
          disability:data.data[0].disability,
          blood_group:data.data[0].blood_group,
          annual_income:data.data[0].annual_income,
        working_with:data.data[0].working_with?.name,
        organization_name:data.data[0].organization_name,
        prev_working_detail:data.data[0].prev_working_detail,
        family_type:data.data[0].family_type,
        family_value:data.data[0].family_value,
        no_of_sister:data.data[0].no_of_sister,
        married_sister:data.data[0].married_sister,
        no_of_brother:data.data[0].no_of_brother,
        married_brother:data.data[0].married_brother,
        no_of_sister_in_law:data.data[0].no_of_sister_in_law,
        married_sister_in_law:data.data[0].married_sister_in_law,
        no_of_brother_in_law:data.data[0].no_of_brother_in_law,
        married_brother_in_law:data.data[0].married_brother_in_law,
        loc_nationality:data.data[0].loc_nationality?.name,
        loc_residence_type:data.data[0].loc_residence_type,
        loc_house_type:data.data[0].loc_house_type,
        loc_pincode:data.data[0].loc_pincode,
        loc_temp_state:data.data[0].loc_temp_state?.name,
        loc_temp_city:data.data[0].loc_temp_city?.name,
        loc_temp_pincode:data.data[0].loc_temp_pincode,
        loc_relation:data.data[0].loc_relation,
        loc_relation_name:data.data[0].loc_relation_name,
        loc_relation_email:data.data[0].loc_relation_email,
        loc_relation_mobile:data.data[0].loc_relation_mobile,
        contact_no:mobile,
        contact_email:email,
        instagram:data.data[0].instagram,
        facebook:data.data[0].facebook,
        reference:data.data[0].reference,
        hobbies:data.data[0].hobbies,
        profilePhoto:profilePhoto,
        interest_sent:data.data[0].interest_sent
        
  
        })

        setFormDataPartner({
          partner_age_from:data.data[0].partner_age_from,
      partner_age_to:data.data[0].partner_age_to,
      partner_height_from:data.data[0].partner_height_from,
      partner_height_to:data.data[0].partner_height_to,
      partner_weight_from:data.data[0].partner_weight_from,
      partner_weight_to:data.data[0].partner_weight_to,
      partner_language:data.data[0].partner_language?.name,
      partner_mother_tongue:data.data[0].partner_mother_tongue?.name,
      partner_marital_status:data.data[0].partner_marital_status?.name,
      partner_have_children:data.data[0].partner_have_children,
      partner_family_type:data.data[0].partner_family_type,
      partner_family_value:data.data[0].partner_family_value,
      partner_country:data.data[0].partner_country?.name,
      partner_state:data.data[0].partner_state?.name,
      partner_city:data.data[0].partner_city?.name,
      partner_education:data.data[0].partner_education?.name,
      partner_professional_qualification:data.data[0].partner_professional_qualification?.name,
      partner_occupation:data.data[0].partner_occupation?.name,
      partner_working_as:data.data[0].partner_working_as?.name,
      partner_income_from:data.data[0].partner_income_from,
      partner_income_to:data.data[0].partner_income_to,
      partner_religion:data.data[0].partner_religion?.name,
      partner_caste:data.data[0].partner_caste?.name,
      partner_sub_caste:data.data[0].partner_sub_caste?.name,
      partner_gotra:data.data[0].partner_gotra,
      partner_dosh:data.data[0].partner_dosh,
      partner_diet:data.data[0].partner_diet?.name,
      partner_drinking:data.data[0].partner_drinking,
      partner_smoking:data.data[0].partner_smoking,
      partner_managed_by:data.data[0].partner_managed_by,
      partner_complexion:data.data[0].partner_complexion?.name,
        });
  
      } else {

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
          
  
          const dob = new Date(data.data[0].dob);
          let ampm = "AM";
          let hour = dob.getHours();
          if (hour >= 12) {
            ampm = "PM";
            if (hour > 12) hour -= 12;
          } else if (hour === 0) {
            hour = 12; 
          }
  
          
        // console.log(data.data[0].interest_user)

                    let profilePhoto;
                    if(data.data[0].profile_photo === 1){
                      profilePhoto = data.data[0].photo
                    } else if(data.data[0].profile_photo === 2){
                      profilePhoto = data.data[0].photo1
                    } else if(data.data[0].profile_photo === 3){
                      profilePhoto = data.data[0].photo2
                    } else if(data.data[0].profile_photo === 4){
                      profilePhoto = data.data[0].photo3
                    } else if(data.data[0].profile_photo === 5){
                      profilePhoto = data.data[0].photo4
                    } else {
                      profilePhoto = data.data[0].photo
                    }
            
          setTotalUserSentInterest(data.data[0].interest_user)
          setPlanDetailUser(data.data[0].plan_detail)
          setTotalUserView(data.data[0].total_user_view)
          
          
        setFormDataMatch({
  
          profile_for:data.data[0].profile_for?.name,
          profile_id:data.data[0].profile_id,
          name:data.data[0]?.name,
          about:data.data[0].about,
          height:data.data[0].height,
          weight:data.data[0].weight,
          manglik:data.data[0].manglik,
          gender:data.data[0].gender,
          marital_status:data.data[0].marital_status?.name,
          marital_status_id:data.data[0].marital_status?._id,
          have_children:data.data[0].have_children,
          complexion:data.data[0].complexion?.name,
          birth_state:data.data[0].birth_state?.name,
          birth_city:data.data[0].birth_city?.name,
          diet:data.data[0].diet?.name,
          birth_year:dob.getFullYear(),
          birth_month:dob.getMonth() + 1,
          birth_day:dob.getDate(),
          birth_hour:hour,
          birth_minute:dob.getMinutes(),
          birth_am:ampm,
          dobYear:ageCalculate(data.data[0].dob),
          religion:data.data[0].religion?.name,
          caste:data.data[0].caste?.name,
          gotra:data.data[0].gotra?.name,
          gotra_other:data.data[0].gotra_other,
          occupation:data.data[0].occupation?.name,
          education:data.data[0].highest_degree?.name,
          photo:data.data[0]?.photo,
          photo1:data.data[0]?.photo1,
          photo2:data.data[0]?.photo2,
          photo3:data.data[0]?.photo3,
          photo4:data.data[0]?.photo4,
          loc_state:data.data[0].loc_state?.name,
          loc_city:data.data[0].loc_city?.name,
          health_information:data.data[0].health_information,
          disability:data.data[0].disability,
          blood_group:data.data[0].blood_group,
          annual_income:data.data[0].annual_income,
        working_with:data.data[0].working_with?.name,
        organization_name:data.data[0].organization_name,
        prev_working_detail:data.data[0].prev_working_detail,
        family_type:data.data[0].family_type,
        family_value:data.data[0].family_value,
        no_of_sister:data.data[0].no_of_sister,
        married_sister:data.data[0].married_sister,
        no_of_brother:data.data[0].no_of_brother,
        married_brother:data.data[0].married_brother,
        no_of_sister_in_law:data.data[0].no_of_sister_in_law,
        married_sister_in_law:data.data[0].married_sister_in_law,
        no_of_brother_in_law:data.data[0].no_of_brother_in_law,
        married_brother_in_law:data.data[0].married_brother_in_law,
        loc_nationality:data.data[0].loc_nationality?.name,
        loc_residence_type:data.data[0].loc_residence_type,
        loc_house_type:data.data[0].loc_house_type,
        loc_pincode:data.data[0].loc_pincode,
        loc_temp_state:data.data[0].loc_temp_state?.name,
        loc_temp_city:data.data[0].loc_temp_city?.name,
        loc_temp_pincode:data.data[0].loc_temp_pincode,
        loc_relation:data.data[0].loc_relation,
        loc_relation_name:data.data[0].loc_relation_name,
        loc_relation_email:data.data[0].loc_relation_email,
        loc_relation_mobile:data.data[0].loc_relation_mobile,
        contact_no:data.data[0].contact_no,
        contact_email:data.data[0].contact_email,
        instagram:data.data[0].instagram,
        facebook:data.data[0].facebook,
        reference:data.data[0].reference,
        hobbies:data.data[0].hobbies,
        profilePhoto:profilePhoto,
        partner_mother_tongue:data.data[0].partner_mother_tongue?.name,
        
  
        })

        
  
      } else {

      }
  
    }
  
  const fetchUserView = async (user_id, view_id) => {
          try {
            const response = await fetch(
              `${process.env.REACT_APP_BASE_URL_API}/api/user/view-user`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  user_id: user_id,
                  view_id : view_id 
                }),
              }
            );
            const data = await response.json();
            if (response.ok) {
            // console.log(data)
            } else {
              console.error("Failed to data:", data.message || data);
            }
          } catch (error) {
            console.error("Error while data:", error);
          }
        }


    useEffect(() => {
        
    if(userDetailLogin?._id && profileId){
    fetchUserView(userDetailLogin?._id, profileId)
    }
    
  
  }, [userDetailLogin, profileId])
    
        useEffect(() => {
        
    if(userDetailLogin?._id){
    fetchUserDetailMatch(userDetailLogin?._id)
    }
    
  
  }, [userDetailLogin])
  
    useEffect(() => {
        
     if(profileId){
    fetchUserDetail(profileId)
    }
    
  
  }, [profileId])



  useEffect(() => {
      
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsScroll(false)
      
    }, [isScroll]);


    const showPartnerButton = (value) => {
      if(value === 1){
        setShowPartner(false)
      } else {
        setShowPartner(true)
      }

    }

  
  

  const copyContent = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }


  useEffect(() => {
    let totalMatch = 0;
    if(Number(formDataMatch.dobYear) >= Number(formDataPartner.partner_age_from) && Number(formDataMatch.dobYear) <= Number(formDataPartner.partner_age_to)){
      totalMatch += 1
    }
    if(Number(decimaltoWithoutcm(formDataMatch.height)) >= Number(decimaltoWithoutcm(formDataPartner.partner_height_from))  && Number(decimaltoWithoutcm(formDataMatch.height)) <= Number(decimaltoWithoutcm(formDataPartner.partner_height_to))){
      totalMatch += 1
    }
    if(partnerMaritalStatus && partnerMaritalStatus.filter(list => String(list._id) === String(formDataMatch.marital_status_id)).length){
      totalMatch += 1
    }
    if(formDataPartner.partner_religion === formDataMatch.religion){
      totalMatch += 1
    }
    if(formDataPartner.partner_caste === formDataMatch.caste){
      totalMatch += 1
    }
    if(formDataPartner.partner_mother_tongue === formDataMatch.partner_mother_tongue){
      totalMatch += 1
    }
    if(formDataPartner.partner_education === formDataMatch.education){
      totalMatch += 1
    }
    if(formDataPartner.partner_occupation === formDataMatch.occupation){
      totalMatch += 1
    }
    if(formDataPartner.partner_diet === formDataMatch.diet){
      totalMatch += 1
    }
    if(formDataPartner.partner_country === formDataMatch.loc_nationality){
      totalMatch += 1
    }
    if(formDataPartner.partner_state === formDataMatch.loc_state){
      totalMatch += 1
    }
    if(formDataPartner.partner_city === formDataMatch.loc_city){
      totalMatch += 1
    }
    if(isIncomeRangeCompatible(`${formDataPartner.partner_income_from} - ${formDataPartner.partner_income_to}`, formData.annual_income)){
      totalMatch += 1
    }


    setTotalMatchValue(totalMatch)

  }, [formDataPartner, formDataMatch])


  const sendInterest = (id, index) => {
   if(planDetailUser?.plan_id?.name === 'Gold' && totalUserSentInterest >= 50){
      setPopupMessage(`You've reached the limit of 50 member interests. Kindly upgrade your plan to continue.`)
      modalInstanceConfirm.current?.show();

     } else {
   
    interest(id, userDetailLogin?._id, index)
     }
  }


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
              fetchUserDetail(partner_id)

            } else {
              console.error("Failed to send interest:", data.message || data);
            }
          } catch (error) {
            console.error("Error while sending interest:", error);
          }
        }


        useEffect(() => {
                         
                 const modalSuccessEl = document.getElementById("successPopup");
                 if (modalSuccessEl) {
                   modalInstanceSuccess.current = new window.bootstrap.Modal(modalSuccessEl);
                 }
        
               }, []);


               useEffect(() => {
                  const modalConfirmEl = document.getElementById("confirmPopupId");
                  if (modalConfirmEl) {
                     modalInstanceConfirm.current = new window.bootstrap.Modal(modalConfirmEl);
                  }
               
                }, []);
const yesNoButton = (value) => {
    
    //console.log('confirm', value)
    if(value === 'Yes'){
    navigate("/membership-plan")
    }
    modalInstanceConfirm.current?.hide();
  }
  
  return (
    
    
     
    
    
    <>
    { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

    <SuccessPopup ref={modalSuccessRef} message="Your interest has been sent!" />
    <ConfirmPopup ref={modalConfirmRef} message={popupMessage} yesNoButton={yesNoButton} />

    <>
  <section className="inrbnr inrbnr-minhgt">
    <div className="site-width">&nbsp;</div>
  </section>
  {/* Section End */}
  <section className="profiledetailsec pt-30 pb-30">
    <div className="container-fluid">
      <div className="profiledetailpink">
        <div className="row">
          <div className="col-lg-3">
            <ProfileDetailImage formData={formData} />
            {/* carousal end */}
          </div>
          <div className="col-lg-9">
            <div className="profile-det">
              <div className="detailonline">
                {" "}
                <span className="on">Online</span>
                {/* <span class="">Offline</span> */}
              </div>
              <h2>
                {formData.name}{" "}
                <span className="pinkhd">(ID : {formData.profile_id})</span>
              </h2>
              <div className="mobverified">
                <span>
                  <img src="assets/img/icons/verified.png" alt="" />
                </span>{" "}
                Mobile No. &amp; Email Verified
              </div>
              <div className="profcretby">Profile created by {formData.profile_for} </div>
              <div className="profilelist-detwhite d-md-flex align-items-md-stretch justify-content-md-between">
                <div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Age </span> : {formData.dobYear}{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Religion </span> : {formData.religion}{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Manglik Status </span> : {formData.manglik}{" "}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Height </span> : {decimalToFeetInches(formData.height)}{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Marital Status </span> : {formData.marital_status}{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Occupation </span> : {formData.occupation}{" "}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Location </span> : {formData.loc_state}, {formData.loc_city}{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Education </span> : {formData.education}{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  
                  {!planDetailUser || planDetailUser?.plan_id?.name === 'Basic' ? null :
                  <div className="profilelist-pinkbox">
                    <div>
                      
                      
                      <div className="detcontacts">
                        {" "}
                        
                        {formData?.interest_sent ? (
                                <span>
                                 <p class="upgradepara text-center"><a href="">Upgrade</a> to Contact her directly</p>
                                    <Link to="#" class="button callnow-btn mb-2">
                                    <i class="fa-solid fa-phone"></i> Call Now</Link> {" "}
                                    <Link to="#" class="button callnow-btn"><i class="fa-regular fa-comment"></i> Chat Now</Link>
                                </span>
                              ) : (
                                <>
                                <button
                                  className="button expressint-btn mb-2"
                                   onClick={() => sendInterest(formData._id, 0)}
                                >
                                  Express Interest
                                </button>

                                
                                </>
                              )}
                        
                        
                        
                        
                      </div>
                      
                      
                      { /* <div className="detcontacts d-none">
                        {" "}
                        <a href="/#" className="button expressint-btn mb-2">
                          Express Interest
                        </a>{" "}
                        <a
                          href="profile-details.html"
                          className="button viewpro-btn"
                        >
                          <img src="assets/img/icons/eye.png" alt="" /> View
                          Profile
                        </a>{" "}
                      </div>
                      */ }

                    </div>
                  </div>
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="profiledetailbody pt-0 pb-50">
    <div className="site-width">
      <div className="row">
        <div className="col-lg-3">
          <div className="become-prem-memb-banner">
            <div className="become-prem-in">
              <div className="be-memb-head" style={{ zIndex: 1 }}>
                <div className="memb-tittle">
                  Become a<br />
                  <span>Premium Member</span>
                </div>
                <div className="memb-prem-icon">
                  <div className="memb-prem-icon-inn">
                    <img
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      src="https://static.matrimonialsindia.com/images/prem-ico.jpg"
                      alt="Premium Member"
                      height={37}
                      width={59}
                    />
                  </div>
                </div>
              </div>
              <div className="become-prem-text">
                <ul className="be-prem">
                  <li>
                    Contact Details of <span>20 Profiles</span> (Only Indian)
                  </li>
                  <li>
                    Can Send <span>50 Personalise Messages</span>
                  </li>
                  <li>
                    View Details of <span>Perfect E-Matches</span>
                  </li>
                  <li>
                    Membership Duration - <span>10 Days</span>
                  </li>
                </ul>
                <div className="pay-now-bottom">
                  <p>
                    Just Rs. - <span>599/-</span>
                  </p>
                  <a href="/#">Pay Now</a>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
        <div className="col-lg-9">
          <div className="astroDetailsWrap detailbdrcont">
  <div className="navWrapper">
    <ul className="navcontaienr gap-2 d-flex flex-wrap justify-content-center">
      <li>
        {" "}
        <Link className={`navibtn ${showPartner ? 'active':''}`} data-target="#detpro" to="#" onClick={() => showPartnerButton(0)}>
          {" "}
          <img src="assets/img/user-icon.png" alt="" /> Detailed Profile{" "}
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link className={`navibtn ${showPartner ? '':'active'}`} data-target="#parterpre" to="#" onClick={() => showPartnerButton(1)}>
          {" "}
          <img src="assets/img/partner-icon.png" alt="" /> Partner Preference{" "}
        </Link>{" "}
      </li>
    </ul>
  </div>
  {/* nav end */}
  {showPartner && 
  <div className="sectionTop tabContentBox" id="detpro">
    <div className="wrapper">
      <ul className="opd-list">
        <li>
          <div className="opd-title">
            {" "}
            <img src="assets/img/abouticon.png" alt="" /> About {formData.name}
          </div>
          <div className="d-flex flex-wrap">
            <div className="profdet-userid" onClick={() => copyContent(formData.profile_id)}>
              ID: <span id="userId">{formData.profile_id}</span>
              <img
                src="assets/img/copy.png"
                alt="Copy"
                style={{ cursor: "pointer" }}
              />
              {copied && 
              <i id="tickmark" class="fas fa-check" style={{color:'green'}}></i>
              }
            </div>
            <div className="profdet-profmanageby">
              Profile Managed by : {formDataPartner.partner_managed_by}
            </div>
          </div>
          <p className="gray large lh15em mb10px cBlur">
            {formData.about}
          </p>
        </li>
        <li>
          <div className="opd-title">
            <img src="assets/img/contactticon.png" alt="" /> Contact Details
          </div>
          <ul className="opd-cd-list">
            <li>
              <div className="contact-icon">
                {" "}
                <img src="assets/img/icons/mobileicon.png" alt="" />{" "}
              </div>
              <div className="contact-info">
                {" "}
                <span>Contact Number</span> <strong>
                  {
                  (!planDetailUser || planDetailUser?.plan_id?.name === 'Basic' || (planDetailUser?.plan_id?.name === 'Gold' && totalUserView > 100)) ?
                  maskMobileNumber(formData.contact_no)
                  :
                  formData.contact_no
                  
                  }
                  
                  </strong>{" "}
                <img src="assets/img/icons/opd-verified.png" alt="" />{" "}
              </div>
            </li>
            <li>
              <div className="contact-icon">
                {" "}
                <img
                  src="assets/img/icons/icon-opd-contact2.png"
                  alt=""
                  height={42}
                  width={42}
                />{" "}
              </div>
              <div className="contact-info">
                {" "}
                <span>Email ID</span> <strong>
                  {
                  (!planDetailUser || planDetailUser?.plan_id?.name === 'Basic' || (planDetailUser?.plan_id?.name === 'Gold' && totalUserView > 100)) ?
                  maskEmail(formData.contact_email)
                  :
                  formData.contact_email
                  
                  }</strong>{" "}
              </div>
            </li>
          </ul>
          <div className="opd-otvd">
            {
              (!planDetailUser || planDetailUser?.plan_id?.name === 'Basic' || (planDetailUser?.plan_id?.name === 'Gold' && totalUserView > 100)) ?
            <Link to="/membership-plan">
              <span>Upgrade Membership</span> to view Details
            </Link>
            :
            null
            }
          </div>
        </li>
        <li>
          <div className="opd-title">
            <img src="assets/img/infoicon.png" alt="" /> Basic Details
          </div>
          <ul className="opd-info-list">
            <li>
              {" "}
              <span className="opd-lbl">Age / Height</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.dobYear} Yrs / {decimalToFeetInches(formData.height)} ({decimaltocm(formData.height)})</span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Date of Birth</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.birth_day && formData.birth_month && formData.birth_year ? `${formData.birth_day}/${formData.birth_month}/${formData.birth_year}`: ""}</span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Gender</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.gender}</span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Marital Status</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.marital_status}</span>{" "}
              </span>{" "}
            </li>
            {formData.have_children && formData.have_children !=='' &&
            <li>
              {" "}
              <span className="opd-lbl">Have Children</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.have_children}</span>{" "}
              </span>{" "}
            </li>
            }
            
            <li>
              {" "}
              <span className="opd-lbl">Religion</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.religion}</span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Caste</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.caste}</span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Sub Caste</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.sub_caste}</span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Gotra</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.gotra ? formData.gotra : formData.gotra_other}</span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Mother Tongue</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">
                  
                    <span className="">{formDataPartner.partner_mother_tongue}</span>
                  
                </span>{" "}
              </span>{" "}
            </li>
            
            <li>
              {" "}
              <span className="opd-lbl">Complexion</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.complexion}</span>{" "}
              </span>{" "}
            </li>
            
            <li>
              {" "}
              <span className="opd-lbl">Blood Group</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.blood_group}</span>{" "}
              </span>{" "}
            </li>
            
            <li>
              {" "}
              <span className="opd-lbl">Body Weight</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.weight} Kg</span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Location</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur">{formData.loc_state}, {formData.loc_city}</span>{" "}
              </span>{" "}
            </li>
          </ul>
        </li>
        {/* <li> 
            <div class="opd-title"><img src="assets/img/infoicon.png" alt=""> Background and Religious Details</div>
            <ul class="opd-info-list">
              <li> <span class="opd-lbl">Birth Time</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
              <li> <span class="opd-lbl">Place of Birth</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
              <li> <span class="opd-lbl">Country Of Birth</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
              <li> <span class="opd-lbl">Sun Sign</span> <span class="opd-val "> <span class="cBlur">Virgo [Kanyaa]</span> </span> </li>
              <li> <span class="opd-lbl">Nakshatra</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
              <li> <span class="opd-lbl">Manglik Status</span> <span class="opd-val "> <span class="cBlur">Don't Know</span> </span> </li>
            </ul>
          </li>
          <li> <img class="icon-opd-title" src="assets/img/icons/deticon5.png" alt="" width="44" height="44">
            <div class="opd-title">Location</div>
            <ul class="opd-info-list">
              <li> <span class="opd-lbl">Immigration Status</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
              <li> <span class="opd-lbl">Country Residence</span> <span class="opd-val "> <span class="cBlur">India</span> </span> </li>
              <li> <span class="opd-lbl">Citizenship</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
              <li> <span class="opd-lbl">City</span> <span class="opd-val "> <span class="cBlur">Chandigarh</span> </span> </li>
            </ul>
          </li> */}
        <li className="pr">
          <div className="opd-title">
            <img src="assets/img/educationicon.png" alt="" /> Education and
            Profession
          </div>
          <ul className="opd-info-list">
            <li>
              {" "}
              <span className="opd-lbl">Education</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur"> {formData.education} </span>{" "}
              </span>{" "}
            </li>
            
            
            <li>
              {" "}
              <span className="opd-lbl">Working With</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur"> {formData.working_with} </span>{" "}
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="opd-lbl">Annual Income</span>{" "}
              <span className="opd-val ">
                {" "}
                <span className="cBlur"> {formData.annual_income} </span>{" "}
              </span>{" "}
            </li>
            
          </ul>
        </li>
        {/* <li class="pr"> <img class="icon-opd-title" src="assets/img/icons/deticon7.png" alt="" width="44" height="44">
            <div class="opd-title">Family Details</div>
            <ul class="opd-info-list">
              <li> <span class="opd-lbl">Father</span> <span class="opd-val "> <span class="cBlur"> Not Specified</span> </span> </li>
              <li> <span class="opd-lbl">Family Values</span> <span class="opd-val "> <span class="cBlur"> ********</span> </span> </li>
              <li> <span class="opd-lbl">Family Status</span> <span class="opd-val "> <span class="cBlur"> ********</span> </span> </li>
              <li> <span class="opd-lbl">Mother</span> <span class="opd-val "> <span class="cBlur"> ********</span> </span> </li>
              <li> <span class="opd-lbl">Family Type</span> <span class="opd-val "> <span class="cBlur"> ********</span> </span> </li>
              <li> <span class="opd-lbl">Native Place</span> <span class="opd-val "> <span class="cBlur"> ********</span> </span> </li>
              <li> <span class="opd-lbl">No of Brothers</span> <span class="opd-val "> <span class="cBlur"> ********</span> </span> </li>
              <li> <span class="opd-lbl">No of Sisters</span> <span class="opd-val "> <span class="cBlur"> ********</span> </span> </li>
            </ul>
          </li> */}
        <li>
          <div className="opd-title">
            <img src="assets/img/lifestyleicon.png" alt="" /> Lifestyle,
            Interests and more{" "}
          </div>
          <div className="d-flex flex-wrap">
            
            {formData.diet && 
            <div className="dietcont">
              
              {formData.diet}
            </div>
            }
            
          </div>
          <h5>Hobbies</h5>
          <div className="d-flex flex-wrap">
            {
              formData.hobbies && formData.hobbies?.map((hobbiesList, index) => {
                return (
                  <div className="hobbiescont">
                
                  {hobbiesList?.name}
                
                  </div>
                )
              })
            }
            
                

             
            
            
          </div>
          {/* <ul class="opd-info-list">
                  <li> <span class="opd-lbl">Smoking</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
                  <li> <span class="opd-lbl">Take Hard Drinks</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
                  <li> <span class="opd-lbl">Eating Habit</span> <span class="opd-val "> <span class="cBlur">Vegetarian</span> </span> </li>
                  <li> <span class="opd-lbl">House Ownership</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
                  <li> <span class="opd-lbl">Living Situation</span> <span class="opd-val "> <span class="cBlur">Not Specified</span> </span> </li>
            </ul> */}
        </li>
      </ul>
      {/* end */}
    </div>
  </div>
}
  {/* tab content end */}
  {!showPartner && 
  <div className="sectionTop tabContentBox" id="parterpre">
    
       <div className="wrapper pt-0">
  <h4 className="titletwo">
    <span>Her Partner Preferences</span>
  </h4>
  <div className="partpref-cont">
    <div className="partpref-head">
        <div className="row">
          <div className="col-6 col-sm text-end">
            <div className="pref-img me-md-4">
              <img src={formData.profilePhoto ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.profilePhoto}` : 'assets/img/no-image.jpg'} alt="" />
            </div>
          </div>
          <div className="col-6 col-sm order-sm-3">
            <div className="pref-img2 ms-md-4">
              <img src={formDataMatch.profilePhoto ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formDataMatch.profilePhoto}` : 'assets/img/no-image.jpg'} alt="" />
            </div>
          </div>
          <div className="col-12 col-sm order-sm-2">
            <div className="part-score">
              <span>{`You fit ${totalMatchValue} of her 13 expectations`}</span>
            </div>
          </div>
        </div>
      </div>

  </div>
  <div className="detail-partners-pro">
    <div className="row">
    
      <div className="col-12">
        <div className="row">
          <div className="col-md-6">
            <div className="hed-proher-ex">
              <h4>Her Expectations</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mat-pro-2">
              <h4>Your Match</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 pt-3">
        
        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Age:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_age_from} to {formDataPartner.partner_age_to}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                {
                  Number(formDataMatch.dobYear) >= Number(formDataPartner.partner_age_from) && Number(formDataMatch.dobYear) <= Number(formDataPartner.partner_age_to) ? 
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Age:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.dobYear}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Height:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{decimalToFeetInches(formDataPartner.partner_height_from)} ({decimaltocm(formDataPartner.partner_height_from)}) to {decimalToFeetInches(formDataPartner.partner_height_to)} ({decimaltocm(formDataPartner.partner_height_to)})</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                                
                {
                  
                 Number(decimaltoWithoutcm(formDataMatch.height)) >= Number(decimaltoWithoutcm(formDataPartner.partner_height_from))  && Number(decimaltoWithoutcm(formDataMatch.height)) <= Number(decimaltoWithoutcm(formDataPartner.partner_height_to)) ? 
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Height:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{decimalToFeetInches(formDataMatch.height)} ({decimaltocm(formDataMatch.height)})</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Marital Status:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{
                        partnerMaritalStatus && partnerMaritalStatus.map(list => list.name).join(", ")
                        }</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                
                { 
                
                partnerMaritalStatus && partnerMaritalStatus.filter(list => String(list._id) === String(formDataMatch.marital_status_id)).length ?
                <img src="assets/img/icons/greentick.png" alt="" />
               : 
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
                </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Marital Status:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.marital_status}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        { /* row end */ }

        { /* <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Disability:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">No</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                <img src="assets/img/icons/greentick.png" alt="" />
                {/* <img src="assets/img/icons/red-cross.png" alt=""> *
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Disability:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">No</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        */ }
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Religion/Community:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_religion}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                
                { formDataPartner.partner_religion === formDataMatch.religion ?
                <img src="assets/img/icons/greentick.png" alt="" />
              :
              <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Religion/Community:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.religion}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Caste:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_caste}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { formDataPartner.partner_caste === formDataMatch.caste ?
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Caste:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.caste}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Mother Tongue:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_mother_tongue}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { formDataPartner.partner_mother_tongue === formDataMatch.partner_mother_tongue ?
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
                </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Mother Tongue:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.partner_mother_tongue}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        { /* row end */ }


        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Education:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_education}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { formDataPartner.partner_education === formDataMatch.education ?
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              
                </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Education:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.education}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        { /* row end */ }
        
        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Occupation:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_occupation}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { formDataPartner.partner_occupation === formDataMatch.occupation ?
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Occupation:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.occupation}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Diet:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_diet}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { formDataPartner.partner_diet === formDataMatch.diet ? 
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Diet:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.diet}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        
        { /* row end */ }


        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Country:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_country}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { formDataPartner.partner_country === formDataMatch.loc_nationality ? 
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Country:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.loc_nationality}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      State:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_state}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { formDataPartner.partner_state === formDataMatch.loc_state ? 
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      State:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.loc_state}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      City:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_city}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { formDataPartner.partner_city === formDataMatch.loc_city ? 
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      City:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataMatch.loc_city}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        
        { /* row end */ }

        <div className="row pb-3">
            <div className="col-sm-5 pe-sm-0">
              <div className="bg-pro-con-ic">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Annual Income:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formDataPartner.partner_income_from} - {formDataPartner.partner_income_to}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner-preficon">
                { isIncomeRangeCompatible(`${formDataPartner.partner_income_from} - ${formDataPartner.partner_income_to}`, formData.annual_income) ? 
                <img src="assets/img/icons/greentick.png" alt="" />
                :
                <img src="assets/img/icons/red-cross.png" alt="" />
                }
              </div>
            </div>
            <div className="col-sm-5 ps-sm-0">
              <div className="bg-pro-con-ic rht">
                <ul className="opd-pp-lists">
                  <li>
                    <span className="opd-pp-lbl" style={{ color: "#000" }}>
                      Annual Income:
                    </span>
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">{formData.annual_income}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        
        { /* row end */ }




        
      </div>
      
{ /*
      
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    Profession:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">Any</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    Desired Lifestyle:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">Any</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    Drink:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">no</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    Gothara:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">Any</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    Country:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">India</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    State Living in:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">Delhi</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    Annual Income:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">INR 2 lakhs to 20 lakhs</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    City Living In:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">20 yrs to 25 yrs</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    Diet:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">Veg</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden"
          }}
        >
          <div className="col-md-8 p-0">
            <div className="bg-pro-con-ic">
              <ul className="opd-pp-lists">
                <li>
                  {" "}
                  <span className="opd-pp-lbl" style={{ color: "black" }}>
                    Family Background:
                  </span>{" "}
                  <span className="opd-pp-val">
                    {" "}
                    <span className="cBlur">Joint</span>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="img-ch-pro " style={{ paddingRight: 30 }}>
              <img
                src="assets/img/icons/check-circle_svgrepo.co.png"
                width="35px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

*/ }

    </div>
  </div>
  {/* <ul class="opd-pp-list">
           
            <li> <span class="opd-pp-lbl"></span> <span class="opd-pp-val"> <span class="cBlur">5' 00" (152 cm) to 5' 04" (162 cm)</span> </span> </li>
            <li> <span class="opd-pp-lbl">Marital Status</span> <span class="opd-pp-val"> <span class="cBlur">Never Married</span> </span> </li>
            <li> <span class="opd-pp-lbl">Religion</span> <span class="opd-pp-val"> <span class="cBlur">Sikh</span> </span> </li>
            <li> <span class="opd-pp-lbl">Caste</span> <span class="opd-pp-val"> <span class="cBlur">Sandhu</span> </span> </li>
            <li> <span class="opd-pp-lbl">Mother Tongue</span> <span class="opd-pp-val"> <span class="cBlur">Punjabi</span> </span> </li>
            <li> <span class="opd-pp-lbl">Manglik Status</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Horoscope Required</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Special Case</span> <span class="opd-pp-val"> <span class="cBlur">None</span> </span> </li>
            <li> <span class="opd-pp-lbl">Country Living in</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">State Living in</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Citizenship</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Education</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Occupation</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Body Type</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Complexion</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Eating Habit</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Smoking Habit</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
            <li> <span class="opd-pp-lbl">Drinking Habit</span> <span class="opd-pp-val"> <span class="cBlur">Doesn't Matter</span> </span> </li>
      </ul> */}
</div>

       
       
       { /* <div className="wrapper pt-0">
        <h4 className="titletwo">
          <span>Her Partner Preferences</span>
        </h4>
        <div className="partpref-cont">
          <div className="partpref-head">
            <div className="row">
              <div className="col-6 col-sm">
                <div className="pref-img">
                  <img src="assets/img/pref-img1.jpg" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm text-end order-sm-3">
                <div className="pref-img2">
                  <img src={formData.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo}` : 'assets/img/no-image.jpg'} alt="" />
                </div>
              </div>
              <div className="col-12 col-sm order-sm-2">
                <div className="part-score">
                  <span>You fit 10 of her 20 expectations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="opd-pp-list">
          <li>
            {" "}
            <span className="opd-pp-lbl">Age</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_age_from} to {formDataPartner.partner_age_to} Years</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Height</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{decimalToFeetInches(formDataPartner.partner_height_from)} ({decimaltocm(formDataPartner.partner_height_from)}) to {decimalToFeetInches(formDataPartner.partner_height_to)} ({decimaltocm(formDataPartner.partner_height_to)})</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Marital Status</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_marital_status}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Religion</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_religion}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Caste</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_caste}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Mother Tongue</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_mother_tongue}</span>{" "}
            </span>{" "}
          </li>
          
          
          <li>
            {" "}
            <span className="opd-pp-lbl">Country Living in</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_country}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">State Living in</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_state}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">City/District</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_city}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Education</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_education}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Occupation</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_occupation}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Body Weight</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_weight_from} to {formDataPartner.partner_weight_to} Kg</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Complexion</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_complexion}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Drinking Habit</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_drinking}</span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="opd-pp-lbl">Smoking Habit</span>{" "}
            <span className="opd-pp-val">
              {" "}
              <span className="cBlur">{formDataPartner.partner_smoking}</span>{" "}
            </span>{" "}
          </li>
          
        </ul>
      </div>


      */ }




  </div>
}
  {/* tab content end */}
</div>


          
          {/* end */}
        </div>
        {/* right panel end */}
      </div>
    </div>
  </section>
</>


    <FooterPage />
    
    
    </>
  )
}

export default ProfileDetail
