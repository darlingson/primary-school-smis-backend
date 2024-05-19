const SchoolAdmin = require("../models/SchoolAdmin");
const bcrypt = require("bcrypt");
module.exports = {
    getSchoolAdmins: async (req, res) => {
        try {
            const schoolAdmins = await SchoolAdmin.find();
            res.status(200).json(schoolAdmins);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getSchoolAdmin: async (req, res) => {
        try {
            const schoolAdmin = await SchoolAdmin.findById(req.params.id);
            res.status(200).json(schoolAdmin);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    addSchoolAdmin: async (req, res) => {
        let { name, school, username, phone, email, password, role } = req.body;
        password = await bcrypt.hash(password, 10);
        try {
            const newSchoolAdmin = new SchoolAdmin({
                name,
                school,
                username,
                phone,
                email,
                password,
                role,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            await newSchoolAdmin.save();
            res.status(201).json({ message: "School admin added successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    //get school admin by specifying school
    getSchoolAdminsBySchool: async (req, res) => {
        try {
            const schoolAdmins = await SchoolAdmin.find({ school: req.params.school });
            res.status(200).json(schoolAdmins);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
}