import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useDispatch } from 'react-redux';
import { createChannel } from '../actions/channels';

const IndividualChannelCard = (props) => {
  const { channel } = props;
  const { title, image } = channel;
  const dispatch = useDispatch();

  useEffect = (() => {
    const newChannel = {
      title: title,
    }
    dispatch(createChannel(newChannel));
  }, [channel])

  return (
    <Grid
      sx={{
        padding: '20px',
        height: '350px',
        marginBottom: '15%',
        backgroundColor: 'rgb(159,135,114,0.3)'
      }}
    >
      <Grid
        item
        sx={{
          textAlign: 'center'
        }}
      >
        <img
          src={image}
          style={{
            height: '220px',
            objectFit: 'cover'
          }}
        />
      </Grid>
      <Grid
        item
        sx={{
          marginTop: '10px',
          marginLeft: '5px'
        }}
      >
        <Typography>{title}</Typography>
      </Grid>
    </Grid>
  )
}

IndividualChannelCard.propTypes = {
  channel: PropTypes.object.isRequired,
};

export default IndividualChannelCard