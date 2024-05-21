const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    student_id: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    dob: String,
    standard: { type: String, required: true },
    contact:{
        phone: String,
        address: String,
    },
    guardian_contact: {
        name: String,
        phone: String,
        address: String
    },
    gender: {
        type: String,
        required: true
    },
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    enrollment_date: String
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student