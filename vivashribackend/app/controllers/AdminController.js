import { getAllAdmin } from "../services/AdminService.js";

export const getAllAdminList = async (req, res) => {
  try {
    const admin = await getAllAdmin();
    res.json({ data: admin, status: true });
  } catch (err) {
    res.status(500).json({ error: err.message, status: false });
  }
};
