const initialState = {
  channels: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CHANNEL': {
      const { id, title, publisher, thumbnail, description, hearted } = action.payload;
      return {
        ...state,
        [title]: { id, publisher, thumbnail, description, hearted }
      }
    }
    case 'GET_EPISODES_BY_CHANNEL': {
      const { title, episodes, message } = action.payload;
      return {
        ...state,
        [title]: {
          ...state[title],
          episodes: episodes || message,
        }
      }
    }
    case 'ADD_HEART': {
      const title = action.payload;
      return {
        ...state,
        [title]: {
          ...state[title], 
          hearted: true,
        }
      }
    }
    case 'REMOVE_HEART': {
      const title = action.payload;
      return {
        ...state,
        [title]: {
          ...state[title],
          hearted: false,
        }
      }
    }
    default:
      return state;
  }
}

export default reducer;