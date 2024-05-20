const Teacher = require("../models/teacherSchema");

module.exports = {
    getTeacher: async (req, res) => {
        const teacher = await Teacher.find();
        res.json(teacher);
    },
    addTeacher: async (req, res) => {
        const {subjects,school} = req.body
        const subjectIDsArray = subjects.split(",");
        const subjectsArray = subjectIDsArray.map(subject => subject.trim());
        try {
            const newTeacher = new Teacher({
                teacher_id: req.body.teacher_id,
                email: req.body.email,
                full_name: req.body.full_name,
                dob: req.body.dob,
                phone: req.body.phone,
                school: school,
                specialty: req.body.specialty,
                subjects: subjectsArray
            });
            await newTeacher.save();
            res.status(201).json({ message: "Teacher added successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    deleteTeacher: async (req, res) => {
        try {
            await Teacher.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Teacher deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    updateTeacher: async (req, res) => {
        try {
            const updatedTeacher = await Teacher.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json(updatedTeacher);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getTeacherById: async (req, res) => {
        try {
            const teacher = await Teacher.findById(req.params.id);
            res.status(200).json(teacher);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
}