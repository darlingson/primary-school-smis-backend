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
                class_id,
                teacher_id,
                syllabus,
                textbooks
            });
            const savedSubject = await newSubject.save();
            res.status(200).json({ message: "Subject Added", savedSubject });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}