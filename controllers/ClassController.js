const Class = require("../models/classSchema");

module.exports = {
    addClass: async (req, res) => {
        try {
            const newClass = new Class({
                ClassId: req.body.ClassId,
                ClassName: req.body.ClassName,
                ClassTeacher: req.body.ClassTeacher,
                SchoolID: req.body.SchoolID,
            });
            await newClass.save();
            res.status(201).json({ message: "Class added successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getClasses: async (req, res) => {
        try {
            const classes = await Class.find();
            res.status(200).json(classes);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getClass: async (req, res) => {
        try {
            const classData = await Class.findById(req.params.id);
            res.status(200).json(classData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    updateClass: async (req, res) => {
        try {
            const updatedClass = await Class.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json(updatedClass);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    deleteClass: async (req, res) => {
        try {
            await Class.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Class deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
}