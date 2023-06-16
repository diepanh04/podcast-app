import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ShortPodcastList from '../Components/ShortPodcastList';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#EDE4E0' }}> 
      <Grid>
        <Grid item xs={12} sx={{ padding: '50px' }}>
          <ShortPodcastList genreName="Business" />
          <ShortPodcastList genreName="Technology" />
          <ShortPodcastList genreName="American History" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard