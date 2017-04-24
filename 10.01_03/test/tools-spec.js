var expect = require('chai').expect;
var tools = require('../lib/tools');
var nock = require('nock');

describe('Tools', () => {

    describe('printName()', () => {
        it('should print the last name first', () => {
            var results = tools.printName({ first: 'Ihor', last: 'Hadzera' });
            expect(results).to.equal('Ihor, Hadzera');
        });
    });

    describe('loadWiki()', () => {
        before(() => {
            nock('https://en.wikipedia.org')
                .get('/wiki/Abraham_Lincoln')
                .reply(200, 'Mock');
        });

        it('load Abraham Lincoln wikipedia page', (done) => {
            tools.loadWiki({ first: 'Abraham', last: 'Lincoln' }, (html) => {
                expect(html).to.be.ok;
                done();
            });
        });
    });
});

