var fs = require('fs');

fs.readdir('./lib', function (err, data) {
    if (err){
        throw err;
    }
    console.log(data);
});

console.log('Reading files..');