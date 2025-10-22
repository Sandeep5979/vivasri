import ProfessionalEducationModel from "../../models/ProfessionalEducationModel.js";




export const createProfessionalEducation = async (data) => {
  const professionalEducation = new ProfessionalEducationModel(data);
  return await professionalEducation.save();
};

export const getAllProfessionalEducation = async () => {
  return await ProfessionalEducationModel.find();
};

export const getProfessionalEducationById = async (id) => {
  return await ProfessionalEducationModel.findById(id);
};

export const updateProfessionalEducation = async (id, data) => {
  return await ProfessionalEducationModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteProfessionalEducation = async (id) => {
  return await ProfessionalEducationModel.findByIdAndDelete(id);
};