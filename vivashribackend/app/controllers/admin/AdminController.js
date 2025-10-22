
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Admin from "../../models/AdminModel.js"; // ✅ use .js extension for ES modules

dotenv.config();

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔹 Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // 🔹 Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    

    // 🔹 Compare password (hashed)
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // 🔹 Generate JWT token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "3d" } // token valid for 3 days
    );

    // 🔹 Send response
    return res.status(200).json({
      status: true,
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name || "",
        email: admin.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};
