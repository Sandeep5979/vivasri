import mongoose from "mongoose";
import UserModel from "../../models/UserModel.js";
import HomeRegistrationModel from "../../models/HomeRegistrationModel.js";

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
    { path: "occupation" },
    { path: "working_with" },
    { path: "partner_working_as" },
    { path: "caste" },
    { path: "sub_caste" },
    { path: "gotra" },
    { path: "partner_mother_tongue" },
    { path: "diet" },
    { path: "partner_religion" },
    { path: "partner_caste" },
    { path: "partner_sub_caste" },
    { path: "partner_complexion" },
    

    


    

    
    
    
  ]);
  
};

export const getUserDetail = async (id) => {
  
  return await UserModel.find({_id:id}).populate("highest_degree");
  
};

export const createUser = async (data, profileId, userId) => {
  if(userId){
  data = {...data, profile_id:profileId, home_reg_id:userId}

  } else {
    data = {...data, profile_id:profileId}
  }
  
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
export const createUserHome = async (data) => {
  //data = {...data, profile_id:profileId}
  const userHome = new HomeRegistrationModel(data);
  return await userHome.save();
};

export const getUserHomeDetail = async (id) => {
  
  return await HomeRegistrationModel.find({_id:id});
  
};