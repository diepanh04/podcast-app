import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { MAIN_ORANGE, MAIN_DARK_BLUE } from '../shared/Constant';
import { removeHeart, addHeart } from '../../redux/channels/actions/channels';
import { useAuthentication } from '../../helpers/CurrentUser';

const ChannelOverview = (props) => {
  const { info, title } = props;
  const [heart, setHeart] = useState(false);
  const [hearted, setHearted] = useState(false);

  useEffect(() => {
    setHearted(info.hearted);
  }, [info.hearted]);

  const dispatch = useDispatch();
  const currentUser = useAuthentication();
  console.log(hearted);

  const handleHeartClick = () => {
    if (heart || hearted) {
      setHeart(false);
      dispatch(removeHeart(info.id, title, currentUser.id));
    } else {
      setHeart(true);
      dispatch(addHeart(info.id, title, currentUser.id));
    }
  }

  return (
    <Grid container sx={{ marginBottom: '3%' }}>
      <Grid xs={3}><img src={info.thumbnail} /></Grid>
      <Grid xs={9} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: MAIN_DARK_BLUE,
            }}
          >
            {title}
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row', alignsItem: 'center' }}>
            <Chip
              label={info.publisher}
              variant="outlined"
              size="large"
              sx={{ marginRight: '5%' }}
            />
            <span onClick={handleHeartClick}>
              {(heart || hearted) ? <FavoriteIcon sx={{ color: MAIN_ORANGE, fontSize: '25px' }} /> : <FavoriteBorderIcon sx={{ color: MAIN_ORANGE, fontSize: '25px' }} />}
            </span>
          </div>
        </div>
        <div>
          <Typography
            sx={{
              color: MAIN_DARK_BLUE,
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              width: '80%',
              color: MAIN_DARK_BLUE,
              fontSize: '18px'
            }}
          >
            {info.description}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

ChannelOverview.propTypes = {
  info: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChannelOverview;