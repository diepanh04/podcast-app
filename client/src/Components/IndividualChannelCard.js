import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const IndividualChannelCard = (props) => {
  const { channel } = props;
  const { title, thumbnail } = channel;

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
          src={thumbnail}
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