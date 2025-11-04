import React, { useEffect, useRef, useState } from 'react'
import HeaderUser from '../components/homePage/HeaderUser'
import FooterPage from '../components/homePage/FooterPage'
import { useSelector } from 'react-redux';
import { ageCalculate } from '../utils/utils';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const { userDetailLogin } = useSelector((state) => state.auth);

const [formData, setFormData] = useState({})
const [formDataPhoto, setFormDataPhoto] = useState({})
const fileInputRef = useRef(null);
const [error, setError] = useState({})
const [message, setMessage] = useState({})
const [isLoading, setIsLoading] = useState(false)

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
  
          
        
          // console.log(data.data[0].name) 

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
          
          
        setFormData({
            
          name:data.data[0].name,
          photo:profilePhoto,
            
  
        })
  
      } else {
        
      }
  
    }
  
  useEffect(() => {
    
    if(userDetailLogin?._id){
    fetchUserDetail(userDetailLogin._id)
    }
  
  }, [userDetailLogin])
  
  const handleClick = () => {
    fileInputRef.current.click();
  };
  
  
  
  const handleChange = async (e) => {
    const { name, files } = e.target;
    
    
    if (name === "photo") {
      const file = files[0];

      if (!file) return;

      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        alert("Please select a JPG or PNG image.");
        return;
      }
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 10) {
        alert("Upload image not allowed more than 10MB.");
        return;
      }

     /*  if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if(name === 'photo'){
          //  setPreviewUrl(reader.result);
          }
          
          
        };
        reader.readAsDataURL(file);
      }
        */

      /* setFormDataPhoto((prevData) => ({
        ...prevData,
        [name]:files[0],
      }));

      */
     
      setIsLoading(true)
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("id", userDetailLogin._id);
     if (formData.photo) formDataToSubmit.append("photo", files[0]);
         
     const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/profile-photo-user`, {
        method: "POST",
        body: formDataToSubmit,
        
      });

      const data = await res.json();
      setIsLoading(false)
      
      if(data.status){
      //dispatch(verifyOtp(data));

        setMessage({photo:data.message})
        setError({})
        fetchUserDetail(userDetailLogin._id)

       
      } else {
        //console.log(data)
        if (data.errors) {
        // Convert array to object keyed by field
        const errorObj = {};
        data.errors.forEach(error => {
          errorObj[error.path] = error.msg;
        });
        setError(errorObj);
      }
        
        
        setError({photo:data.message})
        setMessage({})
      }
      
      
      
      
      return;
    }
    
    


   
    
  };

  /* const handleSubmit = async (e) => {
    e.preventDefault();
     
    setIsLoading(true)
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("id", userDetailLogin._id);
     if (formData.photo) formDataToSubmit.append("photo", formData.photo);
         
     const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/profile-photo-user`, {
        method: "POST",
        body: formDataToSubmit,
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));

      if (fileInputRef.current) {
          fileInputRef.current = null;
        }
        

       navigate('/partner-qualities')
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

      //console.log(data)
    
  };
  */
  
  return (
    <>
      <HeaderUser />

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Dashboard </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to="/dashboard">
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section className="astrologersList pt-30 pb-50">
    <div className="container-fluids con-flu-padds">
      <div className="astroList">
        <div className="row m-0 ">
          <div className="col-10 pad-rig-cl">
            <div className="head-desh">
              <div className="row ">
                <div className="col-6">
                  <div className="h3">
                    {" "}
                    <h3>
                      Welcome <span> {formData.name}!</span>
                    </h3>
                  </div>
                  <p>
                    Now find your account activities and details here on one
                    click
                  </p>
                </div>
                <div className="col-6 ">
                  <div className="row justify-content-end">
                    <div className="col-4">
                      <div className="ic-num ">
                        <div className="row align-items-center justify-content-end text-right ">
                          <div className="col-3">
                            <img
                              src="assets/img/icons/bell_svgrepo.com.png"
                              alt=""
                            />
                          </div>
                          <div className="col-4">
                            <h3>12</h3>
                          </div>
                          <p>New Notifications</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="ic-num ">
                        <div className="row align-items-center justify-content-end text-right">
                          <div className="col-3">
                            <img
                              src="assets/img/icons/user-plus-alt-1_svgrepo.com.png"
                              alt=""
                            />
                          </div>
                          <div className="col-4">
                            <h3>03</h3>
                          </div>
                          <p>Recent Visitors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="img-desh-pro">
                    <Link to="/profile-photo-edit">
                         <img src={formData.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo}` : 'assets/img/no-image.jpg'} alt="" width={272} className='dashimg'  />
                    </Link>
                    <div className="rel d-flex">
                      <div className="image-captions w-100">
                        <h6>{formData.name}</h6>
                        <p>{ /*(ID :&nbsp;600155)*/} &nbsp;</p>
                      </div>
                      <div className="image-captionss ">
                        <img
                          src="assets/img/icons/pen_svgrepo.com.png"
                          alt=""
                        />
                      </div>
                      <div className="image-cap-ic">
                        {isLoading ? `Wait...` : 
                        <img
                          src={`assets/img/icons/img-ic-plus.png`}
                          alt=""
                          onClick={handleClick}
                          
                        />
                        }
                        
                        <input
                          type="file"
                          id="fileInput"
                          accept="image/*"
                          ref={fileInputRef}
                          name="photo"
                          onChange={handleChange}
                          
                        />
                      </div>

                    </div>
                  </div>
                  {message.photo && <p className="green" style={{color:'green'}}>{message.photo}</p>}      
                  {error.photo && <p className="error">{error.photo}</p>}
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="hed-desh pb-2">
                    <h6>Your Activity Summary</h6>
                  </div>
                  <div className="col-12">
                    <div className="bg-des-con">
                      <div className="col-12">
                        <div className="row align-items-end">
                          <div className="col-4">
                            <div className="ic-nums ">
                              <div className="row align-items-center ">
                                <div className="col-3">
                                  <img
                                    src="assets/img/icons/team_svgrepo.com.png"
                                    alt=""
                                  />
                                </div>
                                <div className="col-4">
                                  <h3>03</h3>
                                </div>
                                <p>Pending Invitations</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="ic-nums ">
                              <div className="row align-items-center ">
                                <div className="col-3">
                                  <img
                                    src="assets/img/icons/check-alt_svgrepo.com.png"
                                    alt=""
                                  />
                                </div>
                                <div className="col-4">
                                  <h3>07</h3>
                                </div>
                                <p>Accepted Invitations</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="ic-nu text-center">
                              <img
                                src="assets/img/icons/check-badge_svgrepo.com.png"
                                alt=""
                              />
                              <p>Verified Profile</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="bg-prem-con">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-2 text-center">
                                {" "}
                                <img
                                  src="assets/img/icons/padlock.png"
                                  alt=""
                                />{" "}
                              </div>
                              <div className="col-10 h3-col-con">
                                <h3>
                                  Only&nbsp;Premium&nbsp;Members can avail these
                                  benefits
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 pt-4">
                            <div className="row">
                              <div className="col-6  border-lef">
                                <div className="ic-n ">
                                  <div className="row align-items-center justify-content-center text-center ">
                                    <div className="col-4 d-flex text-center p-0">
                                      {" "}
                                      <img
                                        src="assets/img/icons/mobile-alt-2_svgrepo.com.png"
                                        alt=""
                                      />
                                      <h3>03</h3>
                                    </div>
                                    <p>Contacts viewed</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="ic-n ">
                                  <div className="row align-items-center justify-content-center text-center ">
                                    <div className="col-4 d-flex text-center p-0">
                                      {" "}
                                      <img
                                        src="assets/img/icons/chat-round-dots_svgrepo.com.png"
                                        alt=""
                                      />
                                      <h3>03</h3>
                                    </div>
                                    <p>Contacts viewed</p>
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
                <div className="col-lg-3 col-md-4">
                  <div className="stand-plan-bg">
                    <h3>Standard Plan</h3>
                    <img src="assets/img/icons/standard-plan.png" alt="" />
                    <p>Plan name:&nbsp;Standard</p>
                    <p>Validity:&nbsp;6 Months</p>
                    <p>Valid till&nbsp;24 June 2024</p>
                    <div className="butt">
                      <button>Complete Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="bg-col-matches">
                <div className="row">
                  <div className="col-6 bord-matches ">
                    <div className="row pad-match">
                      <div className="col-4">
                        <div className="img-match">
                          <img
                            src="assets/img/indian-wedding-character-collection.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-8 align-content-center">
                        <div className="con-matches">
                          <h6>
                            Your Profile is how your Matches see you. Thanks for
                            improving it
                          </h6>
                          <button>View Today Matches</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 pad-match">
                    <div className="row pad-top align-content-center align-items-center">
                      <div className="col-6 d-flex img-bell align-items-center">
                        <img src="assets/img/icons/bell-1.png" alt="" />
                        <h6>Notifications</h6>
                        <div className="not-count">
                          <h5>1</h5>
                        </div>
                      </div>
                      <div className="col-6 ">
                        <div className="con-see-al text-end">
                          <a
                            style={{
                              color: "#BE3272",
                              fontSize: 17,
                              fontWeight: 600
                            }}
                            href="/#"
                          >
                            See All
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="bg-match-profile">
                        <div className="d-flex">
                          <div className=" img-mess-2">
                            <img src="assets/img/image-match-pro.png" alt="" />
                          </div>
                          <div className="con-metch">
                            <h5>Miss Charu Atwal</h5>
                            <p>has sent you an Interest</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 mb-3">
              <div className="row plane-matches">
                <div className="col-6">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <p style={{ fontSize: 23, fontWeight: 600 }}>
                          Your Matches
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <a
                          style={{ color: "#BE3272", fontSize: 17 }}
                          href="/#"
                        >
                          See All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-your-matches p-3">
                      <div className="col-12 py-2 ">
                        <div className="row">
                          <div className="col-lg-3">
                            <img src="assets/img/your-matches-1.png" alt="" />
                          </div>
                          <div className="col-lg-6 match-pr-1 p-0">
                            <h4>Miss Kajol Makhija</h4>
                            <p> 33 yrs, 5' 3", Hindi, Mumbai</p>
                            <p>Public Relations Professional</p>
                          </div>
                          <div className="col-lg-3 text-center align-content-center">
                            <img
                              className="img-checker"
                              src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt=""
                            />
                            <p
                              style={{
                                color: "#BE3272",
                                fontSize: 12,
                                fontWeight: 700
                              }}
                            >
                              Connect Now
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 py-2 ">
                        <div className="row">
                          <div className="col-lg-3">
                            <img src="assets/img/img-pro-matc.png" alt="" />
                          </div>
                          <div className="col-lg-6 match-pr-1 p-0">
                            <h4>Miss Kajol Makhija</h4>
                            <p> 33 yrs, 5' 3", Hindi, Mumbai</p>
                            <p>Public Relations Professional</p>
                          </div>
                          <div className="col-lg-3 text-center align-content-center">
                            <img
                              className="img-checker"
                              src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt=""
                            />
                            <p
                              style={{
                                color: "#BE3272",
                                fontSize: 12,
                                fontWeight: 700
                              }}
                            >
                              Connect Now
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 py-2 ">
                        <div className="row">
                          <div className="col-lg-3">
                            <img src="assets/img/img-pro-match.png" alt="" />
                          </div>
                          <div className="col-lg-6 match-pr-1 p-0">
                            <h4>Miss Kajol Makhija</h4>
                            <p> 33 yrs, 5' 3", Hindi, Mumbai</p>
                            <p>Public Relations Professional</p>
                          </div>
                          <div className="col-lg-3 text-center align-content-center">
                            <img
                              className="img-checker"
                              src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt=""
                            />
                            <p
                              style={{
                                color: "#BE3272",
                                fontSize: 12,
                                fontWeight: 700
                              }}
                            >
                              Connect Now
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <p style={{ fontSize: 23, fontWeight: 600 }}>
                          Premium Matches
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <a
                          style={{ color: "#BE3272", fontSize: 17 }}
                          href="/#"
                        >
                          See All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-your-matches p-3">
                      <div className="col-12 py-2 ">
                        <div className="row">
                          <div className="col-lg-3">
                            <img src="assets/img/img-pro-matc.png" alt="" />
                          </div>
                          <div className="col-lg-6 match-pr-1 p-0">
                            <h4>Miss Kajol Makhija</h4>
                            <p> 33 yrs, 5' 3", Hindi, Mumbai</p>
                            <p>Public Relations Professional</p>
                          </div>
                          <div className="col-lg-3 text-center align-content-center">
                            <img
                              className="img-checker"
                              src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt=""
                            />
                            <p
                              style={{
                                color: "#BE3272",
                                fontSize: 12,
                                fontWeight: 700
                              }}
                            >
                              Connect Now
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 py-2 ">
                        <div className="row">
                          <div className="col-lg-3">
                            <img
                              src="assets/img/img-pro-match-2-2.png"
                              alt=""
                            />
                          </div>
                          <div className="col-lg-6 match-pr-1 p-0">
                            <h4>Miss Kajol Makhija</h4>
                            <p> 33 yrs, 5' 3", Hindi, Mumbai</p>
                            <p>Public Relations Professional</p>
                          </div>
                          <div className="col-lg-3 text-center align-content-center">
                            <img
                              className="img-checker"
                              src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt=""
                            />
                            <p
                              style={{
                                color: "#BE3272",
                                fontSize: 12,
                                fontWeight: 700
                              }}
                            >
                              Connect Now
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 py-2 ">
                        <div className="row">
                          <div className="col-lg-3">
                            <img src="assets/img/img-pro-match.png" alt="" />
                          </div>
                          <div className="col-lg-6 match-pr-1 p-0">
                            <h4>Miss Kajol Makhija</h4>
                            <p> 33 yrs, 5' 3", Hindi, Mumbai</p>
                            <p>Public Relations Professional</p>
                          </div>
                          <div className="col-lg-3 text-center align-content-center">
                            <img
                              className="img-checker"
                              src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt=""
                            />
                            <p
                              style={{
                                color: "#BE3272",
                                fontSize: 12,
                                fontWeight: 700
                              }}
                            >
                              Connect Now
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="row">
              <div className="col-md-12 col-lg-12 ps-lg-0">
                <div className="chat-window">
                  <p>
                    <strong>Chat Window</strong>
                  </p>
                </div>
                <div className="profilelist-rightpanle">
                  <hr />
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
                  </div>
                  <div className="chatrow mb-2">
                    <a href="/#">
                      <img src="assets/img/profile/prof1.jpg" alt="" />
                      <span>Miss. Meenakshi Khowal</span>
                      <img src="assets/img/icons/verified.png" alt="" />
                    </a>
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

export default Dashboard
