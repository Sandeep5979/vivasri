import mongoose from "mongoose";
import { createMembershipPlan, deleteMembershipPlan, getAllMembershipPlan, getMembershipPlanById, updateMembershipPlan } from "../../services/admin/MembershipPlanService.js";




export const membershipPlanCreate = async (req, res) => {
  try {
    const data = await createMembershipPlan(req.body);
    res.status(201).json({ status: true, message: "Plan created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const membershipPlanGetAll = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;   // default page 1
    const limit = parseInt(req.query.limit) || 10;
    const data = await getAllMembershipPlan(page, limit);
    res.json({ status: true, ...data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const membershipPlanGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getMembershipPlanById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const membershipPlanUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateMembershipPlan(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Plan updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const membershipPlanRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteMembershipPlan(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Plan deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
