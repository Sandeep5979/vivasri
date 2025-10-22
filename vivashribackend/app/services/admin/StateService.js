import StateModel from "../../models/StateModel.js";



export const createState = async (data) => {
  const state = new StateModel(data);
  return await state.save();
};

export const getAllState = async (page = 1, limit=10) => {
  const skip = (page - 1) * limit;
  const data = await StateModel.find()
                .populate("country_id", "name")
                .sort({ createdAt: -1 }) // descending order by createdAt
                .skip(skip)
                .limit(limit);

  const total = await StateModel.countDocuments();

  return {
        data,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      };
 
                    
  return await StateModel.find();
};

export const getStateById = async (id) => {
  return await StateModel.findById(id)
      .populate("country_id", "name")
      .exec();
};

export const updateState = async (id, data) => {
  return await StateModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteState = async (id) => {
  return await StateModel.findByIdAndDelete(id);
};