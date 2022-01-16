const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


const userRoute = require('./api/routes/user');
const router = require('./api/routes/user');

mongoose.connect('mongodb://localhost:27017/ev_studios')
    .then(() => {
        console.log('MongoDB connected')
    })
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/user', userRoute);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'app is running at 3000'
    })
})


module.exports = app;