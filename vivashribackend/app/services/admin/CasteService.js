import CasteModel from "../../models/CasteModel.js";



export const createCaste = async (data) => {
  const caste = new CasteModel(data);
  return await caste.save();
};

export const getAllCaste = async (page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;
    const data = await CasteModel.find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .populate("religion_id", "name") // only get the 'name' field from religion
        .exec();
    

    const total = await CasteModel.countDocuments();

    return {
        data,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      };
    } catch (err) {
      console.error("Error fetching castes:", err);
      throw err;
    }
};

export const getCasteById = async (id) => {
  return await CasteModel.findById(id);
};

export const updateCaste = async (id, data) => {
  return await CasteModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteCaste = async (id) => {
  return await CasteModel.findByIdAndDelete(id);
};