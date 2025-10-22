import React, { useEffect, useRef, useState } from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function ImageUpload() {

  const location = useLocation();
  const { userDetailLogin } = useSelector((state) => state.auth);
  
  const { userDetail } = useSelector((state) => state.auth);
const navigate = useNavigate();
const [formData, setFormData] = useState({});
const [error, setError] = useState({})
const [previewUrl, setPreviewUrl] = useState(null);
const [previewUrl1, setPreviewUrl1] = useState(null);
const [previewUrl2, setPreviewUrl2] = useState(null);
const [previewUrl3, setPreviewUrl3] = useState(null);
const [previewUrl4, setPreviewUrl4] = useState(null);
const ImageRef = useRef();
const ImageRef1 = useRef();
const ImageRef2 = useRef();
const ImageRef3 = useRef();
const ImageRef4 = useRef();
const [isLoading, setIsLoading] = useState(false)
const [isScroll, setIsScroll] = useState(false)

const handleChange = (e) => {
    const { name, files } = e.target;
    
    
    if (name === "photo" || name === "photo1" || name === "photo2" || name === "photo3" || name === "photo4") {
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

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if(name === 'photo'){
            setPreviewUrl(reader.result);
          }
          if(name === 'photo1'){
            setPreviewUrl1(reader.result);
          }
          if(name === 'photo2'){
            setPreviewUrl2(reader.result);
          }
          if(name === 'photo3'){
            setPreviewUrl3(reader.result);
          }
          if(name === 'photo4'){
            setPreviewUrl4(reader.result);
          }
          
        };
        reader.readAsDataURL(file);
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]:files[0],
      }));
      return;
    }
    
    


    if (error[name]) {
      setError(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
  };


  const fetchUserDetail = async (userId) => {
    
    const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/user-detail/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){
      setFormData({
        photo:data.data[0].photo,
        photo1:data.data[0].photo1,
        photo2:data.data[0].photo2,
        photo3:data.data[0].photo3,
        photo4:data.data[0].photo4,

      })

    }

  }

useEffect(() => {
  if(userDetail?._id){
  fetchUserDetail(userDetail._id)
  }

  if(location.pathname === '/profile-photo-edit'){
    if(userDetailLogin?._id){
      fetchUserDetail(userDetailLogin._id)
    } else {
      navigate('/')
    }

  }

}, [userDetail])


const validate = () => {
    const errs = {};
    
    if (!formData.photo) errs.photo = "Photo 1 is required";
    
    
    

    setError(errs);
    return Object.keys(errs).length === 0;
  };

