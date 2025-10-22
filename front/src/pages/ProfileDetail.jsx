import React from 'react'
import HeaderPage from '../components/homePage/HeaderPage'
import FooterPage from '../components/homePage/FooterPage'

function ProfileDetail() {
  return (
    <>
    <HeaderPage />

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
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={0}
                  className="active"
                />
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={1}
                />
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={2}
                />
                <button
                  type="button"
                  data-bs-target="#profileCarousel"
                  data-bs-slide-to={3}
                />
              </div>
              {/* Slides */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {" "}
                  <img
                    src="assets/img/profile/prof-det1.jpg"
                    className=""
                    alt="Profile 1"
                  />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img
                    src="assets/img/profile/prof-det1.jpg"
                    className=""
                    alt="Profile 2"
                  />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img
                    src="assets/img/profile/prof-det1.jpg"
                    className=""
                    alt="Profile 3"
                  />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img
                    src="assets/img/profile/prof-det1.jpg"
                    className=""
                    alt="Profile 4"
                  />{" "}
                </div>
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
                Miss. Savitri Mujol{" "}
                <span className="pinkhd">(ID : 600155)</span>
              </h2>
              <div className="mobverified">
                <span>
                  <img src="assets/img/icons/verified.png" alt="" />
                </span>{" "}
                Mobile No. &amp; Email Verified
              </div>
              <div className="profcretby">Profile created by Myself </div>
              <div className="profilelist-detwhite d-md-flex align-items-md-stretch justify-content-md-between">
                <div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Age </span> : 22{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Religion </span> : Hindu{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Manglik Status </span> : No{" "}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Height </span> : 22, 5ft
                        2in{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Marital Status </span> :
                        Single{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Occupation </span> : Make
                        Up Artist{" "}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Location </span> : Delhi,
                        NCR{" "}
                      </div>
                      <div className="profiledata-row d-flex align-items-start  mb-2">
                        {" "}
                        <span className="fieldname"> Education </span> :
                        Master’s Degree in Pol Science{" "}
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
                  <a href="">Pay Now</a>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
        <div className="col-lg-9">
          <div className="astroDetailsWrap detailbdrcont">
            <div className="navWrapper">
              <ul className="navcontaienr gap-2 d-flex flex-wrap ">
                <li>
                  {" "}
                  <a
                    className="navibtn active"
                    data-target="#detpro"
                    href="#detpro"
                  >
                    {" "}
                    <img src="assets/img/icons/detpro-icon.png" alt="" />{" "}
                    Detailed Profile{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    className="navibtn"
                    data-target="#parterpre"
                    href="#parterpre"
                  >
                    {" "}
                    <img src="assets/img/icons/handicon.png" alt="" /> Partner
                    Preference{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            {/* nav end */}
            <div className="sectionTop tabContentBox" id="detpro">
              <div className="wrapper">
                <ul className="opd-list">
                  <li>
                    {" "}
                    <img
                      className="icon-opd-title"
                      src="assets/img/icons/deticon1.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                    <div className="opd-title">About ID - 600155</div>
                    <p className="gray large lh15em mb10px cBlur">
                      My Sister is a smart and dynamic girl brought up with well
                      nurtured values. She is very humble and currently living
                      in india.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <img
                      className="icon-opd-title"
                      src="assets/img/icons/deticon2.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                    <div className="opd-title">Contact Details</div>
                    <ul className="opd-cd-list">
                      <li>
                        <div className="contact-icon">
                          {" "}
                          <img
                            src="assets/img/icons/mobileicon.png"
                            alt=""
                          />{" "}
                        </div>
                        <div className="contact-info">
                          {" "}
                          <span>Contact Number</span>{" "}
                          <strong>+91-9828XXXXXX</strong>{" "}
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
                          <span>Email ID</span>{" "}
                          <strong>xxxxxxxxxx@gmail.com</strong>{" "}
                        </div>
                      </li>
                    </ul>
                    <div className="opd-otvd">
                      <a href="/advertise/">
                        <span>Upgrade</span> to view Details
                      </a>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <img
                      className="icon-opd-title"
                      src="assets/img/icons/deticon3.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                    <div className="opd-title">Basic Info</div>
                    <ul className="opd-info-list">
                      <li>
                        {" "}
                        <span className="opd-lbl">Age / Height</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">
                            36 Yrs / 5' 00" (152 cm)
                          </span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Date of Birth</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">14-Sep-1988</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Gender</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Female</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Marital Status</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Never Married</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Have Children</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">
                            No Information Available
                          </span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Religion</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Sikh</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Caste</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Sandhu</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Sub Caste</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Gothra / Gothram</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Mother Tongue</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">
                            <a href="https://www.matrimonialsindia.com/shaadi/punjabi-matrimony.htm">
                              <span className="">Punjabi</span>
                            </a>
                          </span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Features</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Complexion</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Special Cases</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">None</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Blood Group</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Body Type</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Body Weight</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Location</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">India, Chandigarh</span>{" "}
                        </span>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <img
                      className="icon-opd-title"
                      src="assets/img/icons/deticon4.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                    <div className="opd-title">
                      Background and Religious Details
                    </div>
                    <ul className="opd-info-list">
                      <li>
                        {" "}
                        <span className="opd-lbl">Birth Time</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Place of Birth</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Country Of Birth</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Sun Sign</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Virgo [Kanyaa]</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Nakshatra</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Manglik Status</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Don't Know</span>{" "}
                        </span>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <img
                      className="icon-opd-title"
                      src="assets/img/icons/deticon5.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                    <div className="opd-title">Location</div>
                    <ul className="opd-info-list">
                      <li>
                        {" "}
                        <span className="opd-lbl">Immigration Status</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Country Residence</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">India</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Citizenship</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">City</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Chandigarh</span>{" "}
                        </span>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="pr">
                    {" "}
                    <img
                      className="icon-opd-title"
                      src="assets/img/icons/deticon6.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                    <div className="opd-title">Education and Profession</div>
                    <ul className="opd-info-list">
                      <li>
                        {" "}
                        <span className="opd-lbl">Education</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> Not Specified </span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Job Details</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Status</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Working With</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Annual Income</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Specific Degree</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="pr">
                    {" "}
                    <img
                      className="icon-opd-title"
                      src="assets/img/icons/deticon7.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                    <div className="opd-title">Family Details</div>
                    <ul className="opd-info-list">
                      <li>
                        {" "}
                        <span className="opd-lbl">Father</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Family Values</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Family Status</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Mother</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Family Type</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Native Place</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">No of Brothers</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">No of Sisters</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur"> ********</span>{" "}
                        </span>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <img
                      className="icon-opd-title"
                      src="assets/img/icons/deticon8.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                    <div className="opd-title">
                      Lifestyle, Interests and more{" "}
                    </div>
                    <ul className="opd-info-list">
                      <li>
                        {" "}
                        <span className="opd-lbl">Smoking</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Take Hard Drinks</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Eating Habit</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Vegetarian</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">House Ownership</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="opd-lbl">Living Situation</span>{" "}
                        <span className="opd-val ">
                          {" "}
                          <span className="cBlur">Not Specified</span>{" "}
                        </span>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* end */}
              </div>
            </div>
            {/* tab content end */}
            <div className="sectionTop tabContentBox" id="parterpre">
              <div className="wrapper pt-0">
                <h4 className="titletwo">Partner Preference</h4>
                <ul className="opd-pp-list">
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Age</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">35 to 43 Years</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Height</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">
                        5' 00" (152 cm) to 5' 04" (162 cm)
                      </span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Marital Status</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Never Married</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Religion</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Sikh</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Caste</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Sandhu</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Mother Tongue</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Punjabi</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Manglik Status</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Horoscope Required</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Special Case</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">None</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Country Living in</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">State Living in</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Citizenship</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Education</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Occupation</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Body Type</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Complexion</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Eating Habit</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Smoking Habit</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="opd-pp-lbl">Drinking Habit</span>{" "}
                    <span className="opd-pp-val">
                      {" "}
                      <span className="cBlur">Doesn't Matter</span>{" "}
                    </span>{" "}
                  </li>
                </ul>
              </div>
            </div>
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
