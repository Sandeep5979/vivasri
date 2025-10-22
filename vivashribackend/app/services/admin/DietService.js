import DietModel from "../../models/DietModel.js";



export const createDiet = async (data) => {
  const diet = new DietModel(data);
  return await diet.save();
};

export const getAllDiet = async () => {
  return await DietModel.find();
};

export const getDietById = async (id) => {
  return await DietModel.findById(id);
};

export const updateDiet = async (id, data) => {
  return await DietModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteDiet = async (id) => {
  return await DietModel.findByIdAndDelete(id);
};