export const imageExists = (link, poster_path) => {
  if (poster_path != null) return `${link}${poster_path}`;
  else
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
};

export const getMovieYear = date => {
  return date.substring(0, 4);
};
