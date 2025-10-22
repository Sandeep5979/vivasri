import mongoose from "mongoose";
import { createMaritalStatus, deleteMaritalStatus, getAllMaritalStatus, getMaritalStatusById, updateMaritalStatus } from "../../services/admin/MaritalStatusService.js";



export const maritalStatusCreate = async (req, res) => {
  try {
    const data = await createMaritalStatus(req.body);
    res.status(201).json({ status: true, message: "Marital status created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const maritalStatusGetAll = async (req, res) => {
  try {
    const data = await getAllMaritalStatus();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const maritalStatusGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getMaritalStatusById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const maritalStatusUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateMaritalStatus(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Marital status updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const maritalStatusRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteMaritalStatus(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Marital status deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
