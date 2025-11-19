import React, { useEffect, useRef, useState } from 'react'
import HeaderUser from '../components/homePage/HeaderUser'
import FooterPage from '../components/homePage/FooterPage'
import { useSelector } from 'react-redux';
import { ageCalculate, decimalToFeetInches, decimalToFeetInchesWithoutWord, formatCount, formatDate } from '../utils/utils';
import { Link, useNavigate } from 'react-router-dom';
import SuccessPopup from '../components/homePage/SuccessPopup';
import ConfirmPopup from '../components/homePage/ConfirmPopup';

function Dashboard() {
  const navigate = useNavigate();
  const { userDetailLogin } = useSelector((state) => state.auth);

const [formData, setFormData] = useState({})
const [formDataPhoto, setFormDataPhoto] = useState({})
const fileInputRef = useRef(null);
const [error, setError] = useState({})
const [message, setMessage] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [checkPhoto, setCheckPhoto] = useState({})
const [inviteAccept, setInviteAccept] = useState({})
const [freeMember, setFreeMember] = useState([])
const [premiumMember, setPremiumMember] = useState([])
const modalSuccessRef = useRef(null)
const modalInstanceSuccess = useRef(null);
const [planDetailUser, setPlanDetailUser] = useState(0)
const modalConfirmRef = useRef(null)
const modalInstanceConfirm = useRef(null);
const [popupMessage, setPopupMessage] = useState("")
const [totalUserSentInterest, setTotalUserSentInterest] = useState()

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
  
          
        
           // console.log(data.data[0].plan_detail) 

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

        setFormData({
            
          name:data.data[0].name,
          photo:profilePhoto,
          planDetail:data.data[0].plan_detail,
            
  
        })

        setCheckPhoto({
          photo:data.data[0].photo,
          photo1:data.data[0].photo1,
          photo2:data.data[0].photo2,
          photo3:data.data[0].photo3,
          photo4:data.data[0].photo4,
          

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

  

const fetchListMember = async () => {
    try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/inbox`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pageType: 'sent',
                    member_id: userDetailLogin._id,
                }),
            });

    const data = await response.json();

    if (response.ok) {
        
        //console.log(data.data)
        const result = {
         pendingCount: formatCount(data.data?.filter(p => p.status === "Pending").length || 0),
         acceptedCount: formatCount(data.data?.filter(p => p.status === "Accepted").length || 0),
         acceptedPremiumCount: formatCount(data.data?.filter(p => p.status === "Accepted" && p.partner_id?.plan_detail?.plan_id?.name === 'Premium').length || 0)     
        };
        // console.log(result)
        setInviteAccept(result)



    } else {
    console.error("Error fetching members:", data.error || data.message);
    }
    } catch (error) {
    console.error("Fetch failed:", error);
    }
};

const fetchGetAllMatchMember = async () => {
    try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/member-match`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    totalResult:3,
                    user_id: userDetailLogin._id,
                }),
            });

    const data = await response.json();

    if (data.status) {
        
        //console.log(data.usersFree)

        setFreeMember(data.usersFree)
        setPremiumMember(data.usersPremium)



    } else {
    console.error("Error fetching members:", data.error || data.message);
    }
    } catch (error) {
    console.error("Fetch failed:", error);
    }
};

useEffect(() => {
fetchListMember()
fetchGetAllMatchMember()

}, [])

useEffect(() => {
        const modalSuccessEl = document.getElementById("successPopup");
         if (modalSuccessEl) {
           modalInstanceSuccess.current = new window.bootstrap.Modal(modalSuccessEl);
         }

       }, []);

