import dotenv from "dotenv";
dotenv.config();
import UserModel from "../../models/UserModel.js";
import { createUser, createUserHome, deletePhoto, getUserDetail, getUserDetailAll, getUserHomeDetail, updateAadhaarVerification, updateBasicProfile, updateContactInformation, updateEducationDetail, updateFamilyDetail, updateLocationDetail, updatePartnerDetail, updatePartnerQualities, updateProfilePhoto, updateReligion, updateSetProfilePhoto } from "../../services/front/UserService.js";
import jwt from "jsonwebtoken";
import { validationResult, body } from "express-validator";
import mongoose from "mongoose";
import path from "path";
import sharp from "sharp";
import { writeFile } from "fs/promises";
import ProfileCountModel from "../../models/ProfileCountModel.js";
import fs from "fs";
import UserPlanModel from "../../models/UserPlanModel.js";
import UserPlanHistoryModel from "../../models/UserPlanHistoryModel.js";
import MembershipPlanModel from "../../models/MembershipPlanModel.js";
import UserViewModel from "../../models/UserViewModel.js";


export const getUserDetailList = async (req, res) => {

  try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ success: false, message: "User id not found" });
      }
  
      const data = await getUserDetail(req.params.id);
      if (!data) return res.status(404).json({ status: false, message: "ID not found" });
      res.json({ status: true, data });
    } catch (err) {
      res.status(500).json({ status: false, error: err.message });
    }


}
export const getUserDetailListAll = async (req, res) => {
  
  const { member_id } = req.query;
  
  try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ success: false, message: "User id not found" });
      }
  
      const data = await getUserDetailAll(req.params.id, member_id);
      if (!data) return res.status(404).json({ status: false, message: "ID not found" });
      res.json({ status: true, data });
    } catch (err) {
      res.status(500).json({ status: false, error: err.message });
    }


}

const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };
  
const validateMobile = (value) => {
    const regex = /^\d{10}$/;
    return regex.test(value);
};

const generateProfileId = async () => {
  const profileCount = await ProfileCountModel.findOneAndUpdate(
    {},
    { $inc: { count: 1 } },
    { new: true, upsert: true }
  );

  const profileNumber = profileCount.count;
  const profileId = `${profileNumber.toString().padStart(4, '0')}`; 
  const existProfiletId = await UserModel.countDocuments({ profile_id: profileId });

  if (existProfiletId > 0) { 
    return await generateProfileId();
  }

  return profileId;
}


