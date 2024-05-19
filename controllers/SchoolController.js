const School = require("../models/schoolSchema");
const addSchool = async (req, res) => {
    try {
        if (
            !(
                req.body.name &&
                req.body.type &&
                req.body.address &&
                req.body.location &&
                req.body.email &&
                req.body.phone
            )
        ) {
            res.status(400).send("All input is required");
        }

        const oldSchool = await School.findOne({ email: req.body.email });
        const schoolName = await School.findOne({ name: req.body.name });

        if (schoolName) return res.status(409).send("This school name has already been used to create a school")

        if (oldSchool) {
            return res.status(409).send("This email address has already been used to create a school");
        }

        const newSchool = new School({
            name: req.body.name,
            type: req.body.type,
            address: req.body.address,
            location: req.body.location,
            email: req.body.email,
            phone: req.body.phone,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await newSchool.save();
        res.status(201).json({ message: "School added successfully" });
    } catch (err) {
        console.log(err);
    }
};

const getSchools = async (req, res) => {
    try {
        const schools = await School.find();
        res.status(200).json(schools);
    } catch (err) {
        console.log(err);
    }
};

const getSchool = async (req, res) => {
    try {
        const school = await School.findById(req.params.id);
        res.status(200).json(school);
    } catch (err) {
        console.log(err);
    }
};

const getSchoolByLocation = async (req, res) => {
    try {
        //the locations should not match exactly, it should just be like the given location

        const schools = await School.find({ location: { $regex: req.params.location, $options: "i" } });
        res.status(200).json(schools);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { addSchool, getSchools }