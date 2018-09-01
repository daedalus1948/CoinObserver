//this file is the entry point
const app = require('./server');
const Client = require('./client');
const DatabaseManager = require('./db')['DatabaseManager'];

function init() {
    app.listen(3000, () => console.log('hi from port 3000!')); // start serving data on port 3000
    const client = new Client(DatabaseManager, 'coin.db'); // inject the DatabaseManager class into constructor
}   

init();