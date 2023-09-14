import request from 'supertest'

import { app } from '../app.js'
describe('TEST MOVIES', () => {
  test('should return 200', async () => {
    const response = await request(app).get('/').send()
    expect(response.statusCode).toBe(200)
  })
})
