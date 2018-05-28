import React from 'react';

const AuthenticatedCard = ({ user, signOutHandler }) => (
  <div className="settings-view">
    <div className="setting-title">
      You are logged in as {user} <i role="presentation" onClick={signOutHandler} className="fas fa-sign-out-alt" />
    </div>
  </div>);

export default AuthenticatedCard;
