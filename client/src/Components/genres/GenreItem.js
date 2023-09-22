import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { MAIN_LIGHT_GREY, MAIN_DARK_BLUE } from '../shared/Constant';

const GenreItem = (props) => {
  const { genreName } = props;

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
      sx={{
        backgroundColor: MAIN_DARK_BLUE,
        borderColor: 'white',
        position: 'absolute',
        left: '2%',
        top: '5%',
        width: '100%',
        height: '100%',
        zIndex: -1,
        borderRadius: '5px'
      }}
      />
      <Grid
        container
        justifyContent="center"  // Center horizontally
        alignItems="center"      // Center vertically
        sx={{
          backgroundColor: MAIN_LIGHT_GREY,
          color: MAIN_DARK_BLUE,
          width: '25vh',
          height: '8vh',
          border: '1px solid #3D405B',
          borderRadius: '5px',
        }}
      >
        <Link
          to={`/genres/${genreName}`}
          style={{
            textDecoration: 'none',
          }}  
        >
          <Typography
            style={{
              fontSize: '20px', 
              color: MAIN_DARK_BLUE,
              fontWeight: 'bold',
            }}
          >
            {genreName}
          </Typography>
        </Link>
      </Grid>
    </div>
  )
}

export default GenreItem;
