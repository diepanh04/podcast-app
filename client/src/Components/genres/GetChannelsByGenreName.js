import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelsByGenreName } from '../../redux/genres/actions/genres';
import IndividualChannelCard from '../channels/IndividualChannelCard';

const GetChannelsByGenreName = (props) => {
  const { genreName, short } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelsByGenreName(genreName));
  }, [genreName])

  const channels = useSelector((state) => state.genres[genreName]);

  return (
    <Grid container spacing={3}>
      {channels && short && channels.slice(0, 6).map((channel) => (
        <Grid item sm={6} md={4} lg={2} key={channel.id}>
          <IndividualChannelCard channel={channel} />
        </Grid>
      ))}
      {channels && !short && channels.map((channel) => (
        <Grid item xs={2} key={channel.id}>
          <IndividualChannelCard channel={channel} />
        </Grid>
      ))}
    </Grid>
  );
};

GetChannelsByGenreName.propTypes = {
  genreName: PropTypes.string.isRequired,
  short: PropTypes.bool.isRequired,
};

export default GetChannelsByGenreName;