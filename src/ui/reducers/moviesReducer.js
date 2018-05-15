const initState = {
  movies: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      state = {
        ...state,
        movies: state.movies.concat(action.payload),
      };
      break;
    case 'REMOVE_MOVIE':
      state = {
        ...state,
        movies: state.movies.filter(movie => movie.hash !== action.payload),
      };
      break;
    default:
      state;
  }
  return state;
};

export default moviesReducer;
