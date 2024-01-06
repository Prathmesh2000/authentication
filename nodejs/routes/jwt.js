const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.get('/genrateJWTtoken', (req, res) => {
    const currTime = new Date();
    const payload = {
        time: currTime,
    };
    const SECRET_KEY = process.env.SECRET_KEY_JWT;
    const token = jwt.sign(payload, SECRET_KEY);
    res.cookie(process.env.SECRET_KEY_NAME_JWT, token, { 
        maxAge: 9999999999999, 
        httpOnly: false 
    });
    res.status(200).json({ 
        msg: 'Token genrated successfully', 
        token: token 
    });
});

router.get('/temp', (req, res) => {
    console.log(req.header[process.env.SECRET_KEY_JWT])
    res.send('ooo')
})



module.exports = router;
