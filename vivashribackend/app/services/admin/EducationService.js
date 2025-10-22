import EducationModel from "../../models/EducationModel.js";



export const createEducation = async (data) => {
  const education = new EducationModel(data);
  return await education.save();
};

export const getAllEducation = async () => {
  return await EducationModel.find();
};

export const getEducationById = async (id) => {
  return await EducationModel.findById(id);
};

export const updateEducation = async (id, data) => {
  return await EducationModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteEducation = async (id) => {
  return await EducationModel.findByIdAndDelete(id);
};