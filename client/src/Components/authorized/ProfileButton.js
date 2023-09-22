import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import firebase from '../../services/firebase';
import { Link } from 'react-router-dom';

const ProfileButton = (props) => {
  const { photo, name } = props;
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  const handleLogOut = async () => {
    await firebase.auth.signOut();
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
      >
        <Avatar src={photo}/>
        <Typography sx={{ marginLeft: '10px' }}>{name}</Typography>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
              >
                <MenuItem>
                  <Link to='/profile'>
                  <Button>
                    My Profile
                  </Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/favourites'>
                    <Button>
                      My Favourites
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button onClick={handleLogOut}>
                    Log Out
                  </Button>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

ProfileButton.propTypes = {
  name: PropTypes.string.isRequired,
}

ProfileButton.defaultProps = {
  photo: '',
}

export default ProfileButton;