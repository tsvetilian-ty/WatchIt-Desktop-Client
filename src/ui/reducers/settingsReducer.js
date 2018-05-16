const initState = { redirect: false };

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SERVER':
      state = {
        ...state,
        server: action.payload,
      };
      break;
    case 'SET_PORT':
      state = {
        ...state,
        port: action.payload,
      };
      break;
    case 'SET_SIGNING_KEY':
      state = {
        ...state,
        signingKey: action.payload,
      };
      break;
    case 'SET_AUTH_TOKEN':
      state = {
        ...state,
        authToken: action.payload,
      };
      break;
    case 'SET_OMDBAPI':
      state = {
        ...state,
        omdbApi: action.payload,
      };
      break;
    case 'SET_LOCAL_IP':
      state = {
        ...state,
        localIP: action.payload,
      };
      break;
    case 'SET_DEVICE_NAME':
      state = {
        ...state,
        deviceName: action.payload,
      };
      break;
    case 'CURRENT_USER':
      state = {
        ...state,
        currentUser: action.payload,
      };
      break;
    case 'LOG_OUT':
      state = {
        ...state,
        authToken: action.payload,
      };
      break;
    case 'SET_REDIRECT':
      state = {
        ...state,
        redirect: action.payload,
      };
      break;
    default:
      state;
  }
  return state;
};

export default settingsReducer;
