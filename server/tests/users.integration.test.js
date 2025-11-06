const request = require('supertest');
const app = require('../server'); // or '../app' depending on your export
const mongoose = require('mongoose');
const User = require('../models/userModel');

describe('User API integration tests', () => {
  beforeEach(async () => {
    // clear collection before each test to keep isolation
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('GET /api/users -> returns 200 and array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/users -> 201 on valid payload', async () => {
    const payload = { name: 'Alice', email: 'alice@example.com' };
    const res = await request(app).post('/api/users').send(payload);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe(payload.name);
    expect(res.body.email).toBe(payload.email);
  });

  test('POST /api/users -> 400 on missing fields', async () => {
    const payload = { name: 'Bob' }; // missing email
    const res = await request(app).post('/api/users').send(payload);
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('message', 'Name and email are required');
  });

  test('POST /api/users -> 409 on duplicate email', async () => {
    const payload = { name: 'Cara', email: 'cara@example.com' };
    await request(app).post('/api/users').send(payload);
    const res2 = await request(app).post('/api/users').send(payload);
    expect(res2.status).toBe(409);
    expect(res2.body).toHaveProperty('message', 'Email already exists');
  });
});
