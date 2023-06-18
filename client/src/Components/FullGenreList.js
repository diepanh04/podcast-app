import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GetAllGenres from './GetAllGenres';

const FullGenreList = () => {
  return (
    <Grid
      style={{
        padding: '50px',
      }}
    >
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#665A48',
          marginBottom: '30px'
        }}
      >
        Browse All Genres
      </Typography>
      <GetAllGenres short={false}/>
    </Grid>
  )
}

export default FullGenreList