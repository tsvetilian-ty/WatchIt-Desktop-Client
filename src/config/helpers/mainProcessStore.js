import { forwardToRenderer, replayActionMain } from 'electron-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import movies from '../../ui/reducers/moviesReducer';
import tvshows from '../../ui/reducers/TVShowsReducer';
import settings from '../../ui/reducers/settingsReducer';

const store = createStore(
  combineReducers({ movies, tvshows, settings }),
  applyMiddleware(
    thunk,
    forwardToRenderer,
  ),
);

replayActionMain(store);

export default store;
