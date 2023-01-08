const main = document.querySelector('.main-box');
import { getGenresList } from './getGenreList';
import { getMovies } from './getMovies';
import { render } from './renderMovieCard';

let genreList;
const renderMovieCard = async link => {
  try {
    const PromisesArray = [];
    PromisesArray.push(getMovies(link));
    PromisesArray.push(getGenresList());
    const getMoviesAndGenres = await Promise.all(PromisesArray);
    const movies = getMoviesAndGenres[0];
    genreList = getMoviesAndGenres[1];
    main.innerHTML = '';
    movies.data.results.map(elem => {
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
