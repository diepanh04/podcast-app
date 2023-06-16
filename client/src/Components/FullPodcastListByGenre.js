import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import IndividualChannelCard from './IndividualChannelCard';
import { Typography } from '@mui/material';
import GetChannelsByGenreName from './GetChannelsByGenreName';

const FullPodcastListByGenre = (props) => {
  const { genreName } = props;

  return (
    <Grid>
      <Typography>
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