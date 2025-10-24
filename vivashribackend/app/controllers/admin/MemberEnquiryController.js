import mongoose from "mongoose";
import { createMemberEnquiry, getAllMemberEnquiries, getMemberEnquiryById, updateMemberEnquiry, deleteMemberEnquiry } from "../../services/admin/MemberEnquiryService.js";

export const memberEnquiryCreate = async (req, res) => {
    try {
        const data = await createMemberEnquiry(req.body);
        res.status(201).json({ status: true, message: "Member enquiry created successfully", data });
    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};

export const memberEnquiryGetAll = async (req, res) => {
    try {
        const page  = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const name = req.query.name || null;
        const mobile = req.query.mobile || null;
        
        const data = await getAllMemberEnquiries(page, limit, name, mobile);
        res.json({ 
                    status: true,
                        ...data
                    });

    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};
export const memberEnquiryGetById = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ success: false, message: "ID not found" });
        }

        const data = await getMemberEnquiryById(req.params.id);
        if (!data) return res.status(404).json({ status: false, message: "ID not found" });
        res.json({ status: true, data });
    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};
export const memberEnquiryUpdate = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ success: false, message: "ID not found" });
        }
        const data = await updateMemberEnquiry(req.params.id, req.body);
        if (!data) return res.status(404).json({ status: false, message: "ID not found" });
        res.json({ status: true, message: "Member enquiry updated successfully", data });
    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};
export const memberEnquiryRemove = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ success: false, message: "ID not found" });
        }
        const data = await deleteMemberEnquiry(req.params.id);
        if (!data) return res.status(404).json({ status: false, message: "ID not found" });
        res.json({ status: true, message: "Member enquiry deleted successfully", data });
    }
    catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};
