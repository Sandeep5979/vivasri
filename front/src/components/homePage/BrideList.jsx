import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../global.css"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ageCalculate, decimalToFeetInchesWithoutWord } from "../../utils/utils";




export default function BrideList({loginDetailPopup}) {

const [groomsBride, setGroomsBride] = useState([])

 

const fetchGroomBride = async () => {
   
     const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/bride-groom-list`, {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ gender:'bride' }),
           });
   
         const data = await res.json();
         if(data.status){
          //console.log('groombride',  data.data)
           setGroomsBride(data.data)
         }
   }
   
   useEffect(() => {
   fetchGroomBride()
   
   }, [])


   

  

   const loginDetail = (e, id) => {
    e.preventDefault();
    let url = `/profile-details/${id}`;
    loginDetailPopup(e,url)

   }


  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnHover: true,
    dots: false,
    arrows: false, // turn off built-in arrows
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1.5 } },
    ],
  };

  return (
    <>
     
    
    
    <Slider ref={sliderRef} {...settings}>
      
      {groomsBride && groomsBride.map((list, index) => {
        
                    let profilePhoto;
                    if(list.profile_photo === 1){
                      profilePhoto = list.photo
                    } else if(list.profile_photo === 2){
                      profilePhoto = list.photo1
                    } else if(list.profile_photo === 3){
                      profilePhoto = list.photo2
                    } else if(list.profile_photo === 4){
                      profilePhoto = list.photo3
                    } else if(list.profile_photo === 5){
                      profilePhoto = list.photo4
                    } else {
                      profilePhoto = list.photo
                    }
        
        return (
            <div className="item">
                      <div className="whats-new-sec wow fadeInUp animated">
                        <div className="inner-box">
                          <div className="whats-new-sec-img">
                            <Link to="#" onClick={(e) => loginDetail(e, list._id)}
                              className="button profiledet-btn"
                            >
                              <i className="fa-solid fa-magnifying-glass" /> View
                              Details
                            </Link>
                            <Link to="#" onClick={(e) => loginDetail(e, list._id)}>
                              <img src={profilePhoto ? `${process.env.REACT_APP_BASE_URL_IMAGE}${profilePhoto}` : 'assets/img/no-image.jpg'} alt="img" />
                            </Link>
                          </div>
                          <div className="whats-new-content">
                            <h6>
                              <Link to="#" onClick={(e) => loginDetail(e, list._id)}>{list.name}</Link>
                            </h6>
                            <ul>
                              {list.occupation?.name && 
                              <li> {(list.occupation?.name?.length > 20)
                                    ? list.occupation.name.slice(0, 20) + "..."
                                    : list.occupation?.name} </li>
                              }
                              {list.highest_degree?.name && 
                              <li> {(list.highest_degree?.name?.length > 20)
                                    ? list.highest_degree.name.slice(0, 20) + "..."
                                    : list.highest_degree?.name} </li>
                              }
                            </ul>
                            <p>
                              <span>{list?.height ? decimalToFeetInchesWithoutWord(list.height) : ""}</span> <span>{list?.dob ? ageCalculate(list.dob)+' years' : ""}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

        )})}
      
      


                    

              
    </Slider>
    
    <div className="owl-nav">
      <button onClick={() => sliderRef.current.slickPrev()} type="button" role="presentation" className="owl-prev"><i className="fa-solid fa-angle-left"></i></button>
      <button onClick={() => sliderRef.current.slickNext()} type="button" role="presentation" className="owl-next"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    
      </>
  );
}
