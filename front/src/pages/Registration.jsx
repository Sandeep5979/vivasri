import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../store/authActions";
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeaderUser from '../components/homePage/HeaderUser';


function Registration() {
  const { userId } = useParams();
  const { userDetailLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "" });
  const dispatch = useDispatch();
  const { otpSent, loading, error } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setError] = useState("");
  

useEffect(() => {

if(otpSent){
  //console.log('okkkkkkkkkkkkkkk')
  //setIsLoading(false)
  //navigate('/send-otp')

}

}, [otpSent, navigate])

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    
  };

 const handleSubmit = async (e) => {
  //console.log(formData)  
  setIsLoading(true)
  e.preventDefault();
    //dispatch(registerUser(formData));

    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/registration`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            credentials: "include"

        });
    
          const data = await res.json();
          setIsLoading(false)
          if(data.status){
            dispatch(registerUser(data));
            
            if(data.page){
             // console.log('okkkkkkkkkkkkkkkk', data)
             //navigate(`/${data.page}`)
             document.location.href=`/${data.page}`
            } else {
              if(userId){
              navigate(`/send-otp/${userId}`)
              } else {
              navigate(`/send-otp`)  
              }
            }
          
            
    
           
          } else {
            setError(data.message)
          }

    
  };

useEffect(() => {
    if(userDetailLogin?._id){
      document.location.href=`/dashboard`
    }

   }, [userDetailLogin])


   const fetchUserDetail = async (userId) => {
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-home-detail/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      //console.log(data)
      if(data.status){
        
      setFormData({

        email:data.data[0].mobile,
      })

    }

  }

useEffect(() => {
    if(userId){
      fetchUserDetail(userId)

    }

   }, [userId])

  return (
    <>
      { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }
        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Register </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Register</Link>
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
          <div className="row pb-70">
            <div className="col-12 p-0">
              <div className="headings">
                <h2>Find Your Soulmate</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-box">
                <img src="assets/img/register/subh-vivah.png" alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="con-reg">
                <h3>Member Registration</h3>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <form onSubmit={handleSubmit}>
                <div className="form ">
                  <p>Mobile No. / Email Id</p>
                  
                    <input type="text" placeholder="Mobile No. / Email Id" name="email" onChange={handleChange} value={formData.email} required />
                  {
                  error && <p className='error'>{error}</p>
                  
                  }
                  {errors && <p className='error'>{errors}</p>}
                  <p className="preag-not">
                    We will send you an One Time Password on this Mobile
                    No./Email ID you entered
                  </p>
                  <button type='submit' disabled={isLoading}>
                          {isLoading ? "Wait..." : "Send OTP"}
                    
                      
                    
                  </button>
                  
                </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ic-con">
                <h3 className="">Why Register?</h3>
                <p>Exclusive Options From our Lovers</p>
                <div className="col-12">
                  <div className="line-bg" />
                </div>
                <div className="ic-img-con d-flex">
                  <div className="img-ic">
                    <img src="assets/img/register/file-search_.png" alt="" />
                  </div>
                  <div className="ic-cons">
                    <span>Lots of Genuine Profilesfor Marriage</span>
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

export default Registration
