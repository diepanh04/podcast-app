import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { MAIN_DARK_BLUE, MAIN_GREEN, MAIN_LIGHT_GREY, MAIN_ORANGE } from '../shared/Constant.js';
import { useAuthentication, useFavouriteEpisodes } from '../../helpers/CurrentUser';
import { addHeart, removeHeart } from '../../redux/episodes/actions/episodes.js';

const styles = {
  root: {
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: MAIN_LIGHT_GREY,
  },
  img: {
    width: '80%',
    objectFit: 'cover',
    borderRadius: '5px'
  },
  title: {
    fontSize: '20px',
    color: MAIN_DARK_BLUE,
    fontWeight: 'bold'
  },
  heart: {
    color: MAIN_ORANGE,
    fontSize: '20px'
  },
  addBtn: {
    color: MAIN_GREEN,
    fontSize: '20px'
  },
  btnContainer: {
    marginTop: '10px'
  },
  button: {
    cursor: 'pointer',
    marginRight: '10%'
  },
};

const IndividualEpisodeCard = (props) => {
  const { episode } = props;
  const { id, thumbnail, title } = episode;
  const [heart, setHeart] = useState(false);

  const hearted = false;

  const dispatch = useDispatch();
  const currentUser = useAuthentication();

  const handleHeartClick = () => {
    if (heart || hearted) {
      setHeart(false);
      dispatch(removeHeart(id, currentUser.id));
    } else {
      setHeart(true);
      dispatch(addHeart(id, currentUser.id));
    }
  };

  return (
    <div>
      <Grid container sx={styles.root}>
        <Grid item xs={2}>
          <img src={thumbnail} style={styles.img} alt="" />
        </Grid>
        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Typography sx={styles.title}>{title}</Typography>
          </div>
          <div>
            <span onClick={handleHeartClick} style={styles.button}>
              {(heart) ? <FavoriteIcon style={styles.heart} /> : <FavoriteBorderIcon style={styles.heart} />}
            </span>
            <span>
              <AddCircleOutlineOutlinedIcon style={styles.addBtn} />
            </span>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ color: 'red' }} />
    </div>
  );
};


IndividualEpisodeCard.propTypes = {
  episode: PropTypes.string.isRequired,
};

export default IndividualEpisodeCard