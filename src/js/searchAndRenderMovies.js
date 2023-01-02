import { getMovies } from '../getMovies';
import { render } from './renderMovieCard';

const main = document.querySelector('.main-box');
const inputSearch = document.querySelector("input[name='searchQuery']");
const searchButton = document.querySelector('.search-form__btn');

let currentPage = 1;

searchButton.addEventListener('click', renderFoundMovies);

async function renderFoundMovies(event) {
  event.preventDefault();
  currentPage = 1;
  const searchQuery = inputSearch.value;
  if (!searchQuery) {
    alert('Enter movie title');
  } else {
    main.innerHTML = '';
    const moviesList = await getMovies(searchQuery, currentPage);
    if (!moviesList.results.length) {
      main.innerHTML = 'No movie found';
    } else {
      console.log(moviesList);
      moviesList.results.map(elem => {
        main.insertAdjacentHTML('beforeend', render(elem));
      });
    }
  }
}

// const renderMovieCard = async () => {
//   try {
//     const response = await getMovies();
//     response.data.results.map(elem => {
//       main.insertAdjacentHTML('beforeend', render(elem));
//     });
//   } catch (error) {
//     console.log('err ', error);
//   }
// };
export { renderFoundMovies };
