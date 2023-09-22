import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '../../redux/auth/actions/auth';
import ProfileButton from './ProfileButton.js';
import logo from '../../Assets/Images/Podcasity.png';

const AuthorizedNavBar = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUser())
  }, [dispatch]);

  const currUser = useSelector(state => state.auth);
  if (!currUser) return null;

  return (
    <div style={{ padding: '10px' }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Link to="/dashboard">
            <img src={logo} style={{ height: '12vh' }} alt="Logo" />
          </Link>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <ProfileButton photo={currUser.image} name={currUser.name}/>
        </Grid>
      </Grid>
      {children}
    </div>
  );
};

export default AuthorizedNavBar;
