import mongoose from "mongoose";
import { createHobbies, deleteHobbies, getAllHobbies, getHobbiesById, updateHobbies } from "../../services/admin/HobbiesService.js";
import path from "path";
import sharp from "sharp";
import { writeFile, unlink } from "fs/promises";




export const hobbiesCreate = async (req, res) => {
  try {
    let iconPath = null;

    if (req.files && req.files.icon) {
      const icon = req.files.icon;

      const ext = path.extname(icon.name).toLowerCase();
      const allowed = [".jpg", ".jpeg", ".png", ".webp"];

      if (!allowed.includes(ext)) {
        return res
          .status(400)
          .json({ status: false, error: `Invalid file type for ${icon.name}` });
      }

      const fileName = `${Date.now()}-${icon.name}`;
      const uploadPath = path.join(process.cwd(), "public/upload/icon", fileName);

      const buffer = icon.data;
      const finalBuffer = await sharp(buffer)
        .resize(40, 40) 
        .toBuffer();

      await writeFile(uploadPath, finalBuffer);
      iconPath = `/uploads/icon/${fileName}`;
    }

   
    const hobbyData = {
      ...req.body,
      ...(iconPath && { icon: iconPath }), 
    };

    
    const data = await createHobbies(hobbyData);

    res.status(201).json({
      status: true,
      message: "Hobby created successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const hobbiesGetAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await getAllHobbies(page, limit);

    res.json({
      status: true,
      ...result,
    });
    
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const hobbiesGetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "ID not found" });
    }

    const data = await getHobbiesById(req.params.id);
    if (!data) return res.status(404).json({ status: false, message: "ID not found" });
    res.json({ status: true, data });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const hobbiesUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ status: false, message: "Invalid ID" });
    }

    const existingHobby = await getHobbiesById(id);
    if (!existingHobby) {
      return res.status(404).json({ status: false, message: "Hobby not found" });
    }

    let iconPath = existingHobby.icon; // keep old icon by default

    if (req.files && req.files.icon) {
      const icon = req.files.icon;
      const ext = path.extname(icon.name).toLowerCase();
      const allowed = [".jpg", ".jpeg", ".png", ".webp"];

      if (!allowed.includes(ext)) {
        return res
          .status(400)
          .json({ status: false, error: `Invalid file type for ${icon.name}` });
      }

      if (iconPath) {
        const oldPath = path.join(process.cwd(), "public", iconPath);
        try {
          await unlink(oldPath);
        } catch (err) {
          console.warn("⚠️ Could not delete old icon:", err.message);
        }
      }

      // Save new icon
      const fileName = `${Date.now()}-${icon.name}`;
      const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

      const buffer = icon.data;
      const finalBuffer = await sharp(buffer)
        .resize(40, 40) // ✅ Resize to 40x40 pixels
        .toBuffer();

      await writeFile(uploadPath, finalBuffer);
      iconPath = `/uploads/${fileName}`;
    }

    const updatedData = {
      ...req.body,
      icon: iconPath,
    };

    // const data = await updateHobbies(id, updatedData);

    res.json({
      status: true,
      message: "Hobby updated successfully",
      updatedData,
    });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

export const hobbiesRemove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ status: false, message: "Invalid ID" });
    }

    const existingHobby = await getHobbiesById(id);
    if (!existingHobby) {
      return res.status(404).json({ status: false, message: "Hobby not found" });
    }

    if (existingHobby.icon) {
      const iconPath = path.join(process.cwd(), "public", existingHobby.icon);
      try {
        await unlink(iconPath);
      } catch (err) {
        console.warn("⚠️ Could not delete icon file:", err.message);
      }
    }

    const data = await deleteHobbies(id);
    if (!data) {
      return res.status(404).json({ status: false, message: "Hobby not found" });
    }

    res.json({ status: true, message: "Hobby deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};
