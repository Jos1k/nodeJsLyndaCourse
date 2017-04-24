var request = require('supertest');
var expect = require('chai').expect;
var rewire = require('rewire');
var app = rewire('../app');

describe("Dictionary App", function () {

    it("Loads the home page", (done) => {
        request(app).get('/').expect(200).end(done);
    });

    describe("Dictionary API", function () {

        beforeEach(function () {

            this.defs = [
                {
                    term: "One",
                    defined: "Term One Defined"
                },
                {
                    term: "Two",
                    defined: "Term Two Defined"
                }
            ];

            app.__set__("skierTerms", this.defs);
        });

        it("GETS dictionary-api", function(done) {
            var defs = this.defs;
            request(app).get('/dictionary-api').expect(200).end((err, res) => {
                var terms = JSON.parse(res.text);
                expect(terms).to.deep.equal(defs);
                done();
            });
        });

        it("POSTS dictionary-api", (done) => {
            request(app)
                .post('/dictionary-api')
                .send({ 'term': 'Tree', 'defined': 'Term three' })
                .expect(200)
                .end(done);
        });

        it("DELETES dictionary-api", (done) => {
            request(app)
                .delete('/dictionary-api/One')
                .expect(200)
                .end(done);
        });

    });

});