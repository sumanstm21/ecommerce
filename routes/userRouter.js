const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.json({msg: "Test Router"})
})

module.exports = router;