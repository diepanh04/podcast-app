export default (channels = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return action.payload;
    default:
      return channels;
  }
}