const url = require('url');
const fs = require('fs');

const define = function (req, res, postData) {
    res.end(postData);
}
exports.define = define;