import React, { useEffect, useRef, useState } from 'react'
import HeaderUser from '../components/homePage/HeaderUser'
import FooterPage from '../components/homePage/FooterPage'
import InboxLeftSideBar from '../components/inbox/InboxLeftSideBar'
import { useSelector } from 'react-redux';
import { ageCalculate, decimalToFeetInches } from '../utils/utils'
import { Link } from 'react-router-dom';
import ConfirmPopup from '../components/homePage/ConfirmPopup';

function Inbox() {
const [pageTitle, setPageTitle] = useState("");
const { userDetailLogin } = useSelector((state) => state.auth);
const [meneberList, setMemberList] = useState([]);
const modalConfirmRef = useRef(null)
const modalInstanceConfirm = useRef(null);
const [popupMessage, setPopupMessage] = useState("")
const [partnerValueId, setPartnerValueId] = useState("")
const [memberValueId, setMemberValueId] = useState("")
const [memberValueStatus, setMemberValueStatus] = useState("")
const [showButton, setShowButton] = useState(1)
const endpoint = window.location.pathname.split("/").filter(Boolean).pop();

const title = {
sent: "Request Sent",
accepted: "Accepted",
received: "Received",
decline: "Decline"
};

// list fetch
const listMember = async (pageType) => {
try {
const response = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/inbox`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pageType: pageType,
                member_id: userDetailLogin._id,
            }),
        });

const data = await response.json();

if (response.ok) {
    setMemberList(data.data);
} else {
console.error("Error fetching members:", data.error || data.message);
}
} catch (error) {
console.error("Fetch failed:", error);
}
};


//cancel request
const cancelRequestButton = async (partnerId) => {
try {
const response = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/cancel-request`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
member_id: userDetailLogin._id,
partner_id: partnerId,
}),
});

const data = await response.json();

if (response.ok) {
setPartnerValueId("")
setMemberList((prevList) =>
prevList.filter((member) => member?.partner_id?._id !== partnerId)
);
//console.log("Cancel successful:", data);
} else {
console.error("Error fetching members:", data.error || data.message);
}
} catch (error) {
console.error("Fetch failed:", error);
}
} 
const cancelRequest = async (partnerId) => {
//console.log(partnerId)
setPartnerValueId(partnerId)
setShowButton(1)
setPopupMessage('are you sure you want to cancel request?')   
modalInstanceConfirm.current?.show();    
};


useEffect(() => {
const newTitle = title[endpoint] || "Inbox";
setPageTitle(newTitle);
listMember(endpoint);

document.title = newTitle;
}, [endpoint]);


useEffect(() => {
// Initialize Bootstrap modal once (after first render)
const modalConfirmEl = document.getElementById("confirmPopupId");
if (modalConfirmEl) {
modalInstanceConfirm.current = new window.bootstrap.Modal(modalConfirmEl);
}


}, []);

const yesNoButton = (value) => {

//console.log('confirm', value)
if(value === 'Yes'){
//console.log('yes', partnerValueId)
cancelRequestButton(partnerValueId)
}
modalInstanceConfirm.current?.hide();
}

const changeStatusRequestButton = async (id, status) => {
try {
const response = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/user/status-change`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
id: id,
status:status,
}),
});

const data = await response.json();

if (response.ok) {
setMemberValueId("")
setMemberValueStatus("")
setMemberList((prevList) =>
prevList.filter((member) => member?._id !== id)
);
//console.log("Change request successful:", data);
} else {
console.error("Error fetching request:", data.error || data.message);
}
} catch (error) {
console.error("Fetch failed:", error);
}
}

const changeStatus = (id, status) => {
if(status === 'Accepted'){

changeStatusRequestButton(id, status)
} else {
setMemberValueId(id)
setMemberValueStatus(status)
setPopupMessage('are you sure you want to decline request?')
setShowButton(2)
modalInstanceConfirm.current?.show();
}

}

const yesNoStatusButton = (value) => {


if(value === 'Yes'){
//console.log('yes', partnerValueId)
changeStatusRequestButton(memberValueId, memberValueStatus)
}
modalInstanceConfirm.current?.hide();
}


return (
<>
<HeaderUser />
<ConfirmPopup ref={modalConfirmRef} message={popupMessage} yesNoButton={showButton === 2 ? yesNoStatusButton : yesNoButton} />



<section className="inrbnr">
<div className="container-fluid con-flu-padd">
    <div className="inrbnrContent">
        <h1>{pageTitle}</h1>
        <ul className="inrbrnNav">
            <li>
                <Link to="/dashboard">
                    <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/home.png`} alt="home icon" />
                </Link>
                <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/arrows.png`} alt="arrows icons" />
            </li>
            <li>
                <Link to="#">Inbox</Link>
                <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/arrows.png`} alt="arrows icons" />
            </li>
            <li>
                <Link to="#">{pageTitle}</Link>
            </li>
        </ul>
    </div>
