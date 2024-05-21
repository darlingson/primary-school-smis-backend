const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    term: { type: String, required: true },
    grades: {
        type: [Scores],
        required: true
    },
    final_grade: { type: Number, required: true },
    comments: String
});
const Scores = new Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
});
const Grade = mongoose.model("Grade", gradeSchema);
module.exports = Grade