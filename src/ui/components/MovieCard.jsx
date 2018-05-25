import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="video-card">
    <Link to={{ pathname: `/watch/movie/${movie.hash}`, state: movie }}>
      <img className="video-poster" src={movie.poster} alt={movie.name} />
    </Link>
  </div>
);

export default MovieCard;
