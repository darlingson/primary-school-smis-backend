const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    subject_id: { type: String, required: true, unique: true },
    subject_name: { type: String, required: true },
    description: String,
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    syllabus: String,
    textbooks: [{ type: String }],
});

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
