import mongoose from "mongoose";
import UserModel from "../../models/UserModel.js";
import { getAllCasteList, getAllCityList, getAllComplexionList, getAllCountryList, getAllDietList, getAllEducationList, getAllEducationTypeList, getAllGotraList, getAllHobbiesList, getAllLanguageList, getAllLookingForList, getAllMaritalStatusList, getAllOccupationList, getAllProfessionalEducationList, getAllReligionList, getAllStateList, getAllSubCasteList, getAllWorkingWithList } from "../../services/front/MasterService.js";
import ReligionModel from "../../models/ReligionModel.js";
import CasteModel from "../../models/CasteModel.js";
import StateModel from "../../models/StateModel.js";
import CityModel from "../../models/CityModel.js";
import SentInterest from "../../models/SentInterest.js";

function cmToFeetInches(cm) {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return Number(`${feet}.${inches}`);
}

export const getAllLookingForMasterList = async (req, res) => {
  try {
    const data = await getAllLookingForList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const getAllReligionMasterList = async (req, res) => {
  try {
    const data = await getAllReligionList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllCasteMasterList = async (req, res) => {
  try {
    
    const data = await getAllCasteList(req.params.religion_id);
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllCasteMasterListMulti = async (req, res) => {
  const { religion } = req.body 
  try {
      let query = { status: 'Active' };
      if (Array.isArray(religion)) {
      let religionArr = religion.filter(value => value != null && value !== "");
      if(religionArr.length > 0){
        
        query.religion_id = { $in: religionArr.map(id => new mongoose.Types.ObjectId(id)) };
      } else {
      return res.json({ status: false, data:[] });    
      }
    } else {
      return res.json({ status: false, data:[] });
    }
      const data = await CasteModel.find(query)
    //const data = await getAllCasteList(req.params.religion_id);
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllSubCasteMasterList = async (req, res) => {
  try {
    
    const data = await getAllSubCasteList(req.params.caste_id);
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllComplexionMasterList = async (req, res) => {
  try {
    const data = await getAllComplexionList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllDietMasterList = async (req, res) => {
  try {
    const data = await getAllDietList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllHobbiesMasterList = async (req, res) => {
  try {
    const data = await getAllHobbiesList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllMaritalStatusMasterList = async (req, res) => {
  try {
    const data = await getAllMaritalStatusList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllCountryMasterList = async (req, res) => {
  try {
    const data = await getAllCountryList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllStateMasterList = async (req, res) => {
  try {
    
    const data = await getAllStateList(req.params.country_id);
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllCityMasterList = async (req, res) => {
  try {
    
    const data = await getAllCityList(req.params.state_id);
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const getAllStateMasterListMulti = async (req, res) => {
  const { country } = req.body 
  try {
      let query = { status: 'Active' };
      if (Array.isArray(country)) {
      let countryArr = country.filter(value => value != null && value !== "");
      if(countryArr.length > 0){
        
        query.country_id = { $in: countryArr.map(id => new mongoose.Types.ObjectId(id)) };
      } else {
      return res.json({ status: false, data:[] });    
      }
    } else {
      return res.json({ status: false, data:[] });
    }
      const data = await StateModel.find(query)
    
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllCityMasterListMulti = async (req, res) => {
  const { state } = req.body 
  try {
      let query = { status: 'Active' };
      if (Array.isArray(state)) {
      let stateArr = state.filter(value => value != null && value !== "");
      if(stateArr.length > 0){
        
        query.state_id = { $in: stateArr.map(id => new mongoose.Types.ObjectId(id)) };
      } else {
      return res.json({ status: false, data:[] });    
      }
    } else {
      return res.json({ status: false, data:[] });
    }
      const data = await CityModel.find(query)
    
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};


export const getAllLanguageMasterList = async (req, res) => {
  try {
    const data = await getAllLanguageList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllEducationMasterList = async (req, res) => {
  try {
    const data = await getAllEducationList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllEducationTypeMasterList = async (req, res) => {
  try {
  const typeId = req.params.id
    const data = await getAllEducationTypeList(typeId);
    res.json({ status: true, data });
  } catch (err) {
   res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllProfessionalEducationMasterList = async (req, res) => {
  try {
    const data = await getAllProfessionalEducationList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllOccupationMasterList = async (req, res) => {
  try {
    const data = await getAllOccupationList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
export const getAllWorkingWithMasterList = async (req, res) => {
  try {
    const data = await getAllWorkingWithList();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const getAllUserOccupationMasterList = async (req, res) => {
  try {
    const data = await UserModel.aggregate([
                { $match: { status: "Active", occupation: { $nin: [null, ""] }  } },   
                { $group: { 
                    _id: "$occupation",             
                    users: { $push: "$$ROOT" }
                }},
                  
                { $project: {                       
                    occupation: "$_id"
                }},
                { $sort: { _id: 1 } }
              ]);
    
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const getAllUserOrganizationMasterList = async (req, res) => {
  try {
    const data = await UserModel.aggregate([
                { $match: { status: "Active", organization_name: { $nin: [null, ""] }  } },   
                { $group: { 
                    _id: "$organization_name",             
                    users: { $push: "$$ROOT" }
                }},
                  
                { $project: {                       
                    organization_name: "$_id"
                }},
                { $sort: { _id: 1 } }
              ]);
    
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};


export const getAllSearchProfileList = async (req, res) => {
  try {
    //const data = await getAllOccupationList();
    //console.log(req.body)
    const {looking, religion, caste, minAge, maxAge, searchMarital_status, searchGender, searchLanguage, searchManglik, searchCountry, searchState, searchCity, searchEducation, searchProfession, searchOccupation, searchAnnual_income, searchMinHeight, searchMaxHeight, searchProfile_id, searchOrganization, searchDiet, searchComplexion, searchManaged_by, searchHobbies, member_id, formDataMatch, brideGroom, page, sortBy} = req.body
    const arrLooking = looking?.split(',')
    //const arrReligion = religion?.split(',')
    const today = new Date();
    
    // console.log(formDataMatch)

    

    let query = {
    status: 'Active',
    
  };


if (arrLooking && arrLooking.length > 0) {
  query.profile_for = { $in: arrLooking };
}
/* if (arrReligion && arrReligion.length > 0) {
  query.religion = { $in: arrReligion };
}
  */
if (Array.isArray(religion)) {
  let religionArr = religion.filter(value => value != null && value !== "");
  if(religionArr.length > 0){
    
    query.religion = { $in: religionArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (religion && religion !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (religion && !mongoose.Types.ObjectId.isValid(religion)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(religion)) {
        query.religion = new mongoose.Types.ObjectId(religion);
      }
  }
}
if (Array.isArray(caste)) {
  let casteArr = caste.filter(value => value != null && value !== "");
  if(casteArr.length > 0){
    
    query.caste = { $in: casteArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (caste && caste !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (caste && !mongoose.Types.ObjectId.isValid(caste)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(caste)) {
        query.caste = new mongoose.Types.ObjectId(caste);
      }
  }
}

//console.log(searchMarital_status)
if (Array.isArray(searchMarital_status)) {
  let maritalStatusArr = searchMarital_status.filter(value => value != null && value !== "");
  if(maritalStatusArr.length > 0){
    
    query.marital_status = { $in: maritalStatusArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchMarital_status && searchMarital_status !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (searchMarital_status && !mongoose.Types.ObjectId.isValid(searchMarital_status)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchMarital_status)) {
        query.marital_status = new mongoose.Types.ObjectId(searchMarital_status);
      }
  }
}
//console.log('hhhhhhhhh', searchGender)
if (searchGender && searchGender !== '') {
   
    if (searchGender == 'Bride') {
      query.gender = 'Female';
    } else {
      query.gender = 'Male';
    }
}

if (searchLanguage && searchLanguage !== '') {
  const isValid = mongoose.Types.ObjectId.isValid(searchLanguage);
  if(isValid){
  query.partner_mother_tongue = new mongoose.Types.ObjectId(searchLanguage);
  } else {
  return res.json({ status: false,  data:[] });  
  }
}
if (searchManglik && searchManglik !== '') {
   
    query.manglik = searchManglik;
}

/* if (searchCountry && searchCountry !== '') {
  const isValid = mongoose.Types.ObjectId.isValid(searchCountry);
  if(isValid){
  query.loc_nationality = new mongoose.Types.ObjectId(searchCountry);
  } else {
  return res.json({ status: false,  data:[] });  
  }
}
if (searchState && searchState !== '') {
  const isValid = mongoose.Types.ObjectId.isValid(searchState);
  if(isValid){
  query.loc_state = new mongoose.Types.ObjectId(searchState);
  } else {
  return res.json({ status: false,  data:[] });  
  }
}
*/
if (Array.isArray(searchCountry)) {
  let searchCountryArr = searchCountry.filter(value => value != null && value !== "");
  if(searchCountryArr.length > 0){
    
    query.loc_nationality = { $in: searchCountryArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchCountry && searchCountry !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (searchCountry && !mongoose.Types.ObjectId.isValid(searchCountry)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchCountry)) {
        query.loc_nationality = new mongoose.Types.ObjectId(searchCountry);
      }
  }
}

if (Array.isArray(searchState)) {
  let searchStateArr = searchState.filter(value => value != null && value !== "");
  if(searchStateArr.length > 0){
    
    query.loc_state = { $in: searchStateArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchState && searchState !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (searchState && !mongoose.Types.ObjectId.isValid(searchState)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchState)) {
        query.loc_state = new mongoose.Types.ObjectId(searchState);
      }
  }
}
if (Array.isArray(searchCity)) {
  let searchCityArr = searchCity.filter(value => value != null && value !== "");
  if(searchCityArr.length > 0){
    
    query.loc_city = { $in: searchCityArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchCity && searchCity !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (searchCity && !mongoose.Types.ObjectId.isValid(searchCity)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchCity)) {
        query.loc_city = new mongoose.Types.ObjectId(searchCity);
      }
  }
}


/* if (searchEducation && searchEducation !== '') {
  const isValid = mongoose.Types.ObjectId.isValid(searchEducation);
  if(isValid){
  query.highest_degree = new mongoose.Types.ObjectId(searchEducation);
  } else {
  return res.json({ status: false,  data:[] });  
  }
}
  */

if (Array.isArray(searchEducation)) {
  let searchEducationArr = searchEducation.filter(value => value != null && value !== "");
  if(searchEducationArr.length > 0){
    
    query.highest_degree = { $in: searchEducationArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchEducation && searchEducation !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (searchEducation && !mongoose.Types.ObjectId.isValid(searchEducation)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchEducation)) {
        query.highest_degree = new mongoose.Types.ObjectId(searchEducation);
      }
  }
}
if (Array.isArray(searchProfession)) {
  let searchProfessionArr = searchProfession.filter(value => value != null && value !== "");
  if(searchProfessionArr.length > 0){
    
    query.partner_professional_qualification = { $in: searchProfessionArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchProfession && searchProfession !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (searchProfession && !mongoose.Types.ObjectId.isValid(searchProfession)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchProfession)) {
        query.partner_professional_qualification = new mongoose.Types.ObjectId(searchProfession);
      }
  }
}
if (Array.isArray(searchOccupation)) {
  let searchOccupationArr = searchOccupation.filter(value => value != null && value !== "");
  if(searchOccupationArr.length > 0){
    
    query.occupation = { $in: searchOccupationArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchOccupation && searchOccupation !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    if (searchOccupation && !mongoose.Types.ObjectId.isValid(searchOccupation)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchOccupation)) {
        query.occupation = new mongoose.Types.ObjectId(searchOccupation);
      }
  }
}





/* if (searchOccupation && searchOccupation !== '') {
   
    //query.occupation = { $regex: new RegExp(`^${searchOccupation}$`, 'i') };
    query.occupation = searchOccupation;
}
    */
/* if (searchAnnual_income && searchAnnual_income !== '') {
   
    //query.occupation = { $regex: new RegExp(`^${searchOccupation}$`, 'i') };
   query.annual_income = searchAnnual_income;
}
   */

if (Array.isArray(searchAnnual_income)) {
  let searchAnnual_incomeArr = searchAnnual_income.filter(value => value != null && value !== "");
  if(searchAnnual_incomeArr.length > 0){
    
    query.annual_income = { $in: searchAnnual_incomeArr.map(id => id) };
  }
} else {
  if (searchAnnual_income && searchAnnual_income !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    query.annual_income = searchAnnual_income;
  }
}


if (Array.isArray(searchOrganization)) {
  let searchOrganizationArr = searchOrganization.filter(value => value != null && value !== "");
  if(searchOrganizationArr.length > 0){
    
    query.organization_name = { $in: searchOrganizationArr.map(id => id) };
  }
} else {
  if (searchOrganization && searchOrganization !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    query.organization_name = searchOrganization;
  }
}
if (Array.isArray(searchDiet)) {
  let searchDietArr = searchDiet.filter(value => value != null && value !== "" && value !== '68d10705366770bd0040451e');
  if(searchDietArr.length > 0){
    
    //query.diet = { $in: searchDietArr.map(id => id) };
    
    query.diet = { $in: searchDietArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchDiet && searchDiet !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    //query.diet = searchDiet;
    if (searchDiet && !mongoose.Types.ObjectId.isValid(searchDiet)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchDiet)) {
        if(searchDiet !== '68d10705366770bd0040451e'){
        query.diet = new mongoose.Types.ObjectId(searchDiet);
        }
      }
  }
}
if (Array.isArray(searchComplexion)) {
  let searchComplexionArr = searchComplexion.filter(value => value != null && value !== "");
  if(searchComplexionArr.length > 0){
    
    //query.complexion = { $in: searchComplexionArr.map(id => id) };
    query.complexion = { $in: searchComplexionArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchComplexion && searchComplexion !== '') {
    // const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    // query.complexion = searchComplexion;
    if (searchComplexion && !mongoose.Types.ObjectId.isValid(searchComplexion)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchComplexion)) {
        query.complexion = new mongoose.Types.ObjectId(searchComplexion);
      }
  }
}

if (Array.isArray(searchManaged_by)) {
  let searchManaged_byArr = searchManaged_by.filter(value => value != null && value !== "");
  if(searchManaged_byArr.length > 0){
    
    query.partner_managed_by = { $in: searchManaged_byArr.map(id => id) };
  }
} else {
  if (searchManaged_by && searchManaged_by !== '') {
    //const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    query.partner_managed_by = searchManaged_by;
  }
}


if (Array.isArray(searchHobbies)) {
  let searchHobbiesArr = searchHobbies.filter(value => value != null && value !== "");
  if(searchHobbiesArr.length > 0){
    
    //query.complexion = { $in: searchComplexionArr.map(id => id) };
    query.hobbies = { $in: searchHobbiesArr.map(id => new mongoose.Types.ObjectId(id)) };
  }
} else {
  if (searchHobbies && searchHobbies !== '') {
    // const isValid = mongoose.Types.ObjectId.isValid(searchMarital_status);
    // query.complexion = searchComplexion;
    if (searchHobbies && !mongoose.Types.ObjectId.isValid(searchHobbies)) {
        return res.json({data:[], status:false}); 
      }
  
      if (mongoose.Types.ObjectId.isValid(searchHobbies)) {
        query.hobbies = new mongoose.Types.ObjectId(searchHobbies);
      }
  }
}








if (searchMinHeight && searchMaxHeight) {
  const min = cmToFeetInches(Number(searchMinHeight));
  const max = cmToFeetInches(Number(searchMaxHeight));
  query.height = { $gte: min, $lte: max };
} else if (searchMinHeight) {
  const min = cmToFeetInches(Number(searchMinHeight));
  query.height = { $gte: min };
} else if (searchMaxHeight) {
  const max = cmToFeetInches(Number(searchMaxHeight));
  query.height = { $lte: max };
}


if (minAge || maxAge) {
 query.$expr = {};
  const ageDiff = {
    $dateDiff: { startDate: "$dob", endDate: today, unit: "year" }
  };
  //console.log(ageDiff)
  const ageConditions = [];
  if (minAge) {
    ageConditions.push({ $gte: [ageDiff, parseInt(minAge)] });
  }
  if (maxAge) {
    ageConditions.push({ $lte: [ageDiff, parseInt(maxAge)] });
  }

  //console.log(ageConditions)
  if (ageConditions.length > 1) {
    query.$expr.$and = ageConditions;
  } else {
    query.$expr = ageConditions[0];
  }
    
}

if (searchProfile_id && searchProfile_id !== '') {
   
  
   query.profile_id = searchProfile_id;
}


//my matches



let heightExpr = null;
let dobCondition = null;
let incomeExpr = {};
const hasAnyValue = Object.values(formDataMatch).some(value => {
      if (Array.isArray(value)) return value.length > 0;
      if (value === null || value === undefined) return false;
      if (typeof value === 'string') return value.trim() !== '';
      return true;
    });   
    
if(hasAnyValue){

  if (formDataMatch.gender && formDataMatch.gender !== '') {
   
    if (formDataMatch.gender == 'Male') {
      query.gender = 'Female';
    } else {
      query.gender = 'Male';
    }
}
if (formDataMatch.today && formDataMatch.today == 1) {
   const { start, end } = getYesterdayRange();
   query.createdAt = {
    $gte: start,
    $lte: end
  }
    
}
if (formDataMatch.near_me && formDataMatch.near_me == 1) {
  query.loc_city = formDataMatch.city
}




if (formDataMatch?.partner_age_from && formDataMatch?.partner_age_to) {
      const currentYear = new Date().getFullYear();

      const fromYear = currentYear - Number(formDataMatch.partner_age_to);
      const toYear = currentYear - Number(formDataMatch.partner_age_from);

      const fromDate = new Date(`${fromYear}-01-01`);
      const toDate = new Date(`${toYear}-12-31`);

      query.dob = { $gte: fromDate, $lte: toDate };
     // dobCondition = { dob: { $gte: fromDate, $lte: toDate } };
    }
    
    if (formDataMatch?.partner_height_from && formDataMatch?.partner_height_to) {
      const heightFromInches = parseHeightToInches(formDataMatch.partner_height_from);
      const heightToInches = parseHeightToInches(formDataMatch.partner_height_to);         

    heightExpr = {
      $and: [
        {
          $gte: [
            {
              $add: [
                {
                  $multiply: [
                    { $toInt: { $arrayElemAt: [{ $split: [{ $toString: "$height" }, "."] }, 0] } },
                    12
                  ]
                },
                {
                  $toInt: {
                    $ifNull: [
                      { $arrayElemAt: [{ $split: [{ $toString: "$height" }, "."] }, 1] },
                      0
                    ]
                  }
                }
              ]
            },
            heightFromInches
          ]
        },
        {
          $lte: [
            {
              $add: [
                {
                  $multiply: [
                    { $toInt: { $arrayElemAt: [{ $split: [{ $toString: "$height" }, "."] }, 0] } },
                    12
                  ]
                },
                {
                  $toInt: {
                    $ifNull: [
                      { $arrayElemAt: [{ $split: [{ $toString: "$height" }, "."] }, 1] },
                      0
                    ]
                  }
                }
              ]
            },
            heightToInches
          ]
        }
      ]
    };


  }

  const partnerMaritalIds = (formDataMatch.partner_marital_status || [])
      .filter(Boolean)
      .map(list => new mongoose.Types.ObjectId(list._id));


      
   const partnerReligionId = formDataMatch.partner_religion?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_religion?._id)
      : null;
      
   const partnerCasteId = formDataMatch.partner_caste?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_caste?._id)
      : null;

  const partnerMotherTongueId = formDataMatch.partner_mother_tongue?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_mother_tongue?._id)
      : null;
const partnerEducationId = formDataMatch.partner_education?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_education?._id)
      : null;

const partnerOccupationId = formDataMatch.partner_occupation?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_occupation?._id)
      : null;      

const partnerDietId = formDataMatch.partner_diet?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_diet?._id)
      : null;

const partnerCountryId = formDataMatch.partner_country?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_country?._id)
      : null;
      
      
const partnerStateId = formDataMatch.partner_state?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_state?._id)
      : null;
      
const partnerCityId = formDataMatch.partner_city?._id
      ? new mongoose.Types.ObjectId(formDataMatch.partner_city?._id)
      : null; 
      
      
      //annual income
      const partnerIncomeFrom = formDataMatch.partner_income_from || "";
      const partnerIncomeTo = formDataMatch.partner_income_to || "";

if (
  partnerIncomeFrom.toLowerCase().includes("Not Applicable") ||
  partnerIncomeTo.toLowerCase().includes("Not Applicable")
) {
  incomeExpr = { $ne: null }; // always true for any record
}


else if (
  partnerIncomeFrom.toLowerCase().includes("Above") ||
  partnerIncomeTo.toLowerCase().includes("Above")
) {
  const minVal = extractNumber(partnerIncomeFrom || partnerIncomeTo);

  incomeExpr = {
    $or: [
      // user also has “Above …”
      { $regexMatch: { input: "$annual_income", regex: /Above/i } },
      // or user’s upper income bound >= partner’s “Above …” minimum
      {
        $expr: {
          $gte: [
            {
              $toInt: {
                $arrayElemAt: [
                  { $split: [{ $toString: "$annual_income" }, "-"] },
                  1,
                ],
              },
            },
            minVal,
          ],
        },
      },
    ],
  };
}


else {
  const incomeFrom = extractNumber(partnerIncomeFrom);
  const incomeTo =
    extractNumber(partnerIncomeTo) || Number.MAX_SAFE_INTEGER;

  incomeExpr = {
    $and: [
      {
        $lte: [
          {
            $toInt: {
              $arrayElemAt: [
                { $split: [{ $toString: "$annual_income" }, "-"] },
                0,
              ],
            },
          },
          incomeTo,
        ],
      },
      {
        $gte: [
          {
            $toInt: {
              $arrayElemAt: [
                { $split: [{ $toString: "$annual_income" }, "-"] },
                1,
              ],
            },
          },
          incomeFrom,
        ],
      },
    ],
  };
}

      //end annual income
   
    query.$or = [
              { dob: query.dob },
              { $expr: heightExpr },
              { marital_status: { $in: partnerMaritalIds } },
              ...(partnerReligionId ? [{ religion: partnerReligionId }] : []),
              ...(partnerCasteId ? [{ caste: partnerCasteId }] : []),
              ...(partnerMotherTongueId ? [{ partner_mother_tongue: partnerMotherTongueId }] : []),
              ...(partnerEducationId ? [{ education: partnerEducationId }] : []),
              ...(partnerOccupationId ? [{ occupation: partnerOccupationId }] : []),
              ...(partnerDietId ? [{ diet: partnerDietId }] : []),
              ...(partnerCountryId ? [{ loc_nationality: partnerCountryId }] : []),
              ...(partnerStateId ? [{ loc_state: partnerStateId }] : []),
              ...(partnerCityId ? [{ loc_city: partnerCityId }] : []),
              { $expr: incomeExpr },
            ];


            
    
    delete query.dob; 

          }

    
 
 
 
 
          
  //end matches
//start brideGroom
if(brideGroom && brideGroom !=''){
  
  const casteDetail = await CasteModel.find({name:brideGroom})
   query.caste = new mongoose.Types.ObjectId(casteDetail[0]._id);
  
}

//end
  
// console.log(JSON.stringify(query))
    const pageNew = parseInt(page) || 1;
    const limit = 5;
    const skip = (pageNew - 1) * limit;
    const total = await UserModel.find(query).countDocuments();
    //console.log(total)
    let orderBy
    if(sortBy === 'new'){

      orderBy = { createdAt: -1 }

    } else {
      orderBy = { createdAt: 1 }
    }


const users = await UserModel.find(query).populate([
    { path: "highest_degree" },
    { path: "profile_for" },
    { path: "religion" },
    { path: "loc_state" },
    { path: "loc_city" },
    { path: "occupation" },
    
]).sort(orderBy)
//.skip(skip).limit(limit);


const memberId = member_id;
  //console.log(memberId)
  let sentPartnerIds = [];
    if (memberId) {
      const sentInterests = await SentInterest.find({ member_id: memberId }).select("partner_id");
      sentPartnerIds = sentInterests.map((i) => i.partner_id.toString());
    }
    users.forEach((user) => {
      user._doc.interest_sent = memberId
        ? sentPartnerIds.includes(user._id.toString())
        : false;
    });
    
    const usersBride = users.filter(list => list.gender == 'Female')
    const usersGrooms = users.filter(list => list.gender == 'Male')

    res.json({ status: true, data:users, usersBride, usersGrooms, 
      total,
      page:pageNew,
      totalPages: Math.ceil(total / limit),
      hasMore: pageNew * limit < total, 
    
    });
      
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

function getYesterdayRange() {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - 1);
  start.setHours(0, 0, 0, 0);
  
  const end = new Date(now);
  end.setDate(now.getDate() - 1);
  end.setHours(23, 59, 59, 999);
  
  return { start, end };
}

function extractNumber(str) {
  if (!str) return 0;
  const num = parseInt(str.replace(/[^0-9]/g, ""), 10);
  return isNaN(num) ? 0 : num;
}

function parseHeightToInches(heightStr) {
  if (!heightStr) return null;
  const [feet, inch] = heightStr.toString().split('.').map(Number);
  return (feet || 0) * 12 + (inch || 0);
}


export const getAllGotraMasterList = async (req, res) => {
  try {
    const data = await getAllGotraList(req.params.religion_id);
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const getHomeBrideGroomList = async (req, res) => {
  const {gender} = req.body
  
  try {
    let query = {
    status: 'Active',
    
  };
  if(gender == 'bride'){
  query.gender = 'Female';
  }
  if(gender == 'grooms'){
  query.gender = 'Male';
  }


  let  users = await UserModel.find(query)
  .select("name dob height photo photo1 photo2 photo3 photo4 profile_photo")
  .populate([
    { path: "highest_degree" },
    { path: "occupation" },
    
])

users = users.sort(() => 0.5 - Math.random()).slice(0, 6);

  res.json({ status: true, data:users });

  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }


}
export const getHomeMenuCasteList = async (req, res) => {
  
  
  try {
    let query = {
    status: 'Active',
    
  };
  
  query.religion_id = new mongoose.Types.ObjectId('68caa0980f658ab2b069b2ba');
  


  let  caste = await CasteModel.find(query)

//users = users.sort(() => 0.5 - Math.random()).slice(0, 6);

  res.json({ status: true, data:caste });

  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }


}