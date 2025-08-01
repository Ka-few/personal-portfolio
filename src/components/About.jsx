import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Stack,
  Grid,
  Avatar,
  Button
} from '@mui/material';

function About() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 'lg', mx: 'auto' }}
      >
        {/* Image on Left */}
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            <Avatar
              src="/IMG_1693.JPG"
              alt="Francis Njoroge"
              sx={{ width: 200, height: 200 }}
            />
          </Box>
        </Grid>

        {/* Text on Right */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            About Me
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Typography variant="body1" paragraph>
            I’m <strong>Francis Njoroge</strong>, a passionate software developer focused on crafting
            intuitive, reliable, and user-friendly digital solutions. I love solving real-world
            challenges using clean, efficient code and creative thinking.
          </Typography>

          <Typography variant="body1" paragraph>
            With strong experience in both frontend and backend technologies, I’ve worked on
            various impactful projects in tech support, freelancing, and agritech.
          </Typography>

          <Stack spacing={1} mt={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              🔧 Tech Stack:
            </Typography>
            <Typography variant="body2">
              JavaScript, React, JSON Server, Tailwind CSS, Node.js, Git
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" mt={2}>
              🎯 Interests:
            </Typography>
            <Typography variant="body2">
              Tech for Agriculture, Clean UI/UX Design, Empowering Farmers Digitally
            </Typography>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            href="/cv.pdf"
            target="_blank"
            sx={{ mt: 3 }}
          >
            Download CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
