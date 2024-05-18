const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    ClassId: { type: String, required: true, unique: true },
    ClassName: { type: String, required: true },
    Section: String,
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
