import React from 'react';
import { connect } from 'react-redux';
import TVShowsList from './TVShowsList';

class TVShows extends React.Component {

  render() {
    return (
      <div>
        {this.props.tvshows.length === 0 ? <NoTVShows /> : <TVShowsList /> }
      </div>);
  }
}

const NoTVShows = () => (
  <div>
    <b>No TV Shows Available ....</b><br />
    <b>Add a tv show in the Watchit directory - &#34;TV_Shows&#34;</b>
  </div>
);

const mapStateToProps = state => ({
  tvshows: state.tvshows.tvShows,
});

export default connect(mapStateToProps)(TVShows);
