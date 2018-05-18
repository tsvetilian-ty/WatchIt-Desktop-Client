import axios from 'axios';

const omdbApi = '2bd8bacc';

export const addTVShow = show => async (dispatch) => {
  try {
    const episodeData = await axios.get(`http://www.omdbapi.com/?t=${show.searchableName}&season=${show.season}&episode=${show.episode}&apikey=${omdbApi}&type=episode`);
    const showData = await axios.get(`http://www.omdbapi.com/?i=${episodeData.data.seriesID}&apikey=${omdbApi}&type=series`);

    if (episodeData.data.Response === 'False') {
      dispatch({
        type: 'ADD_SHOW',
        payload: {
          ...show,
          episodeTitle: show.name,
          showID: {
            tvShowPoster: 'http://via.placeholder.com/120x180',
            tvShowPlot: 'Unknown',
            tvShowRated: 'N/A',
          },
          seasons: 'N/A',
          rated: 'N/A',
          poster: 'http://via.placeholder.com/120x180',
          runtime: 'N/A',
          released: 'N/A',
        },
      });
      return;
    }

    dispatch({
      type: 'ADD_SHOW',
      payload: {
        ...show,
        episodeTitle: episodeData.data.Title,
        showID: {
          tvShowPoster: showData.data.Poster,
          tvShowPlot: showData.data.Plot,
          tvShowRated: showData.data.Rated,
        },
        seasons: showData.data.totalSeasons,
        rated: episodeData.data.Rated,
        poster: episodeData.data.Poster,
        runtime: showData.data.Runtime,
        released: showData.data.Year,
      },
    });
  } catch (err) {
    console.log('Something went wrong while constructing action ADD_SHOW: ', err);
  }
};

export const removeShow = hash => ({
  type: 'REMOVE_SHOW',
  payload: hash,
});
