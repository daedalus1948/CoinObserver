const http = require('http');
const arrayToObject = require('./utils');

function bulkInsertData(db, data, insertCoinQuery, insertPriceQuery) {
    return new Promise((resolve, reject)=>{
      db.serialize(function() {
        let insertCoin = db.prepare(insertCoinQuery);
        let insertPrice = db.prepare(insertPriceQuery);
        for (let key in data) {
            insertCoin.run({$symbol: data[key].symbol, $name: data[key].name});
            insertPrice.run({$coinSymbol: data[key].symbol, $price: data[key].price, $timestamp: data[key].timestamp});
        }
        insertPrice.finalize();
        insertCoin.finalize(()=>{resolve("ok")});
      });
    })
}


function getData (db, selectQuery) {
    return new Promise((resolve, reject)=>{
        db.all(selectQuery,[], (err, rows) => {
            if (err) {
              reject(err);
            }
            resolve(arrayToObject(rows));
        });  
    })
}
  

function dataService(url) {
    return new Promise((resolve, reject)=>{
        http.get(url, (stream) => {
                let data = null;
                let buffer = '';
                stream.on('data', (chunk) => {
                    buffer += chunk;
                });
                stream.on('end', () => {
                    data = buffer;
                    resolve(JSON.parse(data)); 
                });
            }).on("error", (err) => { 
                reject(err.message);
        });
    })
}


module.exports = {
    dataService: dataService,
    getData: getData,
    bulkInsertData: bulkInsertData
};