const initialState = {
  users: [],
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
    default:
      return state;
  }
}

export default reducer;