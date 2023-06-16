export default (genres = {}, action) => {
  switch (action.type) {
    case 'GET_CHANNELS_BY_GENRE_NAME': {
       const { name, channels } = action.payload;
       return {
        ...genres,
        [name]: {
          channels: channels,
        } 
       }
    }
    default:
      return genres;
  }
}
