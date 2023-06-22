import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { register } from '../actions/auth.js';
import axios from 'axios';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value });
  }

  const handleRegister = async () => {
    dispatch(register(newUser));
    navigate('/signin');
  } 

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "30px"
      }}
    >
      <Typography>Register</Typography>
      <Grid container spacing={3} justifyContent='center'>
        <Grid item xs={8}>
          <TextField
            label="Full Name*"
            name="name"
            placeholder="Enter your full name"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Email*"
            name="email"
            placeholder="Enter your email"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Password*"
            name="password"
            placeholder="Enter your password"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Confirm Password*"
            name="confirmPassword"
            placeholder="Re-enter your password"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="outlined"
            onClick={()=> handleRegister()}  
          >
            Register
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Typography>Already have an account?</Typography>
          <Button
            variant="outlined"
          >
            <Link to="/signin">Sign In instead</Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Signin