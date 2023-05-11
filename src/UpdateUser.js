import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
export default function UpdateUser() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    UsersGet()
  }, [])

  const UsersGet = () => {
    const token = localStorage.getItem('token')
    fetch('https://plum-lively-trout.cyclic.app/getuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data[0].C_Address);
        setEmail(data[0].C_Email);
        setFname(data[0].C_Firstname);
        setLname(data[0].C_Lastname);
        setAddress(data[0].C_Address);
        setPhone(data[0].C_Phone);

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const UpdateUser = () => {
    window.location = 'updateadd'
  }

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
   
     
    <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center' }} sx={{ pt: 5 }}>
      <Paper
        sx={{
          pt: 5,
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          borderRadius: '12px',
          overflow: 'hidden',
        }}

      >
          <Grid container spacing={2} alignItems="center">
            <Grid item sx={{}}>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src="https://i.pinimg.com/564x/5f/aa/17/5faa17fc240d090714fc70956d8b463b.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {email}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Firstname : {fname}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Lastname : {lname}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Address : {address}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {phone}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Button onClick={() => UpdateUser()}>Edit</Button>
                <IconButton href="/Navbar"> <ArrowBackIcon /> </IconButton>
              </Grid>
            </Grid>
          </Grid>
      </Paper>
      </Container>
  );
}


