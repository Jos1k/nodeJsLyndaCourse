var fs = require('fs');
var data = '';

var stream = fs.createReadStream('./chat.log', 'UTF-8');
stream.once('data', () => {
    console.log('\n\n\n');
    console.log('Started reading file...');
    console.log('\n\n\n');
});
stream.on('data', function (chunk) {
    process.stdout.write(`chunk: ${chunk.length} | `);
    data += chunk;
});
stream.on('end', () => {
    console.log('\n\n\n');
    console.log(`Finished reading file: ${data.length}`);
    console.log('\n\n\n');
});
