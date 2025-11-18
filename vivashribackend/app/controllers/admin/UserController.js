import mongoose from "mongoose";
import { deleteUser, getAllUserList, getAllUserPaidList, updateUser } from "../../services/admin/UserService.js";


export const userGetAllList = async (req, res) => {
    try {
        const page  = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const name = req.query.name || null;
        const mobile = req.query.mobile || null;
        
        const data = await getAllUserList(page, limit, name, mobile);
        res.json({ 
                    status: true,
                        ...data
                    });

    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};
export const userGetAllPaidList = async (req, res) => {
    try {
        const page  = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const name = req.query.name || null;
        const mobile = req.query.mobile || null;
        const gender = req.query.gender || null;
        const status = req.query.status || null;
        
        const data = await getAllUserPaidList(page, limit, name, mobile, gender, status);
        res.json({ 
                    status: true,
                        ...data
                    });

    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};

export const userUpdate = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ success: false, message: "ID not found" });
        }
        const data = await updateUser(req.params.id, req.body);
        if (!data) return res.status(404).json({ status: false, message: "ID not found" });
        res.json({ status: true, message: "User updated successfully.", data });
    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};
export const userRemove = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ success: false, message: "ID not found" });
        }
        const data = await deleteUser(req.params.id);
        if (!data) return res.status(404).json({ status: false, message: "ID not found" });
        res.json({ status: true, message: "User deleted successfully.", data });
    }
    catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
};
