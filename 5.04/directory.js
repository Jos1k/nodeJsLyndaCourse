var fs = require('fs');
var util = require('util');

if (fs.existsSync('lib')) {
    util.log('Directory already there!');
} else {
    fs.mkdir('lib', function (err) {
        if (err) {
            console.error(err);
        } else {
            util.log('Directory Created!');
        }
    });
}

