import React, { useEffect, useState } from 'react'
import HeaderUser from '../components/homePage/HeaderUser'
import FooterPage from '../components/homePage/FooterPage'
import { useSelector } from 'react-redux';
import { ageCalculate, decimalToFeetInches } from '../utils/utils';
import { Link } from 'react-router-dom';

function MyProfile() {
  
const { userDetailLogin } = useSelector((state) => state.auth);

const [formData, setFormData] = useState({})
const [formDataPartner, setFormDataPartner] = useState({})
const [isScroll, setIsScroll] = useState(false)

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
  
          
        //console.log(data.data[0].hobbies)
            
          
          
        setFormData({
  
          profile_for:data.data[0].profile_for.name,
          name:data.data[0].name,
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
          diet:data.data[0].diet,
          birth_year:dob.getFullYear(),
          birth_month:dob.getMonth() + 1,
          birth_day:dob.getDate(),
          birth_hour:hour,
          birth_minute:dob.getMinutes(),
          birth_am:ampm,
          dobYear:ageCalculate(data.data[0].dob),
          religion:data.data[0].religion?.name,
          occupation:data.data[0].occupation,
          education:data.data[0].highest_degree?.name,
          photo:data.data[0].photo,
          loc_state:data.data[0].loc_state?.name,
          loc_city:data.data[0].loc_city?.name,
          health_information:data.data[0].health_information,
          disability:data.data[0].disability,
          blood_group:data.data[0].blood_group,
          annual_income:data.data[0].annual_income,
        working_with:data.data[0].working_with,
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
      partner_language:data.data[0].partner_language.name,
      partner_mother_tongue:data.data[0].partner_mother_tongue,
      partner_marital_status:data.data[0].partner_marital_status.name,
      partner_have_children:data.data[0].partner_have_children,
      partner_family_type:data.data[0].partner_family_type,
      partner_family_value:data.data[0].partner_family_value,
      partner_country:data.data[0].partner_country?.name,
      partner_state:data.data[0].partner_state?.name,
      partner_city:data.data[0].partner_city?.name,
      partner_education:data.data[0].partner_education?.name,
      partner_professional_qualification:data.data[0].partner_professional_qualification?.name,
      partner_occupation:data.data[0].partner_occupation?.name,
      partner_working_as:data.data[0].partner_working_as,
      partner_income_from:data.data[0].partner_income_from,
      partner_income_to:data.data[0].partner_income_to,
      partner_religion:data.data[0].partner_religion,
      partner_caste:data.data[0].partner_caste,
      partner_sub_caste:data.data[0].partner_sub_caste,
      partner_gotra:data.data[0].partner_gotra,
      partner_dosh:data.data[0].partner_dosh,
      partner_diet:data.data[0].partner_diet?.name,
      partner_drinking:data.data[0].partner_drinking,
      partner_smoking:data.data[0].partner_smoking,
      partner_managed_by:data.data[0].partner_managed_by,
      partner_complexion:data.data[0].partner_complexion,
        });
  
      } else {

      }
  
    }
  
  useEffect(() => {
    
    if(userDetailLogin?._id){
    fetchUserDetail(userDetailLogin._id)
    }
  
  }, [userDetailLogin])

  useEffect(() => {
      
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsScroll(false)
      
    }, [isScroll]);
  
  
  
    return (
    <>
      <HeaderUser />

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>My Profile </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to="/">
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
    <div className="register-sec ">
      <div className="container-fluid con-flu-padd  ">
        <div className="container-fluid  bg-register ">
          <div className="row pb-30 pt-50">
            <div className="col-md-8 ">
              <div className="con-reg bg-col-pross">
                <div className="row">
                  <div className="col-sm-5 col-lg-4   img-profile">
                    
                    <img src={formData.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo}` : 'assets/img/no-image.jpg'} alt="" width={223} />
                  
                  </div>
                  <div className="col-sm-7 col-lg-4 ">
                    <div className="profilelist-det">
                      <h2>
                        {formData.name}{" "}
                        <span
                          style={{
                            color: "#E4189F",
                            fontSize: 12,
                            fontWeight: 600
                          }}
                        >
                          { /*(ID :&nbsp;600155) */ }
                        </span>
                      </h2>
                      <h6 style={{ color: "#A0A0A0", fontSize: 12 }}>
                        Profile created by {formData.profile_for}
                      </h6>
                      <div className="profilelist-detwhitee d-md-flex align-items-md-stretch justify-content-md-between">
                        <div>
                          <div className="profiledata-row d-flex align-items-start  mb-2">
                            <span className="fieldname">Age / Height</span>: {formData.dobYear}, {" "}
                            {decimalToFeetInches(formData.height)}
                          </div>
                          <div className="profiledata-row d-flex align-items-start  mb-2">
                            <span className="fieldname">Religion</span>: {formData.religion}
                          </div>
                          <div className="profiledata-row d-flex align-items-start  mb-2">
                            <span className="fieldname">Occupation</span>: {formData.occupation}
                          </div>
                          <div className="profiledata-row d-flex align-items-start  mb-2">
                            <span className="fieldname">Location</span>: {formData.loc_state},
                            {formData.loc_city}
                          </div>
                          <div className="profiledata-row d-flex align-items-start  mb-2">
                            <span className="fieldname">Education</span>:
                            {formData.education}
                          </div>
                          <div className="profiledata-row d-flex align-items-start  mb-2">
                            <span className="fieldname">Manglik Status</span>:
                            {formData.manglik}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 col-lg-4">
                    <div className="bott-my-pr">
                      <div className="button-edit">
                        <Link to="/basic-details-edit" className="edit-profile">
                          <img
                            src="assets/img/edit-3_svgrepo.com.png"
                            width="18px"
                            alt=""
                          />{" "}
                          Edit Profile
                        </Link>
                      </div>
                      <div className="button-update">
                        <a href="/#" className="upadet-package">
                          <img
                            src="assets/img/update_svgrepo.com.png"
                            width="18px"
                            alt=""
                          />{" "}
                          Update package
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-det ">
                <div className="db-pro-stat">
                  <h6>Profile completion</h6>
                  <div className="db-pro-pgog">
                    <span>
                      <b className="count">50</b>%
                    </span>
                  </div>
                  <ul className="pro-stat-ic">
                    <p>Your profile is 50% Complete</p>
                  </ul>
                  <div className="buttons-complet-p">
                    <a href="/#">
                      <button>Complete profile</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 pt-4 d-flex justify-content-center">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    My Details
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Partner Preference
                  </button>
                </li>
              </ul>
            </div>
            <hr />
            <div className="col-12">
              <div className="tab-content " id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="col-md-12 bg-col-pro bor">
                    <div className="head-but">
                      <h3>Basic Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/basic-details-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span> Create Profile For</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.profile_for}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Gender</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.gender}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Name</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.name}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span> Marital Status</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.marital_status}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Complexion</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.complexion}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Health Information</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.health_information} </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Manglik Status</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.manglik}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Height</span>
                              </div>
                              <div className="col-6">
                                <strong>: {decimalToFeetInches(formData.height)} </strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Weight</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.weight} Kg</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>About</span>
                              </div>
                              <div className="col-6">
                                <strong>:  {formData.about} </strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Disability</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.disability}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>BloodGroup</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.blood_group}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Horoscope Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/basic-details-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row span-col">
                        <div className="col-md-6">
                          
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span> Date of Birth</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.birth_day && formData.birth_month && formData.birth_year ? `${formData.birth_day}/${formData.birth_month}/${formData.birth_year}`: ""}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>State of Birth</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.birth_state}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Time of Birth</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.birth_hour && formData.birth_minute && formData.birth_am ? `${formData.birth_hour}:${formData.birth_minute} ${formData.birth_am}`: ""}</strong>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>City of Birth</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.birth_city}</strong>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Educational Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/education-detail-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row span-col">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span> Highest Qualification</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.education}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Professional Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/education-detail-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row span-col">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Annual Income</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.annual_income}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Occupation</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.occupation}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Working With</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.working_with}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Organization Name</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.organization_name}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Family Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/family-detail-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row span-col">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Family Type</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.family_type}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Family Value</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.family_value}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Sister</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.no_of_sister}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Brother</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.no_of_brother}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Brother in Law</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.no_of_brother_in_law}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Sister in Law</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.no_of_sister_in_law}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Location Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/location-detail-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row span-col">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Nationality</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_nationality}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Residence Type</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_residence_type}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Permanent House Type</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_house_type}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Permanent State</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_state}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Permanent City</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_city}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Permanent Pin Code/ ZIP Code</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_pincode}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Temporary State</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_temp_state}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Temporary City</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_temp_city}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Temporary Pin Code/ ZIP Code</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_temp_pincode}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>References Relation</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_relation}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>References Name</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_relation_name}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>References Email id</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_relation_email}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>References Mobile No.</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.loc_relation_mobile}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Contact Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/contact-information-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row span-col">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Contact Number</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.contact_no ? '+91'+formData.contact_no : null}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Contact Email Address</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.contact_email}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Instagram ID</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.instagram}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Facebook ID</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formData.facebook}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Hobbies &amp; Interests</h3>
                      <div className="buttons-eddit">
                        <Link to="/basic-details-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row span-col">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Hobbies</span>
                              </div>
                              <div className="col-6">
                                <strong>: &nbsp;

                                  {
                                    formData?.hobbies?.map(item => item.name).join(", ")
                                  }
                                </strong>
                              </div>
                            </div>
                          </div>
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
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Partner’s Basic Info</h3>
                      <div className="buttons-eddit">
                        <Link to="/partner-basic-detail-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Age</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_age_from} - {formDataPartner.partner_age_to} Years</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Body Weight</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_weight_from} - {formDataPartner.partner_weight_to} Kg</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Marital Status</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_marital_status}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Height Range</span>
                              </div>
                              <div className="col-6">
                                <strong>: {decimalToFeetInches(formDataPartner.partner_height_from)} - {decimalToFeetInches(formDataPartner.partner_height_to)}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Languages Known</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_language}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Partner’s Location Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/partner-basic-detail-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Nationality</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_country}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>City / District</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_city}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>State</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_state}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Partner’s Education &amp; Career</h3>
                      <div className="buttons-eddit">
                        <Link to="/partner-basic-detail-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Highest Qualification</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_education}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Occupation</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_occupation}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Work as</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_working_as}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Professional Qualification</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_professional_qualification}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Annual Income Range</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_income_from} - {formDataPartner.partner_income_to}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-col-pro bor mt-3">
                    <div className="head-but">
                      <h3>Partner’s Other Details</h3>
                      <div className="buttons-eddit">
                        <Link to="/partner-basic-detail-edit">
                          <button>
                            <img
                              src="assets/img/edit-3_svgrepo.com.png"
                              alt=""
                            />
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Diet Preference</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_diet}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Smoking Habit</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_smoking}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Drinking Habit</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_drinking}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <span>Profile Managed by</span>
                              </div>
                              <div className="col-6">
                                <strong>: {formDataPartner.partner_managed_by}</strong>
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

export default MyProfile
