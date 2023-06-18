import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres } from '../actions/genres.js';
import GenreItem from './GenreItem.js';

const GetAllGenres = (props) => {
  const { short } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const genres = useSelector((state) => state.genres.genres);

  return (
    <Grid container spacing={2}>
      {genres && short && genres.slice(0,24).map((genre) => (
        <Grid item xs={5} sm={4} md={3} lg={2} key={genre}>
          <GenreItem genreName={genre.name} />
        </Grid>
      ))}
      {genres && !short && genres.map((genre) => (
        <Grid item xs={5} sm={4} md={3} lg={2} key={genre}>
          <GenreItem genreName={genre.name} />
        </Grid>
      ))}
    </Grid>
  );
};

GetAllGenres.propTypes = {
  short: PropTypes.bool.isRequired,
};

export default GetAllGenres;
