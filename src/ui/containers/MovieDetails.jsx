import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MoviesDetails extends React.Component {

  render() {
    return (
      <div className="movie-details-container">
        <div className="movie-details-main">
          <div className="poster">
            <img
              className="movie-poster-big"
              src={this.props.location.state.poster}
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
                <i className="far fa-calendar-alt" /> {this.props.location.state.released}
              </span>
              <span className="sub-part">
                <i className="fab fa-imdb" /> {this.props.location.state.imdb}
              </span>
            </div>
            <div className="movie-plot">
              {this.props.location.state.plot}
            </div>
            <div className="movie-watch">
              {this.props.settings.authToken ?
                'WATCHIT' :
                <Link to="/settings?noAuth" className="cant-ic-btn">
                  <i className="fas fa-ban" /> Can&#39;t play, check settings
                </Link>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(MoviesDetails);
