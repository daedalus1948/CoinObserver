// assign image file path to every datum based on their symbol attribute

const STATIC = '/images/';

module.exports = function modifyData(data) {
    for (let key in data) {
        //data[key].logo = `${STATIC}${data[key].symbol.toLowerCase()}.png`; - production
        //data[i].percentage = (((100/oldData[i].price)*data[i].price)-100).toFixed(2); not implemented for cache

        data[key].logo =`http://127.0.0.1:3000/images/${data[key].symbol.toLowerCase()}.png`; // dev
        data[key].percentage = data[key].price-50;// dev
    }
    return data;
  }
