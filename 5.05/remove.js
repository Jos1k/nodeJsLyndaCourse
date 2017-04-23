var fs = require('fs');
var util = require('util');

try {
    fs.unlinkSync('./lib/config.json');
} catch (err) {
    console.error(err);
}

fs.unlink('notes.md', function (err) {
    if (err) {
        console.error(err);
    }
    console.log('Notes.md removed!');
});