// Contains logic to manipulate the payload into the required response

export const filterTvShows = (payload) => {
  return payload.filter((show) => show.drm && show.episodeCount > 0);
};

export const mapTvShows = (shows) => {
  return shows.map((show) => {
    const { image, slug, title } = show;
    return {
      image: image.showImage,
      slug,
      title,
    };
  });
};
