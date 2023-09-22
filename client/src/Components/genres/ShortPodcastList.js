import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GetChannelsByGenreName from './GetChannelsByGenreName';
import { MAIN_DARK_BLUE } from '../shared/Constant';

const ShortPodcastList = (props) => {
  const { genreName } = props;

  return (
    <Grid sx={{ marginBottom: '40px' }}>
      <Link
        to={`/genres/${genreName}`}
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
            {genreName}
          </Typography>
          <Typography>
            Show All
          </Typography>
        </div>
      </Link>
      <GetChannelsByGenreName genreName={genreName} short={true}/>
    </Grid>
  )
}

ShortPodcastList.propTypes = {
  genreName: PropTypes.string.isRequired,
};


export default ShortPodcastList