import LookingForModel from "../../models/LookingForModel.js";


export const createLookingFor = async (data) => {
  const lookingFor = new LookingForModel(data);
  return await lookingFor.save();
};

export const getAllLookingFor = async () => {
  return await LookingForModel.find();
};

export const getLookingForById = async (id) => {
  return await LookingForModel.findById(id);
};

export const updateLookingFor = async (id, data) => {
  return await LookingForModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteLookingFor = async (id) => {
  return await LookingForModel.findByIdAndDelete(id);
};