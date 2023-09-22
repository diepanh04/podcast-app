import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GetAllGenres from './GetAllGenres';
import { Link } from 'react-router-dom';
import { MAIN_DARK_BLUE } from '../shared/Constant';

const ShortGenreList = () => {
  return (
    <Grid sx={{ marginBottom: '50px' }}>
      <Link
        to={`/genres`}
        style={{
          textDecoration: 'none',
          color: MAIN_DARK_BLUE,
        }}  
      >
        <div
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              fontSize: '25px',
              marginBottom: '10px',
              fontWeight: 'bold'
            }}
          >
            All Genres
          </Typography>
          <Typography>
            Show All
          </Typography>
        </div>
      </Link>
      <GetAllGenres short={true}/>
    </Grid>
  )
}

export default ShortGenreList