import React from 'react';
import Grid from '@mui/material/Grid';
import ActiveButton from '../shared/ActiveButton';
import logo from '../../Assets/Images/Podcasity.png';
import { Link } from 'react-router-dom';

const UnauthorizedNavBar = ({ children }) => {
  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Link to="/dashboard">
            <img src={logo} style={{ height: '12vh' }} alt="Logo" />
          </Link>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/signin">
            <ActiveButton text='Sign In' />
          </Link>
          <Link to="/register">
            <ActiveButton text='Sign Up' />
          </Link>
        </Grid>
      </Grid>
      {children}
    </div>
  )
};

export default UnauthorizedNavBar;