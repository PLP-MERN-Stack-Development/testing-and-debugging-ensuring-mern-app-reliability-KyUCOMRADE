const request = require('supertest');
const app = require('../server');

describe('Global error handler', () => {
  test('GET /api/throw -> 500 and generic message', async () => {
    const res = await request(app).get('/api/throw');
    expect(res.status).toBe(500);
    // your handler returns { message: 'Something broke!' }
    expect(res.body).toHaveProperty('message', 'Something broke!');
  });
});
