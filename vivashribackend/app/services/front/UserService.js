import mongoose from "mongoose";
import UserModel from "../../models/UserModel.js";

export const getAllUser = async () => {
  
  // return await UserModel.find();
  return true;
};

export const getUserDetailAll = async (id) => {
  
  return await UserModel.find({_id:id}).populate([
    { path: "highest_degree" },
    { path: "profile_for" },
    { path: "religion" },
    { path: "loc_state" },
    { path: "loc_city" },
    { path: "marital_status" },
    { path: "complexion" },
    { path: "birth_state" },
    { path: "birth_city" },
    { path: "loc_temp_state" },
    { path: "loc_temp_city" },
    { path: "loc_nationality" },
    { path: "hobbies" },
    { path: "partner_marital_status" },
    { path: "partner_language" },
    { path: "partner_country" },
    { path: "partner_state" },
    { path: "partner_city" },
    { path: "partner_education" },
    { path: "partner_professional_qualification" },
    { path: "partner_occupation" },
    { path: "partner_diet" },

    


    

    
    
    
  ]);
  
};

export const getUserDetail = async (id) => {
  
  return await UserModel.find({_id:id}).populate("highest_degree");
  
};

export const createUser = async (data, profileId) => {
  data = {...data, profile_id:profileId}
  const user = new UserModel(data);
  return await user.save();
};
export const updateBasicProfile = async (id,  data, selected) => {
  
let hour24 = parseInt(data.birth_hour) % 12;
if (data.birth_am.toUpperCase() === "PM") hour24 += 12;
const dob = new Date(
  parseInt(data.birth_year),
  parseInt(data.birth_month) - 1,
  parseInt(data.birth_day),
  hour24,
  parseInt(data.birth_minute)
);
//console.log('kkkkkkkkk')
//const hobbiesObjectIds = selected.map(id => mongoose.Types.ObjectId(id));
//console.log(hobbiesObjectIds)
data = {...data, dob, hobbies:selected}


  //console.log(data)
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updateContactInformation = async (id,  data) => {
  
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updateAadhaarVerification = async (id,  data) => {
  
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updateReligion = async (id,  data) => {
  
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updateLocationDetail = async (id,  data) => {
  
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updateFamilyDetail = async (id,  data) => {
  
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updateEducationDetail = async (id,  data) => {
  
  data = {...data, pg_degree: data.pg_degree === "" ? null : data.pg_degree, ug_degree: data.ug_degree === "" ? null : data.ug_degree}
  
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updateProfilePhoto = async (id,  data) => {
  
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updatePartnerQualities = async (id,  data, selected) => {
  
  data = {...data, partner_hobbies:selected}
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};
export const updatePartnerDetail = async (id,  data) => {
  
  
 return await UserModel.findByIdAndUpdate({_id:id}, data, { new: true });
  
};