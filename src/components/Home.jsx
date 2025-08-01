import React from "react";
import { Box, Typography, Avatar, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
    >
      <Stack spacing={2} alignItems="center">
        {/* Avatar Image */}
        <Avatar
          src="/IMG_1693.JPG"
          alt="Francis Njoroge"
          sx={{ width: 150, height: 150 }}
        />

        {/* Name and Title */}
        <Typography variant="h4" component="h1" fontWeight="bold">
          Francis Njoroge
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Software Developer
        </Typography>

        {/* Tagline */}
        <Typography variant="body1" textAlign="center" maxWidth={500}>
          Turning ideas into web experiences.
        </Typography>

        {/* Social Links */}
        <Stack direction="row" spacing={2}>
          <IconButton
            component="a"
            href="https://github.com/Ka-few"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/francis-njoroge"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Home;
