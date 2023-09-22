import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ListNavigator = (props) => {
  const { current, previous } = props;
  const navigate = useNavigate();

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ marginBottom: '20px' }}
    >
      {previous.map((prev) => (
        <Link
          to={`/${prev}`}
          style={{
            textDecoration: 'none',
          }}  
        >
          <Typography
            sx={{
              fontSize: '18px',
            }}
          >
            {prev}
          </Typography>
        </Link>
      ))}
      <Typography>{current}</Typography>
    </Breadcrumbs>
  );
};

ListNavigator.propTypes = {
  current: PropTypes.string.isRequired,
  previous: PropTypes.array.isRequired,
};

export default ListNavigator;
