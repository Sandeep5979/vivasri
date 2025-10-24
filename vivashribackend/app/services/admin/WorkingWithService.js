import WorkingWithModel from "../../models/WorkingWithModel.js";





export const createWorkingWith = async (data) => {
  const WorkingWith = new WorkingWithModel(data);
  return await WorkingWith.save();
};

export const getAllWorkingWith = async () => {
  return await WorkingWithModel.find();
};

export const getWorkingWithById = async (id) => {
  return await WorkingWithModel.findById(id);
};

export const updateWorkingWith = async (id, data) => {
  return await WorkingWithModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteWorkingWith = async (id) => {
  return await WorkingWithModel.findByIdAndDelete(id);
};