const reducer = (
  state = {
    id: '',
    title: '',
    publisher: '',
    thumbnail: '',
    likes: 0,
  },
  action,
) => {
  switch (action.type) {
    case 'LOAD_CHANNEL': {
      return {
        ...state,
      }
    }
    case 'ADD_LIKE': {
      return {
        ...state,
        likes: likes + 1,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;