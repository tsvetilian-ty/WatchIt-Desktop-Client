import * as path from 'path';
import { app } from 'electron';
import fs from 'fs';
import chokidar from 'chokidar';
import createHash from './helpers/hashCreator';
import hasWhiteSpace from './helpers/nameValidator';
import { addMovie, removeMovie } from '../ui/actions/moviesAction';
import { addTVShow, removeShow } from '../ui/actions/TVShowsAction';
import store from './helpers/mainProcessStore';

export const PATH_TO_WATCHIT = path.join(app.getPath('home'), 'WatchIT');
export const PATH_TO_MOVIES = path.join(app.getPath('home'), 'WatchIT', 'Movies');
export const PATH_TO_TVSHOWS = path.join(app.getPath('home'), 'WatchIT', 'TV_Shows');

export const SUPPORTED_VIDEO_FORMATS = new Set(['.mkv', '.mp4', '.webm', '.ts', '.flv']);

export const checkWatchITDirectoriesStructure = () => {
  fs.exists(PATH_TO_WATCHIT, (watchItMainDir) => {
    if (!watchItMainDir) {
      fs.mkdirSync(PATH_TO_WATCHIT);
    }
    fs.exists(PATH_TO_MOVIES, (watchItMoviesDir) => {
      if (!watchItMoviesDir) {
        fs.mkdirSync(PATH_TO_MOVIES);
      }
    });
    fs.exists(PATH_TO_TVSHOWS, (watchItTVShowsDir) => {
      if (!watchItTVShowsDir) {
        fs.mkdirSync(PATH_TO_TVSHOWS);
      }
    });
  });
};

export const startWatcher = () => {
    // TODO
};
