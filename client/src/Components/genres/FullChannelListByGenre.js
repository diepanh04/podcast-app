import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import GetChannelsByGenreName from './GetChannelsByGenreName';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

const FullChannelListByGenre = (props) => {
  const { genreName } = props;
  const navigate = useNavigate();

  return (
    <Grid>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <Link onClick={() => navigate(-1)} sx={{ cursor: 'pointer' }}>
          <ArrowBackIosIcon />
        </Link>
        <Typography
          sx={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#665A48',
          }}
        >
          {genreName}
        </Typography>
      </div>
      <GetChannelsByGenreName genreName={genreName} short={false}/>
    </Grid>
  )
}

FullChannelListByGenre.propTypes = {
  genreName: PropTypes.string.isRequired,
};


export default FullChannelListByGenre;