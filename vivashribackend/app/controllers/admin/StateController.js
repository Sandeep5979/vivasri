import mongoose from "mongoose";
import { createState, deleteState, getAllState, getStateById, updateState } from "../../services/admin/StateService.js";




export const stateCreate = async (req, res) => {
  try {
    const data = await createState(req.body);
    res.status(201).json({ status: true, message: "State created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const stateGetAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;   // default page 1
    const limit = parseInt(req.query.limit) || 10; // default 10 items per page

    const data = await getAllState(page, limit);
    

    res.json({ status: true, ...data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const stateGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getStateById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const stateUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateState(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "State updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const stateRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteState(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "State deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
