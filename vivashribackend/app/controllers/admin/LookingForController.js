import mongoose from "mongoose";
import { createLookingFor, deleteLookingFor, getAllLookingFor, getLookingForById, updateLookingFor } from "../../services/admin/LookingForService.js";


export const lookingForCreate = async (req, res) => {
  try {
    const data = await createLookingFor(req.body);
    res.status(201).json({ status: true, message: "Looking for created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const lookingForGetAll = async (req, res) => {
  try {
    const data = await getAllLookingFor();
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const lookingForGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getLookingForById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const lookingForUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateLookingFor(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Looking for updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const lookingForRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteLookingFor(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Looking for deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
