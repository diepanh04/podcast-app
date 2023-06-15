const GenreReducer = (
  state = {
    genres: [],
    channels: [],
    genreId: 0,
  },
  action = { type: '', payload: null },
) => {
  switch (action.type) {
    case 'GET_CHANNELS_BY_GENRE': {
      return {
        ...state,
        channels: action.payload,
      };
    }
    default:
      return state;
  }
};

export default GenreReducer;
