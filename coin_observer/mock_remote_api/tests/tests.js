const assert = require('assert');
const http = require('http');
const dataGenerator = require('../dataGenerator.js');

function setup() {
    // start the process
}



function mockConnection( url, callback) {
    return http.get(url, (socketLike) => {
      let data = null;
      let buffer = '';
      socketLike.on('data', (bytes) => {
        buffer += bytes;
      });
      socketLike.on('end', () => {
        data = buffer;
        callback(null, data, socketLike.statusCode);
      });
    }).on("error", (err) => {
      callback(err.message, null, socketLike.statusCode);
    });
  }


// DataGenerator tests ->

function dataGeneratorNonSuppliedFile() {
    assert.throws(()=>{
        new dataGenerator(); // no filepath argument supplied
    }, Error('filepath not specified'));
}

function dataGeneratorGeneratePriceError() {
    assert.throws(()=>{
        new dataGenerator('test_coin.csv').generatePrice(); // no filepath argument supplied
    }, Error('oldPrice parameter undefined'));
}

function dataGeneratorUpdateDataPriceError() {
    assert.throws(()=>{
        new dataGenerator('test_coin.csv').updateDataPrice(); // no filepath argument supplied
    }, Error('data parameter undefined'));
}


function dataGeneratorGenerateNewDatumNoParameter() {
    assert.throws(()=>{
        new dataGenerator('test_coin.csv').generateNewDatum(); // no filepath argument supplied
    }, Error('no symbolID'));
}


function dataGeneratorGenerateNewDatum404Parameter() {
    assert.throws(()=>{
        new dataGenerator('test_coin.csv').generateNewDatum('FAKESYMBOL'); // no filepath argument supplied
    }, Error('symbolID not in DB'));
}

// <- DataGenerator tests end

// MockServer API test ->

function mockConnectionGetAll() {
    mockConnection('http://127.0.0.1:8999/coins', (err, data, statusCode)=>{
        assert.equal(200, statusCode);
    });
}

function mockConnectionGetID() {
    mockConnection('http://127.0.0.1:8999/coins/NTH', (err, data, statusCode)=>{
        assert.equal(200, statusCode);
    });
}

function mockConnectionGetID404() {
    mockConnection('http://127.0.0.1:8999/coins/ABC', (err, data, statusCode)=>{
        assert.equal(404, statusCode);
    });
}

// <- MockServer API tests end 

// run the tests
dataGeneratorGeneratePriceError();
dataGeneratorNonSuppliedFile();
dataGeneratorUpdateDataPriceError();
dataGeneratorGenerateNewDatumNoParameter();
dataGeneratorGenerateNewDatum404Parameter();

mockConnectionGetAll();
mockConnectionGetID();
mockConnectionGetID404();
// tests finished