import HobbiesModel from "../../models/HobbiesModel.js";



export const createHobbies = async (data) => {
  const hobbies = new HobbiesModel(data);
  return await hobbies.save();
};

export const getAllHobbies = async (page = 1, limit = 10) => {

  const skip = (page - 1) * limit;

    const data = await HobbiesModel.find()
      .sort({ createdAt: -1 }) // descending order
      .skip(skip)
      .limit(limit);

    const total = await HobbiesModel.countDocuments();

    return {
      data,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
    
};

export const getHobbiesById = async (id) => {
  return await HobbiesModel.findById(id);
};

export const updateHobbies = async (id, data) => {
  return await HobbiesModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteHobbies = async (id) => {
  return await HobbiesModel.findByIdAndDelete(id);
};