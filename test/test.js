var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://jsonplaceholder.typicode.com";
var util = require("util");

describe('gets', function() {
    it('gets', function(done) {
        request.get({ url: baseUrl + '/posts' },
            function(error, response, body) {
                    //var bodyObj = JSON.parse(body);
                    //console.log(body);
                    expect(response.statusCode).to.equal(200);
                    expect('userId', 1)
                    done();
            });
    });
});