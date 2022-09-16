import { filterTvShows, mapTvShows } from '../services/showsService.js';

const showsList = (req, res) => {
  try {
    const { payload } = req.body;

    const hasEpisodesWithDRM = filterTvShows(payload);
    const response = mapTvShows(hasEpisodesWithDRM);

    res.status(200).send({ response });
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Could not decode request: JSON parsing failed' });
  }
};

export { showsList };
