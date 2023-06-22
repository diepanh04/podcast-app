import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import logo from '../Assets/Images/Podcasity.png';
import { Link } from 'react-router-dom';

const AuthorizedNavBar = ({ children }) => {
  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Link to="/dashboard">
            <img src={logo} style={{ height: '12vh' }} alt="Logo" />
          </Link>
        </Grid>
        <Grid item>
          <Typography>logged in</Typography>
        </Grid>
      </Grid>
      {children}
    </div>
  );
};

export default AuthorizedNavBar;
