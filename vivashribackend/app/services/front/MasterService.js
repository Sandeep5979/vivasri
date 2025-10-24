import CasteModel from "../../models/CasteModel.js";
import CityModel from "../../models/CityModel.js";
import ComplexionModel from "../../models/ComplexionModel.js";
import CountryModel from "../../models/CountryModel.js";
import DietModel from "../../models/DietModel.js";
import EducationModel from "../../models/EducationModel.js";
import GotraModel from "../../models/GotraModel.js";
import HobbiesModel from "../../models/HobbiesModel.js";
import LanguageModel from "../../models/LanguageModel.js";
import LookingForModel from "../../models/LookingForModel.js";
import MaritalStatusModel from "../../models/MaritalStatusModel.js";
import OccupationModel from "../../models/OccupationModel.js";
import ProfessionalEducationModel from "../../models/ProfessionalEducationModel.js";
import ReligionModel from "../../models/ReligionModel.js";
import StateModel from "../../models/StateModel.js";
import SubCasteModel from "../../models/SubCasteModel.js";
import WorkingWithModel from "../../models/WorkingWithModel.js";



export const getAllLookingForList = async () => {
    return await LookingForModel.find({ status: 'Active' });
};
export const getAllReligionList = async () => {
    return await ReligionModel.find({ status: 'Active' });
};
export const getAllCasteList = async (religion_id=null) => {
    let condition = { status: 'Active' };
    
    if (religion_id) {
        condition.religion_id = religion_id;
    }

    return await CasteModel.find(condition);
};
export const getAllSubCasteList = async (caste_id=null) => {
    let condition = { status: 'Active' };
    
    if (caste_id) {
        condition.caste_id = caste_id;
    }

    return await SubCasteModel.find(condition);
};
export const getAllComplexionList = async () => {
    return await ComplexionModel.find({ status: 'Active' });
};
export const getAllDietList = async () => {
    return await DietModel.find({ status: 'Active' });
};
export const getAllHobbiesList = async () => {
    return await HobbiesModel.find({ status: 'Active' });
};
export const getAllMaritalStatusList = async () => {
    return await MaritalStatusModel.find({ status: 'Active' });
};
export const getAllCountryList = async () => {
    return await CountryModel.find({ status: 'Active' });
};
export const getAllStateList = async (country_id=null) => {
    let condition = { status: 'Active' };
    
    if (country_id) {
        condition.country_id = country_id;
    }

    return await StateModel.find(condition);
};
export const getAllCityList = async (state_id=null) => {
    let condition = { status: 'Active' };
    
    if (state_id) {
        condition.state_id = state_id;
    }

    return await CityModel.find(condition);
};

export const getAllLanguageList = async () => {
    return await LanguageModel.find({ status: 'Active' });
};
export const getAllEducationList = async () => {
    return await EducationModel.find({ status: 'Active' });
};
export const getAllEducationTypeList = async (typeId) => {
    
    //console.log(typeId)
   return await EducationModel.find({ status: 'Active', education_type:parseInt(typeId) });
};
export const getAllProfessionalEducationList = async () => {
    return await ProfessionalEducationModel.find({ status: 'Active' });
};
export const getAllOccupationList = async () => {
    return await OccupationModel.find({ status: 'Active' });
};
export const getAllWorkingWithList = async () => {
    return await WorkingWithModel.find({ status: 'Active' });
};
export const getAllGotraList = async (religion_id=null) => {
    let condition = { status: 'Active' };
    
    if (religion_id) {
        condition.religion_id = religion_id;
    }
    return await GotraModel.find(condition);
};