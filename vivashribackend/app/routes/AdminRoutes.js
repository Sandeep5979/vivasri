import express from "express";
import { getAllAdminList } from "../controllers/AdminController.js";
import { lookingForCreate, lookingForGetAll, lookingForGetById, lookingForRemove, lookingForUpdate } from "../controllers/admin/LookingForController.js";
import { religionCreate, religionGetAll, religionGetById, religionRemove, religionUpdate } from "../controllers/admin/ReligionController.js";
import { casteCreate, casteGetAll, casteGetById, casteRemove, casteUpdate } from "../controllers/admin/CasteController.js";
import { subCasteCreate, subCasteGetAll, subCasteGetById, subCasteRemove, subCasteUpdate } from "../controllers/admin/SubCasteController.js";
import { gotraCreate, gotraGetAll, gotraGetById, gotraRemove, gotraUpdate } from "../controllers/admin/GotraController.js";
import { maritalStatusCreate, maritalStatusGetAll, maritalStatusGetById, maritalStatusRemove, maritalStatusUpdate } from "../controllers/admin/MaritalStatusController.js";
import { complexionCreate, complexionGetAll, complexionGetById, complexionRemove, complexionUpdate } from "../controllers/admin/ComplexionController.js";
import { hobbiesCreate, hobbiesGetAll, hobbiesGetById, hobbiesRemove, hobbiesUpdate } from "../controllers/admin/HobbiesController.js";
import { stateCreate, stateGetAll, stateGetById, stateRemove, stateUpdate } from "../controllers/admin/StateController.js";
import { cityCreate, cityGetAll, cityGetById, cityRemove, cityUpdate } from "../controllers/admin/CityController.js";
import { dietCreate, dietGetAll, dietGetById, dietRemove, dietUpdate } from "../controllers/admin/DietController.js";
import { countryCreate, countryGetAll, countryGetById, countryRemove, countryUpdate } from "../controllers/admin/CountryController.js";
import { languageCreate, languageGetAll, languageGetById, languageRemove, languageUpdate } from "../controllers/admin/LanguageController.js";
import { educationCreate, educationGetAll, educationGetById, educationRemove, educationUpdate } from "../controllers/admin/EducationController.js";
import { professionalEducationCreate, professionalEducationGetAll, professionalEducationGetById, professionalEducationRemove, professionalEducationUpdate } from "../controllers/admin/ProfessionalEducationController.js";
import { occupationCreate, occupationGetAll, occupationGetById, occupationRemove, occupationUpdate } from "../controllers/admin/OccupationController.js";
import { memberEnquiryCreate, memberEnquiryGetAll, memberEnquiryGetById, memberEnquiryUpdate, memberEnquiryRemove } from "../controllers/admin/MemberEnquiryController.js";
import { workingWithCreate, workingWithGetAll, workingWithGetById, workingWithRemove, workingWithUpdate } from "../controllers/admin/WorkingWithController.js";

const router = express.Router();

router.route("/").get(getAllAdminList);

router.route("/looking-for").get(lookingForGetAll);
router.route("/looking-for/:id").get(lookingForGetById);
router.route("/looking-for/create").post(lookingForCreate);
router.route("/looking-for/update/:id").post(lookingForUpdate);
router.route("/looking-for/delete/:id").delete(lookingForRemove);

router.route("/religion").get(religionGetAll);
router.route("/religion/:id").get(religionGetById);
router.route("/religion/create").post(religionCreate);
router.route("/religion/update/:id").post(religionUpdate); 
router.route("/religion/delete/:id").delete(religionRemove);

router.route("/caste").get(casteGetAll);
router.route("/caste/:id").get(casteGetById);
router.route("/caste/create").post(casteCreate);
router.route("/caste/update/:id").post(casteUpdate); 
router.route("/caste/delete/:id").delete(casteRemove);

router.route("/sub-caste").get(subCasteGetAll);
router.route("/sub-caste/:id").get(subCasteGetById);
router.route("/sub-caste/create").post(subCasteCreate);
router.route("/sub-caste/update/:id").post(subCasteUpdate); 
router.route("/sub-caste/delete/:id").delete(subCasteRemove);

