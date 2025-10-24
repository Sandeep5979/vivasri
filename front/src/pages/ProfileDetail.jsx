import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage';
import FooterPage from '../components/homePage/FooterPage'
import { useSelector } from 'react-redux';
import { ageCalculate, decimaltocm, decimalToFeetInches, maskEmail, maskMobileNumber } from '../utils/utils';
import { Link, useParams } from 'react-router-dom';
import HeaderUser from '../components/homePage/HeaderUser';


function ProfileDetail() {

  const { profileId } = useParams();
  const { userDetailLogin } = useSelector((state) => state.auth);

const [formData, setFormData] = useState({})
const [formDataPartner, setFormDataPartner] = useState({})
const [isScroll, setIsScroll] = useState(false)
const [showPartner, setShowPartner] = useState(true)
const [copied, setCopied] = useState(false);

  const fetchUserDetail = async (userId) => {
      
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
  
          
      // console.log(data.data[0].hobbies)
            
          
          
        setFormData({
  
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
        contact_no:data.data[0].contact_no,
        contact_email:data.data[0].contact_email,
        instagram:data.data[0].instagram,
        facebook:data.data[0].facebook,
        reference:data.data[0].reference,
        hobbies:data.data[0].hobbies,
        
  
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



  return (
    <>
    { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }



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
            <div
              id="profileCarousel"
              className="carousel detail-carousal slide"
              data-bs-ride="carousel"
            >
              {/* Indicators */}
              <div className="carousel-indicators">
                {formData.photo &&
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={0}
                  className="active"
                />
}
                {formData.photo1 &&
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={1}
                />
}
                {formData.photo2 &&
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={2}
                />
}
                {formData.photo3 &&
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={3}
                />
}

{formData.photo4 &&
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={4}
                />
}
              
              
              </div>
              {/* Slides */}
              <div className="carousel-inner">
                {formData.photo &&
                <div className="carousel-item active">
                  {" "}
                  <img
                    src={formData.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo}` : 'assets/img/no-image.jpg'}
                    className=""
                    alt=""
                  />{" "}
                </div>
}
                {formData.photo1 &&
                <div className="carousel-item">
                  {" "}
                  <img
                    src={formData.photo1 ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo1}` : 'assets/img/no-image.jpg'}
                    className=""
                    alt=""
                  />{" "}
                </div>
}
                {formData.photo2 &&
                <div className="carousel-item">
                  {" "}
                  <img
                    src={formData.photo2 ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo2}` : 'assets/img/no-image.jpg'}
                    className=""
                    alt=""
                  />{" "}
                </div>
}
                {formData.photo3 &&
                <div className="carousel-item">
                  {" "}
                  <img
                    src={formData.photo3 ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo3}` : 'assets/img/no-image.jpg'}
                    className=""
                    alt=""
                  />{" "}
                </div>
}

{formData.photo4 &&
                <div className="carousel-item">
                  {" "}
                  <img
                    src={formData.photo4 ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo4}` : 'assets/img/no-image.jpg'}
                    className=""
                    alt=""
                  />{" "}
                </div>
}
              </div>
            </div>
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
                  <div className="profilelist-pinkbox">
                    <div>
                      <div className="detcontacts">
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
                      <div className="detcontacts d-none">
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
                    </div>
                  </div>
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
                <span>Contact Number</span> <strong>{maskMobileNumber(formData.contact_no)}</strong>{" "}
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
                <span>Email ID</span> <strong>{maskEmail(formData.contact_email)}</strong>{" "}
              </div>
            </li>
          </ul>
          <div className="opd-otvd">
            <Link href="#">
              <span>Upgrade Membership</span> to view Details
            </Link>
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
