import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import movies from './reducers/moviesReducer';

const logger = createLogger();

const store = createStore(
    combineReducers({
      movies,
    }),
    applyMiddleware(logger, thunk),
);

export default store;
