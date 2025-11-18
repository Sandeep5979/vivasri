import MembershipPlanModel from "../../models/MembershipPlanModel.js";



export const createMembershipPlan = async (data) => {
  const caste = new MembershipPlanModel(data);
  return await caste.save();
};

export const getAllMembershipPlan = async (page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;
    const data = await MembershipPlanModel.find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .exec();
    

    const total = await MembershipPlanModel.countDocuments();

    return {
        data,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      };
    } catch (err) {
      console.error("Error fetching plan:", err);
      throw err;
    }
};

export const getMembershipPlanById = async (id) => {
  return await MembershipPlanModel.findById(id);
};

export const updateMembershipPlan = async (id, data) => {
  return await MembershipPlanModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteMembershipPlan = async (id) => {
  return await MembershipPlanModel.findByIdAndDelete(id);
};