const handleSubmit = async (e) => {
    e.preventDefault();
     if (!validate()){
        setIsScroll(true)
       return;
     }
    setIsLoading(true)

     let userId;
     if(location.pathname === '/profile-photo-edit'){
      
      userId = userDetailLogin._id
     } else {
      userId = userDetail._id

     }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("id", userId);
     if (formData.photo) formDataToSubmit.append("photo", formData.photo);
     if (formData.photo1) formDataToSubmit.append("photo1", formData.photo1);
     if (formData.photo2) formDataToSubmit.append("photo2", formData.photo2);
     if (formData.photo3) formDataToSubmit.append("photo3", formData.photo3);
     if (formData.photo4) formDataToSubmit.append("photo4", formData.photo4);
    
     const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/profile-photo`, {
        method: "POST",
        body: formDataToSubmit,
        
      });

      const data = await res.json();
      setIsLoading(false)
      if(data.status){
      //dispatch(verifyOtp(data));

      if (ImageRef.current) {
          ImageRef.current = null;
        }
        if (ImageRef1.current) {
          ImageRef1.current = null;
        }
        if (ImageRef2.current) {
          ImageRef2.current = null;
        }
        if (ImageRef3.current) {
          ImageRef3.current = null;
        }
        if (ImageRef4.current) {
          ImageRef4.current = null;
        }
        if(location.pathname === '/profile-photo-edit'){
          navigate('/dashboard')
        } else {
          navigate('/partner-qualities')
        }
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

  
  useEffect(() => {
      
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsScroll(false)
      
    }, [isScroll]);
  
  return (
    <>
      <HeaderPage />

        <>
  <section className="inrbnr">
    <div className="container-fluid con-flu-padd">
      <div className="inrbnrContent">
        <h1>Profile Photo</h1>
        <ul className="inrbrnNav">
          <li>
            <a href="index.html">
              <img src="assets/img/icons/home.png" alt="home icon" />
            </a>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <a href="/#"> Login/Register</a>
            <img src="assets/img/icons/arrows.png" alt="arrows icons" />
          </li>
          <li>
            <a href="/#">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* Section End */}
  <section>
  <div className="register-sec ">
    
     <form onSubmit={handleSubmit} encType="multypart/form-data">
    
    <div className="container-fluid con-flu-padd  ">
      <div className="container-fluid  bg-register ">
        <div className="row pb-50 pt-40">
          <div className="col-md-12 p-0">
            <div className="con-reg">
              <h3>Upload Profile Photo</h3>
              <div className="restrictions py-3">
                <ul className="">
                  <li>1. Maximum image upload size:&nbsp;10 MB.</li>
                  <li>2. Recommended dimensions:&nbsp;576 x 709 px.</li>
                  <li>📌 Photo 1 is mandatory to upload.</li>
                </ul>
              </div>
              <div className=" images-boxes  ">
                <div className="row ">
                  <div className="col-md-2 img-box m-3">
                    <img
                      src={previewUrl ? previewUrl : formData.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo}`:`assets/img/register/image-picture_svgrepo.com.png`}
                      alt=""
                      width={68}
                      height={68}
                    />
                    <div className="button-up">
                      <div className="upload-btn-wrapper">
                        <button className="btn" type='button'>
                          {/* Upload Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 15v4H5v-4H3v4c0 1.1.9 2 
                                                  2 2h14c1.1 0 2-.9 2-2v-4h-2zm-7-9
                                                  l-5 5h3v4h4v-4h3l-5-5z"
                            />
                          </svg>
                          Select image
                        </button>
                        <input type="file" accept="image/*"
                        name="photo"
                        onChange={handleChange}
                        ref={ImageRef}
                        />
                      </div>
                      {/* <button><img src="assets/img/upload_svgrepo.com.png" alt="">Select image </button> */}
                    </div>
                    <p>width : 576px, Height : 709px.</p>
                    {error.photo && <p className="error">{error.photo}</p>}
                  </div>
                  <div className=" col-md-2 img-box m-3 ">
                    <img
                      src={previewUrl1 ? previewUrl1 : formData.photo1 ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo1}` :`assets/img/register/image-picture_svgrepo.com.png`}
                      alt=""
                      width={68}
                      height={68}
                    />
                    <div className="upload-btn-wrapper">
                      <button className="btn" type='button'>
                        {/* Upload Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 15v4H5v-4H3v4c0 1.1.9 2 
                                                  2 2h14c1.1 0 2-.9 2-2v-4h-2zm-7-9
                                                  l-5 5h3v4h4v-4h3l-5-5z"
                          />
                        </svg>
                        Select image
                      </button>
                      <input type="file" accept="image/*" 
                      name="photo1"
                        onChange={handleChange}
                        ref={ImageRef1}
                      />
                    </div>
                    <p>width : 576px, Height : 709px.</p>
                  </div>
                  <div className=" col-md-2 img-box m-3  ">
                    <img
                      src={previewUrl2 ? previewUrl2 : formData.photo2 ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo2}` : `assets/img/register/image-picture_svgrepo.com.png`}
                      alt=""
                      width={68}
                      height={68}
                    />
                    <div className="upload-btn-wrapper">
                      <button className="btn" type='button'>
                        {/* Upload Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 15v4H5v-4H3v4c0 1.1.9 2 
                                                  2 2h14c1.1 0 2-.9 2-2v-4h-2zm-7-9
                                                  l-5 5h3v4h4v-4h3l-5-5z"
                          />
                        </svg>
                        Select image
                      </button>
                      <input type="file" accept="image/*" 
                      name="photo2"
                        onChange={handleChange}
                        ref={ImageRef2}
                      />
                    </div>
                    <p>width : 576px, Height : 709px.</p>
                  </div>
                  <div className="col-md-2 img-box m-3 im-boxes-b2 ">
                    <img
                      src={previewUrl3 ? previewUrl3 : formData.photo3 ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo3}` : `assets/img/register/image-picture_svgrepo.com.png`}
                      alt=""
                      width={68}
                      height={68}
                    />
                    <div className="upload-btn-wrapper">
                      <button className="btn" type='button'>
                        {/* Upload Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 15v4H5v-4H3v4c0 1.1.9 2 
                                                  2 2h14c1.1 0 2-.9 2-2v-4h-2zm-7-9
                                                  l-5 5h3v4h4v-4h3l-5-5z"
                          />
                        </svg>
                        Select image
                      </button>
                      <input type="file" accept="image/*" 
                      name="photo3"
                        onChange={handleChange}
                        ref={ImageRef3}
                      />
                    </div>
                    <p>width : 576px, Height : 709px.</p>
                  </div>
                  <div className="col-md-2 img-box m-3 ">
                    <img
                      src={previewUrl4 ? previewUrl4 : formData.photo4 ? `${process.env.REACT_APP_BASE_URL_IMAGE}${formData.photo4}` : `assets/img/register/image-picture_svgrepo.com.png`}
                      alt=""
                      width={68}
                      height={68}
                    />
                    <div className="upload-btn-wrapper">
                      <button className="btn" type='button'>
                        {/* Upload Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 15v4H5v-4H3v4c0 1.1.9 2 
                                                  2 2h14c1.1 0 2-.9 2-2v-4h-2zm-7-9
                                                  l-5 5h3v4h4v-4h3l-5-5z"
                          />
                        </svg>
                        Select image
                      </button>
                      <input type="file" accept="image/*" 
                      name="photo4"
                        onChange={handleChange}
                        ref={ImageRef4}
                      />
                    </div>
                    <p>width : 576px, Height : 709px.</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="btn-uplod text-center">
                    
                    <button disabled={isLoading}>
                          {isLoading ? "Wait..." : "Upload Images"}
                      
                      
                        
                      
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
</section>


</>


      <FooterPage />
    </>
  )
}

export default ImageUpload
