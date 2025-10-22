import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AadhaarOtp, AadhaarVerification, AboutUs, BasicDetails, BasicSearch, ContactInformation, ContactUs, Dashboard, EducationDetail, FamilyDetail, HomePage, ImageUpload, LocationDetail, MyProfile, NoMatch, PartnerBasicDetail, PartnerQualities, Registration, RegistrationSuccess, ReligionPage, SearchProfile, SendOtp, } from "../pages";






export default function Router() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search-profile" element={<SearchProfile />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/send-otp" element={<SendOtp />} />
            <Route path="/basic-details" element={<BasicDetails />} />
            <Route path="/basic-details-edit" element={<BasicDetails />} />
            <Route path="/contact-information" element={<ContactInformation />} />
            <Route path="/contact-information-edit" element={<ContactInformation />} />
            <Route path="/aadhaar-verification" element={<AadhaarVerification />} />
            <Route path="/aadhaar-otp" element={<AadhaarOtp />} />
            <Route path="/registration-success" element={<RegistrationSuccess />} />
            <Route path="/religion" element={<ReligionPage />} />
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
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/basic-search" element={<BasicSearch />} />
            <Route path="*" element={<NoMatch />} />
            
          </Routes>
    </BrowserRouter>
    
    </>
  );
}
