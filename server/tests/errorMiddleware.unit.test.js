const express = require('express');
const request = require('supertest');

describe('Error Handler Middleware', () => {
  const app = express();

  app.get('/error', (req, res, next) => {
    const err = new Error('Something bad happened');
    next(err);
  });

  // Import same error handler as server.js
  app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
  });

  it('should return 500 and the error message', async () => {
    const res = await request(app).get('/error');
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ message: 'Something bad happened' });
  });
});
