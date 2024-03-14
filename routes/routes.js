const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        'message':"Hello"
    });
});

//crud routes for school
router.get('/school', (req, res) => {
    res.send({
        'message':"schools retrieved"
    })
})
router.get('/school/:id', (req, res) => {
    res.send({
        'message':"school with id retrieved"
    })
})
router.post('/school', (req, res) => {
    res.send({
        'message':"school added"
    })
})
router.put('/school/:id', (req, res) => {
    res.send({
        'message':"school with id updated"
    })
})
router.delete('/school/:id', (req, res) => {
    res.send({
        'message':"school with id deleted"
    })
})


//crud routes for student
router.get('/student', (req, res) => {
    res.send({
        'message':"students retrieved"
    })
})
router.get('/student/:id', (req, res) => {
    res.send({
        'message':"student with id retrieved"
    })
})
router.post('/student', (req, res) => {
    res.send({
        'message':"student added"
    })
})
router.put('/student/:id', (req, res) => {
    res.send({
        'message':"student with id updated"
    })
})
router.delete('/student/:id', (req, res) => {
    res.send({
        'message':"student with id deleted"
    })
})



module.exports = router;