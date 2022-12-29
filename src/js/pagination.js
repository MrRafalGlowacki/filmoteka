//console.log(window.innerWidth);  do uzycia w celu wykrycia rozdzielczosci
import { getMovies } from './getMovies';

const pagination = document.querySelector('.pagination');
const backLink = document.querySelector('.pagination__back-link');
const forwardLink = document.querySelector('.pagination__forward-link');
const FirstLink = document.querySelector('.pagination__site-link-1');
const SecondLink = document.querySelector('.pagination__site-link-2');
const ThirdLink = document.querySelector('.pagination__site-link-3');
const FourthLink = document.querySelector('.pagination__site-link-4');
const FifthLink = document.querySelector('.pagination__site-link-5');
const getTotalpages = async () => {
  try {
    result = await getMovies();
    console.log(result.data.total_pages);
  } catch (error) {
    console.log(error);
  }
};

const totalPages = getTotalpages();
const createPageLink = (
  pageNumber = 1,
  link = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b942b8bf626a04f48b07153a95ee51a0&language=en-US&page='
) => {
  return link + pageNumber;
};
const renderPagination = page => {
  if (page === 1) {
    forwardLink.setAttribute(href, '');
    FirstLink.classList.add('pagination__link-active');
  }
  if (page === 2) {
    forwardLink.setAttribute(href, createPageLink(1));
    forwardLink.classList.add('pagination__link-active');
  }
};
/*
index.js

//import './add-to-local-storage.js';
import { renderMovieCard } from './js/getAndRenderMovies';
import { getTotalpages } from './js/pagination';
renderMovieCard();

index.html

<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page title</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css"
      integrity="sha512-ISS7cAi1PEhQ8jnbJpJZMd29NlhNj4AWYyLOSp2CE/CsHxTCu+r+t0D2yoJudVrd0/8fTVPUVDzY5Tvli75u/g=="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./sass/index.scss" />
    <script type="module" src="./index.js"></script>
  </head>
  <body>
    <!-- <include src="./partials/header.html"></include>
    <include src="./partials/header-search.html"></include>
    <include src="./partials/main.html"></include>
    <include src="./partials/card-template.html"></include>
    <include src="./partials/footer.html"></include> -->

    <include src="./partials/pagination.html"></include>
  </body>
</html>

index. scss

@import './utils/variables';
@import './base/container';
@import './base/common';
@import './components/main';
@import './components/header-search';
@import './components/header';
@import './components/footer';
@import './components/card-template';
@import './components/myLibraryHeader';
@import './components/pagination';

*/