router.route("/gotra").get(gotraGetAll);
router.route("/gotra/:id").get(gotraGetById);
router.route("/gotra/create").post(gotraCreate);
router.route("/gotra/update/:id").post(gotraUpdate); 
router.route("/gotra/delete/:id").delete(gotraRemove);


router.route("/marital-status").get(maritalStatusGetAll);
router.route("/marital-status/:id").get(maritalStatusGetById);
router.route("/marital-status/create").post(maritalStatusCreate);
router.route("/marital-status/update/:id").post(maritalStatusUpdate); 
router.route("/marital-status/delete/:id").delete(maritalStatusRemove);

router.route("/complexion").get(complexionGetAll);
router.route("/complexion/:id").get(complexionGetById);
router.route("/complexion/create").post(complexionCreate);
router.route("/complexion/update/:id").post(complexionUpdate); 
router.route("/complexion/delete/:id").delete(complexionRemove);


router.route("/hobbies").get(hobbiesGetAll);
router.route("/hobbies/:id").get(hobbiesGetById);
router.route("/hobbies/create").post(hobbiesCreate);
router.route("/hobbies/update/:id").post(hobbiesUpdate); 
router.route("/hobbies/delete/:id").delete(hobbiesRemove);

router.route("/country").get(countryGetAll);
router.route("/country/:id").get(countryGetById);
router.route("/country/create").post(countryCreate);
router.route("/country/update/:id").post(countryUpdate); 
router.route("/country/delete/:id").delete(countryRemove);

router.route("/state").get(stateGetAll);
router.route("/state/:id").get(stateGetById);
router.route("/state/create").post(stateCreate);
router.route("/state/update/:id").post(stateUpdate); 
router.route("/state/delete/:id").delete(stateRemove);

router.route("/city").get(cityGetAll);
router.route("/city/:id").get(cityGetById);
router.route("/city/create").post(cityCreate);
router.route("/city/update/:id").post(cityUpdate); 
router.route("/city/delete/:id").delete(cityRemove);

router.route("/diet").get(dietGetAll);
router.route("/diet/:id").get(dietGetById);
router.route("/diet/create").post(dietCreate);
router.route("/diet/update/:id").post(dietUpdate); 
router.route("/diet/delete/:id").delete(dietRemove);

router.route("/language").get(languageGetAll);
router.route("/language/:id").get(languageGetById);
router.route("/language/create").post(languageCreate);
router.route("/language/update/:id").post(languageUpdate); 
router.route("/language/delete/:id").delete(languageRemove);

router.route("/education").get(educationGetAll);
router.route("/education/:id").get(educationGetById);
router.route("/education/create").post(educationCreate);
router.route("/education/update/:id").post(educationUpdate); 
router.route("/education/delete/:id").delete(educationRemove);

router.route("/professional-education").get(professionalEducationGetAll);
router.route("/professional-education/:id").get(professionalEducationGetById);
router.route("/professional-education/create").post(professionalEducationCreate);
router.route("/professional-education/update/:id").post(professionalEducationUpdate); 
router.route("/professional-education/delete/:id").delete(professionalEducationRemove);

router.route("/occupation").get(occupationGetAll);
router.route("/occupation/:id").get(occupationGetById);
router.route("/occupation/create").post(occupationCreate);
router.route("/occupation/update/:id").post(occupationUpdate); 
router.route("/occupation/delete/:id").delete(occupationRemove);

router.route("/member-enquiry").get(memberEnquiryGetAll);
router.route("/member-enquiry/:id").get(memberEnquiryGetById);
router.route("/member-enquiry/create").post(memberEnquiryCreate);
router.route("/member-enquiry/update/:id").post(memberEnquiryUpdate); 
router.route("/member-enquiry/delete/:id").delete(memberEnquiryRemove);

router.route("/working-with").get(workingWithGetAll);
router.route("/working-with/:id").get(workingWithGetById);
router.route("/working-with/create").post(workingWithCreate);
router.route("/working-with/update/:id").post(workingWithUpdate); 
router.route("/working-with/delete/:id").delete(workingWithRemove);

export default router;
