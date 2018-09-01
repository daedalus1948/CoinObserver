const express = require('express');
const dataGenerator = require('./dataGenerator.js');

const coinDataGenerator = new dataGenerator('coin.csv');
const app = express();

app.get('/coins', (req, res, next) => {
    // synchronous code, express automatically handles error handling, no need for try catch
    let data = coinDataGenerator.generateNewData(); 
    // end
    res.json(data);
});

app.get('/coins/:id', (req, res, next) => {
    let coinId = req.params.id;
    // synchronous code, express automatically handles error handling, no need for try catch
    let datum = coinDataGenerator.generateNewDatum(coinId);
    // end
    res.json(datum);
});

app.use(function (req, res, next) { // runs as the last middleware (no match) - 404
    res.status(404).json({status: 404, message: 'NOT FOUND'});
})
  
app.use(function (err, req, res, next) { // error handling middleware
    if (err.message == 'symbolID not in DB') { // special case
        res.status(404).json({status: 404, message: 'NOT FOUND'});
    }
    else { // general case
        res.status(500).json({status: 500, message: 'SERVER ERROR'});
    }
  })

app.listen(8999, () => console.log('Hello from fake coin data generator service on port 8999'));