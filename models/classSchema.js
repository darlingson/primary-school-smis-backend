const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    ClassId: { type: String, required: true, unique: true },
    ClassName: { type: String, required: true },
    ClassTeacher: { type: String, required: false },
    SchoolID: { type: String, required: true },
    Subjects: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Subject" }
    ],
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
