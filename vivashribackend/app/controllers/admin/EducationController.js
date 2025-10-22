import mongoose from "mongoose";
import { createEducation, deleteEducation, getAllEducation, getEducationById, updateEducation } from "../../services/admin/EducationService.js";



export const educationCreate = async (req, res) => {
  try {
    const data = await createEducation(req.body);
    res.status(201).json({ status: true, message: "Education created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const educationGetAll = async (req, res) => {
  try {
    const data = await getAllEducation();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const educationGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getEducationById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const educationUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateEducation(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Education updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const educationRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteEducation(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Education deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
