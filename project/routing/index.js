const url = require('url');
const fs = require('fs');

const define = function (req, res, postData) {
    const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname;
    prePath = __dirname;
    try {
        let dynPath = './dynamic/' + path;
        let routeDestination = require(dynPath);
        routeDestination.promise(res, postData, req).then(
            result => {
                res.writeHead(200);
                res.end(result);
                return;
            },
            error => {
                let endMessage = {};
                endMessage.error = 1;
                endMessage.errorName = error;
                res.end(JSON.stringify(endMessage));
                return;
            }
        );
    }
    catch (err) {
        res.end("We don't have API!");
    }
}
exports.define = define;