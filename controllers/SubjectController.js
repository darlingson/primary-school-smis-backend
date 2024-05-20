const Subject = require("../models/subjectSchema");
const Class = require("../models/classSchema");
const Teacher = require("../models/teacherSchema");
module.exports = {
    addSubject: async (req, res) => {
        const { subject_id, subject_name, description, class_id, teacher_id, syllabus, textbooks } = req.body;
        try {
            const newSubject = new Subject({
                subject_id,
                subject_name,
                description,
                syllabus,
                textbooks
            });
            const savedSubject = await newSubject.save();
            res.status(200).json({ message: "Subject Added", savedSubject });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getSubjects: async (req, res) => {
        try {
            const subjects = await Subject.find();
            res.status(200).json(subjects);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getSubject: async (req, res) => {
        try {
            const subject = await Subject.findById(req.params.id);
            res.status(200).json(subject);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    updateSubject: async (req, res) => {
        try {
            const updatedSubject = await Subject.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json(updatedSubject);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    deleteSubject: async (req, res) => {
        try {
            await Subject.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Subject deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
}