import React from 'react';
import Grid from '@mui/material/Grid';
import { useFavouriteChannels } from '../../helpers/CurrentUser';
import IndividualChannelCard from '../channels/IndividualChannelCard';

const GetFavouriteChannels = () => {
  const list = useFavouriteChannels();

  return (
    <Grid container spacing={3}>
      {list && list.map((item) => (
        <Grid item sm={6} md={4} lg={2} key={item.id}>
          <IndividualChannelCard channel={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default GetFavouriteChannels;