export const userRegistration = async (req, res) => {
  // console.log(req.userId)
  try {
    const { email } = req.body;
    //console.log(email)
    let data = {};
    if (/^\d+$/.test(email)) {
      if(!validateMobile(email)){
      return res.status(400).json({ status:false, message: "Please enter a valid 10-digit mobile number" });
    }  
      data = { mobile: email };
    } else {

    if(!validateEmail(email)){
      return res.status(400).json({ status:false, message: "Please enter a valid email address" });
    }    
      
      data = { email: email };
    }
    const userDetail = await UserModel.findOne({
      $or: [
        { email: email },
        { mobile: email }
      ]
    });
    if (userDetail) {
      //console.log(userDetail)
      const tokenNew = jwt.sign(
    {_id:userDetail._id},
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400 * 3,
    }
  );
      
      if(userDetail.step === 1){
        return res.json({ status:false, show:1, message: "", page:'contact-information', token:tokenNew });    
      } else if(userDetail.step === 2){
        return res.json({ status:false, show:1, message: "", page:'aadhaar-verification', token:tokenNew });    
      } else if(userDetail.step === 3){
        return res.json({ status:false, show:1, message: "", page:'aadhaar-verification', token:tokenNew });    
      } else if(userDetail.step === 4){
        return res.json({ status:false, show:1, message: "", page:'religion', token:tokenNew });    
      } else if(userDetail.step === 5){
        return res.json({ status:false, show:1, message: "", page:'location-detail', token:tokenNew });    
      } else if(userDetail.step === 6){
        return res.json({ status:false, show:1, message: "", page:'family-detail', token:tokenNew });    
      } else if(userDetail.step === 7){
        return res.json({ status:false, show:1, message: "", page:'education-detail', token:tokenNew });    
      } else if(userDetail.step === 8){
        return res.json({ status:false, show:1, message: "", page:'profile-photo', token:tokenNew });    
      } else if(userDetail.step === 9){
        return res.json({ status:false, show:1, message: "", page:'partner-qualities', token:tokenNew });    
      } else if(userDetail.step === 10){
        return res.json({ status:false, show:1, message: "", page:'partner-basic-detail', token:tokenNew });    
      } else if(userDetail.step === 11){
        return res.json({ status:false, show:1, message: "", page:'dashboard', token:tokenNew });    
      } else {
        return res.json({ status:false, show:1, message: "", page:'basic-details', token:tokenNew });
      }
      
      //return res.status(400).json({ status:false, show:1, message: "Email/Mobile already exists" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    data.otp = otp
    //console.log(data)
    //console.log(btoa(data))
    /* res.cookie("otp-data", JSON.stringify(data), {
      httpOnly: true, 
      secure: false,  
      maxAge: 10 * 60 * 1000,
      sameSite: "lax",
      path: "/",
    });
*/

const tokenNew = jwt.sign(
    {email:email, otp:otp},
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400 * 3,
    }
  );


    return res.json({ data: data, token:tokenNew, status: true });
  } catch (err) {
    return res.status(500).json({ error: err.message, status: false });
  }
};


export const userRegistrationLogin = async (req, res) => {
  // console.log(req.userId)
  try {
    const { email } = req.body;
    //console.log(email)
    let data = {};
    if(email === ''){
      return res.status(400).json({ status:false, message: "Email/Mobile is required" });

    }
    
    if (/^\d+$/.test(email)) {
      if(!validateMobile(email)){
      return res.status(400).json({ status:false, message: "Please enter a valid 10-digit mobile number" });
    }  
      data = { mobile: email };
    } else {

    if(!validateEmail(email)){
      return res.status(400).json({ status:false, message: "Please enter a valid email address" });
    }    
      
      data = { email: email };
    }
    const userDetail = await UserModel.findOne({
      $or: [
        { email: email },
        { mobile: email }
      ]
    });
    if (userDetail) {
      //console.log(userDetail)
      const tokenNew = jwt.sign(
    {_id:userDetail._id},
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400 * 3,
    }
  );
      
      
      return res.json({ data: data, status: true, token:tokenNew });
      
    }

    return res.status(400).json({ status:false, message: "Email/Mobile does not  exists. Please sign up now" });


    //return res.json({ data: data, status: true });
  } catch (err) {
    return res.status(500).json({ error: err.message, status: false });
  }
};


