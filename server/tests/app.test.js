const request = require('supertest');
const app = require('../server');

describe('User API', () => {
  it('should return 200 OK on GET /api/users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
  });
});
