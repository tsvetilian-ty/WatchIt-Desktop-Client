import { createStore, combineReducers } from 'redux';

import movies from './reducers/moviesReducer';

const store = createStore(
    combineReducers({
      movies,
    }),
);

export default store;
