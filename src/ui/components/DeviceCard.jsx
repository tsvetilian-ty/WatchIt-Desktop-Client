/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React from 'react';

const DeviceCard = ({ device, pickHandler, playable }) => (
  <div className="episodes-view">
    <div className="episode-info">
      <div className="episode-title device-name">{device.name}</div>
      <div className="episode-details"><p>ID: {device._id}</p>
        <i className="fas fa-circle" />
        <p>Type: {device.type}</p></div>
    </div>
    <div className="episode-play">
      <a
        onClick={() => pickHandler(device._id, playable)}
        role="presentation"
        className="episode-play-btn"
      >
        <i className="fas fa-play" />
      </a>
    </div>
  </div>
);

export default DeviceCard;
