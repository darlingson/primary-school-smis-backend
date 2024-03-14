const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.send({
        'message':"login"
    });
});

router.post('/check-status', (req, res) => {
    res.send({
        'message':"status check"
    });
});
router.post('/logout', (req, res) => {
    res.send({
        'message':"logout"
    });
});
router.post('/forgot-password', (req, res) => {
    res.send({
        'message':"forgot-password"
    })
})
router.get('/reset-password', (req, res) => {
    res.send({
        'message':"reset-password"
    })
})


module.exports = router;