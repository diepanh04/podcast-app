import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GetFavouriteChannels from '../../components/authorized/GetFavouriteChannels';
import GetFavouriteEpisodes from '../../components/authorized/GetFavouriteEpisodes';
import { LIGHT_BEIGE } from '../../components/shared/Constant';

const FavouriteList = () => {
  return (
    <div style={{ backgroundColor: LIGHT_BEIGE }}>
      <Grid sx={{ padding: '50px' }}>
        <Grid item>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#665A48',
              marginBottom: '30px'
            }}
          >
            My Channel Hearts
          </Typography>
          <GetFavouriteChannels />
        </Grid>
        {/* <Grid item>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#665A48',
              marginBottom: '30px'
            }}
          >
            My Episode Hearts
          </Typography>
          <GetFavouriteEpisodes />
        </Grid> */}
      </Grid>
    </div>
  )
}

export default FavouriteList