const main = document.querySelector('.main-box');
import { getGenresList } from './getGenreList';
import { getMovies } from './getMovies';
import { render } from './renderMovieCard';

let genreList;
const renderMovieCard = async () => {
  try {
    const response = await getMovies();
    genreList = await getGenresList();
    response.data.results.map(elem => {
      main.insertAdjacentHTML('beforeend', render(elem));
    });
  } catch (error) {
    console.log('err ', error);
  }
};

const getGenreList = () => {
  return genreList;
};
export { renderMovieCard, getGenreList };
