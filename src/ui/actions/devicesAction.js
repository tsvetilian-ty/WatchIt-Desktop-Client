import axios from 'axios';

export const fetchDevices = (server, port, authToken) => async (dispatch) => {
  try {
    const availableDevices = await axios(`${server}/api/v1/devices`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${authToken}`, 'Content-Type': 'application/json' },
    });

    dispatch({
      type: 'FETCH_DEVICES',
      payload: availableDevices.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const play = ({ ...data }) => async () => {
  const playData = data.buildPlayObj;
  try {
    await axios(`${playData.server}/api/v1/play`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${playData.authToken}`, 'Content-Type': 'application/json' },
      data: {
        file_name: playData.fileName.replace(/ /g, '_'),
        description: playData.description,
        time: playData.time,
        play_from: playData.localIP,
        key: playData.signingKey,
        source_name: playData.myComputerName,
        play_on: playData.deviceID,
        content_path: playData.pathToContent.replace(/ /g, '_'),
        poster: playData.poster,
        name: playData.presentableName,
        season: playData.season,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
