var should = require("should");
var request = require("supertest");
var expect = require("chai").expect;
const express = require('express');
const app = express();
const uri = 'https://jsonplaceholder.typicode.com';
var util = require("util");

describe('POST /posts', function() {
    it('responds with json', function(done) {
        request(uri)
        .post('/posts')
        .send({
            title: 'foo',
            body: 'bar',
            userId: 1
          })
        .set('Accept', 'application/json')
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.have.property('id');
          res.body["id"].should.equal(101);
          let value = res.body.id
          should.equal(value,101);
          done();
        });
    });
  });
