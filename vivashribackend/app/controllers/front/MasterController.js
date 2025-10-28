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
    const {looking, religion, caste, minAge, maxAge, searchMarital_status, searchGender, searchLanguage, searchManglik, searchCountry, searchState, searchCity, searchEducation, searchProfession, searchOccupation, searchAnnual_income, searchMinHeight, searchMaxHeight, searchProfile_id, searchOrganization, searchDiet, searchComplexion, searchManaged_by, searchHobbies, member_id} = req.body
    const arrLooking = looking?.split(',')
    //const arrReligion = religion?.split(',')
    const today = new Date();
    
    //console.log(arrLooking)

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
if (searchGender && searchGender !== '') {
   
    if (searchGender === 'Bride') {
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

  

const users = await UserModel.find(query).populate([
    { path: "highest_degree" },
    { path: "profile_for" },
    { path: "religion" },
    { path: "loc_state" },
    { path: "loc_city" },
    { path: "occupation" },
    
])

   const memberId = member_id;
  
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

    res.json({ status: true, data:users });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};


export const getAllGotraMasterList = async (req, res) => {
  try {
    const data = await getAllGotraList(req.params.religion_id);
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};