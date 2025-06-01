import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About Us
      </Typography>
      
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2024, our booking platform has been dedicated to providing exceptional hotel booking experiences. 
                We believe that every traveler deserves to find their perfect accommodation, whether it's a luxury resort 
                or a cozy boutique hotel.
              </Typography>
              <Typography variant="body1">
                Our mission is to make hotel booking simple, transparent, and enjoyable for everyone.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body1" paragraph>
                • Customer Satisfaction: We prioritize our customers' needs and satisfaction above all else.
              </Typography>
              <Typography variant="body1" paragraph>
                • Transparency: We believe in clear pricing and honest information about our properties.
              </Typography>
              <Typography variant="body1" paragraph>
                • Innovation: We continuously improve our platform to provide the best booking experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Why Choose Us?
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Wide Selection
              </Typography>
              <Typography variant="body2">
                Access to thousands of hotels worldwide
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Best Prices
              </Typography>
              <Typography variant="body2">
                Guaranteed best rates and special deals
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                24/7 Support
              </Typography>
              <Typography variant="body2">
                Round-the-clock customer service
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs; 