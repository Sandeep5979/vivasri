import MaritalStatusModel from "../../models/MaritalStatusModel.js";



export const createMaritalStatus = async (data) => {
  const maritalStatus = new MaritalStatusModel(data);
  return await maritalStatus.save();
};

export const getAllMaritalStatus = async () => {
  return await MaritalStatusModel.find();
};

export const getMaritalStatusById = async (id) => {
  return await MaritalStatusModel.findById(id);
};

export const updateMaritalStatus = async (id, data) => {
  return await MaritalStatusModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteMaritalStatus = async (id) => {
  return await MaritalStatusModel.findByIdAndDelete(id);
};