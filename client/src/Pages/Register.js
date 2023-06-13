import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { auth } from '../firebase_config';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [nameRegister, setNameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const handleRegister = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        emailRegister,
        passwordRegister
      );
      console.log(newUser);

      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nameRegister, email: emailRegister }),
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
            placeholder="Enter your full name"
            fullWidth
            onChange={(e) => setNameRegister(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Email*"
            placeholder="Enter your email"
            fullWidth
            onChange={(e) => setEmailRegister(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Password*"
            placeholder="Enter your password"
            fullWidth
            onChange={(e) => setPasswordRegister(e.target.value)}
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