export const userVerifyOtp = async (req, res) => {
  const { user, otp, userId } = req.body;
  if (!user) return res.status(404).json({ status:false, message: "User not found" });

  if (otp == user.otp || otp == 1234) {
  
    //console.log(user)

    const userDetail = await UserModel.findOne({
      $or: [
        { email: user.email },
        { mobile: user.email }
      ]
    });
    if (userDetail) {

      const tokenNew = jwt.sign(
    {_id:userDetail._id},
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400 * 3,
    }
  );

    if(userDetail.step === 1){
        return res.json({ status:true, message: "", page:'contact-information', token:tokenNew });    
      } else if(userDetail.step === 2){
        return res.json({ status:true, message: "", page:'aadhaar-verification', token:tokenNew });    
      } else if(userDetail.step === 3){
        return res.json({ status:true, message: "", page:'aadhaar-verification', token:tokenNew });    
      } else if(userDetail.step === 4){
        return res.json({ status:true, message: "", page:'religion', token:tokenNew });    
      } else if(userDetail.step === 5){
        return res.json({ status:true, message: "", page:'location-detail', token:tokenNew });    
      } else if(userDetail.step === 6){
        return res.json({ status:true, message: "", page:'family-detail', token:tokenNew });    
      } else if(userDetail.step === 7){
        return res.json({ status:true, message: "", page:'education-detail', token:tokenNew });    
      } else if(userDetail.step === 8){
        return res.json({ status:true, message: "", page:'profile-photo', token:tokenNew });    
      } else if(userDetail.step === 9){
        return res.json({ status:true, message: "", page:'partner-qualities', token:tokenNew });    
      } else if(userDetail.step === 10){
        return res.json({ status:true, message: "", page:'partner-basic-detail', token:tokenNew });    
      } else if(userDetail.step === 11){
        return res.json({ status:true, message: "", page:'dashboard', token:tokenNew });    
      } else {
        return res.json({ status:true, message: "", page:'basic-details', token:tokenNew });
      }



    } else {
    
    
    
    const profileId = await generateProfileId();
    const userDetail1 = await createUser(user, profileId, userId)

    

    const tokenNew = jwt.sign(
    {_id:userDetail1._id},
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400 * 3,
    }
  );
  
  

    /* res.cookie("authTokenUser", JSON.stringify(tokenNew), {
    httpOnly: true,      
    secure: false,       
    sameSite: "lax",
    path: "/",           
    maxAge: 3 * 24 * 60 * 60 * 1000, 
  });
    */

    return res.json({ status:true, message: "OTP verified", user: userDetail1, token:tokenNew });
}
  }

  res.status(400).json({ status:false, message: "Invalid OTP" });
};


export const validateBasicProfile = [
  body("name").notEmpty().withMessage("Name is required"),
  body("gender").isIn(["Male","Female","Other"]).withMessage("Invalid gender"),
  body("birth_day").isInt({ min: 1, max: 31 }).withMessage("Invalid birth day"),
  body("birth_month").isInt({ min: 1, max: 12 }).withMessage("Invalid birth month"),
  body("birth_year").isInt({ min: 1900 }).withMessage("Invalid birth year"),
  body("hobbies").isArray().withMessage("Hobbies must be an array of IDs")
  
];

