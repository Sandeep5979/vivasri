import LanguageModel from "../../models/LanguageModel.js";



export const createLanguage = async (data) => {
  const language = new LanguageModel(data);
  return await language.save();
};

export const getAllLanguage = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const data = await LanguageModel.find()
                 .sort({ createdAt: -1 }) // descending order
                 .skip(skip)
                .limit(limit);

                const total = await LanguageModel.countDocuments();
  return {
            data,
            totalItems: total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
          };

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