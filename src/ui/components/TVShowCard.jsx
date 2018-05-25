import React from 'react';
import { Link } from 'react-router-dom';

const TVShowCard = ({ show }) => (
  <div className="video-card">
    <Link to={{ pathname: `/watch/tv/${show.showHash}`, state: show }}>
      <img className="video-poster" src={show.showID.tvShowPoster} alt={show.name} />
    </Link>
  </div>
);

export default TVShowCard;
