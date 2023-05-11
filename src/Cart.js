import React, { useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

export default function ImgMediaCard() {
  const [productcart, setproductcart] = React.useState([]);

  useEffect(() => {
    getCart()
    cartDelete()
  },)
  const getCart = () => {
    fetch('https://plum-lively-trout.cyclic.app/cartget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setproductcart(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  const cartDelete = id => {
    var data = {
      'Book_ID': id
    }
    fetch('https://plum-lively-trout.cyclic.app/deletecart', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(
        (result) => {
          getCart();
        }
      )
  }
  return (

    <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center' }} sx={{ pt: 5 }}>
  <Grid container spacing={3}>
    {productcart.map((item) => (
      <Grid item xs={12} sm={6} md={4} key={item.Book_ID}>
        <Card sx={{ maxWidth: "400" }}>
          <CardMedia
            sx={{ width: 350, height: 500, mt: 3, mb: 1 }}
            component="img"
            height="140"
            image={item.B_img}
            title={item.Book_Title}
            subheader={item.Book_Price}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.Book_Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.Book_Price}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton href="/Navbar">
              <ArrowBackIcon />
            </IconButton>
            <IconButton aria-label="settings">
              <DeleteForeverIcon
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this item?')) {
                    cartDelete(item.Book_ID);
                  }
                }}
              />
            </IconButton>

          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>

  );
}

