import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import Tapp from "./Tapp";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('https://plum-lively-trout.cyclic.app/authen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          //  alert('authen successful')
        } else {
          alert('authen failed')
          window.location = '/login'
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  const handlelogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    window.location = '/login';

  }

  const theme = createTheme()
  return (

    <ThemeProvider theme={theme}>
  <CssBaseline />
  <AppBar position="relative" sx={{ bgcolor: '#718355' }}>
    <Toolbar>
      <IconButton href="/Navbar">
        <BookIcon sx={{ mr: 2 }} />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        Book Shop
      </Typography>
      <Stack sx={{ ml: 2 }}>
        <IconButton href="/cart" variant="h1">
          <ShoppingCartIcon />
        </IconButton>
      </Stack>
      <Stack sx={{ ml: 2 }}>
        <Button variant="contained" sx={{ bgcolor: '#A3B18A' }} href="/update">
          User
        </Button>
      </Stack>
      <Stack sx={{ ml: 2 }}>
        <Button variant="contained" sx={{ bgcolor: '#A3B18A' }} onClick={handlelogout}>
          Logout
        </Button>
      </Stack>
    </Toolbar>
  </AppBar>
  <Tapp />
</ThemeProvider>

  );
}
