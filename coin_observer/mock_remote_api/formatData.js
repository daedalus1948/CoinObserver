
// does not work with file streams (can be added easily) works with in-memory files
// returns JSON-like format


function parseMetaData(data) {
    let n = 0;
    buffer = '';
    while (data[n] != "\n") {
        if (data[n] == "\r") { // for windows platforms, ignore \r
            n++;
            continue;
        }
        buffer += data[n];
        n++;
    }
    let metaData = buffer.split(",");
    let newLinePos = n+1;
    return [metaData, newLinePos];
}


function parseData(data, metaData, position) {
    let dataset = {};
    let datum = {};
    let buffer = '';
    let length = data.length;
    let counter = 0;

    for (let i = position; i<length; i++) {
        if (data[i] == "\r") {
            continue;
        }
        if (data[i] == "," || data[i] == "\n") {
            datum[metaData[counter]] = buffer;
            buffer = '';
            counter++;
            if (data[i] == "\n") {
                dataset[datum['symbol']] = datum;
                datum = {};
                counter = 0;
            }
            continue;
        }
        buffer+=data[i];
    }
    return dataset;
}

function csvToJSON (data) {
    let [metaData, position] = parseMetaData(data);
    let JSONdata = parseData(data, metaData, position);
    return JSONdata;
}


module.exports = csvToJSON;