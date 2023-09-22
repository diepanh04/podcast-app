import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser, getFavouriteChannels, getFavouriteEpisodes } from '../redux/auth/actions/auth';

export const useAuthentication = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUser());
  }, [dispatch]);

  const currUser = useSelector(state => state.auth);

  return currUser;
};

export const useFavouriteChannels = (type) => {
  const currentUser = useAuthentication();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && currentUser.id) {
      dispatch(getFavouriteChannels(currentUser.id));
    }
  }, [dispatch, currentUser]);

  const list = useSelector(state => state.auth.favouriteChannels);

  return list;
};

export const useFavouriteEpisodes = (type) => {
  const currentUser = useAuthentication();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && currentUser.id) {
      dispatch(getFavouriteEpisodes(currentUser.id));
    }
  }, [dispatch, currentUser]);

  const list = useSelector(state => state.auth.favouriteEpisodes);

  return list;
};
