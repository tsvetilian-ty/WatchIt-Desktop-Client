import React from 'react';
import { connect } from 'react-redux';
import { setServer, setPort, setOmdbApi, Auth, logOut, Registration } from '../actions/settingsAction';
import ConnectionCard from '../components/ConnectionCard';
import AuthenticationCard from '../components/AuthenticationCard';
import AuthenticatedCard from '../components/AuthenticatedCard';
import RegistrationCard from '../components/RegistrationCard';
import OMDBCard from '../components/OMDBCard';

class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.handleSetServer = this.handleSetServer.bind(this);
    this.handleSetPort = this.handleSetPort.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.handleSetOmdbKey = this.handleSetOmdbKey.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSetServer(e) {
    e.preventDefault();
    this.props.setServer(e.target.value);
  }

  handleSetPort(e) {
    e.preventDefault();
    this.props.setPort(e.target.value);
  }

  handleSetOmdbKey(e) {
    e.preventDefault();
    this.props.setOmdbApi(e.target.value);
  }

  handleAuthentication(e) {
    e.preventDefault();
    const server = this.props.settings.server;
    const port = this.props.settings.port;
    const email = e.target.email.value;
    const password = e.target.password.value;
    this.props.Auth(server, port, email, password);
  }

  handleSignOut(e) {
    e.preventDefault();
    this.props.logOut();
  }

  handleRegistration(e) {
    e.preventDefault();
    const server = this.props.settings.server;
    const port = this.props.settings.port;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userName = e.target.user.value;
    this.props.Registration(server, port, userName, email, password);
  }

  render() {
    const AuthenticatedCheck = this.props.settings.authToken ? (
      <AuthenticatedCard
        user={this.props.settings.currentUser}
        signOutHandler={this.handleSignOut}
      />
    ) : (<div>
      <ConnectionCard
        settings={this.props.settings}
        serverHandler={this.handleSetServer}
        portHandler={this.handleSetPort}
      />
      <AuthenticationCard
        authenticationHandler={this.handleAuthentication}
      />
      <RegistrationCard
        registrationHandler={this.handleRegistration}
      />
    </div>);

    return (
      <div className="settings-container">
        {AuthenticatedCheck}
        <OMDBCard omdbApi={this.props.settings.omdbApi} omdbHandler={this.handleSetOmdbKey} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  setServer: address => dispatch(setServer(address)),
  setPort: port => dispatch(setPort(port)),
  Auth: (server, port, email, password) => dispatch(Auth(server, port, email, password)),
  setOmdbApi: key => dispatch(setOmdbApi(key)),
  Registration: (ser, port, userName, email, password) => {
    dispatch(Registration(ser, port, userName, email, password));
  },
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
