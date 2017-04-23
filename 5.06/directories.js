var fs = require('fs');
var util = require('util');

fs.readdirSync('./logs').forEach((fileName)=>{
    fs.unlinkSync('./logs/'+fileName);
});

fs.rmdir('./logs', (err) => {
    if (err) {
        throw err;
    }
    console.log('Logs Directory removed!');
});

