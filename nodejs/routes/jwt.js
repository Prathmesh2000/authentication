const express = require('express');
const router = express.Router();

router.get('/genrateJWTtoken', (req, res) => {
    res.send('apple')
})



module.exports = router;
