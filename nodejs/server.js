const express = require('express');
require('dotenv').config();
const jwt = require('./routes/jwt');


const app = express();

app.use('users', jwt);

const port = process.env.PORT ||5000;

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
});
