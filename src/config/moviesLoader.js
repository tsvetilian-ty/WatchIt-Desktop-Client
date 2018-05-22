import * as path from 'path';
import { PATH_TO_MOVIES, SUPPORTED_VIDEO_FORMATS } from './directoryStructure';
import pathResolver from './helpers/pathResolver';
import { addMovie } from '../ui/actions/moviesAction';
import store from './helpers/mainProcessStore';
import createHash from './helpers/hashCreator';

const moviesLoader = async () => {
  const movies = await pathResolver(PATH_TO_MOVIES);
  movies.map(async (movieFolder) => {
    const theMovies = await pathResolver(path.join(PATH_TO_MOVIES, movieFolder));
    theMovies.map((movie) => {
      const movieFileName = path.basename(movie, path.extname(movie));
      const movieFileExt = path.extname(movie);
      if (SUPPORTED_VIDEO_FORMATS.has(movieFileExt)) {
        store.dispatch(addMovie({
          searchableName: movieFolder.replace(/_/g, ' '),
          name: movieFileName.replace(/_/g, ' '),
          ext: movieFileExt,
          hash: createHash(movieFileName),
        }));
      }
    });
  });
};

export default moviesLoader;
