import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import IndividualChannelCard from './IndividualChannelCard';

import { useDispatch } from 'react-redux';
import { createChannel } from '../actions/channels.js'

import ShortPodcastList from './ShortPodcastList';
import prismaClient from '../../../server/prisma/prismaClient';

const GetBestChannelsByGenre = (props) => {
  const { genreId } = props;
  const [channels, setChannels] = useState([]);
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();

  useEffect( async() => {
    const channels = await prismaClient.channel.findMany({
      include: {
        
      }
    })

  }, [genreId]);

  return (
    <Grid>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '20px' }}>Best In {genre}</Typography>
        <IconButton>
          <ArrowRightIcon sx={{ fontSize: '40px' }} />
        </IconButton>
      </div>
      <ShortPodcastList channels={channels.slice(0,4)} />
    </Grid>
  );
};

GetBestChannelsByGenre.propTypes = {
  genreId: PropTypes.string.isRequired,
};

export default GetBestChannelsByGenre;
