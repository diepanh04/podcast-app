const initialState = {
  genres: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_GENRES': {
      return {
        ...state,
        genres: action.payload,
      };
    }
    case 'GET_CHANNELS_BY_GENRE_NAME': {
      const { name, channels } = action.payload;
      return {
        ...state,
        [name]: channels,
      };
    }
    default:
      return state;
  }
};

export default reducer;