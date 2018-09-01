// allow CORS requests - only for DEV!
// use this middleware BEFORE IT HITS STATIC MIDDLEWARE WHICH REROUTES to response before adding these headers

module.exports = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
  }