var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
  test('responds with Hello world', function (done) {
    // navigate to root and check the response is 'Hello world'
    request(app).get('/').expect('Hello world', done);
  });
});

