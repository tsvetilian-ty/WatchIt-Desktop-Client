import DB from 'electron-store';
import axios from 'axios';

const db = new DB();

export const setServer = address => (dispatch) => {
  db.set('serverAddress', address);
  dispatch({
    type: 'SET_SERVER',
    payload: address,
  });
};

export const setPort = port => (dispatch) => {
  db.set('serverPort', port);
  dispatch({
    type: 'SET_PORT',
    payload: port,
  });
};

export const setSigningKey = key => (dispatch) => {
  dispatch({
    type: 'SET_SIGNING_KEY',
    payload: key,
  });
};

export const setOmdbApi = apiKey => (dispatch) => {
  db.set('omdbapi', apiKey);
  dispatch({
    type: 'SET_OMDBAPI',
    payload: apiKey,
  });
};

export const setAuthToken = token => (dispatch) => {
  dispatch({
    type: 'SET_AUTH_TOKEN',
    payload: token,
  });
};

export const setLocalIP = address => (dispatch) => {
  dispatch({
    type: 'SET_LOCAL_IP',
    payload: address,
  });
};

export const setDeviceName = name => (dispatch) => {
  dispatch({
    type: 'SET_DEVICE_NAME',
    payload: name,
  });
};

export const setCurrentUser = username => (dispatch) => {
  dispatch({
    type: 'CURRENT_USER',
    payload: username,
  });
};

export const Auth = (ser, port, email, password) => async (dispatch) => {
  try {
    const AuthRequest = await axios(`${ser}/api/v1/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email,
        password,
      },
    });
    if (AuthRequest.status === 200) {
      db.set('authToken', AuthRequest.data.token);
      db.set('currentUser', AuthRequest.data.username);
      dispatch({
        type: 'SET_AUTH_TOKEN',
        payload: AuthRequest.data.token,
      });
      dispatch({
        type: 'CURRENT_USER',
        payload: AuthRequest.data.username,
      });
    }
  } catch (err) {
    console.log(`Error while authentication the user (${email}): ${err}`);
  }
};

export const Registration = (ser, port, userName, email, password) => async (dispatch) => {
  try {
    const registrationRequest = await axios(`${ser}/api/v1/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        user_name: userName,
        email,
        password,
      },
    });
    if (registrationRequest.status === 201) {
      db.set('authToken', registrationRequest.data.token);
      db.set('currentUser', registrationRequest.data.username);
      dispatch({
        type: 'SET_AUTH_TOKEN',
        payload: registrationRequest.data.token,
      });
      dispatch({
        type: 'CURRENT_USER',
        payload: registrationRequest.data.username,
      });
    }
  } catch (err) {
    console.log(`Error while registration (${email}): ${err}`);
  }
};

export const logOut = () => (dispatch) => {
  db.set('authToken', null);
  dispatch({
    type: 'LOG_OUT',
    payload: null,
  });
};

export const setRedirect = val => (dispatch) => {
  dispatch({
    type: 'SET_REDIRECT',
    payload: val,
  });
};
