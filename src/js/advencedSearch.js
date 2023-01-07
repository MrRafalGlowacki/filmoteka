const genres = document.getElementById('genres');
let ByGenres_API_URL = 'https://api.themoviedb.org/3/discover/movie?';

let SelectedAPI = 'https://api.themoviedb.org/3/movie/popular';

import { getGenresList } from './getGenreList';

let selectedGenre = [];

const getGenres = event => {
  genres.innerHTML = '';
  const genreList = getGenresList();
  const getList = () => {
    genreList.then(listOfGenres => {
      for (let i = 0; i < listOfGenres.data.genres.length; i++) {
        const movieGenre = document.createElement('button');
        movieGenre.classList.add('genre');
        movieGenre.id = listOfGenres.data.genres[i].id;
        movieGenre.innerText = listOfGenres.data.genres[i].name;
        movieGenre.addEventListener('click', () => {
          if (selectedGenre === 0) {
            selectedGenre.push(listOfGenres.data.genres[i].id);
          } else if (selectedGenre.includes(listOfGenres.data.genres[i].id)) {
            selectedGenre.forEach((id, idClear) => {
              if (id == listOfGenres.data.genres[i].id) {
                selectedGenre.splice(idClear, 1);
              }
            });
          } else {
            selectedGenre.push(listOfGenres.data.genres[i].id);
          }
          console.log(selectedGenre);
          SelectedAPI =
            ByGenres_API_URL +
            '&with_genres=' +
            encodeURI(selectedGenre.join(','));
          console.log(SelectedAPI);
        });
        genres.append(movieGenre);
      }
    });
  };
  getList();
};
getGenres();
export { getGenres };
