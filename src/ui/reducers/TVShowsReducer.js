const initState = {
  tvShows: [],
};

const TVShowReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_SHOW':
      state = {
        ...state,
        tvShows: state.tvShows.concat(action.payload),
      };
      break;
    case 'REMOVE_SHOW':
      state = {
        ...state,
        tvShows: state.tvShows.filter(show => show.hash !== action.payload),
      };
      break;
    default:
      state;
  }
  return state;
};

export default TVShowReducer;
