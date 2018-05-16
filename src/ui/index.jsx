import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Settings from './containers/Settings';
import Movies from './containers/Movies';
import TVShows from './containers/TVShows';

import store from './store';

const Index = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <div className="container">
          <Redirect to="/movies" />
          <Route exact path="/movies" component={Movies} />
          <Route path="/tvshows" component={TVShows} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </Router>
  </Provider>
);

export default Index;
