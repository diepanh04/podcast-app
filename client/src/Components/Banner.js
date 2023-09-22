import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ActiveButton from "./shared/ActiveButton";
import { Link } from 'react-router-dom';
import photo from '../Assets/Images/photo.jpg';
import { MAIN_DARK_BLUE } from "./shared/Constant";

const Banner = () => {
  return (
    <div style={{ alignsItem: 'center' }}>
        <Typography sx={{ fontSize: '60px', color: MAIN_DARK_BLUE }}>
          Podcasity
        </Typography>
        <Typography sx={{ fontSize: '30px', color: MAIN_DARK_BLUE }}>
          discover podcasts and connect with other residents
        </Typography>
        <div style={{ display: 'flex' }}>
          <Link to="/dashboard">
            <ActiveButton text='Start Discovering' />
          </Link>
          <Link to="/signin">
            <ActiveButton text='Sign In' />
          </Link>
        </div>
    </div>
  )
}

export default Banner;