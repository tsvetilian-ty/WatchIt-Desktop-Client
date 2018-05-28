import React from 'react';

const OMDBCard = ({ omdbApi, omdbHandler }) => (
  <div className="settings-view">
    <div className="setting-title">Set OMDb</div>
    <div className="setting-sub-title">
      Enter your personal key for OMDb or use the default one.
    </div>
    <div className="setting-option">
      <input type="text" onChange={omdbHandler} placeholder={omdbApi || 'OMDb Key'} />
    </div>
  </div>);

export default OMDBCard;
