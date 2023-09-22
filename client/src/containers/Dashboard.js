import React from 'react';
import Grid from '@mui/material/Grid';
import ShortPodcastList from '../components/genres/ShortPodcastList';
import ShortGenreList from '../components/genres/ShortGenreList';
import { LIGHT_BEIGE } from '../components/shared/Constant';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: LIGHT_BEIGE }}> 
      <Grid>
        <Grid item xs={12} sx={{ padding: '50px' }}>
          <ShortGenreList />
          <ShortPodcastList genreName="Business"/>
          <ShortPodcastList genreName="Technology"/>
          <ShortPodcastList genreName="Society & Culture" />
          <ShortPodcastList genreName="Education" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard;