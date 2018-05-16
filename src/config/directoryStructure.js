import * as path from 'path';
import { app } from 'electron';
import store from './helpers/mainProcessStore';

export const PATH_TO_WATCHIT = path.join(app.getPath('home'), 'WatchIT');
export const PATH_TO_MOVIES = path.join(app.getPath('home'), 'WatchIT', 'Movies');
export const PATH_TO_TVSHOWS = path.join(app.getPath('home'), 'WatchIT', 'TV_Shows');

export const SUPPORTED_VIDEO_FORMATS = new Set(['.mkv', '.mp4', '.webm', '.ts', '.flv']);

export const checkWatchITDirectoriesStructure = () => {
  //TODO
};

export const startWatcher = () => {
  //TODO watch the watchit directories for change
};
