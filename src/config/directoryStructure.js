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
  const watcher = chokidar.watch(PATH_TO_WATCHIT, { followSymlinks: false });
  watcher.on('add', (pathTo) => {
    const { ext, name, dir } = path.parse(pathTo);
    if (SUPPORTED_VIDEO_FORMATS.has(ext)) {
      const directories = dir.split(path.sep);
      if (directories[directories.length - 2] === 'Movies') {
        if (!hasWhiteSpace(name)) {
          store.dispatch(addMovie({
            name,
            ext,
            hash: createHash(name),
            searchableName: directories[directories.length - 1],
          }));
        }
      }
      if (directories[directories.length - 4] === 'TV Shows') {
        const show = directories[directories.length - 3];
        const episode = directories[directories.length - 1].split(' ')[1];
        const season = directories[directories.length - 2].split(' ')[1];
        store.dispatch(addTVShow({
          name,
          ext,
          episode,
          season,
          hash: createHash(name),
          showHash: createHash(show),
          searchableName: show,
        }));
      }
    }
  });
  watcher.on('unlink', (pathTo) => {
    const { ext, name, dir } = path.parse(pathTo);
    if (SUPPORTED_VIDEO_FORMATS.has(ext)) {
      const directories = dir.split(path.sep);
      if (directories[directories.length - 2] === 'Movies') {
        store.dispatch(removeMovie(createHash(name)));
      }
      if (directories[directories.length - 4] === 'TV Shows') {
        store.dispatch(removeShow(createHash(name)));
      }
    }
  });
};
