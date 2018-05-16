import { checkWatchITDirectoriesStructure, startWatcher } from './directoryStructure';
import Server from './serverLoader';
import UI from '../ui/main';

export const loadServer = () => Server();

export const loadUI = () => UI();

export const directoryLoader = () => {
  checkWatchITDirectoriesStructure();
  startWatcher();
};
