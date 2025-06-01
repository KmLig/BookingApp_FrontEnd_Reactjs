import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Divider,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const steps = ['Booking Details', 'Payment Information', 'Confirmation'];

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    agreeToTerms: false,
  });

  const { bookingData, hotel } = location.state || {};

  if (!bookingData || !hotel) {
    navigate('/');
    return null;
  }

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Handle final submission
      console.log('Payment completed');
      navigate('/booking-confirmation');
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const calculateTotal = () => {
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    return nights * hotel.price;
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Booking Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Hotel: {hotel.name}
                </Typography>
                <Typography variant="body2">
                  Room Type: {bookingData.roomType}
                </Typography>
                <Typography variant="body2">
                  Check-in: {bookingData.checkIn.toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                  Check-out: {bookingData.checkOut.toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                  Guests: {bookingData.guests}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Total: ${calculateTotal()}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Payment Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Card Number"
                  value={paymentData.cardNumber}
                  onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Name on Card"
                  value={paymentData.cardName}
                  onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="Expiry Date"
                  placeholder="MM/YY"
                  value={paymentData.expiryDate}
                  onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="CVV"
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Confirm Your Booking
            </Typography>
            <Typography variant="body1" paragraph>
              Please review your booking details and payment information before confirming.
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={paymentData.agreeToTerms}
                  onChange={(e) => setPaymentData({ ...paymentData, agreeToTerms: e.target.checked })}
                />
              }
              label="I agree to the terms and conditions"
            />
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={
              (activeStep === 1 && !paymentData.cardNumber) ||
              (activeStep === 2 && !paymentData.agreeToTerms)
            }
          >
            {activeStep === steps.length - 1 ? 'Confirm Booking' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Payment; 