const express = require('express');
const addImages = require('./middlewares/modifyDataMiddleware'); // not used as a middleware yet
const allowCORS = require('./middlewares/CORSmiddleware');
const services = require('./services');

const app = express();

// use this middleware BEFORE IT HITS STATIC MIDDLEWARE WHICH REROUTES to response before adding these headers
app.use(allowCORS);
// use static middleware for dev
app.use(express.static('assets'));


app.get('/data', (req, res, next)=>{
    services.dataService('http://127.0.0.1:8999/coins/')
        .then((dbData)=>{
            let modifiedData = addImages(dbData);
            res.json(modifiedData);
        })
        .catch((error)=>{
            next(error);
        })
});

app.use(function (req, res, next) { // 404 middleware
    res.status(404).json({status: 404, message: 'RESOURCE NOT FOUND'});
})
  
app.use(function (err, req, res, next) { // error handling middleware (standard 500)
    res.status(500).json({status: 500, message: 'INTERNAL SERVER ERROR'});
  })

module.exports = app;


