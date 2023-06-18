import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import GetChannelsByGenreName from './GetChannelsByGenreName';

const FullPodcastListByGenre = (props) => {
  const { genreName } = props;

  return (
    <Grid>
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#665A48',
          marginBottom: '30px'
        }}
      >
        {genreName}
      </Typography>
      <GetChannelsByGenreName genreName={genreName} short={false}/>
    </Grid>
  )
}

FullPodcastListByGenre.propTypes = {
  channels: PropTypes.array.isRequired,
};


export default FullPodcastListByGenre;