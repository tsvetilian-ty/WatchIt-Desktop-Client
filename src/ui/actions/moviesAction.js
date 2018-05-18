import axios from 'axios';

const omdbApi = '2bd8bacc';

export const addMovie = movie => async (dispatch) => {
  try {
    const movieData = await axios.get(`http://www.omdbapi.com/?t=${movie.searchableName}&apikey=${omdbApi}&type=movie`);
    if (movieData.data.Response === 'False') {
      dispatch({
        type: 'ADD_MOVIE',
        payload: {
          ...movie,
          genre: 'N/A',
          plot: 'N/A',
          rated: 'N/A',
          poster: 'http://via.placeholder.com/120x180',
          imdb: 'N/A',
          runtime: 'N/A',
          released: 'N/A',
        },
      });
    }
    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        ...movie,
        genre: movieData.data.Genre,
        plot: movieData.data.Plot,
        rated: movieData.data.Rated,
        poster: movieData.data.Poster,
        imdb: movieData.data.imdbRating,
        runtime: movieData.data.Runtime,
        released: movieData.data.Released,
      },
    });
  } catch (err) {
    console.log('Something went wrong while constructing action ADD_MOVIE: ', err);
  }
};

export const removeMovie = hash => ({
  type: 'REMOVE_MOVIE',
  payload: hash,
});
