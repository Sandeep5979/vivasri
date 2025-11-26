import React from 'react'
import { ageCalculate, decimalToFeetInches } from '../../utils/utils';
import { Link } from 'react-router-dom';

function SearchProfileList({searchData, sendInterest, showPopUpButton, showInterest, planDetailUser, totalUserSentInterest, expiryDate}) {
  
 // console.log('inner', planDetailUser, totalUserSentInterest, expiryDate)
 let blurPhoto = 0 
 if(!planDetailUser || Object.keys(planDetailUser).length === 0  || planDetailUser?.plan_id?.name === 'Basic' || (planDetailUser?.plan_id?.name === 'Gold' && totalUserSentInterest >= 50) || (expiryDate && (planDetailUser?.plan_id?.name === 'Gold' || planDetailUser?.plan_id?.name === 'Premium'))){
    //console.log('blur photo')
    blurPhoto = 1
  }
  
    return (
    <>
     { searchData && searchData?.length > 0 ? (
                
                  searchData.map((searchList, index) => {

                    let profilePhoto;
                    if(searchList.profile_photo === 1){
                      profilePhoto = searchList.photo
                      if(blurPhoto === 1){
                      profilePhoto = searchList.photo_blur  
                      }
                    } else if(searchList.profile_photo === 2){
                      profilePhoto = searchList.photo1
                      if(blurPhoto === 1){
                      profilePhoto = searchList.photo1_blur  
                      }
                    } else if(searchList.profile_photo === 3){
                      profilePhoto = searchList.photo2
                      if(blurPhoto === 1){
                      profilePhoto = searchList.photo2_blur  
                      }
                    } else if(searchList.profile_photo === 4){
                      profilePhoto = searchList.photo3
                      if(blurPhoto === 1){
                      profilePhoto = searchList.photo3_blur  
                      }
                    } else if(searchList.profile_photo === 5){
                      profilePhoto = searchList.photo4
                      if(blurPhoto === 1){
                      profilePhoto = searchList.photo4_blur  
                      }
                    } else {
                      profilePhoto = searchList.photo
                      if(blurPhoto === 1){
                      profilePhoto = searchList.photo_blur  
                      }
                    }
                    

                  return (

                <div className="profilelist-box d-md-flex align-items-md-start justify-content-md-start mb-2">
                  <div className="profilelist-img">
                    <Link to="#" onClick={(e) =>showPopUpButton(e, `/profile-details/${searchList._id}`)}>
                    <img src={profilePhoto ? `${process.env.REACT_APP_BASE_URL_IMAGE}${profilePhoto}` : 'assets/img/no-image.jpg'} alt="" width={223} />
                    </Link>
                  </div>
                  <div className="profilelist-det">
                    <h2>
                      <Link to="#" onClick={(e) =>showPopUpButton(e, `/profile-details/${searchList._id}`)}>
                       {searchList.name}{" "} 
                       
                      </Link>&nbsp;
                     
                      <span>
                         <img src="assets/img/icons/verified.png" alt="" />
                      </span>
                    </h2>
                    { /* <h6 className="pinkhd">Profile ID : 600155</h6> */ }
                    <div className="profilelist-detwhite d-md-flex align-items-md-stretch justify-content-md-between">
                      <div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Age / Height</span>: {(searchList?.dob || searchList?.height)
  ? `${searchList?.dob ? ageCalculate(searchList.dob) : ""}${searchList?.dob && searchList?.height ? ", " : ""}${searchList?.height ? decimalToFeetInches(searchList.height) : ""}`
  : ""}
                          
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Religion</span>: {searchList.religion?.name}
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Occupation</span>: {searchList?.occupation?.name}
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Location</span>: {[searchList?.loc_state?.name, searchList?.loc_city?.name].filter(Boolean).join(", ")}
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Education</span>: {searchList.highest_degree?.name}
                        </div>
                        <div className="profiledata-row d-flex align-items-start  mb-2">
                          <span className="fieldname">Manglik Status</span>: {searchList.manglik}
                        </div>
                      </div>
                      <div>
                        
                        {!planDetailUser || planDetailUser?.plan_id?.name === 'Basic' ? null :
                        <div className="profilelist-pinkbox">
                            {showInterest ?
                            
                            <>
                            {searchList?.interest_sent ? (
                                <span>
                                 <p class="upgradepara text-center"><Link to="#">Upgrade</Link> to Contact her directly</p>
                                    <Link to="#" class="button callnow-btn mb-2">
                                    <i class="fa-solid fa-phone"></i> Call Now</Link>
                                    <Link to="#" class="button callnow-btn"><i class="fa-regular fa-comment"></i> Chat Now</Link>
                                </span>
                              ) : (
                                <>
                                <button
                                  className="button expressint-btn mb-2"
                                   onClick={() => sendInterest(searchList._id, index)}
                                >
                                  Express Interest
                                </button>

                                
                                </>
                              )}

                              </>
                              :
                          

                          <Link
                            to="#" 
                            onClick={(e) =>showPopUpButton(e, `/profile-details/${searchList._id}`)}
                            className="button viewpro-btn"
                          >
                            <img src="assets/img/icons/eye.png" alt="" /> View
                            Profile
                          </Link>
                  }
                        </div>
                  }

                      </div>
                    </div>
                  </div>
                </div>

                  )


                })
              ):(
                 
                <div className="profilelist-box d-md-flex align-items-md-start justify-content-md-start mb-2">
                  No profile found
                </div>
                
              ) 
            }
    </>
  )
}

export default SearchProfileList
