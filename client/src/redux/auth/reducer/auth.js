const initialState = {
  id: '',
  name: '',
  email: '',
  favouriteChannels: [],
  favouriteEpisodes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER': {
      return {
        ...state,
      }
    }
    case 'REGISTER_ERRORS': {
      return {
        ...state,
        errors: action.payload,
      }
    }
    case 'SET_AUTHORIZED': {
      return {
        ...state,
        authorized: true,
      }
    }
    case 'SET_UNAUTHORIZED': {
      return {
        ...state,
        authorized: false,
      }
    }
    case 'AUTHENTICATE_USER': {
      const currentUser = action.payload;
      return {
        ...state,
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
      }
    }
    case 'GET_FAVOURITE_CHANNELS': {
      const { list } = action.payload;
      return {
        ...state,
        favouriteChannels: list,
      }
    }
    // case 'ADD_TO_FAVOURITE_CHANNELS': {
    //   state.favouriteChannels.push(action.payload);
    //   return state;
    // }
    // case 'REMOVE_FROM_FAVOURITE_CHANNELS': {
    //   const index = state.favouriteChannels.indexOf(action.payload);
    //   state.favouriteChannels.splice(index, 1);
    //   return state;
    // }
    // case 'ADD_TO_FAVOURITE_EPISODES': {
    //   state.favouriteEpisodes.push(action.payload);
    //   return state;
    // }
    // case 'REMOVE_FROM_FAVOURITE_EPISODES': {
    //   const index = state.favouriteEpisodes.indexOf(action.payload);
    //   state.favouriteEpisodes.splice(index, 1);
    //   return state;
    // }
    default:
      return state;
  }
}

export default reducer;