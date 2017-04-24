var expect = require('chai').expect;
var rewire = require('rewire');

var order = rewire('../lib/order');

describe('Ordering Items', () => {

    beforeEach(() => {
        this.testData = [
            { sku: 'AAA', qty: 10 },
            { sku: 'BBB', qty: 0 },
            { sku: 'CCC', qty: 3 },
        ];
        order.__set__('inventoryData', this.testData);
    });

    it('order an item when there are enough in stock', (done) => {
        order.orderItem('CCC', 3, () => {
            done();
        });
    });

});