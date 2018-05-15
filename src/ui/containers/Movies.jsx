import React from 'react';

class Movies extends React.Component {

  render() {
    return (
      <div>
        {this.props.movies.length === 0 ? <NoMovies /> : 'List of movies' }
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

export default Movies;
