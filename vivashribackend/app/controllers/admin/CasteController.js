import mongoose from "mongoose";
import { createCaste, deleteCaste, getAllCaste, getCasteById, updateCaste } from "../../services/admin/CasteService.js";




export const casteCreate = async (req, res) => {
  try {
    const data = await createCaste(req.body);
    res.status(201).json({ status: true, message: "Caste created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const casteGetAll = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;   // default page 1
    const limit = parseInt(req.query.limit) || 10;
    const data = await getAllCaste(page, limit);
    res.json({ status: true, ...data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const casteGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getCasteById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const casteUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateCaste(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Caste updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const casteRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteCaste(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Caste deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
