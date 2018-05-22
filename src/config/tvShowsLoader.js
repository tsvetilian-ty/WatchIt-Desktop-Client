import * as path from 'path';
import { PATH_TO_TVSHOWS, SUPPORTED_VIDEO_FORMATS } from './directoryStructure';
import pathResolver from './helpers/pathResolver';
import { addTVShow } from '../ui/actions/TVShowsAction';
import store from './helpers/mainProcessStore';
import createHash from './helpers/hashCreator';

const tvShowsLoader = async () => {
  const tvShows = await pathResolver(PATH_TO_TVSHOWS);
  tvShows.map(async (tvShow) => {
    const seasons = await pathResolver(path.join(PATH_TO_TVSHOWS, tvShow));
    seasons.map(async (season) => {
      const episodes = await pathResolver(path.join(PATH_TO_TVSHOWS, tvShow, season));
      episodes.map(async (episode) => {
        const episodeFiles = await pathResolver(
          path.join(PATH_TO_TVSHOWS, tvShow, season, episode,
          ));
        episodeFiles.map(async (episodeVideo) => {
          const videoName = path.basename(episodeVideo, path.extname(episodeVideo));
          const videoExt = path.extname(episodeVideo);
          if (SUPPORTED_VIDEO_FORMATS.has(videoExt)) {
            const Episode = episode.split('_')[1];
            const Season = season.split('_')[1];
            store.dispatch(addTVShow({
              name: videoName.replace(/_/g, ' '),
              ext: videoExt,
              episode: Episode,
              season: Season,
              searchableName: tvShow.replace(/_/g, ' '),
              showHash: createHash(tvShow),
              hash: createHash(videoName),
            }));
          }
        });
      });
    });
  });
};

export default tvShowsLoader;
