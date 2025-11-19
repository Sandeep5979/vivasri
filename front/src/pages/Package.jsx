import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import HeaderUser from '../components/homePage/HeaderUser'
import { useDispatch, useSelector } from 'react-redux'
import LoginPopup from '../components/homePage/LoginPopup'
import ConfirmPopup from '../components/homePage/ConfirmPopup'
import SuccessPopup from '../components/homePage/SuccessPopup'
import { planChange } from '../store/authActions'

function Package() {

  const { userDetailLogin, planChangeStatus } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [planList, setPlanList] = useState({})
  const [loginProps, setLoginProps] = useState(null);
  const modalBrideRef = useRef(null);
  const modalInstance = useRef(null);
  const [popupMessage, setPopupMessage] = useState("")
  const modalConfirmRef = useRef(null)
  const modalInstanceConfirm = useRef(null);
  const modalSuccessRef = useRef(null)
  const modalInstanceSuccess = useRef(null);
  const [planId, setPlanId] = useState({})
  const [formData, setFormData] = useState({});
  const [isScroll, setIsScroll] = useState(false)

  const fetchPlanList = async () => {
    
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/membership-plan-list`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            });
    
          const data = await res.json();
          if(data.status){
            const result = {
              free: data.data?.find(p => p.name === "Basic"),
              gold: data.data?.find(p => p.name === "Gold"),
              premium: data.data?.find(p => p.name === "Premium"),
              vip: data.data?.find(p => p.name === "VIP"),
            };
            //console.log(result)
            setPlanList(result)
          }
    }
    
    
    
    useEffect(() => {
      fetchPlanList()
    
    }, [])

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

  

  const yesNoButton = (value) => {
    
    //console.log('confirm', value)
    if(value === 'Yes'){

      activatePlan(planId)

    }
    modalInstanceConfirm.current?.hide();
  }

  const activatePlan = async (plan) => {
        
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/activate-plan`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id:userDetailLogin?._id, plan_id:plan._id, price:plan.price }),
          
        });
  
        const data = await res.json();
        //setIsLoading(false)
        if(data.status){
          fetchUserDetail(userDetailLogin._id)
          dispatch(planChange(!planChangeStatus));
          modalInstanceSuccess.current?.show();
              setTimeout(() => {
                modalInstanceSuccess.current?.hide();
              }, 3000)


        }


  }


  const selectPaln = (e, plan) => {
    setLoginProps('reload');
    if(userDetailLogin?._id){
      setPlanId(plan)
      setPopupMessage('are you sure you want to select plan?')
      modalInstanceConfirm.current?.show();
        
      //interest(id, userDetailLogin?._id, index);
       
        } else {
         
       modalInstance.current?.show();
           
       return;
   
         }
  }

