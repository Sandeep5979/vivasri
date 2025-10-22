import mongoose from "mongoose";
import { createGotra, deleteGotra, getAllGotra, getGotraById, updateGotra } from "../../services/admin/GotraService.js";





export const gotraCreate = async (req, res) => {
  try {
    const data = await createGotra(req.body);
    res.status(201).json({ status: true, message: "Gotra created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const gotraGetAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;   // default page 1
    const limit = parseInt(req.query.limit) || 10; // default 10 items per page

    const data = await getAllGotra(page, limit);
    res.json({
      status: true,
      message: "Gotra list fetched successfully",
      ...data,
    });

  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const gotraGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getGotraById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const gotraUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateGotra(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Gotra updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const gotraRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteGotra(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Gotra deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
