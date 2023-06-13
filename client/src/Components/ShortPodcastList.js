import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import IndividualChannelCard from './IndividualChannelCard';

const ShortPodcastList = (props) => {
  const { channels } = props;

  return (
    <Grid container spacing={3}>
      {channels.map((channel) => (
        <Grid item xs={3}>
          <IndividualChannelCard channel={channel} />
        </Grid>
      ))}
    </Grid>
  )
}

ShortPodcastList.propTypes = {
  channels: PropTypes.array.isRequired,
};


export default ShortPodcastList