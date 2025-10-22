import mongoose from "mongoose";
import { createSubCaste, deleteSubCaste, getAllSubCaste, getSubCasteById, updateSubCaste } from "../../services/admin/SubCasteService.js";





export const subCasteCreate = async (req, res) => {
  try {
    const data = await createSubCaste(req.body);
    res.status(201).json({ status: true, message: "Sub Caste created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const subCasteGetAll = async (req, res) => {
  try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;

        const result = await getAllSubCaste(page, limit);

        res.json({
          status: true,
          ...result,
        });
        
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const subCasteGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getSubCasteById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const subCasteUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateSubCaste(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Sub Caste updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const subCasteRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteSubCaste(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Sub Caste deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
