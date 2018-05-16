import React from 'react';

class TVShows extends React.Component {

  render() {
    return (
      <div>
        {this.props.tvshows.length === 0 ? <NoTVShows /> : 'List with movies' }
      </div>);
  }
}

const NoTVShows = () => (
  <div>
    <b>No TV Shows Available ....</b><br />
    <b>Add a tv show in the Watchit directory - &#34;TV_Shows&#34;</b>
  </div>
);

export default TVShows;
