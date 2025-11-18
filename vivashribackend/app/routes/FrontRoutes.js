import express from "express";
import { getAllCasteMasterList, getAllCasteMasterListMulti, getAllCityMasterList, getAllCityMasterListMulti, getAllComplexionMasterList, getAllCountryMasterList, getAllDietMasterList, getAllEducationMasterList, getAllEducationTypeMasterList, getAllGotraMasterList, getAllHobbiesMasterList, getAllLanguageMasterList, getAllLookingForMasterList, getAllMaritalStatusMasterList, getAllOccupationMasterList, getAllProfessionalEducationMasterList, getAllReligionMasterList, getAllSearchProfileList, getAllStateMasterList, getAllStateMasterListMulti, getAllSubCasteMasterList, getAllUserOccupationMasterList, getAllUserOrganizationMasterList, getAllWorkingWithMasterList, getHomeBrideGroomList, getHomeMenuCasteList, getMembershipPlanList } from "../controllers/front/MasterController.js";
import { adminLogin } from "../controllers/admin/AdminController.js"



const router = express.Router();

router.route("/admin-login").post(adminLogin);

router.route("/looking-for").get(getAllLookingForMasterList);
router.route("/religion").get(getAllReligionMasterList);
router.route("/caste").get(getAllCasteMasterList);
router.route("/caste/:religion_id").get(getAllCasteMasterList);
router.route("/caste-multi").post(getAllCasteMasterListMulti);
router.route("/sub-caste").get(getAllSubCasteMasterList);
router.route("/sub-caste/:caste_id").get(getAllSubCasteMasterList);
router.route("/complexion").get(getAllComplexionMasterList);
router.route("/diet").get(getAllDietMasterList);
router.route("/hobbies").get(getAllHobbiesMasterList);
router.route("/marital-status").get(getAllMaritalStatusMasterList);
router.route("/country").get(getAllCountryMasterList);
router.route("/state").get(getAllStateMasterList);
router.route("/state/:country_id").get(getAllStateMasterList);
router.route("/state-multi").post(getAllStateMasterListMulti);
router.route("/city").get(getAllCityMasterList);
router.route("/city/:state_id").get(getAllCityMasterList);
router.route("/city-multi").post(getAllCityMasterListMulti);
router.route("/language").get(getAllLanguageMasterList);
router.route("/education").get(getAllEducationMasterList);
router.route("/education/:id").get(getAllEducationTypeMasterList);
router.route("/professional-education").get(getAllProfessionalEducationMasterList);
router.route("/occupation").get(getAllOccupationMasterList);
router.route("/working-with").get(getAllWorkingWithMasterList);
router.route("/occupation-user").get(getAllUserOccupationMasterList);
router.route("/organization-user").get(getAllUserOrganizationMasterList);
router.route("/search-list").post(getAllSearchProfileList);
router.route("/gotra").get(getAllGotraMasterList);
router.route("/gotra/:religion_id").get(getAllGotraMasterList);
router.route("/bride-groom-list").post(getHomeBrideGroomList);
router.route("/menu-caste-list").post(getHomeMenuCasteList);
router.route("/membership-plan-list").get(getMembershipPlanList);


export default router;