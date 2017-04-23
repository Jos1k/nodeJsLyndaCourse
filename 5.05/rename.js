var fs = require('fs');
var util = require('util');

fs.rename('./lib/project-config.js', './lib/config.json', function (err) {
    if (err) {
        console.error(err);
    } else {
        util.log('File renamed');
    }
});

fs.rename('./lib/notes.md', 'notes.md', function (err) {
    if (err) {
        console.error(err);
    } else {
        util.log('File moved!');
    }
});