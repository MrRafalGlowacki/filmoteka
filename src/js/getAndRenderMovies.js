/*
pliki nie dodane do index.html, index.js, index.sass
*/

const main = document.querySelector('.main2'); // main2(tutaj dodtakowo w main.html i main.scss)  jest testowo w celu sprawdzenia pozycjonowania elementow
import { getMovies } from './getMovies';
import { render } from './renderMovieCard';

const renderMovieCard = async () => {
  // do poprawy wyswietlanie daty zeby byl tylko rok
  try {
    const response = await getMovies();
    response.data.results.map(elem => {
      main.insertAdjacentHTML('beforeend', render(elem));
    });
  } catch (error) {
    console.log('err ', error);
  }
};
export { renderMovieCard };
