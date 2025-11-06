import dotenv from "dotenv";
dotenv.config();
import InterestModel from "../../models/SentInterest.js"; 

export const sendInterest = async (req, res) => {

    try{
       
        const { partner_id, member_id } = req.body;

        if (!partner_id) {
          return res.status(400).json({ status: false, message: "Partner ID is required" });
        }
        if (!member_id) {
          return res.status(400).json({ status: false, message: "Member ID is required" });
        }

        const existingInterest = await InterestModel.findOne({
            member_id,
            partner_id,
          });
        if (existingInterest) {
          return res.status(200).json({
            status: true,
            message: "Interest already sent",
            data: existingInterest,
          });
        }
        const newInterest = new InterestModel({
          member_id,
          partner_id,
        });
        await newInterest.save();

        return res.status(200).json({
            status: true,
            message: "Interest sent successfully",
            data: newInterest,
          });

    } catch (err) {
      res.status(500).json({ status: false, error: err.message });
    }
}

export const getInbox = async (req, res) => {
  try {
    const { pageType, member_id } = req.body;

    if (!pageType) {
      return res.status(400).json({ status: false, message: "Page Type is required" });
    }

    if (!member_id) {
      return res.status(400).json({ status: false, message: "Member ID is required" });
    }

    let query = {};

    if (pageType === 'sent') {
      query = { member_id: member_id };
    } 
    else if (pageType === 'received') {
      query = { partner_id: member_id, status: 'Pending' };
    } 
    else if (pageType === 'decline') {
      query = { partner_id: member_id, status: 'Declined' };
    } 
    else if (pageType === 'accepted') {
      query = { partner_id: member_id, status: 'Accepted' };
    } 
    else {
      return res.status(400).json({ status: false, message: "Invalid page type" });
    }

   const fetchMember = await InterestModel.find(query).populate([
        { 
          path: "member_id", 
          model: "User", 
          match: { status: "Active" },
          populate: [
            { path: "religion", model: "Religion" },
            { path: "caste", model: "Caste" },
            { path: "sub_caste", model: "SubCaste" },
            { path: "gotra", model: "Gotra" },
            { path: "loc_state", model: "State" },
            { path: "loc_city", model: "City" },
            { path: "working_with", model: "WorkingWith" },
          ]
        },
        { 
          path: "partner_id", 
          model: "User", 
          match: { status: "Active" },
          populate: [
            { path: "religion", model: "Religion" },
            { path: "caste", model: "Caste" },
            { path: "sub_caste", model: "SubCaste" },
            { path: "gotra", model: "Gotra" },
            { path: "loc_state", model: "State" },
            { path: "loc_city", model: "City" },
            { path: "working_with", model: "WorkingWith" },
          ]
        }
      ]);



    return res.status(200).json({
      status: true,
      message: "Fetched successfully",
      data: fetchMember,
    });

  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
};

export const cancelRequest = async(req, res) => {
  try {
    const { member_id, partner_id } = req.body;

    if (!member_id) {
      return res.status(400).json({ status: false, message: "Member ID is required" });
    }

    if (!partner_id) {
      return res.status(400).json({ status: false, message: "Partner ID is required" });
    }

    const query = { member_id, partner_id };
   

      const deleteRequest = await InterestModel.findOneAndDelete(query);
    
      if (!deleteRequest) {
        return res.status(404).json({
          status: false,
          message: "No request found to cancel"
        });
      }


    return res.status(200).json({
      status: true,
      message: "Request cancelled successfully"
    });

  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
}
export const changeStatusRequest = async(req, res) => {
  try {
    const { id, status } = req.body;

      const statusRequest = await InterestModel.findByIdAndUpdate({_id:id}, {status:status}, { new: false });
    
      if (!statusRequest) {
        return res.status(404).json({
          status: false,
          message: "No request found to change"
        });
      }


    return res.status(200).json({
      status: true,
      message: "Request change successfully."
    });

  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
}