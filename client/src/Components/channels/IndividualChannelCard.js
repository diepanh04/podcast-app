import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { addHeart, removeHeart, loadChannel } from '../../redux/channels/actions/channels';
import { MAIN_DARK_BLUE, MAIN_GREEN, MAIN_LIGHT_GREY, MAIN_ORANGE } from '../shared/Constant.js';
import { useAuthentication } from '../../helpers/CurrentUser';

const styles = {
  container: {
    position: 'relative',
    zIndex: 1,
  },
  root: {
    padding: '10%',
    height: '30vh',
    marginBottom: '15%',
    backgroundColor: MAIN_LIGHT_GREY,
    width: '100%',
    border: ' 1px solid #3D405B',
    borderRadius: '5px'
  },
  img: {
    width: '18vh',
    objectFit: 'cover',
    borderRadius: '5px'
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
    color: MAIN_DARK_BLUE,
    fontWeight: 'bold'
  },
  button: {
    cursor: 'pointer',
  },
  heart: {
    color: MAIN_ORANGE,
    fontSize: '18px'
  },
  box: {
    backgroundColor: MAIN_GREEN,
    position: 'absolute',
    left: '3%',
    top: '3%',
    width: '100%',
    height: '100%',
    zIndex: -1,
    borderRadius: '5px'
  },
  btnContainer: {
    marginTop: '10px'
  }
};

const IndividualChannelCard = (props) => {
  const { channel } = props;
  const { id, title, thumbnail } = channel;
  const [heart, setHeart] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useAuthentication();

  useEffect(() => {
    dispatch(loadChannel(channel, currentUser.id));
  }, [channel, currentUser]);

  const hearted = useSelector(state => state.channels[title]?.hearted);

  const handleHeartClick = () => {
    if (heart || hearted) {
      setHeart(false);
      dispatch(removeHeart(id, title, currentUser.id));
    } else {
      setHeart(true);
      dispatch(addHeart(id, title, currentUser.id));
    }
  };

  return (
    <div style={styles.container}>
      <Box sx={styles.box} />
      <Grid sx={styles.root}>
        <Link
          to={`../channels/${title}`}
        >
          <Grid item sx={styles.card}>
            <img src={thumbnail} style={styles.img} alt="" />
          </Grid>
        </Link>
        <Link
          to={`../channels/${title}`}
          style={{
            textDecoration: 'none',
          }}
        >
          <Grid item sx={styles.titleContainer}>
            <div style={styles.title}>{title}</div>
          </Grid>
        </Link>
        <Grid item sx={styles.btnContainer}>
          <span onClick={handleHeartClick} style={styles.button}>
            {(heart || hearted) ? <FavoriteIcon style={styles.heart} /> : <FavoriteBorderIcon style={styles.heart} />}
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

IndividualChannelCard.propTypes = {
  channel: PropTypes.object.isRequired,
};

export default IndividualChannelCard;
