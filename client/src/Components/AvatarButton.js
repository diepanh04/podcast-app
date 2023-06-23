import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AvatarButton = (props) => {
  const { photo, name } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button>
        <Avatar src={photo}/>
        <Typography>{name}</Typography>
      </Button>
    </div>
  )
}

AvatarButton.propTypes = {
  name: PropTypes.string.isRequired,
}

AvatarButton.defaultProps = {
  photo: '',
}

export default AvatarButton;