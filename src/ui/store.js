import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import settings from './reducers/settingsReducer';
import tvshows from './reducers/TVShowsReducer';
import movies from './reducers/moviesReducer';

const logger = createLogger();

const store = createStore(
    combineReducers({
      settings,
      movies,
      tvshows,
    }),
    applyMiddleware(logger, thunk),
);

export default store;
