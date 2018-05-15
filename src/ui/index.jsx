import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Movies from './containers/Movies';

const Index = () => (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Redirect to="/movies" />
          <Route exact path="/movies" component={Movies} />
        </div>
      </div>
    </Router>
);

export default Index;

