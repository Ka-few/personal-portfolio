import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={4} sx={{ p: 4, maxWidth: 600, width: '100%', borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Contact Me
        </Typography>

        {/* Form */}
        <form
          action="https://formspree.io/f/xqkrzyyd"
          method="POST"
        >
          <Stack spacing={3}>
            <TextField label="Name" name="name" fullWidth required />
            <TextField label="Email" name="email" type="email" fullWidth required />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Stack>
        </form>

        {/* Contact Info */}
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <IconButton
            href="mailto:njorovista@gmail.com"
            target="_blank"
            rel="noopener"
            color="primary"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            href="tel:+254 724015861"
            color="primary"
          >
            <PhoneIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/francis-njoroge-31698181/"
            target="_blank"
            rel="noopener"
            color="primary"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Contact;
