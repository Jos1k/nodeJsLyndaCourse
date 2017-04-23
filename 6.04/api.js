let http = require('http');
let data = require('./data/inventory');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify(data));
    } else if (req.url == '/instock') {
        listInStock(res);
    } else if (req.url === '/backorder') {
        listOnBackOrder(res)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Whoopss..Not Found!');
    }
}).listen(3000);

console.log('Server is listening port 3000');

let listInStock = (res) => {
    let inStock = data.filter((item) => {
        return item.avail === 'In stock';
    });
    res.end(JSON.stringify(inStock));
};

let listOnBackOrder = (res) => {
    let onOrder = data.filter((item) => {
        return item.avail === 'On back order';
    });
    res.end(JSON.stringify(onOrder));
};