const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    ClassId: { type: String, required: true, unique: true },
    ClassName: { type: String, required: true },
    SchoolID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "School" },
    Subjects: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Subject" }
    ],
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