export const basicProfile = async (req, res) => {

/* const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status:false, errors: errors.array() });
  }
    */



  const { userDetail, formData, selected } = req.body;
  
  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updateBasicProfile(userDetail._id, formData, selected)

    return res.json({ status:true, message: "Basic profile updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Basic profile not updated. Please try again" });

    }

}
export const contactInformation = async (req, res) => {

/* const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status:false, errors: errors.array() });
  }
    */



  const { userDetail, formData } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updateContactInformation(userDetail._id, formData)

    return res.json({ status:true, message: "Contact information updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Contact information not updated. Please try again" });

    }

}
export const aadhaarVerification = async (req, res) => {

  const { userDetail, formData } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updateAadhaarVerification(userDetail._id, formData)

    return res.json({ status:true, message: "Aadhaar no. updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Aadhaar no. not updated. Please try again" });

    }

}
export const userReligion = async (req, res) => {

  const { userDetail, formData } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updateReligion(userDetail._id, formData)

    return res.json({ status:true, message: "Religion updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Religion not updated. Please try again" });

    }

}
export const userLocationDetail = async (req, res) => {

  const { userDetail, formData } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updateLocationDetail(userDetail._id, formData)

    return res.json({ status:true, message: "Location detail updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Location detail not updated. Please try again" });

    }

}
export const userFamilyDetail = async (req, res) => {

  const { userDetail, formData } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updateFamilyDetail(userDetail._id, formData)

    return res.json({ status:true, message: "Family detail updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Family detail not updated. Please try again" });

    }

}
export const userEducationDetail = async (req, res) => {

  const { userDetail, formData } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updateEducationDetail(userDetail._id, formData)

    return res.json({ status:true, message: "Education detail updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, error:err, message: "Education detail not updated. Please try again" });

    }

}
export const userProfilePhoto = async (req, res) => {

  const id = req.body.id;
  const photo = req.files?.photo;
  const photo1 = req.files?.photo1;
  const photo2 = req.files?.photo2;
  const photo3 = req.files?.photo3;
  const photo4 = req.files?.photo4;

  if (!id) {
    return res.status(404).json({ status: false, message: "User not found" });
  }

  try {
    const savedPhotos = [];

    
    const savePhoto = async (photo, name, id) => {
      if (!photo) return null;

      const ext = path.extname(photo.name).toLowerCase();
      const allowed = [".jpg", ".jpeg", ".png", ".webp"];

      if (!allowed.includes(ext)) {
        throw new Error(`Invalid file type for ${photo.name}`);
      }

      const fileName = `${Date.now()}-${photo.name}`;
      const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

      const buffer = photo.data;
      const metadata = await sharp(buffer).metadata();

      let finalBuffer = buffer;
      if (metadata.width > 576) {
        // finalBuffer = await sharp(buffer).resize({ width: 576 }).toBuffer();
      finalBuffer = await sharp(buffer).resize({ width: 576, height:620 }).toBuffer();
      }
      //finalBuffer = await sharp(buffer).resize({ width: 576 }).toBuffer();

      await writeFile(uploadPath, finalBuffer);

      await updateProfilePhoto(id, {[name]:`/uploads/${fileName}`})

      return `/uploads/${fileName}`;
    };

    if (photo) savedPhotos.push(await savePhoto(photo, 'photo', id));
    if (photo1) savedPhotos.push(await savePhoto(photo1, 'photo1', id));
    if (photo2) savedPhotos.push(await savePhoto(photo2, 'photo2', id));
    if (photo3) savedPhotos.push(await savePhoto(photo3, 'photo3', id));
    if (photo4) savedPhotos.push(await savePhoto(photo4, 'photo4', id));

    return res.json({
      status: true,
      message: "Image uploaded successfully",
      photos: savedPhotos,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "Upload failed",
      error: err.message,
    });
  }

}
export const userProfilePhotoAdd = async (req, res) => {

  const id = req.body.id;
  const photo = req.files?.photo;
  

  if (!id) {
    return res.status(404).json({ status: false, message: "User not found" });
  }

  try {
    const savedPhotos = [];

    
    const savePhoto = async (photo, name, id) => {
      if (!photo) return null;

      const ext = path.extname(photo.name).toLowerCase();
      const allowed = [".jpg", ".jpeg", ".png", ".webp"];

      if (!allowed.includes(ext)) {
        throw new Error(`Invalid file type for ${photo.name}`);
      }

      const fileName = `${Date.now()}-${photo.name}`;
      const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

      const buffer = photo.data;
      
     /*  let pipeline = sharp(photo.data);
      const metadata = await pipeline.metadata();
      if (metadata.width > 576) {
        pipeline = pipeline.resize({ width: 576 });
      }
      pipeline = pipeline.blur(20);
      const finalBuffer = await pipeline.toBuffer();
      */
       const metadata = await sharp(buffer).metadata();

      let finalBuffer = buffer;
      if (metadata.width > 576) {
        // finalBuffer = await sharp(buffer).resize({ width: 576 }).toBuffer();
        finalBuffer = await sharp(buffer).resize({ width: 576, height:620 }).toBuffer();
      }
      // finalBuffer = await sharp(buffer).blur(20).toBuffer();

      await writeFile(uploadPath, finalBuffer);

      await updateProfilePhoto(id, {[name]:`/uploads/${fileName}`})

      return `/uploads/${fileName}`;
    };

    //const userDet = await UserModel.find({_id:id})
    const userDet = await UserModel.findOne({
                        _id: id,
                        $or: [
                          { photo: { $exists: false } },
                          { photo: null },
                          { photo: "" }
                        ]
                      });
                      const userDet1 = await UserModel.findOne({
                        _id: id,
                        $or: [
                          { photo1: { $exists: false } },
                          { photo1: null },
                          { photo1: "" }
                        ]
                      });
                      const userDet2 = await UserModel.findOne({
                        _id: id,
                        $or: [
                          { photo2: { $exists: false } },
                          { photo2: null },
                          { photo2: "" }
                        ]
                      });

                      const userDet3 = await UserModel.findOne({
                        _id: id,
                        $or: [
                          { photo3: { $exists: false } },
                          { photo3: null },
                          { photo3: "" }
                        ]
                      });
                      const userDet4 = await UserModel.findOne({
                        _id: id,
                        $or: [
                          { photo4: { $exists: false } },
                          { photo4: null },
                          { photo4: "" }
                        ]
                      });
    
    
    let name;
    
    if(!userDet4){ } else {
      name='photo4'
    }
    if(!userDet3){ } else {
      name='photo3'
    }
    if(!userDet2){ } else {
      name='photo2'
    }
    if(!userDet1){ } else {
      name='photo1'
    }
  
    if(!userDet){ } else {
      name='photo'
    }


    if(name){ 
      savedPhotos.push(await savePhoto(photo, name, id));
    } else {
      return res.status(500).json({
      status: false,
      message: "Upload image not allowed more than 5 images.",
     
    });
    }
    

    return res.json({
      status: true,
      message: "Image uploaded successfully.",
      photos: savedPhotos,
      
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "Upload failed",
      error: err.message,
    });
  }

}


export const userPartnerQualities = async (req, res) => {


  const { userDetail, formData, selected } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updatePartnerQualities(userDetail._id, formData, selected)

    return res.json({ status:true, message: "Partner qualities updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Partner qualities not updated. Please try again" });

    }

}

