import mongoose from "mongoose";
import { createCity, deleteCity, getAllCity, getCityById, updateCity } from "../../services/admin/CityService.js";



export const cityCreate = async (req, res) => {
  try {
    const data = await createCity(req.body);
    res.status(201).json({ status: true, message: "City created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const cityGetAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;   // default page 1
    const limit = parseInt(req.query.limit) || 10;

    const data = await getAllCity(page, limit);
    res.json({ status: true, ...data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const cityGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getCityById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const cityUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateCity(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "City updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const cityRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteCity(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "City deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
