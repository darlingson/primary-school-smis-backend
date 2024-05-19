const express = require('express');
const authenticateToken = require('../middleware/verifyToken');
const router = express.Router();

const { addSchool, getSchools, getSchool, getSchoolByLocation } = require('../controllers/SchoolController');
const { getSchoolAdmins, getSchoolAdmin, addSchoolAdmin, geSchoolAdminBySchool } = require('../controllers/SchoolAdminController');
router.get('/', (req, res) => {
    res.send({
        'message': "Hello"
    });
});

//crud routes for school
router.get('/school', getSchools)
router.get('/school/:id', getSchool)
router.post('/school', addSchool)
router.get('/school/:location', getSchoolByLocation)
router.put('/school/:id', (req, res) => {
    res.send({
        'message': "school with id updated"
    })
})
router.delete('/school/:id', (req, res) => {
    res.send({
        'message': "school with id deleted"
    })
})


//crud routes for student
router.get('/student', (req, res) => {
    res.send({
        'message': "students retrieved"
    })
})
router.get('/student/:id', (req, res) => {
    res.send({
        'message': "student with id retrieved"
    })
})
router.post('/student', (req, res) => {
    res.send({
        'message': "student added"
    })
})
router.put('/student/:id', (req, res) => {
    res.send({
        'message': "student with id updated"
    })
})
router.delete('/student/:id', (req, res) => {
    res.send({
        'message': "student with id deleted"
    })
})

//crud routes for class
router.get('/class', (req, res) => {
    res.send({
        'message': "classes retrieved"
    })
})
router.get('/class/:id', (req, res) => {
    res.send({
        'message': "class with id retrieved"
    })
})
router.get('/class/:id/students', (req, res) => {
    res.send({
        'message': "student from class with id retrieved"
    })
})
router.get('/class/:id/subjects', (req, res) => {
    res.send({
        'message': "subjects from class with id retrieved"
    })
})
router.post('/class', (req, res) => {
    res.send({
        'message': "class added"
    })
})
router.put('/class/:id', (req, res) => {
    res.send({
        'message': "class with id updated"
    })
})
router.delete('/class/:id', (req, res) => {
    res.send({
        'message': "class with id deleted"
    })
})

//grade routes
router.post('student/:id/subject/:subject_id/grade', (req, res) => {
    res.send({
        'message': "grade added"
    })
})
router.put('student/:id/subject/:subject_id/grade/:grade_id', (req, res) => {
    res.send({
        'message': "grade with id updated"
    })
})
router.delete('student/:id/subject/:subject_id/grade/:grade_id', (req, res) => {
    res.send({
        'message': "grade with id deleted"
    })
})
router.get('student/:id/grades', (req, res) => {
    res.send({
        'message': "grades retrieved"
    })
})
router.get('student/:id/grades/:subject_id', (req, res) => {
    res.send({
        'message': "grades retrieved"
    })
})

//system admin route


//school admin routes
router.get('/school-admins/', authenticateToken, getSchoolAdmins)
router.get('/school-admins/:id', getSchoolAdmin)
router.post('/school-admins/', addSchoolAdmin)
router.post('/school-admins/:id', (req, res) => {
    res.send({
        'message': "admin added school successfully"
    })
})
module.exports = router;