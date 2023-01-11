import { getGenreList } from './getAndRenderTopRatedMovies';
import { imageExists, getMovieYear } from './exportFunctions';
const getMovieYear = "" 
// date => {
//   return 
//   date.substring(0, 4);
// };
let singleMovieGenres = '';
const getMovieGenres = (movieGenresIds, genreList) => {
  singleMovieGenres = '';
  movieGenresIds.map(id => {
    genreList.map(elem => {
      if (elem.id === id) {
        id != movieGenresIds[movieGenresIds.length - 1]
          ? (singleMovieGenres = singleMovieGenres + elem.name + ', ')
          : (singleMovieGenres = singleMovieGenres + elem.name);
      }
    });
  });
};

const render = elem => {
  const genreList = getGenreList();
  getMovieGenres(elem.genre_ids, genreList.data.genres);
  return `
<div class="movie-card">
<img class="movie-card__image" alt="${elem.title} movie" src=${imageExists(
    'https://image.tmdb.org/t/p/w500',
    elem.poster_path
  )}>
  <div class="movie-card__label">
    <p class="movie-card__title">${elem.title}</p>
    <p class="movie-card__genre-year">${singleMovieGenres} | ${getMovieYear(
    elem.release_date
  )}</p> 
    <p class="movie-card__id">${elem.id}</p> 
  </div>
</div>
`;
};
export { render, getMovieGenres, imageExists };
/*

Powyższa funkcja przyjmuje pojedynczy obiekt z odpowiedzi z API .data.results jest to tablica obiektów jak ta poniżej a my chcemy pojedyncze obiekty więc map działa tutaj super
przy czym wykorzystuje tylko poster.path, original.title, release_date

przykładowe wykorzystanie na tablicy obiektów :
 
    response.data.results.map(elem => {
      main.insertAdjacentHTML('beforeend', render(elem));
    });

odpowiedz z API 
[
    {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 107.368,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 17154
    },
    {
        "adult": false,
        "backdrop_path": "/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 106.534,
        "poster_path": "/hBcY0fE9pfXzvVaY4GKarweriG2.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 22940
    }
]


*/
