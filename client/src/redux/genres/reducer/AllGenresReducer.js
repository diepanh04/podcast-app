const AllGenresReducer = (
  state = {
    genres: []
  },
  action = { type: '', payload: null },
) => {
  switch (action.type) {
    case 'GET_ALL_GENRES': {
      return {
        ...state,
        genres: action.payload,
      };
    }
    default:
      return state;
  }
}

export default AllGenresReducer;