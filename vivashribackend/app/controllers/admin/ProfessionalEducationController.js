import mongoose from "mongoose";
import { createProfessionalEducation, deleteProfessionalEducation, getAllProfessionalEducation, getProfessionalEducationById, updateProfessionalEducation } from "../../services/admin/ProfessionalEducationService.js";




export const professionalEducationCreate = async (req, res) => {
  try {
    
    const data = await createProfessionalEducation(req.body);
    res.status(201).json({ status: true, message: "Professional Education created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const professionalEducationGetAll = async (req, res) => {
  try {
    const data = await getAllProfessionalEducation();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const professionalEducationGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getProfessionalEducationById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const professionalEducationUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateProfessionalEducation(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Professional Education updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const professionalEducationRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteProfessionalEducation(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Professional Education deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
