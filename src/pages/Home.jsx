import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Rating,
} from '@mui/material';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  const navigate = useNavigate();

  // Mock data for the image slider
  const sliderImages = [
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg'
  ];

  // Mock data for hotels
  const hotels = [
    {
      id: 1,
      name: 'Luxury Resort & Spa',
      description: 'Experience luxury at its finest with our premium resort and spa facilities.',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      rating: 4.5,
      price: 299,
    },
    {
      id: 2,
      name: 'City Center Hotel',
      description: 'Modern comfort in the heart of the city with easy access to attractions.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      rating: 4.2,
      price: 199,
    },
    {
      id: 3,
      name: 'Beachfront Resort',
      description: 'Stunning ocean views and direct beach access for the perfect vacation.',
      image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
      rating: 4.8,
      price: 399,
    },
  ];

  return (
    <Box>
      {/* Image Slider */}
      <ImageSlider images={sliderImages} />

      {/* Featured Hotels */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Featured Hotels
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {hotels.map((hotel) => (
            <Grid item key={hotel.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                }}
                onClick={() => navigate(`/hotel/${hotel.id}`)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={hotel.image}
                  alt={hotel.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {hotel.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={hotel.rating} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {hotel.rating}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {hotel.description}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${hotel.price} / night
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Ready to Book Your Stay?
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Discover our exclusive deals and start planning your perfect getaway today.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/')}
            >
              Browse Hotels
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 