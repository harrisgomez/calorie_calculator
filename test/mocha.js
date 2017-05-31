var chai = require("chai");
var expect = chai.expect;
var request = require('supertest');

describe('loading express', function(){
    beforeEach(function(){
        server = require('../server');
    });

    it('connects to express server', function(done) {
        request(server).get('/').expect(200, done); // standard response for successful HTTP requests
    });
});
