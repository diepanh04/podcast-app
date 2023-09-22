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

// const IndividualGenreReducer = (
//   state = {
//     name: '',
//     channels: []
//   },
//   action = { type: '', payload: null },
// ) => {
//   switch (action.type) {
//     case 'GET_CHANNELS_BY_GENRE_NAME': {
//       const { name, channels } = action.payload;
//       return {
//         ...state,
//         name: name,
//         channels: channels,
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export default IndividualGenreReducer;