</div>
</section>

<section>
<div className="register-sec ">
    <div className="container-fluid con-flu-padd  ">
        <div className="mx-2  ">
            <div className="row pb-20 pt-40">
                <div className="col-md-3 p-0 ">
                    <InboxLeftSideBar />
                    <div className="img-settings">
                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/setting-group.png`} alt="" />
                    </div>
                </div>
                <div className="col-md-9 set-pad-lef ">
                    <div className="heading-settings">
                        <h3>{pageTitle}</h3>
                    </div>
                    {meneberList && meneberList.length > 0 ? (
                        meneberList.map((member, index) => (
                        
                        (pageTitle === 'Received' || pageTitle === 'Accepted') ?
                        (
                                <>
                                <div className="col-12 mb-4" key={member._id || index} >
                            <div className="res-profiles inboxcont">
                                <div className="row">
                                    <div className="col-12 padi-res">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-9  ic-ver-res">
                                                <ul>
                                                    <li>
                                                        
                                                        <h4>
                                                                <Link to={`/profile-details/${member?.member_id?._id}`}>
                                                                    {member?.member_id?.name}
                                                                </Link>
                                                            </h4>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/verified.png`} alt="" />
                                                    </li>
                                                    <li className="profil-id-re">( ID :&nbsp;{member.member_id?.profile_id} )</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 col-md-3 res-fl   ">
                                                <ul className="justify-content-lg-end">
                                                    <li>
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/calender.png`} alt="" />
                                                    </li>
                                                    <li className=""> {new Date(member.createdAt).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "short"
                                                                    })}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 pad-res-2">
                                        <div className="row">
                                            <div className="col-lg-3 col-xl-2 col-md-4 pe-lg-0">
                                                <div className='inboximg'>
                                                    <Link to={`/profile-details/${member?.member_id?._id}`}>
                                                    <img src={member?.member_id?.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${member?.member_id?.photo}` : 'assets/img/no-image.jpg'} alt=""  />
                                                </Link>

                                                </div>
                                                    
                                                </div>
                                            <div className="col-lg-5 col-xl-7 col-md-8 col-xs-12">
                                                <div className="row">
                                                    <div className="col-xl-5 col-lg-12">
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Age / Height</span>:
                                                            {(member?.member_id?.dob || member?.member_id?.height)
                                                                ? `${member?.member_id?.dob ? ageCalculate(member?.member_id?.dob) : ""}${member?.member_id?.dob && member?.member_id?.height ? ", " : ""}${member?.member_id?.height ? decimalToFeetInches(member?.member_id.height) : ""}`
                                                                : ""}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Religion</span>: {member?.member_id?.religion?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Cast</span>: {member?.member_id?.caste?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Gotra</span>: {member?.member_id?.gotra?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Occupation</span>:
                                                            {member?.member_id?.occupation?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Location</span>:
                                                                {[member?.member_id?.loc_state?.name, member?.member_id?.loc_city?.name].filter(Boolean).join(", ")}
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-12">
                                                        <div className="profiledata-rowss marg-to d-flex align-items-start">
                                                            <span className="fieldname">Education</span>:
                                                                {member.member_id?.highest_degree?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Manglik</span>: {member?.member_id?.manglik}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Marriage Status</span>
                                                            :  {member?.member_id?.marital_status?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Income</span>:  {member?.member_id?.annual_income}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Job</span>: {member?.member_id?.working_with?.name}
                                                        </div>
                                                    </div>
                                                </div>
                                                {pageTitle === "Accepted" && (
                                                   <>
                                                   { 
                                                    
                                                    /* <p className="invit-res">
                                                        Change your mind ? <Link to="#">Cancel Request</Link> 
                                                    </p>
                                                    */ }
                                                    </>
                                                )}
                                                {pageTitle === "Decline" && (
                                                    <p className="invit-res">
                                                        You requested her on {new Date(member.createdAt).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "short"
                                                                    })}
                                                    </p>
                                                )}
                                                {pageTitle === "Received" && (
                                                    <p className="invit-res">
                                                        <Link to="#" style={{cursor:'default'}}>   Invitation Received on {new Date(member.createdAt).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "short",
                                                                        // year:"numeric"
                                                                    })}
                                                    </Link>
                                                    </p>
                                                )}
                                                {pageTitle === "Request Sent" && (
                                                    <p className="invit-res">
                                                        Change your mind ? <Link to="#">Cancel Request</Link>
                                                    </p>
                                                )}

                                            </div>
                                            <div className="col-lg-4 col-xs-12 col-md-6 col-xl-3">
                                                <div className="bg-ic-ress text-center px-3">
                                                    {pageTitle === 'Accepted' &&
                                                    (<div className="butt-res-acc"> <p> Upgrade To <br /> Connect Directly </p> <button className="call"> <Link to="#"> <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/call-192_svgrepo.com.png`} alt="" /> Call Now </Link> </button> <br /> <button className="whatsapp"> <Link to="#">
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/whatsapp-color_svgrepo.com.png`} alt="" /> Whatsapp </Link>
                                                    </button> <br />
                                                        <button className="chat"> <Link to="#">
                                                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/call-192_svgrepo.com.png`} alt="" /> Vivashri Chat </Link>
                                                        </button> <br />
                                                    </div>
                                                    )}

                                                    {pageTitle === "Received" && (
                                                        <div className="butt-res-acc">
                                                            <button className="accept">
                                                                <Link to="#" onClick={() => changeStatus(member._id, 'Accepted')}>
                                                                    <img
                                                                        src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/check-circle_svgrepo.com.png`}
                                                                        alt=""
                                                                    />
                                                                    Accept
                                                                </Link>
                                                            </button>
                                                            <br />
                                                            <button className="delet">
                                                                <Link to="#" onClick={() => changeStatus(member._id, 'Declined')}>
                                                                    <img
                                                                        src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/delete_svgrepo.com.png`}
                                                                        alt=""
                                                                    />
                                                                    Decline
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    )}

                                                    {pageTitle === "Request Sent" && (
                                                        <div className="butt-res-acc">
                                                            <button className="cancel-req my-5" onClick={() => cancelRequest(member?.member_id?._id)}>
                                                                <Link to="#">Cancel Request</Link>
                                                            </button>
                                                            <br />
                                                        </div>
                                                    )}

                                                    {pageTitle === "Decline" && (
                                                        <div className="butt-res-acc">
                                                            <button className="cancel-req my-5" style={{cursor:'unset'}}>
                                                                Declined
                                                            </button>
                                                            <br />
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                                </>

                        )
                        :

                        pageTitle === 'Decline' ?

                        <>
                        <div className="col-12 mb-4" key={member._id || index} >
                            <div className="res-profiles inboxcont">
                                <div className="row">
                                    <div className="col-12 padi-res">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-9  ic-ver-res">
                                                <ul>
                                                    <li>
                                                        
                                                        <h4>
                                                                <Link to={`/profile-details/${member?.member_id?._id}`}>
                                                                    {member?.member_id?.name}
                                                                </Link>
                                                            </h4>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/verified.png`} alt="" />
                                                    </li>
                                                    <li className="profil-id-re">( ID :&nbsp;{member.member_id?.profile_id} )</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 col-md-3 res-fl   ">
                                                <ul className="justify-content-lg-end">
                                                    <li>
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/calender.png`} alt="" />
                                                    </li>
                                                    <li className=""> {new Date(member.createdAt).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "short"
                                                                    })}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 pad-res-2">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4">
                                                <div className='inboximg'>
                                                    <Link to={`/profile-details/${member?.member_id?._id}`}>
                                                    <img src={member?.member_id?.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${member?.member_id?.photo}` : 'assets/img/no-image.jpg'} alt=""  />
                                                </Link>

                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-8 col-xs-12">
                                                <div className="row">
                                                    <div className="col-xl-5 col-lg-12">
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Age / Height</span>:
                                                            {(member?.member_id?.dob || member?.member_id?.height)
                                                                ? `${member?.member_id?.dob ? ageCalculate(member?.member_id?.dob) : ""}${member?.member_id?.dob && member?.member_id?.height ? ", " : ""}${member?.member_id?.height ? decimalToFeetInches(member?.member_id.height) : ""}`
                                                                : ""}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Religion</span>: {member?.member_id?.religion?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Cast</span>: {member?.member_id?.caste?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Gotra</span>: {member?.member_id?.gotra?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Occupation</span>:
                                                            {member?.member_id?.occupation?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Location</span>:
                                                                {[member?.member_id?.loc_state?.name, member?.member_id?.loc_city?.name].filter(Boolean).join(", ")}
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-12">
                                                        <div className="profiledata-rowss marg-to d-flex align-items-start">
                                                            <span className="fieldname">Education</span>:
                                                                {member.member_id?.highest_degree?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Manglik</span>: {member?.member_id?.manglik}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Marriage Status</span>
                                                            :  {member?.member_id?.marital_status?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Income</span>:  {member?.member_id?.annual_income}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Job</span>: {member?.member_id?.working_with?.name}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                                    <p className="invit-res">
                                                        {member?.member_id?.gender === 'Male' ? 'He':'She'} declined your invitation, This member cannot be contacted.
                                                    </p>
                                                
                                                

                                            </div>
                                            <div className="col-lg-4 col-xs-12 col-md-6 col-xl-3">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </>

                        :
                        (                                        
                        <div className="col-12 mb-4" key={member._id || index} >
                            <div className="res-profiles inboxcont">
                                <div inboxcont className="row">
                                    <div className="col-12 padi-res">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-9  ic-ver-res">
                                                <ul>
                                                    <li>
                                                        
                                                        <h4>
                                                                <Link to={`/profile-details/${member?.partner_id?._id}`}>
                                                                    {member?.partner_id?.name}
                                                                </Link>
                                                            </h4>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/verified.png`} alt="" />
                                                    </li>
                                                    <li className="profil-id-re">( ID :&nbsp;{member.partner_id?.profile_id} )</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 col-md-3 res-fl   ">
                                                <ul className="justify-content-lg-end">
                                                    <li>
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/calender.png`} alt="" />
                                                    </li>
                                                    <li className=""> {new Date(member.createdAt).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "short"
                                                                    })}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 pad-res-2">
                                        <div className="row">

                                            <div className="col-lg-3 col-xl-2 col-md-4 pe-lg-0">
                                                <div className='inboximg'>
                                                    <Link to={`/profile-details/${member?.partner_id?._id}`}>
                                                            <img src={member?.partner_id?.photo ? `${process.env.REACT_APP_BASE_URL_IMAGE}${member?.partner_id?.photo}` : 'assets/img/no-image.jpg'} alt="" />
                                                        </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-xl-7 col-md-8 col-xs-12">
                                                <div className="row">
                                                    <div className="col-xl-5 col-lg-12">
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Age / Height</span>:
                                                            {(member?.partner_id?.dob || member?.partner_id?.height)
                                                                ? `${member?.partner_id?.dob ? ageCalculate(member?.partner_id?.dob) : ""}${member?.partner_id?.dob && member?.partner_id?.height ? ", " : ""}${member?.partner_id?.height ? decimalToFeetInches(member?.partner_id.height) : ""}`
                                                                : ""}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Religion</span>: {member?.partner_id?.religion?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Cast</span>: {member?.partner_id?.caste?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Gotra</span>: {member?.partner_id?.gotra?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Occupation</span>:
                                                            {member?.partner_id?.occupation?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Location</span>:
                                                                {[member?.partner_id?.loc_state?.name, member?.partner_id?.loc_city?.name].filter(Boolean).join(", ")}
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-12">
                                                        <div className="profiledata-rowss marg-to d-flex align-items-start">
                                                            <span className="fieldname">Education</span>:
                                                                {member.partner_id?.highest_degree?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Manglik</span>: {member?.partner_id?.manglik}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Marriage Status</span>
                                                            :  {member?.partner_id?.marital_status?.name}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Income</span>:  {member?.partner_id?.annual_income}
                                                        </div>
                                                        <div className="profiledata-rowss d-flex align-items-start">
                                                            <span className="fieldname">Job</span>: {member?.partner_id?.working_with?.name}
                                                        </div>
                                                    </div>
                                                </div>
                                                {pageTitle === "Accepted" && (
                                                    <p className="invit-res">
                                                        Change your mind ? Cancel Request 
                                                    </p>
                                                )}
                                                {pageTitle === "Decline" && (
                                                    <p className="invit-res">
                                                        You requested her on {new Date(member.createdAt).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "short"
                                                                    })}
                                                    </p>
                                                )}
                                                {pageTitle === "Received" && (
                                                    <p className="invit-res">
                                                        Invitation Received on {new Date(member.createdAt).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "short"
                                                                    })}
                                                    </p>
                                                )}
                                                {pageTitle === "Request Sent" && (
                                                    <p className="invit-res">
                                                        Change your mind ? <Link to="#" onClick={() => cancelRequest(member?.partner_id?._id)}>Cancel Request</Link>
                                                    </p>
                                                )}

                                            </div>
                                            <div className="col-lg-4 col-xs-12 col-md-6 col-xl-3">
                                                <div className="bg-ic-ress text-center px-3">
                                                    {pageTitle === 'Accepted' &&
                                                    (<div className="butt-res-acc"> <p> Upgrade To <br /> Connect Directly </p> <button className="call"> <Link to="#"> <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/call-192_svgrepo.com.png`} alt="" /> Call Now </Link> </button> <br /> <button className="whatsapp"> <Link to="#">
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/whatsapp-color_svgrepo.com.png`} alt="" /> Whatsapp </Link>
                                                    </button> <br />
                                                        <button className="chat"> <Link to="#">
                                                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/call-192_svgrepo.com.png`} alt="" /> Vivashri Chat </Link>
                                                        </button> <br />
                                                    </div>
                                                    )}

                                                    {pageTitle === "Received" && (
                                                        <div className="butt-res-acc">
                                                            <button className="accept">
                                                                <Link to="#">
                                                                    <img
                                                                        src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/check-circle_svgrepo.com.png`}
                                                                        alt=""
                                                                    />
                                                                    Accept
                                                                </Link>
                                                            </button>
                                                            <br />
                                                            <button className="delet">
                                                                <Link to="#">
                                                                    <img
                                                                        src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/delete_svgrepo.com.png`}
                                                                        alt=""
                                                                    />
                                                                    Delete
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    )}

                                                    {pageTitle === "Request Sent" && (
                                                        <div className="butt-res-acc">
                                                            <button className="cancel-req my-5" onClick={() => cancelRequest(member?.partner_id?._id)}>
                                                                <Link to="#">Cancel Request</Link>
                                                            </button>
                                                            <br />
                                                        </div>
                                                    )}

                                                    {pageTitle === "Decline" && (
                                                        <div className="butt-res-acc">
                                                            <button className="cancel-req my-5">
                                                                <Link to="#">Cancel Request</Link>
                                                            </button>
                                                            <br />
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                                                )


                    ))
                    ) : (
                    <p className="text-center text-gray-500">No members found</p>
                    )}
                </div>
            </div>
        </div>
    </div>
</div>
</section>


<FooterPage />
</>
)
}

export default Inbox
