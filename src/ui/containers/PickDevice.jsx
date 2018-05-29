/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import os from 'os';
import ip from 'ip';
import DeviceCard from '../components/DeviceCard';
import { fetchDevices, play } from '../actions/devicesAction';
import { setRedirect } from '../actions/settingsAction';

class PickDevice extends React.Component {

  constructor() {
    super();
    this.pickedDeviceHandler = this.pickedDeviceHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchDevices(
      this.props.settings.server,
      this.props.settings.port,
      this.props.settings.authToken);
  }

  componentWillUnmount() {
    this.props.setRedirect(false);
  }

  pickedDeviceHandler(id, playableObj) {
    const buildPlayObj = {
      server: this.props.settings.server,
      port: this.props.settings.port,
      localIP: ip.address(),
      authToken: this.props.settings.authToken,
      signingKey: jwt.sign({ playable: `${playableObj.name}${playableObj.ext}` }, this.props.settings.signingKey, { expiresIn: '30 day' }),
      fileName: `${playableObj.name}${playableObj.ext}`,
      myComputerName: os.hostname(),
      deviceID: id,
      description: playableObj.episodeTitle === undefined ? playableObj.plot : playableObj.showID.tvShowPlot,
      time: playableObj.runtime,
      pathToContent: playableObj.episodeTitle === undefined ? `/Movies/${playableObj.searchableName}` : `/TV Shows/${playableObj.searchableName}/Season ${playableObj.season}/Episode ${playableObj.episode}`,
      poster: playableObj.poster,
      presentableName: playableObj.episodeTitle === undefined ? playableObj.searchableName : `${playableObj.searchableName} - ${playableObj.episodeTitle}`,
      season: playableObj.episodeTitle === undefined ? 'null' : `S${playableObj.season}E${playableObj.episode}`,
    };

    this.props.play({ buildPlayObj });

    this.props.setRedirect(true);
  }

  render() {
    let playableObj = {};
    switch (this.props.match.params.type) {
      case 'tvshow':
        playableObj = this.props.tvshows
          .find(showObj => showObj.hash === this.props.match.params.hash);
        break;
      case 'movie':
        playableObj = this.props.movies
          .find(movieObj => movieObj.hash === this.props.match.params.hash);
        break;
      default:
        playableObj;
    }

    return (
      <div className="watchit-container">
        {console.log(playableObj)}
        {this.props.settings.redirect ? <Redirect to={`/${this.props.match.params.type}s`} /> : null}
        <div className="pick-device">Stream &quot;{playableObj.episodeTitle === undefined ? playableObj.searchableName : `${playableObj.searchableName} - ${playableObj.episodeTitle}`}&quot; on: </div>
        <div className="devices-container">
          {this.props.devices.data.length === 0 ? <NoConnectedDevices /> :
            this.props.devices.data.map(device =>
              (<DeviceCard
                key={device._id}
                device={device}
                pickHandler={this.pickedDeviceHandler}
                playable={playableObj}
              />))}
        </div>
      </div>
    );
  }
}

const NoConnectedDevices = () => (
  <div>
    <b>
      No connected devices, yet ....
    </b>
  </div>
);

const mapStateToProps = state => ({
  movies: state.movies.movies,
  tvshows: state.tvshows.tvShows,
  settings: state.settings,
  devices: state.devices,
});

const mapDispatchToProps = {
  fetchDevices,
  play,
  setRedirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(PickDevice);
