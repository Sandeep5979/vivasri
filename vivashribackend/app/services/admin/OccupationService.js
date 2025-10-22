import OccupationModel from "../../models/OccupationModel.js";




export const createOccupation = async (data) => {
  const occupation = new OccupationModel(data);
  return await occupation.save();
};

export const getAllOccupation = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

    const data = await OccupationModel.find()
      .sort({ createdAt: -1 }) 
      .skip(skip)
      .limit(limit);

    const total = await OccupationModel.countDocuments();

    return {
      data,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
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