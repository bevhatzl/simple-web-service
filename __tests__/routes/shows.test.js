import app from '../../src/app';
import request from 'supertest';
import router from '../../src/routes/routes';
import sampleRequest from '../data/sampleRequest.json';
import sampleResponse from '../data/sampleResponse.json';

describe('/shows', () => {
  it('should return filtered shows with status 200', async () => {
    const res = await request(app).post('/shows').send(sampleRequest);
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.status).toEqual(200);
    console.log(sampleResponse);
    expect(res.body).toStrictEqual(sampleResponse);
  });
});
