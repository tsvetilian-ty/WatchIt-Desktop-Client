import React from 'react';
import { connect } from 'react-redux';

import TVShowCard from '../components/TVShowCard';

class TVShowList extends React.Component {

  render() {
    const showsHashSet = new Set([]);
    const filteredShows = this.props.tvshows.filter((show) => {
      if (showsHashSet.has(show.showHash)) {
        return false;
      }
      showsHashSet.add(show.showHash);
      return true;
    });

    return (
      <div className="video-container">
        {filteredShows.map(show => (
          <TVShowCard
            key={show.hash}
            show={show}
          />
          ))}
      </div>);
  }
}

const mapStateToProps = state => ({
  tvshows: state.tvshows.tvShows,
  settings: state.settings,
});

export default connect(mapStateToProps)(TVShowList);

