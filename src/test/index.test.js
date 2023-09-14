import request from 'supertest'

import sequelize from '../lib.sequelize.js'
import { app } from '../app.js'

beforeAll(async () => {
  await sequelize.sync({ force: true })
})

describe('TEST MOVIES', () => {
  test('should return 200', async () => {
    const response = await request(app).get('/').send()
    expect(response.statusCode).toBe(200)
  })

  describe('POST /movies', () => {
    test('should return 201', async () => {
      const response = await request(app).post('/movies').send({
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: 142,
        poster: 'https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp',
        genre: ['Drama'],
        rate: 9.3
      })
      expect(response.statusCode).toBe(201)
    })
  })

  describe('GET /movies', () => {
    test('should return 200', async () => {
      const response = await request(app).get('/movies').send()
      expect(response.statusCode).toBe(200)
    })
  })

  describe('GET /movies/:id', () => {
    test('should return 200', async () => {
      const response = await request(app).get('/movies/1').send()
      expect(response.statusCode).toBe(200)
    })
  })

  describe('PUT /movies/:id', () => {
    test('should return 200', async () => {
      const response = await request(app).put('/movies/1').send({
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: 142,
        poster: 'https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp',
        genre: ['Drama'],
        rate: 9.3
      })
      expect(response.statusCode).toBe(200)
    })
  })

  describe('DELETE /movies/:id', () => {
    test('should return 204', async () => {
      const response = await request(app).delete('/movies/1').send()
      expect(response.statusCode).toBe(204)
    })
  })
})
