import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthorizedRoutes from './routes/AuthorizedRoutes.js';
import UnauthorizedRoutes from './routes/UnauthorizedRoutes.js';
import firebase from './services/firebase.js';

const App = () => {
  const dispatch = useDispatch();
  const authorized = useSelector((state) => state.auth.authorized);

  useEffect(() => {
    const authStateListener = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: 'SET_AUTHORIZED' });
      } else {
        dispatch({ type: 'SET_UNAUTHORIZED' });
      }
    });

    return () => {
      authStateListener();
    };
  }, [dispatch]);

  return (
    <div>
      {authorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
    </div>
  );
};

export default App;
