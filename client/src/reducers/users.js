export default (users = [], action) => {
  switch(action.type) {
    case 'CREATE':
      return users;
    case 'FETCH_ALL':
      return users;
    default:
      return users;
  }
}