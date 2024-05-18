const mongoose = require("mongoose");

const classTimetableSchema = new mongoose.Schema({
    dayOfWeek: { type: String, required: true },
    timeSlot: { type: String, required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    roomNumber: String,
    notes: String,
});

const ClassTimetable = mongoose.model("ClassTimetable", classTimetableSchema);
module.exports = ClassTimetable;
