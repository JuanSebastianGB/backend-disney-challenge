import request from 'supertest';
import app from '../app';
import { testConnection } from '../config/database';

describe('first test suit', () => {
  it.concurrent('first test', () => {
    expect(1).toBe(1);
  });
});

describe('app', () => {
  beforeAll(async () => {
    await testConnection();
  }, 10000);
  it('Should get the message Welcome to Disney App', async () => {
    const response = await request(app).get('/api');
    expect(response.body.message).toBe('Welcome to Disney API');
    expect(response.status).toBe(200);
  });
});