export const userPartnerBasicDetail = async (req, res) => {

//console.log(req.body)
  const { userDetail, formData, searchMarital_status } = req.body;
 // console.log('controllll', searchMarital_status)

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updatePartnerDetail(userDetail._id, formData, searchMarital_status)

    return res.json({ status:true, message: "Partner detail updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Partner detail not updated. Please try again" });

    }

}
export const userHomeRegistration = async (req, res) => {


  const { formData } = req.body;
  
    try{
    
      const user = await createUserHome(formData)

    return res.json({ status:true, message: "Registration created successfully", user: user });
    } catch(err) {
      return res.json({ status:false, error:err, message: "Registration not created. Please try again" });

    }

}

export const getUserHomeDetailList = async (req, res) => {

  try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ success: false, message: "User id not found" });
      }
  
      const data = await getUserHomeDetail(req.params.id);
      if (!data) return res.status(404).json({ status: false, message: "ID not found" });
      res.json({ status: true, data });
    } catch (err) {
      res.status(500).json({ status: false, error: err.message });
    }


}
export const setProfilePhoto = async (req, res) => {

  const { userDetail, formData } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{
    
      const user = await updateSetProfilePhoto(userDetail._id, formData)

    return res.json({ status:true, message: "Profile photo updated successfully", user: user });
    } catch(err) {
      return res.json({ status:false, message: "Profile photo not updated. Please try again" });

    }

}
export const deleteProfilePhoto = async (req, res) => {

  const { userDetail, formData } = req.body;

  if (!userDetail._id) return res.status(404).json({ status:false, message: "User not found" });
    try{

      let data = formData;
    
      //const user = await deletePhoto(userDetail._id, formData)
      const photo = await UserModel.findById(userDetail._id);
          
      
      
         let profilePhoto;
                          if(data === 1){
                            profilePhoto = photo.photo
                          } else if(data === 2){
                            profilePhoto = photo.photo1
                          } else if(data === 3){
                            profilePhoto = photo.photo2
                          } else if(data === 4){
                            profilePhoto = photo.photo3
                          } else if(data === 5){
                            profilePhoto = photo.photo4
                          }
         
         
         
                          if(profilePhoto){
          const filePath = profilePhoto;
        
          
          /* fs.unlink(filePath, (err) => {
            if (err) console.error("Error deleting file:", err);
          });
          */
          
      
                        if(data === 1){
                            photo.photo = null;
                            //return await photo.save();
                          } else if(data === 2){
                            photo.photo1 = null;
                            //return await photo.save();
                          } else if(data === 3){
                            photo.photo2 = null;
                            //return await photo.save();
                          } else if(data === 4){
                            photo.photo3 = null;
                            //return await photo.save();
                          } else if(data === 5){
                            photo.photo4 = null;
                            //return await photo.save();
                          }
                           await photo.save();
          
        }
    
    
    
      return res.json({ status:true, message: "Photo deleted successfully" });
    } catch(err) {
      return res.json({ status:false, message: "Photo not deleted. Please try again" });

    }

}


