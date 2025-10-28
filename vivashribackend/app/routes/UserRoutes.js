import express from "express";
import { aadhaarVerification, basicProfile, contactInformation, getUserDetailList, getUserDetailListAll, getUserHomeDetailList, userEducationDetail, userFamilyDetail, userHomeRegistration, userLocationDetail, userPartnerBasicDetail, userPartnerQualities, userProfilePhoto, userProfilePhotoAdd, userRegistration, userRegistrationLogin, userReligion, userVerifyOtp, validateBasicProfile } from "../controllers/front/UserController.js";
import { authJwt } from "../middlewares/index.js";
import { sendInterest, getInbox, cancelRequest } from "../controllers/front/UserActivityController.js"
const router = express.Router();

//router.route("/").get(authJwt.verifyToken, getAllUserList);

router.route("/user-detail-all/:id").get(getUserDetailListAll);
router.route("/user-detail/:id").get(getUserDetailList);
router.route("/registration").post(userRegistration);
router.route("/verify-otp").post(userVerifyOtp);
//router.route("/basic-profile").post(basicProfile);
router.post("/basic-profile", validateBasicProfile, basicProfile);
router.post("/contact-information", contactInformation);
router.post("/aadhaar-verification", aadhaarVerification);
router.post("/religion", userReligion);
router.post("/location-detail", userLocationDetail);
router.post("/family-detail", userFamilyDetail);
router.post("/education-detail", userEducationDetail);
router.post("/profile-photo", userProfilePhoto);
router.post("/profile-photo-user", userProfilePhotoAdd);
router.post("/partner-qualities", userPartnerQualities);
router.post("/partner-basic-detail", userPartnerBasicDetail);
router.route("/registration-login").post(userRegistrationLogin);
router.route("/home-registration").post(userHomeRegistration);
router.route("/user-home-detail/:id").get(getUserHomeDetailList);
router.route("/sent-interest").post(sendInterest);
router.route("/inbox").post(getInbox);
router.route("/cancel-request").post(cancelRequest);

export default router;

