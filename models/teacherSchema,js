const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    teacher_id: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    full_name: { type: String, required: true },
    dob: String,
    phone: String,
    specialty: String,
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
