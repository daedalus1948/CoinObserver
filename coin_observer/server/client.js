const queries = require('./db')['queries'];
const services = require('./services');


class Client {

    constructor(DatabaseManager, filepath) {
        this.intervalID = null;
        this.db = new DatabaseManager(filepath, ()=>{
            console.log("db initialized, client can start the request loop");
            this.startRequestLoop();
        })
    }

    getIntervalID() {
        return this.intervalID;
    }

    startRequestLoop() {
        this.intervalID = setInterval(()=>{
            services.dataService('http://127.0.0.1:8999/coins')
                .then((remoteData)=>{
                    return services.bulkInsertData(this.db, remoteData, queries.insertCoin, queries.insertPrice);
                })
                .then(()=>{
                    console.log("succesfully fetched and inserted data");
                })
                .catch((error)=>{
                    console.log(error);
                })
        }, 1000);
        return;
    }

    killRequestLoop() {
        clearInteraval(this.getIntervalID);
        return;
    }
}

module.exports = Client;