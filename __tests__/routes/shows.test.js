import app from '../../src/app';
import request from 'supertest';
import sampleRequest from '../data/sampleRequest.json';
import sampleResponse from '../data/sampleResponse.json';
import invalidRequest from '../data/invalidRequest.json';

describe('/shows', () => {
  it('should return filtered shows with status 200', async () => {
    const res = await request(app).post('/shows').send(sampleRequest);
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.status).toEqual(200);
    expect(res.body).toStrictEqual(sampleResponse);
  });

  it('should return 400 if JSON is invalid', async () => {
    const res = await request(app).post('/shows').send(invalidRequest);
    expect(res.status).toEqual(400);
    expect(res.text).toBe(
      '{"error":"Could not decode request: JSON parsing failed"}'
    );
  });
});
