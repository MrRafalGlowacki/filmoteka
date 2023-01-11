const main = document.querySelector('.main-box');
import { getGenresList } from './getGenreList';
import { getMovies } from './getMovies';
import { render } from './renderMovieCard';
import * as pagination from './pagination';
import { onTopScroll } from './toTopBtn';
let globalNextBtnFunc;
let globalPrevBtnFunc;
let genreList;
let currentPage = 1;
const renderMovieCard = async (link, pageNumber) => {
  try {
    let movies = await getMovies(link, currentPage);
    genreList = await getGenresList();
    main.innerHTML = '';
    movies.data.results.map(elem => {
      main.insertAdjacentHTML('beforeend', render(elem));
    });
    movies.data.total_pages < 500
      ? pagination.getPaginationNumbers(movies.data.total_pages)
      : pagination.getPaginationNumbers(500);
    pagination.setCurrentPage(currentPage);
    //
    globalPrevBtnFunc = prevBtnFunc = async () => {
      pagination.setCurrentPage(currentPage - 1);
      movies = await getMovies(link, --currentPage);
      main.innerHTML = '';
      movies.data.results.map(elem => {
        main.insertAdjacentHTML('beforeend', render(elem));
      });
      onTopScroll();
    };
    //
    pagination.prevButton.addEventListener('click', prevBtnFunc);
    //
    globalNextBtnFunc = nextBtnFunc = async () => {
      pagination.setCurrentPage(currentPage + 1);
      movies = await getMovies(link, ++currentPage);
      main.innerHTML = '';
      movies.data.results.map(elem => {
        main.insertAdjacentHTML('beforeend', render(elem));
      });
      onTopScroll();
    };

    pagination.nextButton.addEventListener('click', nextBtnFunc);

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

export const cleanUpListeners = () => {
  pagination.nextButton.removeEventListener('click', globalNextBtnFunc);
  pagination.prevButton.removeEventListener('click', globalPrevBtnFunc);
};

const getGenreList = () => {
  return genreList;
};
export { renderMovieCard, getGenreList };
