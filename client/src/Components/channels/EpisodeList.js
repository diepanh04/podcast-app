import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import GetEpisodesByChannel from './GetEpisodesByChannel';
import ChannelOverview from './ChannelOverview';
import { MAIN_LIGHT_GREY } from '../shared/Constant';

const EpisodeList = (props) => {
  const { channelName } = props;

  const channel = useSelector(state => state.channels[channelName]) || {};

  return (
    <div>
      <Grid
        container
        sx={{
          padding: '3%',
          backgroundColor: MAIN_LIGHT_GREY,
        }}
      >
        <ChannelOverview info={channel} title={channelName}/>
        <Grid xs={12}>
          <Divider />
        </Grid>
        <GetEpisodesByChannel channelName={channelName} />
      </Grid>
    </div>
  )
}

EpisodeList.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default EpisodeList