import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodesByChannel } from '../../redux/channels/actions/channels';
import IndividualEpisodeCard from '../episodes/IndividualEpisodeCard';

const GetEpisodesByChannel = (props) => {
  const { channelName } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodesByChannel(channelName));
  }, [channelName]);

  const episodes = useSelector(state => state.channels[channelName]?.episodes);

  return (
    <Grid container justifyContent="center">
      {episodes && Array.isArray(episodes) ? 
        episodes.map((ep) => (
          <Grid item xs={12}>
            <IndividualEpisodeCard episode={ep} />
          </Grid>
        )) :
        <Typography
          sx={{}}
        >
          {episodes}
        </Typography>
      }
    </Grid>
  )
}

GetEpisodesByChannel.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default GetEpisodesByChannel;