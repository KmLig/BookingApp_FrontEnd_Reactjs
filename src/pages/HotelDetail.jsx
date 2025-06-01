import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Divider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    checkIn: null,
    checkOut: null,
    guests: 1,
    roomType: '',
  });

  // Mock hotel data - replace with actual data from your backend
  const hotel = {
    id: id,
    name: "Luxury Resort & Spa",
    description: "Experience luxury at its finest with our premium resort and spa facilities.",
    rating: 4.5,
    price: 299,
    images: [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg"
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa & Wellness",
      "Restaurant",
      "Room Service",
      "Fitness Center"
    ],
    roomTypes: [
      "Standard Room",
      "Deluxe Room",
      "Suite",
      "Presidential Suite"
    ]
  };

  const handleBooking = () => {
    // Here you would typically validate the booking data
    // and then navigate to the payment page
    navigate('/payment', { 
      state: { 
        bookingData,
        hotel
      }
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Hotel Images */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
            {hotel.images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
            ))}
          </Box>
        </Grid>

        {/* Hotel Information */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {hotel.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={hotel.rating} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hotel.rating} / 5
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {hotel.description}
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Amenities
          </Typography>
          <Grid container spacing={2}>
            {hotel.amenities.map((amenity, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <Typography variant="body2">• {amenity}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Booking Form */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Book Your Stay
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${hotel.price} / night
            </Typography>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box sx={{ mt: 2 }}>
                <DatePicker
                  label="Check-in Date"
                  value={bookingData.checkIn}
                  onChange={(newValue) => {
                    setBookingData({ ...bookingData, checkIn: newValue });
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 2 }} />}
                />
                <DatePicker
                  label="Check-out Date"
                  value={bookingData.checkOut}
                  onChange={(newValue) => {
                    setBookingData({ ...bookingData, checkOut: newValue });
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 2 }} />}
                />
              </Box>
            </LocalizationProvider>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Room Type</InputLabel>
              <Select
                value={bookingData.roomType}
                label="Room Type"
                onChange={(e) => setBookingData({ ...bookingData, roomType: e.target.value })}
              >
                {hotel.roomTypes.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              type="number"
              label="Number of Guests"
              value={bookingData.guests}
              onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
              sx={{ mb: 2 }}
            />

            <Divider sx={{ my: 2 }} />

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleBooking}
              disabled={!bookingData.checkIn || !bookingData.checkOut || !bookingData.roomType}
            >
              Proceed to Payment
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HotelDetail; 