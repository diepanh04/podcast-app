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

import { useDispatch, useSelector } from 'react-redux';
import { getChannelsByGenre } from '../actions/genres.js'

import ShortPodcastList from './ShortPodcastList';

const GetBestChannelsByGenre = (props) => {
  const { genreId } = props;
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  useEffect( async() => {
    dispatch(getChannelsByGenre(genreId));
  }, [genreId]);
  const channels = useSelector((state) => state);

  return (
    <Grid>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '20px' }}>Best In {genre}</Typography>
        <IconButton>
          <ArrowRightIcon sx={{ fontSize: '40px' }} />
        </IconButton>
      </div>
      <ShortPodcastList channels={channels} />
    </Grid>
  );
};

GetBestChannelsByGenre.propTypes = {
  genreId: PropTypes.string.isRequired,
};

export default GetBestChannelsByGenre;
