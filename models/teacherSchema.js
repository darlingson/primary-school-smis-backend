const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    teacher_id: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    full_name: { type: String, required: true },
    dob: String,
    phone: String,
    //the teacher should be linked to a school
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    specialty: String,
    //the teacher should be linked to a list of subjects they are responsible for teaching, each subject should have a class for differentiation
    subjects :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject"
        }
    ]
    
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
