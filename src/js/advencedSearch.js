import { renderMovieCard } from './getAndRenderTopRatedMovies';
const genres = document.getElementById('select-genres');
let ByGenres_API_URL = 'https://api.themoviedb.org/3/discover/movie?';

let SelectedAPI = 'https://api.themoviedb.org/3/movie/popular';

import { getGenresList } from './getGenreList';

let selectedGenre = [];

const getGenres = event => {
  const genreList = getGenresList();
  const getList = () => {
    genreList.then(listOfGenres => {
      for (let i = 0; i < listOfGenres.data.genres.length; i++) {
        const movieGenre = document.createElement('button');
        movieGenre.classList.add('genre');
        movieGenre.id = listOfGenres.data.genres[i].id;
        movieGenre.innerText = listOfGenres.data.genres[i].name;
        movieGenre.addEventListener('click', () => {
          movieGenre.classList.add('focused-genre');
          if (selectedGenre === 0) {
            selectedGenre.push(listOfGenres.data.genres[i].id);
          } else if (selectedGenre.includes(listOfGenres.data.genres[i].id)) {
            selectedGenre.forEach((id, idClear) => {
              if (id == listOfGenres.data.genres[i].id) {
                selectedGenre.splice(idClear, 1);
                movieGenre.classList.remove('focused-genre');
              }
            });
          } else {
            selectedGenre.push(listOfGenres.data.genres[i].id);
          }
          SelectedAPI =
            ByGenres_API_URL +
            '&with_genres=' +
            encodeURI(selectedGenre.join(','));
          renderMovieCard(SelectedAPI);
          console.log(selectedGenre);
        });
        genres.append(movieGenre);
      }
    });
  };
  getList();
};
getGenres();
export { getGenres };
