import React from 'react';
import { Box, Container, TextField, Button, Typography, Grid } from '@mui/material';
// import './ContactUs.css';
import ContactS from '../Images/ContactS.jpg'

const ContactUs = () => {
  return (
    <Box className="contact-section" sx={{marginTop:'50px'}}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              fontFamily: '"Prosto One", system-ui',
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#000',
              maxWidth: '600px',
              fontSize:'18px',
              mx: 'auto',
              fontFamily: '"Prosto One", system-ui',
              mt: '10px',
            }}
          >
            We're here to help! If you have any questions or need support, feel free to reach out to us.
          </Typography>
        </Box>

        {/* Contact Form */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form className="contact-form">
              <TextField
                fullWidth
                required
                label="Your Full Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                required
                type='email'
                label="Your Email"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                required
                type='number'
                label="Your Contact Number"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                required
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" type="submit" className="submit-button" sx={{boxShadow: '9px 9px 9px -7px rgba(0,0,0,0.75)'}}>
                Send Message
              </Button>
            </form>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Box className="contact-info">
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ color: '#777', mt: 2 }}>
                Phone: +123 456 7890
              </Typography>
              <Typography variant="body1" sx={{ color: '#777', mt: 2 }}>
                Email: info@culturestudio.com
              </Typography>
              <Typography variant="body1" sx={{ color: '#777', mt: 2 }}>
                Address: 123 Fashion Street, Surat City, India
              </Typography>

              {/* Office Image */}
              <img
                src={ContactS}
                alt="Office"
                className="office-image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
