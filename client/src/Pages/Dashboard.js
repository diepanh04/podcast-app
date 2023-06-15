import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GetBestChannelsByGenre from '../Components/GetBestChannelsByGenre';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#EDE4E0' }}> 
      <Grid>
        <Grid item xs={12}>
          <GetBestChannelsByGenre genreId="93"/>
          {/* <GetBestChannelsByGenre genreId="93"/>
          <GetBestChannelsByGenre genreId="127"/> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard