const sqlite3 = require('sqlite3').verbose();


class DatabaseManager {

  constructor(filepath, initDone) {
    this.connection = new sqlite3.Database(filepath, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the coin.db SQlite database.');
      this.createTables(this.getConnection(), (error)=>{
        if (error) {
          initDone(error);
        }
        initDone();
      });
    });
    return this.connection;
  }

  createTables(dbConnection, done) {
    dbConnection.run(modelCoins, (error)=>{
      if (error) {
        done(error);
      }
      console.log("created Coins table if didn't exist");
      dbConnection.run(modelPrices, (error)=>{
        if (error) {
          done(error);
        }
        console.log("created Prices table if didn't exist");
        done();
      })
    })
  }

  getConnection() {
    return this.connection;
  }

}


const modelCoins = `CREATE TABLE IF NOT EXISTS 'coins' (
                      'id'	INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                      'symbol'	TEXT UNIQUE,
                      'name'	TEXT UNIQUE
                    );`;

const modelPrices = `CREATE TABLE IF NOT EXISTS 'prices' (
                      'id'	INTEGER,
                      'coinSymbol'	TEXT,
                      'price'	REAL,
                      'timestamp'	TEXT,
                      PRIMARY KEY('id'),
                      FOREIGN KEY('coinSymbol') REFERENCES 'coins'('symbol')
                    );`;

const yesterdayQuery = `SELECT MAX(prices.id) as id, coins.symbol, coins.name, prices.price, prices.timestamp
                        FROM coins JOIN prices ON coins.symbol=prices.coinSymbol
                        WHERE timestamp=date('now', '-1 day', 'localtime')
                        GROUP BY coinSymbol;`;

const todayQuery = `SELECT MAX(prices.id) as id, coins.symbol, coins.name, prices.price, prices.timestamp
                    FROM coins JOIN prices ON coins.symbol=prices.coinSymbol
                    WHERE timestamp=date('now', 'localtime')
                    GROUP BY coinSymbol;`;

const insertNewCoin = `INSERT OR IGNORE INTO 'coins' (symbol, name) VALUES ($symbol, $name)`;

const insertNewPrice = `INSERT INTO 'prices'(coinSymbol, price, timestamp) VALUES ($coinSymbol, $price, $timestamp)`;


module.exports = {
  DatabaseManager: DatabaseManager,
  queries: 
  {
    yesterdayQuery: yesterdayQuery,
    todayQuery: todayQuery,
    insertCoin: insertNewCoin,
    insertPrice: insertNewPrice
  },
};


