import mongoose from "mongoose";
import { createReligion, deleteReligion, getAllReligion, getReligionById, updateReligion } from "../../services/admin/ReligionService.js";



export const religionCreate = async (req, res) => {
  try {
    const data = await createReligion(req.body);
    res.status(201).json({ status: true, message: "Religion created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const religionGetAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;   // default page 1
    const limit = parseInt(req.query.limit) || 10; // default 10 items per page

    const result = await getAllReligion(page, limit);

    res.json({ status: true, ...result });
    
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const religionGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getReligionById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const religionUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateReligion(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Religion updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const religionRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteReligion(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Religion deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
