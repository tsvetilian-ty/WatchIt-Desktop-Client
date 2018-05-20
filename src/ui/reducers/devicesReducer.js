const devicesReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'FETCH_DEVICES':
      state = {
        ...state,
        data: action.payload,
      };
      break;
    default:
      state;
  }
  return state;
};

export default devicesReducer;
