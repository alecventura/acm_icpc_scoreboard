const request = require('supertest');
const server = require('./../../../config/server');

describe('Test index controller', () => {
  test('It should response the GET method on root path "/"', (done) => {
    request(server).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should response the POST method "/process-input"', (done) => {
    request(server).post('/process-input').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should NOT found the GET method "/process-input"', (done) => {
    request(server).get('/process-input').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
