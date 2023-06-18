import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const GenreItem = (props) => {
  const { genreName } = props;

  return (
    <Link
      to={`/${genreName}`}
    >
      <Button
        sx={{
          backgroundColor: '#C8DBBE',
          color: '#665A48',
          width: '25vh',
          height: '8vh',
        }}
      >
      <Typography>
        {genreName}
      </Typography>
      </Button>
    </Link>
  )
}

export default GenreItem;