const logPath = (req, res, next) =>{
    console.log(req.url);
    next();
}

module.exports = logPath;