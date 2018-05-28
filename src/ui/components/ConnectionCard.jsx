import React from 'react';

const ConnectionCard = ({ settings, serverHandler, portHandler }) => (
  <div className="settings-view">
    <div className="setting-title">Connection</div>
    <div className="setting-sub-title">
      Please, enter URL and port to WatchIT server. URL format example: http://domainORip.com
    </div>
    <div className="setting-option">
      <input type="text" onChange={serverHandler} placeholder={settings.server || 'Enter Server URL'} />
    </div>
  </div>);

export default ConnectionCard;
