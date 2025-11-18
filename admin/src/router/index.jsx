import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import MemberList from "../pages/members/view_member/MemberList";
import ViewPaidMember from "../pages/members/view_paid_members/ViewPaidMember";
import MemberEnquiry from "../pages/members/member_enquiry/MemberEnquiry";

import Religion from "../pages/attribute/religion/Religion";
import Cast from "../pages/attribute/cast/Cast";
import SubCast from "../pages/attribute/sub_cast/SubCast";

import Country from "../pages/master/country/Country";
import State from "../pages/master/state/State";
import City from "../pages/master/city/City";

import Gotra from "../pages/attribute/gotra/Gotra";
import Language from "../pages/attribute/language/Language";
import Occupation from "../pages/attribute/occupation/Occupation";
import Hobbies from "../pages/attribute/hobbies/Hobbies";
import AddStaff from "../pages/staff/add_staff/AddStaff";
import ViewStaff from "../pages/staff/view_staff/ViewStaff";
import ViewLead from "../pages/view_leads/ViewLead";
import AddPlan from "../pages/membership_plans/add_plan/AddPlan";
import ViewPlan from "../pages/membership_plans/view_plan/ViewPlan";
import AddCoupon from "../pages/coupon/add_coupon/AddCoupon";
import ViewCoupon from "../pages/coupon/view_coupon/ViewCoupon";
import TransactionHistory from "../pages/transaction_history/TransactionHistory";
import AddTestimonials from "../pages/testimonials/add_testimnials/AddTestimonial";
import ViewTestimonials from "../pages/testimonials/view_testimonials/ViewTestimonials";
import Faq from "../pages/faq_help/Faq";
import Feedback from "../pages/feedback/Feedback";
import Disclaimer from "../pages/disclaimer/Disclaimer";
import PrivacyPolicy from "../pages/privacy_policy/PrivacyPolicy";
import TermsCondition from "../pages/terms_conditions/TermsCondition";
import Logout from "../pages/logout/Logout";
import WorkingWith from "../pages/attribute/workingwith/WorkingWith";
import Education from "../pages/attribute/education/Education";
import ProfessionalEducation from "../pages/attribute/professioaleducation/ProfessionalEducation";

export default function Router() {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected admin routes */}
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/members/new-member"
          element={<PrivateRoute><MemberList /></PrivateRoute>}
        />
        <Route
          path="/members/member-list"
          element={<PrivateRoute><MemberList /></PrivateRoute>}
        />
        <Route
          path="/members/paid-member-list"
          element={<PrivateRoute><ViewPaidMember /></PrivateRoute>}
        />
        <Route
          path="/members/member-enquiry"
          element={<PrivateRoute><MemberEnquiry /></PrivateRoute>}
        />
        <Route
          path="/master/country"
          element={<PrivateRoute><Country /></PrivateRoute>}
        />
        <Route
          path="/master/state"
          element={<PrivateRoute><State /></PrivateRoute>}
        />
        <Route
          path="/master/city"
          element={<PrivateRoute><City /></PrivateRoute>}
        />
        <Route
          path="/attribute/religion"
          element={<PrivateRoute><Religion /></PrivateRoute>}
        />
        <Route
          path="/attribute/cast"
          element={<PrivateRoute><Cast /></PrivateRoute>}
        />
        <Route
          path="/attribute/sub-cast"
          element={<PrivateRoute><SubCast /></PrivateRoute>}
        />
        <Route
          path="/attribute/gotra"
          element={<PrivateRoute><Gotra /></PrivateRoute>}
        />
        <Route
          path="/attribute/language"
          element={<PrivateRoute><Language /></PrivateRoute>}
        />
        <Route
          path="/attribute/occupation"
          element={<PrivateRoute><Occupation /></PrivateRoute>}
        />
        <Route
          path="/attribute/hobbies"
          element={<PrivateRoute><Hobbies /></PrivateRoute>}
        />
        <Route
          path="/attribute/working-with"
          element={<PrivateRoute><WorkingWith /></PrivateRoute>}
        />
        <Route
          path="/attribute/education"
          element={<PrivateRoute><Education /></PrivateRoute>}
        />
        <Route
          path="/attribute/professional-education"
          element={<PrivateRoute><ProfessionalEducation /></PrivateRoute>}
        />
        <Route
          path="/staff/add-staff"
          element={<PrivateRoute><AddStaff /></PrivateRoute>}
        />
        <Route
          path="/staff/view-staff"
          element={<PrivateRoute><ViewStaff /></PrivateRoute>}
        />
        <Route
          path="/view-lead"
          element={<PrivateRoute><ViewLead /></PrivateRoute>}
        />
        <Route
          path="/membership-plans/add-plan"
          element={<PrivateRoute><AddPlan /></PrivateRoute>}
        />
        <Route
          path="/membership-plans/view-plan"
          element={<PrivateRoute><ViewPlan /></PrivateRoute>}
        />
        <Route
          path="/coupon/add-coupon"
          element={<PrivateRoute><AddCoupon /></PrivateRoute>}
        />
        <Route
          path="/coupon/view-coupon"
          element={<PrivateRoute><ViewCoupon /></PrivateRoute>}
        />
        <Route
          path="/transaction-history"
          element={<PrivateRoute><TransactionHistory /></PrivateRoute>}
        />
        <Route
          path="/testimonials/add-testimonials"
          element={<PrivateRoute><AddTestimonials /></PrivateRoute>}
        />
        <Route
          path="/testimonials/view-testimonials"
          element={<PrivateRoute><ViewTestimonials /></PrivateRoute>}
        />
        <Route
          path="/faq"
          element={<PrivateRoute><Faq /></PrivateRoute>}
        />
        <Route
          path="/feedback"
          element={<PrivateRoute><Feedback /></PrivateRoute>}
        />
        <Route
          path="/disclaimer"
          element={<PrivateRoute><Disclaimer /></PrivateRoute>}
        />
        <Route
          path="/privacy-policy"
          element={<PrivateRoute><PrivacyPolicy /></PrivateRoute>}
        />
        <Route
          path="/terms-condition"
          element={<PrivateRoute><TermsCondition /></PrivateRoute>}
        />
        <Route
          path="/logout"
          element={<PrivateRoute><Logout /></PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}
