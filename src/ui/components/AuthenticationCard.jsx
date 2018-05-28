import React from 'react';

const AuthenticationCard = ({ authenticationHandler }) => (
  <div className="settings-view">
    <div className="setting-title">Authentication</div>
    <div className="setting-sub-title">
      Enter your email and password to authenticate.
    </div>
    <div className="setting-option">
      <form onSubmit={authenticationHandler} className="auth">
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <div className="auth-submit">
          <input type="submit" name="login" value="Login" />
        </div>
      </form>
    </div>
  </div>);

export default AuthenticationCard;
