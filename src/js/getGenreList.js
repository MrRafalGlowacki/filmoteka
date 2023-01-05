import axios from 'axios';
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';
const getGenresList = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list',
      {
        params: {
          api_key: `${API_KEY}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export { getGenresList };
