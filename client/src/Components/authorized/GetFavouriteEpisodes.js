import React from 'react';
import Grid from '@mui/material/Grid';
import { useFavouriteEpisodes } from '../../helpers/CurrentUser';
import IndividualEpisodeCard from '../channels/IndividualChannelCard';

const GetFavouriteEpisodes = () => {
  const list = useFavouriteEpisodes();

  return (
    <Grid container spacing={3}>
      {list && list.map((item) => (
        <Grid item sm={6} md={4} lg={2} key={item.id}>
          <IndividualEpisodeCard episode={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default GetFavouriteEpisodes;