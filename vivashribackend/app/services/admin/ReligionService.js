import ReligionModel from "../../models/ReligionModel.js";


export const createReligion = async (data) => {
  const religion = new ReligionModel(data);
  return await religion.save();
};

export const getAllReligion = async (page = 1, limit = 10) => {
   const skip = (page - 1) * limit;

  const data = await ReligionModel.find().sort({ createdAt: -1 }) // descending order by createdAt
                .skip(skip)
                .limit(limit);
               const total = await ReligionModel.countDocuments();

               return {
                      data,
                      totalItems: total,
                      totalPages: Math.ceil(total / limit),
                      currentPage: page,
                    };
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