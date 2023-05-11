import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

export default function UpdateReal() {  
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const jsonData = {
    C_Firstname: fname,
    C_Lastname: lname,
    C_Address: address,
    C_Phone: phone
}

  const updatefrom = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token')
    fetch('https://plum-lively-trout.cyclic.app/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(jsonData),
    })
      .then(response => response.json())
      .then(data => {
        window.location = '/update'
          alert('update successful')

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Container sx={{ p:2 }} maxWidth="sm">    
      <div>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form onSubmit={updatefrom}>
          <Grid container sx={{ pt:2 }} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
            </Button>
            <IconButton href="/Navbar"> <ArrowBackIcon /> </IconButton>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}