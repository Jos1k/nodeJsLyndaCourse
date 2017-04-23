var fs = require('fs');
var util = require('util');
var path = require('path');

fs.readdir('./lib', function (err, files) {
    files.forEach(function (item) {
        var file = path.join(__dirname, 'lib', item);
        var stats = fs.statSync(file);
        if (stats.isFile() && item !== '.DS_Store') {
            fs.readFile(file, 'UTF-8', function (err, data) {
                util.log(data);
            });
        }
    });
});