const fetchUserDetail = async (userId) => {
      
      const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail-all/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          });
  
        const data = await res.json();
        
        if(data.status){
          
         // console.log(data.data[0].plan_detail)
          setFormData({
            planDetail:data.data[0].plan_detail,
    
        })
  
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
  { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }
  <LoginPopup ref={modalBrideRef} url={loginProps} />
      <ConfirmPopup ref={modalConfirmRef} message={popupMessage} yesNoButton={yesNoButton} />
      <SuccessPopup ref={modalSuccessRef} message="Your selected plan activate successfully." />

  <>
  <>
  <section className="con-plans">
    <div className=" inrbnr-2">
      <div className="container-fluid con-flu-padd"></div>
    </div>
    <div className="section-bg-con">
      <div className="container-fluid con-flu-padd-2">
        <div className="inrbnrContent-2">
          <div className="main-headings-plan">
            <h2>Membership Plans</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-md-3">
              <div className="plan-box">
                <div className="hheadings-2 text-center">
                  <h3>Basic Plan</h3>
                  <div className="plancon-iner">
                    <div className="price d-flex justify-content-center">
                      <span
                        style={{
                          color: "#E4189F",
                          fontSize: 20,
                          marginRight: 3
                        }}
                      >
                        ₹
                      </span>
                      <h2>{planList.free?.price === 0 ? '0.00': planList.free?.price}</h2>
                    </div>
                    <span
                      style={{
                        position: "relative",
                        marginLeft: 5,
                        color: "#8E8E8E"
                      }}
                    >
                      &nbsp;
                    </span>
                    {formData.planDetail && formData.planDetail.plan_id?._id === planList.free?._id ?
                    <Link to="#" className="button select-plan">
                      Active Plan
                    </Link>
                    :
                    <>
                    <Link to="#" className="button select-plan whitebtnn" onClick={(e) => selectPaln(e, planList.free)}>
                      Select Plan
                    </Link>
                    </>
                    }
                    <hr />
                    <div className="paln-features text-start">
                      <p>Package Features</p>
                      <ul className="plan-feat-ul">
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Create profile and set partner preferences
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Basic search access
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />{" "}
                          View limited number of profiles per day
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Chat only profile is interested
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Limited visibility in match suggestions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan-box">
                <div className="most-popular">
                  <p>Most Popular</p>
                </div>
                <div className="hheadings-2 text-center">
                  <h3>Gold Plan</h3>
                  <div className="plancon-iner">
                    <div className="price d-flex justify-content-center flex-wrap">
                      <span
                        style={{
                          color: "#E4189F",
                          fontSize: 20,
                          marginRight: 3
                        }}
                      >
                        ₹
                      </span>
                      <h2>{planList.gold?.price}</h2>
                    </div>
                    <span
                      style={{
                        position: "relative",
                        marginLeft: 5,
                        color: "#8E8E8E"
                      }}
                    >
                      Validity 6 months
                    </span>
                    {formData.planDetail && formData.planDetail.plan_id?._id === planList.gold?._id ?
                    
                    <Link to="#" className="button select-plan">
                      Active Plan
                    </Link>
                    :
                    <>
                    <Link to="#" className="button select-plan whitebtnn " onClick={(e) => selectPaln(e, planList.gold)}>
                      Select Plan
                    </Link>
                    </>
                    }
                    <hr />
                    <div className="paln-features text-start">
                      <p>Package Features</p>
                      <ul className="plan-feat-ul ">
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Full access of profile view
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Voice and video calling feature
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Send 50 messages
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          View 100 contacts
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Profile highlight for 3 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan-box">
                <div className="hheadings-2 text-center">
                  <h3>Premium Plan</h3>
                  <div className="plancon-iner">
                    <div className="price d-flex justify-content-center">
                      <span
                        style={{
                          color: "#E4189F",
                          fontSize: 20,
                          marginRight: 3
                        }}
                      >
                        ₹
                      </span>
                      <h2>{planList.premium?.price}</h2>
                    </div>
                    <span
                      style={{
                        position: "relative",
                        marginLeft: 5,
                        color: "#8E8E8E"
                      }}
                    >
                      Validity 1 Year
                    </span>
                    {formData.planDetail && formData.planDetail.plan_id?._id === planList.premium?._id ?
                    <Link to="#" className="button select-plan">
                      Active Plan
                    </Link>
                    :
                    <>
                    <Link to="#" className="button select-plan whitebtnn" onClick={(e) => selectPaln(e, planList.premium)}>
                      Select Plan
                    </Link>
                    </>
                    }
                    <hr />
                    <div className="paln-features text-start">
                      <p>Package Features</p>
                      <ul className="plan-feat-ul">
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Full access of profile view
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Voice and video calling feature
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Unlimited messages
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          View 300 contacts
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Profile highlight for 7 days
                        </li>
                        <li>
                          <img
                            src="assets/img/icons/check-circle2.png"
                            alt=""
                          />
                          Dedicated manager
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan-box vip-plan">
                <div className="hheadings-2 text-center">
                  <h3>VIP Shaadi</h3>
                  <div className="plancon-iner">
                    <div className="price d-flex justify-content-center">
                      <span
                        style={{
                          color: "#E4189F",
                          fontSize: 20,
                          marginRight: 3
                        }}
                      >
                        ₹
                      </span>
                      <h2>{planList.vip?.price}</h2>
                    </div>
                    <span
                      style={{
                        position: "relative",
                        marginLeft: 5,
                        color: "#8E8E8E"
                      }}
                    >
                      Validity Till Shaadi
                    </span>
                    {formData.planDetail && formData.planDetail.plan_id?._id === planList.vip?._id ?
                    
                    <Link to="#" className="button select-plan">
                      Active Plan
                    </Link>
                    :
                    <>
                    <Link to="#" className="button select-plan" onClick={(e) => selectPaln(e, planList.vip)}>
                      Select Plan
                    </Link>
                    </>
                    }
                    <hr />
                    <div className="paln-features text-start">
                      <p>Package Features</p>
                      <ul className="plan-feat-ul">
                        <li>
                          <i className="fa-solid fa-circle-check" /> Handpicked
                          high-profile matches
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check" /> Guaranteed
                          introductions
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check" />{" "}
                          Confidential handling
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check" /> Dedicated
                          manager
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="style-h3-plans" style={{}}>
            Select any plan and after that make payment of that particular plan
          </h3>
        </div>
      </div>
    </div>
  </section>
  <div className="section">
    <div className="plan-banner">
      <div className="container-fluid  con-flu-padd-2">
        <div className="row">
          <div className="col-md-4 plan-ban-img">
            <img src="assets/img/plan-banner-img.png" alt="" />
          </div>
          <div className="col-md-8">
            <div className="con-banner">
              <h2 className="express-head">Express Yourself Better with</h2>
              <h2 className="plan-ban-head-2">Our Membership Plans</h2>
            </div>
            <div className="con-banner-plans">
              <div className="bg-banner-plan">
                <h5>A Relationship Manager is assigned to you who</h5>
                <ul className="plan-feat-ul-sm">
                  <li>
                    <img src="assets/img/cheack-circle-pink.png" alt="" />
                    Works on your profile to ensure it gets noticed
                  </li>
                  <li>
                    <img src="assets/img/cheack-circle-pink.png" alt="" />
                    Understands qualities that you are looking for in your
                    desired partner
                  </li>
                  <li>
                    <img src="assets/img/cheack-circle-pink.png" alt="" />
                    Sends Interests to handpicked profiles matching your
                    criteria
                  </li>
                  <li>
                    <img src="assets/img/cheack-circle-pink.png" alt="" />
                    Contacts profiles shortlisted by you and arrange meetings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div className="benifit">
      <div className="container-fluid con-flu-padd-2">
        <div className="box-benifits justify-content-center text-center">
          <div className="head-beanifits ">
            <h3>Paid Membership Benefits?</h3>
          </div>
          <p>
            Choose your membership plan now to find your partner! With a paid
            membership, you can seamlessly connect with your prospects and get
            more responses. Here are some key benefits:
          </p>
          <div className="col-12">
            <div className="row icon-beni-ss" style={{ margin: "40px 0px" }}>
              <div className="col-md-3">
                <div className="plan-benefit">
                  <img src="assets/img/icons/icon-banifits-1.png" alt="" />
                  <h6>Make unlimited voice/video calls</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plan-benefit">
                  <img src="assets/img/icons/icon-benifit-2.png" alt="" />
                  <h6>Get spotlights for better visibility</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plan-benefit">
                  <img src="assets/img/icons/icon-benifit-3.png" alt="" />
                  <h6>View contact details of the members</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plan-benefit">
                  <img src="assets/img/icons/icon-benifit-4.png" alt="" />
                  <h6>Show your contact details to other members</h6>
                </div>
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

export default Package
