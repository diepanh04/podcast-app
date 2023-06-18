import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const styles = {
  root: {
    padding: '10%',
    height: '30vh',
    marginBottom: '15%',
    backgroundColor: 'rgb(159, 135, 114, 0.3)',
    width: '100%',
  },
  img: {
    width: '20vh',
    objectFit: 'cover',
  },
  card: {
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: '5px',
  },
  title: {
    fontSize: '18px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const IndividualChannelCard = (props) => {
  const { channel, classes } = props;
  const { title, thumbnail } = channel;

  return (
    <Grid sx={styles.root}>
      <Grid item sx={styles.card}>
        <img src={thumbnail} style={styles.img} />
      </Grid>
      <Grid item sx={styles.titleContainer}>
        <div style={styles.title}>{title}</div>
      </Grid>
    </Grid>
  );
};

IndividualChannelCard.propTypes = {
  channel: PropTypes.object.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default IndividualChannelCard;
