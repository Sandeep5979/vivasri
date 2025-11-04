import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AadhaarOtp, AadhaarVerification, AboutUs, BasicDetails, BasicSearch, ContactInformation, ContactUs, Dashboard, EducationDetail, FamilyDetail, HomePage, ImageUpload, LocationDetail, MyProfile, NoMatch, PartnerBasicDetail, PartnerQualities, ProfileDetail, Registration, RegistrationSuccess, ReligionPage, SearchProfile, SendOtp, } from "../pages";
import Inbox from "../pages/Inbox";
import Package from "../pages/Package";





export default function Router() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search-profile" element={<SearchProfile />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/registration/:userId" element={<Registration />} />
            <Route path="/send-otp" element={<SendOtp />} />
            <Route path="/send-otp/:userId" element={<SendOtp />} />
            <Route path="/basic-details" element={<BasicDetails />} />
            <Route path="/basic-details-edit" element={<BasicDetails />} />
            <Route path="/contact-information" element={<ContactInformation />} />
            <Route path="/contact-information-edit" element={<ContactInformation />} />
            <Route path="/aadhaar-verification" element={<AadhaarVerification />} />
            <Route path="/aadhaar-otp" element={<AadhaarOtp />} />
            <Route path="/registration-success" element={<RegistrationSuccess />} />
            <Route path="/religion" element={<ReligionPage />} />
            <Route path="/religion-edit" element={<ReligionPage />} />
            <Route path="/location-detail" element={<LocationDetail />} />
            <Route path="/location-detail-edit" element={<LocationDetail />} />
            <Route path="/family-detail" element={<FamilyDetail />} />
            <Route path="/family-detail-edit" element={<FamilyDetail />} />
            <Route path="/education-detail" element={<EducationDetail />} />
            <Route path="/education-detail-edit" element={<EducationDetail />} />
            <Route path="/profile-photo" element={<ImageUpload />} />
            <Route path="/profile-photo-edit" element={<ImageUpload />} />
            <Route path="/partner-qualities" element={<PartnerQualities />} />
            <Route path="/partner-basic-detail" element={<PartnerBasicDetail />} />
            <Route path="/partner-basic-detail-edit" element={<PartnerBasicDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/my-profile/partner" element={<MyProfile />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/basic-search" element={<BasicSearch />} />
            <Route path="/advance-search" element={<BasicSearch />} />
            <Route path="/profile-details/:profileId" element={<ProfileDetail />} />
            <Route path="/inbox/received" element={<Inbox />} />
            <Route path="/inbox/accepted" element={<Inbox />} />
            <Route path="/inbox/decline" element={<Inbox />} />
            <Route path="/inbox/sent" element={<Inbox />} />
            <Route path="/my-matches" element={<SearchProfile />} />
            <Route path="/today-matches" element={<SearchProfile />} />
            <Route path="/near-me" element={<SearchProfile />} />
            <Route path="/search-profile/:caste" element={<SearchProfile />} />
            <Route path="/membership-plan" element={<Package />} />
            
            
          </Routes>
    </BrowserRouter>
    
    </>
  );
}
