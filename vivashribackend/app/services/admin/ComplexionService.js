import ComplexionModel from "../../models/ComplexionModel.js";



export const createComplexion = async (data) => {
  const complexion = new ComplexionModel(data);
  return await complexion.save();
};

export const getAllComplexion = async () => {
  return await ComplexionModel.find();
};

export const getComplexionById = async (id) => {
  return await ComplexionModel.findById(id);
};

export const updateComplexion = async (id, data) => {
  return await ComplexionModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteComplexion = async (id) => {
  return await ComplexionModel.findByIdAndDelete(id);
};