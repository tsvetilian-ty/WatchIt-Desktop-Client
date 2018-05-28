import React from 'react';

const RegistrationCard = ({ registrationHandler }) => (
  <div className="settings-view">
    <div className="setting-title">Registration</div>
    <div className="setting-sub-title">
      Create account to use the WatchIT server!
    </div>
    <div className="setting-option">
      <form onSubmit={registrationHandler} className="auth">
        <input type="text" name="user" placeholder="Username" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <div className="auth-submit">
          <input type="submit" name="reg" value="Register" />
        </div>
      </form>
    </div>
  </div>);

export default RegistrationCard;
