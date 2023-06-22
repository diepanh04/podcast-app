import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import firebase from '../services/firebase';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '../actions/auth.js';
import AvatarButton from './AvatarButton';
import logo from '../Assets/Images/Podcasity.png';

const AuthorizedNavBar = ({ children }) => {
  const dispatch = useDispatch();

  const logOut = async () => {
    await firebase.auth.signOut();
  }

  useEffect(() => {
    dispatch(authenticateUser())
  }, [dispatch]);

  const currUser = useSelector(state => state.auth.currUser);

  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Link to="/dashboard">
            <img src={logo} style={{ height: '12vh' }} alt="Logo" />
          </Link>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <AvatarButton photo={currUser.image} name={currUser.name}/>
          <Button onClick={logOut}>
            Log Out
          </Button>
        </Grid>
      </Grid>
      {children}
    </div>
  );
};

export default AuthorizedNavBar;
