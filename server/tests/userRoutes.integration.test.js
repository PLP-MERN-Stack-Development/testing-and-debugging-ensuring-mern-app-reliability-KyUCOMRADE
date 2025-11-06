require('dotenv').config({ path: '.env.test' });
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

beforeAll(async () => {
  await mongoose.disconnect();
  await mongoose.connect(process.env.MONGO_URI_TEST);
});

afterAll(async () => {
 if (mongoose.connection.readyState === 1) { 
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
}
});

describe('User Routes', () => {
  it('GET /api/users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
  });

  it('POST /api/users', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Alice', email: 'alice@example.com' });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Alice');
  });
});
