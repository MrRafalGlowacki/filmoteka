const main = document.querySelector('.main-box');
import { getGenresList } from './getGenreList';
import { getMovies } from './getMovies';
import { render } from './renderMovieCard';
import * as pagination from './pagination';
import { onTopScroll } from './toTopBtn';

let genreList;
let currentPage = 1;
const renderMovieCard = async (link, pageNumber) => {
  try {
    const PromisesArray = [];
    PromisesArray.push(getMovies(link, currentPage));
    PromisesArray.push(getGenresList());
    const getMoviesAndGenres = await Promise.all(PromisesArray);
    let movies = getMoviesAndGenres[0];
    genreList = getMoviesAndGenres[1];
    main.innerHTML = '';
    movies.data.results.map(elem => {
      main.insertAdjacentHTML('beforeend', render(elem));
    });
    movies.data.total_pages < 500
      ? pagination.getPaginationNumbers(movies.data.total_pages)
      : pagination.getPaginationNumbers(500);
    pagination.setCurrentPage(currentPage);
    pagination.prevButton.addEventListener('click', async () => {
      pagination.setCurrentPage(currentPage - 1);
      movies = await getMovies(link, --currentPage);
      main.innerHTML = '';
      movies.data.results.map(elem => {
        main.insertAdjacentHTML('beforeend', render(elem));
      });
      onTopScroll();
    });
    pagination.nextButton.addEventListener('click', async () => {
      pagination.setCurrentPage(currentPage + 1);
      movies = await getMovies(link, ++currentPage);
      main.innerHTML = '';
      movies.data.results.map(elem => {
        main.insertAdjacentHTML('beforeend', render(elem));
      });
      onTopScroll();
    });
    document.querySelectorAll('.pagination__number').forEach(button => {
      const pageIndex = Number(button.getAttribute('page-index'));
      if (pageIndex) {
        button.addEventListener('click', async () => {
          pagination.setCurrentPage(pageIndex);
          currentPage = pageIndex;

          movies = await getMovies(link, currentPage);
          main.innerHTML = '';
          movies.data.results.map(elem => {
            main.insertAdjacentHTML('beforeend', render(elem));
          });
          onTopScroll();
        });
      }
    });
  } catch (error) {
    console.log('err ', error);
  }
};

const getGenreList = () => {
  return genreList;
};
export { renderMovieCard, getGenreList };
