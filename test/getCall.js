var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://jsonplaceholder.typicode.com";
var util = require("util");

describe('gets', function() {
    it('gets', function(done) {
        request.get({ url: baseUrl + '/posts/1' },
            function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              expect('userId', 1)
                done();
            });
    });
});