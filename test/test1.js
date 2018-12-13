var should = require("should");
var request = require("request");
var expect = require("chai").expect;
supertest = require('supertest');
api = supertest('https://jsonplaceholder.typicode.com"');

var util = require("util");

describe('gets', function() {
    
    it('gets', function(done) {

        api.post('/posts')
        .set('Accept', 'application/x-www-form-urlencoded')
                .send({
                    title: "foo",
                    body: "bar",
                    userId: 1,
                })
                    .expect('id', 1)
                    expect(200)
                    done();
            });
    });
