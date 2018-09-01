const assert = require('assert');
const services = require('../services');
const app = require('../server');
const http = require('http');


function mockConnection(url) {
    return new Promise((resolve, reject)=>{
        http.get(url, (stream) => {
                let data = null;
                let buffer = '';
                stream.on('data', (chunk) => {
                    buffer += chunk;
                });
                stream.on('end', () => {
                    data = buffer;
                    resolve({data: JSON.parse(data), 
                        statusCode: stream.statusCode}); 
                });
            }).on("error", (err) => { 
                reject(err.message);
        });
    })
}


class TestServerSuite {

    constructor(port) {
        this.app = app.listen(port, () => {
            this.startTestSuite();
        });
    }

    testGetData() {
        return mockConnection('http://127.0.0.1:3000/data/')
            .then((data)=>{
                assert.equal(200, data.statusCode);
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    testGetData404() {
        return mockConnection('http://127.0.0.1:3000/data/404path')
            .then((data)=>{
                assert.equal(404, data.statusCode);
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    startTestSuite() {
        Promise.all([this.testGetData(), this.testGetData404()])
            .then(()=>{
                this.app.close();
            })
            .catch((error)=>{
                console.log(error);
            })
    }

}


class TestDataServiceSuite {

    constructor() {
        this.startTestSuite();
    }

    testDataServiceOK() {
        services.dataService('http://127.0.0.1:8999/data')
        .then((data)=>{
            assert.ok(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    testDataServiceERROR() {
        services.dataService('http://127.0.0.1:64321/wrong')
            .catch((error)=>{
                assert.equal('connect ECONNREFUSED 127.0.0.1:64321', error);
            })
    }

    startTestSuite() {
        Promise.all([this.testDataServiceOK(), this.testDataServiceERROR()])
            .then(()=>{
            })
            .catch((error)=>{
                console.log(error);
            })
    }

}


new TestServerSuite(3000);
new TestDataServiceSuite();

//new TestClientDBSuite();