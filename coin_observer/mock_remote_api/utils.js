module.exports = function getRndIntInRange(min, max) {
    return Math.floor(Math.random() * (Math.floor(max+1) - Math.ceil(min))) + Math.ceil(min); 
}
