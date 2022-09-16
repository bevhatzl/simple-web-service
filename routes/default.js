const showsList = (req, res) => {
  try {
    const { payload } = req.body;

    const hasEpisodesWithDRM = payload.filter(
      (show) => show.drm && show.episodeCount && show.episodeCount > 0
    );

    const response = hasEpisodesWithDRM.map((show) => {
      const { image, slug, title } = show;
      return {
        image: image.showImage,
        slug,
        title,
      };
    });
    res.status(201).send(response);
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Could not decode request: JSON parsing failed' });
  }
};

export { showsList };
