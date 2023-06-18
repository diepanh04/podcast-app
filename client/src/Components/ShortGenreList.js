import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GetAllGenres from './GetAllGenres';
import { Link } from 'react-router-dom';

const ShortGenreList = () => {
  return (
    <Grid sx={{ marginBottom: '50px' }}>
      <Link
        to={`/genres`}
        style={{
          textDecoration: 'none',
          color: '#665A48',
          display: 'flex',
          alignItems: 'center'
        }}  
      >
      <Typography
        sx={{
          fontSize: '30px',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}
      >
        Search By Genre
      </Typography>
      <ArrowRightIcon
        sx={{
          fontSize: '40px'
        }}
      />
      </Link>
      <GetAllGenres short={true}/>
    </Grid>
  )
}

export default ShortGenreList