import React from 'react';
import { connect } from 'react-redux';
import EpisodesView from '../components/EpisodesView';

class TVShowDetails extends React.Component {

  render() {
    const filteredEpisodes = this.props.tvShows.tvShows.filter((val) => {
      if (val.showHash === this.props.match.params.hash) {
        return true;
      }
      return false;
    });

    return (
      <div className="tv-details-container">
        <div className="movie-details-main">
          <div className="tv-poster">
            <img
              className="movie-poster-big"
              src={this.props.location.state.showID.tvShowPoster}
              alt={this.props.location.state.name}
            />
          </div>
          <div className="movie-info">
            <div className="movie-title">{this.props.location.state.searchableName}</div>
            <div className="info-subtitle">
              <span className="sub-part">
                <i className="far fa-check-circle" /> {this.props.location.state.rated}
              </span>
              <span className="sub-part">
                <i className="far fa-clock" /> {this.props.location.state.runtime}
              </span>
              <span className="sub-part">
                <i className="far fa-folder-open" /> {this.props.location.state.seasons}
              </span>
              <span className="sub-part">
                <i className="far fa-calendar-alt" /> {this.props.location.state.released}
              </span>
            </div>
            <div className={filteredEpisodes.length < 5 ? 'short-tv-episodes' : 'long-tv-episodes'}>
              {filteredEpisodes.map(episode =>
                (<EpisodesView
                  key={episode.hash}
                  episode={episode}
                  settings={this.props.settings}
                />),
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  tvShows: state.tvshows,
});

export default connect(mapStateToProps)(TVShowDetails);
