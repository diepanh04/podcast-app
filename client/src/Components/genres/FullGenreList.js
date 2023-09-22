import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GetAllGenres from './GetAllGenres';
import ListNavigator from '../shared/ListNavigator';

const FullGenreList = () => {
  return (
    <Grid
      style={{
        padding: '50px',
      }}
    >
      <ListNavigator current='all genres' previous={['dashboard']}/>
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#665A48',
          marginBottom: '30px'
        }}
      >
        All Genres
      </Typography>
      <GetAllGenres short={false}/>
    </Grid>
  )
}

export default FullGenreList