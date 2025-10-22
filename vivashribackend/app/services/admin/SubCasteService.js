import SubCasteModel from "../../models/SubCasteModel.js";




export const createSubCaste = async (data) => {
  const subCaste = new SubCasteModel(data);
  return await subCaste.save();
};

export const getAllSubCaste = async (page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;

    const subcastes = await SubCasteModel.find()
              .sort({ createdAt: -1 }) // descending order
              .skip(skip)
              .limit(limit)
              .populate({
                path: "caste_id",
                select: "name religion_id",
                populate: {
                  path: "religion_id",
                  select: "name",
                },
              })
              .exec();

            const total = await SubCasteModel.countDocuments();

            return {
              data: subcastes,
              totalItems: total,
              totalPages: Math.ceil(total / limit),
              currentPage: page,
            };
  } catch (err) {
    console.error("Error fetching subcastes:", err);
    throw err;
  }
};

export const getSubCasteById = async (id) => {
  return await SubCasteModel.findById(id);
};

export const updateSubCaste = async (id, data) => {
  return await SubCasteModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteSubCaste = async (id) => {
  return await SubCasteModel.findByIdAndDelete(id);
};