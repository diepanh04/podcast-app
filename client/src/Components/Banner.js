import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ActiveButton from "./ActiveButton";
import { Link } from 'react-router-dom';
import photo from '../Assets/Images/photo.jpg';

const Banner = () => {
  return (
    <Grid container>
      <Grid item xs={6} sx={{ textAlign: 'center', alignContent: 'center' }}>
        <Typography sx={{ fontSize: '60px' }}>
          Podcasity
        </Typography>
        <Typography sx={{ fontSize: '30px' }}>
          discover podcasts and connect with other residents
        </Typography>
        <div style={{ display: 'flex' }}>
          <Link to="/dashboard">
            <ActiveButton text='Start Discovering' />
          </Link>
          <Link to="/signin">
            <ActiveButton text='Sign In' />
          </Link>
        </div>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'center', alignContent: 'center' }}>
        <img
          src={photo}
          style={{
            height: '30vh'
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Banner;