const sendInterest = (id, index, val) => {
     
    if(userDetailLogin?._id){
     if(planDetailUser?.plan_id?.name === 'Gold' && totalUserSentInterest >= 50){
      setPopupMessage(`You've reached the limit of 50 member interests. Kindly upgrade your plan to continue.`)
      modalInstanceConfirm.current?.show();

     } else {
      interest(id, userDetailLogin?._id, index, val);
     }
        } else {
      
       return;
   
         }
      
  }
  const interest = async (partner_id, member_id, index, val) => {
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
              
              if(val === 1){
              setFreeMember((prevData) => {
                      const updated = [...prevData];
                      updated[index] = {
                        ...updated[index],
                        interest_sent: true,
                      };
                      return updated;
                    });

                  } else {

                    setPremiumMember((prevData) => {
                      const updated = [...prevData];
                      updated[index] = {
                        ...updated[index],
                        interest_sent: true,
                      };
                      return updated;
                    });
                  }

            } else {
              console.error("Failed to send interest:", data.message || data);
            }
          } catch (error) {
            console.error("Error while sending interest:", error);
          }
        }

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
      <HeaderUser />
      <SuccessPopup ref={modalSuccessRef} message="Your interest has been sent!" />
      <ConfirmPopup ref={modalConfirmRef} message={popupMessage} yesNoButton={yesNoButton} />
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
          <div className="col-lg-10 pad-rig-cl mobpad0">
            <div className="head-desh mb-3">
              <div className="row ">
                <div className="col-12 col-sm-6">
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
                <div className="col-12 col-sm-6">
                  <div className="row justify-content-lg-end">
                    <div className="col-6 col-lg-4">
                      <div className="ic-num ">
                        <div className="row align-items-center justify-content-lg-end text-right ">
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
                    <div className="col-6 col-lg-4">
                      <div className="ic-num ">
                        <div className="row align-items-center justify-content-lg-end text-right">
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
                      
                      {(checkPhoto.photo && checkPhoto.photo1 && checkPhoto.photo2 && checkPhoto.photo3 && checkPhoto.photo4) ? null :
                      <div className="image-cap-ic dash-uplodicon">
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
}

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
                                   <div className='dashstat-icon'>
                                       <img src="assets/img/icons/team_svgrepo.com.png" alt="" />
                                   </div>                                  
                                </div>
                                <div className="col-4">
                                  <h3>{inviteAccept?.pendingCount}</h3>
                                </div>
                                <p>Pending Invitations</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="ic-nums ">
                              <div className="row align-items-center ">
                                <div className="col-3">
                                    <div className='dashstat-icon'>
                                       <img src="assets/img/icons/check-alt_svgrepo.com.png" alt="" />

                                    </div>
                                  
                                </div>
                                <div className="col-4">
                                  <h3>{inviteAccept?.acceptedCount}</h3>
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
                                      <h3>{inviteAccept?.acceptedPremiumCount}</h3>
                                    </div>
                                    <p>Premium Contacts</p>
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
                                    <p>Chats initiated</p>
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
                    <h3>{formData.planDetail?.plan_id?.name === 'VIP'? 'VIP Shaadi':formData.planDetail?.plan_id?.name ? formData.planDetail?.plan_id?.name+' Plan':'Basic Plan'}</h3>
                    <img src="assets/img/icons/standard-plan.png" alt="" />
                    <p>Plan name:&nbsp;{formData.planDetail?.plan_id?.name === 'VIP'? 'VIP Shaadi':formData.planDetail?.plan_id?.name ? formData.planDetail?.plan_id?.name:'Basic'}</p>
                    <p>Validity:&nbsp;
                      {formData.planDetail?.plan_id?.name === 'VIP'?'Till Shaadi':formData.planDetail?.plan_id?.name === 'Premium'?'1 Year':formData.planDetail?.plan_id?.name === 'Gold'?'6 Month':null}
                      </p>
                    <p>Valid till:&nbsp;{formData.planDetail?.expiry_date ? formatDate(formData.planDetail?.expiry_date):formData.planDetail?.plan_id?.name === 'VIP'?'Till Shaadi':null}</p>
                    <div className="butt">
                      <Link to="/my-profile"><button>Complete Profile</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="bg-col-matches">
                <div className="row d-lg-flex align-items-lg-center">
                  <div className="col-lg-6 bord-matches">
                    <div className="row pad-match">
                      <div className="col-lg-4">
                        <div className="img-match">
                          <img
                            src="assets/img/indian-wedding-character-collection.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 align-content-center">
                        <div className="con-matches">
                          <h6>
                            Your Profile is how your Matches see you. Thanks for
                            improving it
                          </h6>
                         <Link to="/today-matches"> <button>View Today Matches</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pad-match noti-cont">
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
                <div className="col-lg-6">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <h4 className='yourmatch-hd'>
                          Your Matches
                        </h4>
                      </div>
                      <div className="col-6 text-end">
                        <Link
                          style={{ color: "#BE3272", fontSize: 17 }}
                          to="/my-matches"
                        >
                          See All
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {freeMember.length > 0 &&
                    <div className="bg-your-matches p-3">
                      
                      {freeMember && freeMember.map((searchList,index) => {

                        let profilePhoto;
                    if(searchList.profile_photo === 1){
                      profilePhoto = searchList.photo
                    } else if(searchList.profile_photo === 2){
                      profilePhoto = searchList.photo1
                    } else if(searchList.profile_photo === 3){
                      profilePhoto = searchList.photo2
                    } else if(searchList.profile_photo === 4){
                      profilePhoto = searchList.photo3
                    } else if(searchList.profile_photo === 5){
                      profilePhoto = searchList.photo4
                    } else {
                      profilePhoto = searchList.photo
                    }

                        return (
                      <div className="col-12 py-2 ">
                        <div className='yourmatch'>
                          <div className="row">
                            <div className="col-4 col-lg-3">
                                  <Link to={`/profile-details/${searchList._id}`}><img src={profilePhoto ? `${process.env.REACT_APP_BASE_URL_IMAGE}${profilePhoto}` : 'assets/img/no-image.jpg'} alt="" width={87} />
                                  </Link>
                            </div>
                            <div className="col-8 col-lg-6 match-pr-1 p-0">
                              <h4><Link to={`/profile-details/${searchList._id}`} style={{color:'#BE3272'}}>{searchList.name}</Link></h4>
                              <p> {searchList?.dob ? `${ageCalculate(searchList.dob)} yrs,`:""} {searchList?.height ? `${decimalToFeetInchesWithoutWord(searchList.height)},`:""} {searchList.religion?.name ? `${searchList.religion?.name},` : ''} {[searchList?.loc_city?.name].filter(Boolean).join("")}</p>
                              <p>{searchList?.occupation?.name}</p>
                            </div>
                            <div className="col-12 col-lg-3">
                              {
                              (!planDetailUser || planDetailUser?.plan_id?.name === 'Basic') ? null :
                                                           
                              searchList?.interest_sent ? (
                              <>
                              
                                <Link to="#" className='dash-interst-btn' style={{cursor:'default'}}>  
                                 <img className="img-checker" src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt="" />
                                <span>
                                  Interest Sent
                                </span>
                            </Link>
                              </>

                            )
                            :
                            (
                            <>
                            <Link to="#" className='dash-interst-btn' onClick={() => sendInterest(searchList._id, index, 1)}>
                                 <img className="img-checker" src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt="" />
                                <span>
                                  Express Interest
                                </span>
                            </Link>
                            </>
                            )
                            
                            }
                            </div>
                          </div>

                        </div>
                      </div>

                        )

                      })
                    }
                      
                      


                    </div>
}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-12">
                    <div className='yourmatch'>
                    <div className="row mt-4 mt-lg-0">
                      <div className="col-8">
                        <h4 className='yourmatch-hd'>
                          Premium Matches
                        </h4>
                      </div>
                      <div className="col-4 text-end">
                        <Link
                          style={{ color: "#BE3272", fontSize: 17 }}
                          to="/my-matches"
                        >
                          See All
                        </Link>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {premiumMember.length > 0 && 
                    <div className="bg-your-matches p-3">

                      {premiumMember && premiumMember.map((searchList,index) => {

                        let profilePhoto;
                    if(searchList.profile_photo === 1){
                      profilePhoto = searchList.photo
                    } else if(searchList.profile_photo === 2){
                      profilePhoto = searchList.photo1
                    } else if(searchList.profile_photo === 3){
                      profilePhoto = searchList.photo2
                    } else if(searchList.profile_photo === 4){
                      profilePhoto = searchList.photo3
                    } else if(searchList.profile_photo === 5){
                      profilePhoto = searchList.photo4
                    } else {
                      profilePhoto = searchList.photo
                    }


                  return (
                      
                      <div className="col-12 py-2 ">
                        <div className='yourmatch'>
                        <div className="row">
                          <div className="col-4 col-lg-3">
                            <Link to={`/profile-details/${searchList._id}`}>
                            <img src={profilePhoto ? `${process.env.REACT_APP_BASE_URL_IMAGE}${profilePhoto}` : 'assets/img/no-image.jpg'} alt="" width={87} />
                            </Link>
                          </div>
                          <div className="col-8 col-lg-6 match-pr-1 p-0">
                            <h4><Link to={`/profile-details/${searchList._id}`} style={{color:'#BE3272'}}>{searchList.name}</Link></h4>
                            <p> {searchList?.dob ? `${ageCalculate(searchList.dob)} yrs,`:""} {searchList?.height ? `${decimalToFeetInchesWithoutWord(searchList.height)},`:""} {searchList.religion?.name ? `${searchList.religion?.name},` : ''} {[searchList?.loc_city?.name].filter(Boolean).join("")}</p>
                              <p>{searchList?.occupation?.name}</p>
                          </div>
                          <div className="col-12 col-lg-3">
                            {
                            
                            (!planDetailUser || planDetailUser?.plan_id?.name === 'Basic') ? null :
                            
                            searchList?.interest_sent ? (
                              <>
                              
                                <Link to="#" className='dash-interst-btn' style={{cursor:'default'}}>  
                                 <img className="img-checker" src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt="" />
                                <span>
                                  Interest Sent
                                </span>
                            </Link>
                              </>

                            )
                            :
                            (
                            <>
                            
                            <Link to="#" className='dash-interst-btn' onClick={() => sendInterest(searchList._id, index, 2)}>
                                 <img className="img-checker" src="assets/img/icons/check-alt_svgrepo.com-match.png"
                              alt="" />
                                <span>
                                  Express Interest
                                </span>
                            </Link>
                            </>
                            )
                            
                            }
                            

                          </div>
                        </div>
                        </div>
                      </div>

                  )
                  })}
                      


                    </div>
}
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
