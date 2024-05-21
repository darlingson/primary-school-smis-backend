const Student = require("../models/Student");

module.exports = {
    getStudents: async (req, res) => {
        const students = await Student.find();
        res.json(students);
    },

    getStudent: async (req, res) => {
        const student = await Student.findById(req.params.id);
        res.json(student);
    },

    addStudent: async (req, res) => {
        const { student_id, email, fist_name, last_name, dob, contact, standard, guardian_contact, gender, school, enrollment_date } = req.body
        if (!student_id) {
            res.status(400).json({ "message": "student ID is required" });
        }
        else if (!email) {
            res.status(400).json({ "message": "email is required" });
        }
        else if (!fist_name) {
            res.status(400).json({ "message": "first name is required" });
        }
        else if (!last_name) {
            res.status(400).json({ "message": "last name is required" });
        }
        else if (!dob) {
            res.status(400).json({ "message": "date of birth is required" });
        }
        else if (!contact) {
            res.status(400).json({ "message": "contact is required" });
        }
        else if (!standard) {
            res.status(400).json({ "message": "standard is required" });
        }
        else if (!guardian_contact) {
            res.status(400).json({ "message": "guardian contact is required" });
        }
        else if (!gender) {
            res.status(400).json({ "message": "gender is required" });
        }
        else if (!school) {
            res.status(400).json({ "message": "school is required" });
        }
        else if (!enrollment_date) {
            res.status(400).json({ "message": "enrollment date is required" });
        }
        try {
            const student = new Student({
                student_id: student_id,
                email: email,
                fist_name: fist_name,
                last_name: last_name,
                dob: dob,
                contact: contact,
                standard: standard,
                guardian_contact: guardian_contact,
                gender: gender,
                school: school,
                enrollment_date: enrollment_date
            });
            await student.save();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateStudent: async (req, res) => {
        const { student_id, email, fist_name, last_name, dob, contact, standard, guardian_contact, gender, school, enrollment_date } = req.body
        if (!student_id) {
            res.status(400).json({ "message": "student ID is required" });
        }
        else if (!email) {
            res.status(400).json({ "message": "email is required" });
        }
        else if (!fist_name) {
            res.status(400).json({ "message": "first name is required" });
        }
        else if (!last_name) {
            res.status(400).json({ "message": "last name is required" });
        }
        else if (!dob) {
            res.status(400).json({ "message": "date of birth is required" });
        }
        else if (!contact) {
            res.status(400).json({ "message": "contact is required" });
        }
        else if (!standard) {
            res.status(400).json({ "message": "standard is required" });
        }
        else if (!guardian_contact) {
            res.status(400).json({ "message": "guardian contact is required" });
        }
        else if (!gender) {
            res.status(400).json({ "message": "gender is required" });
        }
        else if (!school) {
            res.status(400).json({ "message": "school is required" });
        }
        else if (!enrollment_date) {
            res.status(400).json({ "message": "enrollment date is required" });
        }
        try {
            const updatedstudent = await Student.findByIdAndUpdate({
                student_id: student_id,
                email: email,
                fist_name: fist_name,
                last_name: last_name,
                dob: dob,
                contact: contact,
                standard: standard,
                guardian_contact: guardian_contact,
                gender: gender,
                school: school,
                enrollment_date: enrollment_date,

            }, req.params.id, { new: true });

            res.status(200).json(updatedstudent);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

}
