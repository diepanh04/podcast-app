import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

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
            placeholder="Enter your email"
            fullWidth
            onChange={(e) => setEmailSignIn(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Password*"
            placeholder="Enter your password"
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <Button variant="outlined">Sign In</Button>
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