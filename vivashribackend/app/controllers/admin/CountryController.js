import mongoose from "mongoose";
import { createCountry, deleteCountry, getAllCountry, getCountryById, updateCountry } from "../../services/admin/CountryService.js";





export const countryCreate = async (req, res) => {
  try {
    const data = await createCountry(req.body);
    res.status(201).json({ status: true, message: "Country created successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); 
  }
};

export const countryGetAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const data = await getAllCountry(page, limit);
    res.json({
      status: true,
      ...data,
    });

  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const countryGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getCountryById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const countryUpdate = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await updateCountry(req.params.id, req.body);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Country updated successfully", data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const countryRemove = async (req, res) => {
  try {
    
    if (!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({ success: false, message: "ID not found" });
    }
    
    const data = await deleteCountry(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, message: "Country deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
