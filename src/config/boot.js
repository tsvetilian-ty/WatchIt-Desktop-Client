import { setSigningKey, setServer, setPort, setAuthToken, setOmdbApi, setLocalIP, setDeviceName, setCurrentUser } from '../ui/actions/settingsAction';
import { checkWatchITDirectoriesStructure, startWatcher } from './directoryStructure';
import dbLoader from './dbLoader';
import Server from './serverLoader';
import UI from '../ui/main';

export const loadServer = () => Server();

export const loadUI = () => UI();

export const loadSettings = (signingKey) => {
  // Load DB settings data
  dbLoader.then((dbData) => {
    store.dispatch(setServer(dbData.serverAddress));
    store.dispatch(setPort(dbData.serverPort));
    store.dispatch(setAuthToken(dbData.authToken));
    store.dispatch(setOmdbApi(dbData.omdbApi));
    store.dispatch(setCurrentUser(dbData.currentUser));
    store.dispatch(setDeviceName(dbData.deviceName));
    store.dispatch(setLocalIP(dbData.localIP));
  });

  // Load Movies data
  moviesLoader().then(() => {
    console.log('Movies loader kicked...');
  }).catch(err => console.log(`Something went wrong with the movie loader! - ${err}`));

  // Load TV Shows data
  tvShowsLoader().then(() => {
    console.log('TV Shows loader kicked...');
  }).catch(err => console.log(`Something went wrong with the movie loader! - ${err}`));

  // Dispatching settings
  store.dispatch(setSigningKey(signingKey));
};

export const directoryLoader = () => {
  checkWatchITDirectoriesStructure();
  startWatcher();
};
