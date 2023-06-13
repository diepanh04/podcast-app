import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item>

        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: '60px'
              }}
            >
              Podcasity
            </Typography>
            <Typography
              sx={{
                fontSize: '30px'
              }}
            >
              discover podcasts and connect with other residents
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Link to="/dashboard">Start Discovering</Link>
              </Grid>
              <Grid item xs={6}>
                <Link to="/signin">Sign In</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
             
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default Home;