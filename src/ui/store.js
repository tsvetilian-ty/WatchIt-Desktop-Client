import { createStore, combineReducers, applyMiddleware } from 'redux';
import { forwardToMain, replayActionRenderer } from 'electron-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import settings from './reducers/settingsReducer';
import tvshows from './reducers/TVShowsReducer';
import movies from './reducers/moviesReducer';
import devices from './reducers/devicesReducer';

const logger = createLogger();

const store = createStore(
    combineReducers({
      settings,
      movies,
      tvshows,
      devices,
    }),
    applyMiddleware(forwardToMain, logger, thunk),
);

replayActionRenderer(store);

export default store;
