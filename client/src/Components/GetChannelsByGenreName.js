import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getChannelsByGenreName } from '../actions/genres.js';
import IndividualChannelCard from './IndividualChannelCard.js';

const GetChannelsByGenreName = (props) => {
  const { genreName, short } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelsByGenreName(genreName));
  }, [genreName]);

  const { channels } = useSelector((state) => state.genres[genreName]) || [];
  console.log(channels);

  return (
    <Grid container spacing={3}>
      {channels && short &&
        channels.slice(0, 6).map((channel) => (
          <Grid item xs={2} key={channel.id}>
            <IndividualChannelCard channel={channel} />
          </Grid>
      ))}
      {channels && !short &&
        channels.map((channel) => (
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
