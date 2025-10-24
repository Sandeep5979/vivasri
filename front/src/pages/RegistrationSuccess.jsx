import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { registerUserLogin } from '../store/authActions';
import HeaderUser from '../components/homePage/HeaderUser';

function RegistrationSuccess() {

const dispatch = useDispatch()
  const navigate = useNavigate();
const { userDetail } = useSelector((state) => state.auth);
const { userDetailLogin } = useSelector((state) => state.auth);
const [formData, setFormData] = useState({});
const [isLoading, setIsLoading] = useState(false)


  const fetchUserDetail = async (userId) => {
          
          const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              });
      
            const data = await res.json();
            if(data.status){
            
              setFormData({
              email:data.data[0].email ? data.data[0].email : data.data[0].mobile,
              name:data.data[0].name
             
      
            })
      
          }
      
        }
      
      useEffect(() => {
        if(userDetail?._id){
        fetchUserDetail(userDetail._id)
        }
      
      }, [userDetail])

const handleSubmitOTPButton = async (e) => {
  
  e.preventDefault();
    //dispatch(registerUser(formData));
    setIsLoading(true)
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/registration-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            credentials: "include"

        });
    
          const data = await res.json();
          setIsLoading(false)
          //console.log(data)
           
           dispatch(registerUserLogin(data));
            
          document.location.href=`/my-profile`
          
            
    
           
          

    
  };

  return (
    <>
     { userDetailLogin?._id ? <HeaderUser /> : <HeaderPage /> }

    <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Registration Success </h1>
        <ul className="inrbrnNav">
          <li>
            <Link to={userDetailLogin?._id ? '/dashboard':'/'}>
              <img src="assets/img/icons/home.png" alt="home icon" />
            </Link>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          
          <li>
            <Link to="#">Registration Success</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
  <div className="register-sec ">
  <div className="container-fluid con-flu-padd">
    <div className="container-fluid  bg-register">
      <div className="row pb-50 pt-40 text-center">
        <div className="col-lg-8 offset-lg-2">
          <div className="registercomplete">
            <div className="text-center ic-success">
              <img
                src="assets/img/check-animation.gif"
                alt=""
                style={{ maxHeight: 150 }}
              />
              <p className="textanim1">Thank you for registering</p>
              <p className="textanim2">
                <span>{formData.name}</span>
              </p>
              <h2 className="textanim">Welcome To VIVASHRI</h2>
              <div className="cont-skip-butt">
                <button className="count-profile">
                  <Link style={{ color: "white" }} to="/religion">
                  Continue to Complete Profile
                </Link>
                </button>
                <button className="con-skip">
                  <Link style={{ color: "white" }} to="#" onClick={handleSubmitOTPButton}>
                  Skip
                </Link>
                </button>
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

export default RegistrationSuccess
