const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    subject_id: { type: String, required: true, unique: true },
    subject_name: { type: String, required: true },
    description: String,
    syllabus: String,
    textbooks: [{ type: String }],
});

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
