import LanguageModel from "../../models/LanguageModel.js";



export const createLanguage = async (data) => {
  const language = new LanguageModel(data);
  return await language.save();
};

export const getAllLanguage = async () => {
  return await LanguageModel.find();
};

export const getLanguageById = async (id) => {
  return await LanguageModel.findById(id);
};

export const updateLanguage = async (id, data) => {
  return await LanguageModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteLanguage = async (id) => {
  return await LanguageModel.findByIdAndDelete(id);
};