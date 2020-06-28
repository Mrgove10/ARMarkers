const fs = require('fs');
const request = require('request');
const { v4: uuidv4 } = require('uuid');

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

for (let i = 0; i <= 200; i++) {
    download('https://armaker.shawnlehner.com/api/v1/generate', 'markers/' + i + '.png', function () {
        console.log('done');
    });
}