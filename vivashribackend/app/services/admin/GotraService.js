import GotraModel from "../../models/GotraModel.js";




export const createGotra = async (data) => {
  const gotra = new GotraModel(data);
  return await gotra.save();
};

export const getAllGotra = async (page = 1, limit = 10) => {
 
    page = parseInt(page, 10);
    limit = parseInt(limit, 10);

    const skip = (page - 1) * limit;

    const gotras = await GotraModel.find()
                .sort({ createdAt: -1 })   // descending order
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
                .populate({
                    path: "sub_caste_id",
                    select: "name caste_id", // optional: include caste reference if you want
                    populate: {
                      path: "caste_id",
                      select: "name religion_id",
                      populate: {
                        path: "religion_id",
                        select: "name",
                      },
                    },
                  })
                .exec();//   <-- call exec on the query

    
    const totalItems = await GotraModel.countDocuments();

    return {
      success: true,
      data: gotras,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
    };
};


export const getGotraById = async (id) => {
  return await GotraModel.findById(id);
};

export const updateGotra = async (id, data) => {
  return await GotraModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteGotra = async (id) => {
  return await GotraModel.findByIdAndDelete(id);
};