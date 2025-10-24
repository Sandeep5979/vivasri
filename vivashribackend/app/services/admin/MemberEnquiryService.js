import MemberEnquiryModel from '../../models/HomeRegistrationModel.js';

export const getAllMemberEnquiries = async (page, limit, name, mobile) => {
    const skip = (page - 1) * limit;
    let query = {};

    if (name) {
        query.name = { $regex: name, $options: 'i' }; // case-insensitive regex search
    }
    if (mobile) {
        query.mobile = { $regex: mobile, $options: 'i' }; // case-insensitive regex search
    }

    const data = await MemberEnquiryModel.find()
            .where(query)
            .populate('create_profile')
            .skip(skip)
            .limit(limit);

     const total = await MemberEnquiryModel.countDocuments();

        return {
                data,
                totalItems: total,
                totalPages: Math.ceil(total / limit),
                currentPage: page,
            };
};
export const getMemberEnquiryById = async (id) => {
    return await MemberEnquiryModel.findById(id);
};
export const deleteMemberEnquiry = async (id) => {
    return await MemberEnquiryModel.findByIdAndDelete(id);
};
export const createMemberEnquiry = async (data) => {
    const memberEnquiry = new MemberEnquiryModel(data);
    return await memberEnquiry.save();
}
export const updateMemberEnquiry = async (id, data) => {
    return await MemberEnquiryModel.findByIdAndUpdate(id, data, { new: true });
};

