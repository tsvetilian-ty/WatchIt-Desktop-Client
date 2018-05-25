import React from 'react';
import { connect } from 'react-redux';

import MovieCard from '../components/MovieCard';

class MoviesList extends React.Component {
  render() {
    return (
      <div className="video-container">
        {this.props.movies.map(movie => (
          <MovieCard
            key={movie.hash}
            movie={movie}
            globalMovieProps={this.props}
          />
          ))}
      </div>);
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  settings: state.settings,
});

export default connect(mapStateToProps)(MoviesList);
