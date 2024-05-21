const Student = require("../models/StudentSchema");

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
        const { student_id, email, first_name, last_name, dob, contact, standard, guardian_contact, gender, school, enrollment_date } = req.body
        if (!student_id) {
            return res.status(400).json({ "message": "student ID is required" });
        }
        else if (!email) {
            return res.status(400).json({ "message": "email is required" });
        }
        else if (!first_name) {
            return res.status(400).json({ "message": "first name is required" });
        }
        else if (!last_name) {
            return res.status(400).json({ "message": "last name is required" });
        }
        else if (!dob) {
            return res.status(400).json({ "message": "date of birth is required" });
        }
        else if (!contact) {
            return res.status(400).json({ "message": "contact is required" });
        }
        else if (!standard) {
            return res.status(400).json({ "message": "standard is required" });
        }
        else if (!guardian_contact) {
            return res.status(400).json({ "message": "guardian contact is required" });
        }
        else if (!gender) {
            return res.status(400).json({ "message": "gender is required" });
        }
        else if (!school) {
            return res.status(400).json({ "message": "school is required" });
        }
        else if (!enrollment_date) {
            return res.status(400).json({ "message": "enrollment date is required" });
        }
        try {
            const student = new Student({
                student_id: student_id,
                email: email,
                first_name: first_name,
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
            return res.status(201).json({ message: "Student added successfully" });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },


    updateStudent: async (req, res) => {
        const { student_id, email, fist_name, last_name, dob, contact, standard, guardian_contact, gender, school, enrollment_date } = req.body
        if (!student_id) {
            return res.status(400).json({ "message": "student ID is required" });
        }
        else if (!email) {
            return res.status(400).json({ "message": "email is required" });
        }
        else if (!fist_name) {
            return res.status(400).json({ "message": "first name is required" });
        }
        else if (!last_name) {
            return res.status(400).json({ "message": "last name is required" });
        }
        else if (!dob) {
            return res.status(400).json({ "message": "date of birth is required" });
        }
        else if (!contact) {
            return res.status(400).json({ "message": "contact is required" });
        }
        else if (!standard) {
            return res.status(400).json({ "message": "standard is required" });
        }
        else if (!guardian_contact) {
            return res.status(400).json({ "message": "guardian contact is required" });
        }
        else if (!gender) {
            return res.status(400).json({ "message": "gender is required" });
        }
        else if (!school) {
            return res.status(400).json({ "message": "school is required" });
        }
        else if (!enrollment_date) {
            return res.status(400).json({ "message": "enrollment date is required" });
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

            return res.status(200).json(updatedstudent);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    deleteStudent: async (req, res) => {
        try {
            await Student.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Student deleted successfully" });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

}