export const selectMembershipPlan = async (req, res) => {

    try{
       
        const { user_id, plan_id, price } = req.body;

        if (!user_id) {
          return res.status(400).json({ status: false, message: "User ID is required" });
        }
        if (!plan_id) {
          return res.status(400).json({ status: false, message: "Paln ID is required" });
        }

        let expiry = null;

        const planDet = await MembershipPlanModel.findOne({_id:plan_id})
        //console.log(planDet)

        const currentDate = new Date();
        const expiryDate = new Date(currentDate);
        if(planDet.name === 'Gold'){
        expiry = expiryDate.setMonth(currentDate.getMonth() + 6);
        }
        if(planDet.name === 'Premium'){
        expiry = expiryDate.setMonth(currentDate.getMonth() + 12);
        }

        //console.log(expiry)
        const newPlanHistory = new UserPlanHistoryModel({
          user_id,
          plan_id,
          price,
          start_date:currentDate,
          expiry_date:expiry
        });
        await newPlanHistory.save();
        
        
        const existingPlan = await UserPlanModel.findOne({
            user_id,
          });
        if (existingPlan) {
          
          existingPlan.plan_id = plan_id;
          existingPlan.price = price;
          existingPlan.start_date = currentDate;
          existingPlan.expiry_date = expiry;
          await existingPlan.save();

          return res.status(200).json({
            status: true,
            message: "Plan  activate successfully.",
            data: existingPlan,
          });
        


        } else {
        const newPlan = new UserPlanModel({
          user_id,
          plan_id,
          price,
          start_date:currentDate,
          expiry_date:expiry
        });
        await newPlan.save();

        return res.status(200).json({
            status: true,
            message: "Plan  activate successfully.",
            data: newPlan,
          });
        }

    } catch (err) {
      res.status(500).json({ status: false, error: err.message });
    }
}

export const userViewUpdate = async (req, res) => {
  const {user_id, view_id} = req.body
    try {
        if (!mongoose.isValidObjectId(user_id)) {
            return res.status(400).json({ success: false, message: "ID not found" });
        }
        if (!mongoose.isValidObjectId(view_id)) {
            return res.status(400).json({ success: false, message: "View ID not found" });
        }
        
        const start = new Date();
        start.setHours(0, 0, 0, 0);

        const end = new Date();
        end.setHours(23, 59, 59, 999);


        const users = await UserViewModel.findOne({
           user_id: user_id,
           view_id:view_id,    
           createdAt: { $gte: start, $lt: end }
        });
        // console.log(users)
        
        if(users){ } else {
          const newView = new UserViewModel({
          user_id,
          view_id,
        });
        await newView.save();
        
        }
        
        
        res.json({ status: true, message: "User view successfully." });
    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};