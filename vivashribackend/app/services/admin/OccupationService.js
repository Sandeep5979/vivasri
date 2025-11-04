import OccupationModel from "../../models/OccupationModel.js";




export const createOccupation = async (data) => {
  const occupation = new OccupationModel(data);
  return await occupation.save();
};

export const getAllOccupation = async () => {
  return await OccupationModel.find();
};

export const getOccupationById = async (id) => {
  return await OccupationModel.findById(id);
};

export const updateOccupation = async (id, data) => {
  return await OccupationModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteOccupation = async (id) => {
  return await OccupationModel.findByIdAndDelete(id);
};