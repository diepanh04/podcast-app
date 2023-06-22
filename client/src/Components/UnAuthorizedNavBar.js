import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import logo from '../Assets/Images/Podcasity.png';
import { Link } from 'react-router-dom';

const UnauthorizedNavBar = ({ children }) => {
  return (
    <div>
      <Link to={`/dashboard`}>
        <img src={logo} style={{ height: '12vh' }}/>
      </Link>
      <Typography>logged out</Typography>
      {children}
    </div>
  )
};

export default UnauthorizedNavBar;