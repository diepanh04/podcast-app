import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../../services/firebase';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const setAuthorized = () => dispatch({ type: 'SET_AUTHORIZED' });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  }

  const handleSignIn = async () => {
    try {
      const thisUser = await signInWithEmailAndPassword(
        firebase.auth,
        user.email,
        user.password,
      );
      if (thisUser) {
        setAuthorized();
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "30px"
      }}
    >
      <Typography>Sign In</Typography>
      <Grid container spacing={3} justifyContent='center'>
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
          <Button variant="outlined" onClick={handleSignIn}>Sign In</Button>
        </Grid>
        <Grid item xs={8}>
          <Typography>Doesn't have an account?</Typography>
          <Button variant="outlined">
            <Link to="/register">Register instead</Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Signin