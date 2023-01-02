import axios from 'axios';
const getMovies = async (
  link = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b942b8bf626a04f48b07153a95ee51a0&language=en-US&page=1'
) => {
  try {
    const response = await axios.get(link);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export { getMovies };
