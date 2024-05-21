const Class = require("../models/classSchema");

module.exports = {
    addClass: async (req, res) => {
        if (!req.body.ClassId) {
            res.status(400).json({ "message": "class ID is required" });
        } else if (!req.body.ClassName) {
            res.status(400).json({ "message": "class name is required" });
        } else if (!req.body.SchoolID) {
            res.status(400).json({ "message": "school ID is required" });
        } else if (!req.body.Subjects) {
            res.status(400).json({ "message": "subject list is required" });
        }
        let subjectsarray = req.body.Subjects.split(",");
        subjectsarray = subjectsarray.map((subject) => subject.trim());
        try {
            const newClass = new Class({
                ClassId: req.body.ClassId,
                ClassName: req.body.ClassName,
                SchoolID: req.body.SchoolID,
                Subjects: subjectsarray,
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