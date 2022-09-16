import { filterTvShows, mapTvShows } from '../../src/services/showsService.js';
import sampleRequest from '../data/sampleRequest.json';
import sampleResponse from '../data/sampleResponse.json';
import { expectedFilteredShows } from '../data/testData.js';

describe('shows', () => {
  it('should return only shows with > 0 episodes & with DRM enabled', () => {
    const filteredShows = filterTvShows(sampleRequest.payload);
    expect(filteredShows).toStrictEqual(expectedFilteredShows);
  });

  it('should only return a list containing the required properties', () => {
    const showsResponse = mapTvShows(expectedFilteredShows);
    expect(showsResponse).toStrictEqual(sampleResponse);
  });
});
