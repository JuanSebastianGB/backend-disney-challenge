import request from 'supertest';

import app from '../app';
import { testConnection } from '../config/database';
import {
  createService,
  deleteService,
  getAllService,
  getOneService,
  updateService,
} from '../services/movie.service';

describe('movies', () => {
  it('Should get all movies', async () => {
    const response = await request(app).get('/api/movie');
    expect(response.status).toBe(200);
  });
});

jest.mock('../services/movie.service');

describe('Movie Controller', () => {
  beforeAll(async () => {
    await testConnection();
  }, 10000);
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('GET /api/movie', () => {
    it.concurrent('should return all movies', async () => {
      const mockItems = [
        {
          id: 1,
          title: 'Movie 1',
          release_date: '2022-01-01',
          image_url: 'https://example.com/image1.jpg',
        },
        {
          id: 2,
          title: 'Movie 2',
          release_date: '2022-02-01',
          image_url: 'https://example.com/image2.jpg',
        },
      ];
      (getAllService as jest.Mock).mockResolvedValue(mockItems);

      const response = await request(app).get('/api/movie');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockItems);
      expect(getAllService).toHaveBeenCalledWith({
        fields: ['image_url', 'title', 'release_date'],
      });
    });
  });

  describe('GET /movie/:id', () => {
    it.concurrent('should return movie with the given id', async () => {
      const mockItem = {
        id: 1,
        title: 'Movie 1',
        release_date: '2022-01-01',
        image_url: 'https://example.com/image1.jpg',
      };
      (getOneService as jest.Mock).mockResolvedValue(mockItem);

      const response = await request(app).get('/api/movie/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockItem);
      expect(getOneService).toHaveBeenCalledWith(1);
    });
  });

  describe('POST /movie', () => {
    it.concurrent('should create a new movie', async () => {
      const newItem = {
        title: 'New Movie',
        release_date: '2022-03-01',
        image_url: 'https://example.com/newimage.jpg',
      };
      (createService as jest.Mock).mockResolvedValue(newItem);

      const response = await request(app).post('/api/movie').send(newItem);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(newItem);
      expect(createService).toHaveBeenCalledWith(newItem);
    });
  });

  describe('PUT /movie/:id', () => {
    it.concurrent('should update movie with the given id', async () => {
      const updatedItem = {
        id: 1,
        title: 'Updated Movie',
        release_date: '2022-03-01',
        image_url: 'https://example.com/updatedimage.jpg',
      };
      (updateService as jest.Mock).mockResolvedValue(updatedItem);

      const response = await request(app).put('/api/movie/1').send(updatedItem);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedItem);
      expect(updateService).toHaveBeenCalledWith(1, updatedItem);
    });
  });

  describe('DELETE /movie/:id', () => {
    it('should delete movie with the given id', async () => {
      const deletedItem = {
        id: 1,
        title: 'Deleted Movie',
        release_date: '2022-03-01',
        image_url: 'https://example.com/deletedimage.jpg',
      };
      (deleteService as jest.Mock).mockResolvedValue(deletedItem);

      const response = await request(app).delete('/api/movie/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(deletedItem);
      expect(deleteService).toHaveBeenCalledWith(1);
    });

    it('should return 404 if movie with the given id is not found', async () => {
      (deleteService as jest.Mock).mockResolvedValue(null);

      const response = await request(app).delete('/api/movie/1');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Item not found' });
    });
  });
});
