import React from 'react';
import { Link } from 'react-router-dom';

const EpisodesView = ({ episode, settings }) => (
  <div className="episodes-view">
    <div className="episode-info">
      <div className="episode-title">{episode.episodeTitle}</div>
      <div className="episode-details"><p>Season: {episode.season}</p>
        <i className="fas fa-circle" />
        <p>Episode: {episode.episode}</p></div>
    </div>
    <div className="episode-play">
      {settings.authToken ?
        'WATCHIT' :
        <Link to="/settings?noAuth" className="episode-cant-play-btn">
          <i className="fas fa-ban" />
        </Link>}
    </div>
  </div>
);

export default EpisodesView;
