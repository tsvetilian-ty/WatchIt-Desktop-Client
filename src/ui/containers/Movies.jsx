import React from 'react';
import { connect } from 'react-redux';
import MoviesList from './MoviesList';

class Movies extends React.Component {

  render() {
    return (
      <div>
        {this.props.movies.length === 0 ? <NoMovies /> : <MoviesList /> }
      </div>
    );
  }
}

const NoMovies = () => (
  <div>
    <b>No Movies Available ....</b><br />
    <b>Add a movie in the Watchit directory - &#34;Movies&#34;</b>
  </div>
);

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(Movies);
