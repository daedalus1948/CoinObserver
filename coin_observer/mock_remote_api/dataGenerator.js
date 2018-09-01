const fs = require('fs');
//const parse = require('csv-parse');
const csvParser = require('./formatData');
const genRandomIntRange = require('./utils.js');


class FakeDataGenerator {

    constructor(filepath) {
        this.init(filepath);
    }

    init(filepath) { // initialize this.data
        if (!filepath) {
            throw Error('filepath not specified');
        }
        // read sync is actually preferable to async here, full data is loaded into memory - no streaming
        let inMemoryData = fs.readFileSync(filepath).toString('utf-8'); // if this throws error, let it kill the process
        console.log(inMemoryData);
        this.data = csvParser(inMemoryData); // {'symbolID':{...}, 'symbolID':{...}, ...}
        console.log(this.data);
    }

    getData() { // private getter
        return this.data;
    }

    generatePrice(oldPrice) { // private, inject price
        if (!oldPrice) {
            throw Error('oldPrice parameter undefined');
        }
        // if price is 100, generate a price between 50 and 150 - around 50% change max
        let newPrice = genRandomIntRange(Math.ceil(oldPrice/2), Math.ceil((oldPrice*3)/2));
        return newPrice;
    }

    generateTimestamp() {
        let date = new Date();
        let year = `${date.getFullYear()}`;
        let month = `${date.getMonth()+1}`; 
        let day = date.getDate();
        day = day < 10 ? `0${day}` : `${day}`;
        month = month < 10 ? `0${month}` : `${month}`;
        return `${year}-${month}-${day}`; // YYYY-MM-DD
    }

    updateDataPrice(data) { // private, inject data
        if (!data) {
            throw Error('data parameter undefined');
        }
        for (let key in data) {
            data[key].price = this.generatePrice(data[key].price);
            data[key].timestamp = this.generateTimestamp();
        }
        return data;
    }

    generateNewData() { // public, all data is re-generated
        let newData = this.updateDataPrice(this.getData());
        return newData;
    }

    generateNewDatum(symbolID) { // public all data re-generated, then unique datum selected
        if (!symbolID) {
            throw Error('no symbolID');
        }
        
        let newData = this.updateDataPrice(this.getData());

        if (!newData[symbolID]) {
            throw Error('symbolID not in DB');
        }
        let newDatum = newData[symbolID];
        return newDatum;
    }
}


module.exports = FakeDataGenerator;