import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import IndividualChannelCard from './IndividualChannelCard';
import GetChannelsByGenreName from './GetChannelsByGenreName';

const ShortPodcastList = (props) => {
  const { genreName } = props;

  return (
    <Grid>
      <Link
        to={`/${genreName}`}
        style={{
          textDecoration: 'none',
          color: '#665A48',
          display: 'flex',
        }}  
      >
        <Typography
          sx={{
            fontSize: '25px',
            marginBottom: '10px'
          }}
        >
          {genreName}
        </Typography>
        <ArrowRightIcon
          sx={{
            fontSize: '40px'
          }}
        />
      </Link>
      <GetChannelsByGenreName genreName={genreName} short={true}/>
    </Grid>
  )
}

ShortPodcastList.propTypes = {
  channels: PropTypes.array.isRequired,
};


export default ShortPodcastList