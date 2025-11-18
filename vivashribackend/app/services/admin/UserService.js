import InterestModel from "../../models/SentInterest.js";
import UserModel from "../../models/UserModel.js";


export const getAllUserList = async (page, limit, name, mobile) => {
    const skip = (page - 1) * limit;
    let query = {};

    if (name) {
        query.name = { $regex: name, $options: 'i' }; // case-insensitive regex search
    }
    if (mobile) {
        //query.mobile = { $regex: mobile, $options: 'i' }; // case-insensitive regex search
        query.$or = [
            { mobile: { $regex: mobile, $options: 'i' } },
            { email:  { $regex: mobile, $options: 'i' } }
        ];
    }


    const data = await UserModel.find()
            .where(query)
            .populate('loc_city')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

     const total = await UserModel.countDocuments().where(query);

        return {
                data,
                totalItems: total,
                totalPages: Math.ceil(total / limit),
                currentPage: page,
            };
};

export const getAllUserPaidList = async (page, limit, name, mobile, gender, status) => {
    const skip = (page - 1) * limit;
    let query = {};

    if (name) {
        query.name = { $regex: name, $options: 'i' }; // case-insensitive regex search
    }
    if (gender) {
        query.gender = gender;
    }
    if(status){
        query.status = status;
    }
    if (mobile) {
        //query.mobile = { $regex: mobile, $options: 'i' }; // case-insensitive regex search
        query.$or = [
            { mobile: { $regex: mobile, $options: 'i' } },
            { email:  { $regex: mobile, $options: 'i' } }
        ];
    }  


    const usersResult = await UserModel.aggregate([
                                { $match: query },
                                {
                                    $lookup: {
                                    from: "userplans",
                                    localField: "_id",
                                    foreignField: "user_id",
                                    as: "userPlan"
                                    }
                                },
                                { $unwind: "$userPlan" },
                                {
                                    $lookup: {
                                    from: "membershipplans",
                                    localField: "userPlan.plan_id",
                                    foreignField: "_id",
                                    as: "membershipPlan"
                                    }
                                },
                                { $unwind: "$membershipPlan" },
                              
                                {
                                    $match: {
                                    "membershipPlan.name": { $in: ["Gold", "Premium", "VIP"] }
                                    }
                                },
                                {
                                    $facet: {
                                    total: [
                                        { $count: "count" }
                                    ],
                                    data: [
                                        { $sort: { createdAt: -1 } },
                                        { $skip: skip },
                                        { $limit: limit },
                                        {
                                        $project: {
                                            _id: 1,
                                            name: 1,
                                            status:1,
                                            email:1,
                                            mobile:1,
                                            dob:1,
                                            gender:1,
                                            userPlan: 1,
                                            partner_managed_by:1,
                                            profile_id:1,
                                            profile_for:1,
                                            membershipPlan: { _id: 1, name: 1 }
                                        }
                                        }
                                    ]
                                    }
                                }
                                ]);


const total = usersResult[0].total.length > 0 ? usersResult[0].total[0].count : 0;
const data = usersResult[0].data;


        return {
                data,
                totalItems: total,
                totalPages: Math.ceil(total / limit),
                currentPage: page,
            };
};


export const updateUser = async (id, data) => {
   // console.log(data)
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
};
export const deleteUser = async (id) => {
   //console.log(id)
     const deleteUser = await UserModel.findByIdAndDelete(id);
     await InterestModel.deleteMany({member_id:id})
     await InterestModel.deleteMany({partner_id:id})
     return deleteUser
};

