module.exports = function convertDataToObject (arrayOfData) {
    let objectOfData = arrayOfData.reduce((acc, cur)=>{
        acc[cur.symbol] = cur; 
        return acc;
      }, {})
    return objectOfData;
}
