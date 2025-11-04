import ReligionModel from "../../models/ReligionModel.js";


export const createReligion = async (data) => {
  const religion = new ReligionModel(data);
  return await religion.save();
};

export const getAllReligion = async () => {
  return await ReligionModel.find();
};

export const getReligionById = async (id) => {
  return await ReligionModel.findById(id);
};

export const updateReligion = async (id, data) => {
  return await ReligionModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteReligion = async (id) => {
  return await ReligionModel.findByIdAndDelete(id);
};