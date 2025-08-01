import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Smart Goal Planner',
    description:
      'A React app that helps users set, track, and manage multiple financial goals with real-time progress bars and charts.',
    image: '/goal-planner.png',
    github: 'https://github.com/Ka-few/smart-goal-planner',
    demo: 'https://smart-goal-planner-crqg.vercel.app/'
  },
  {
    title: 'Digital Bull Semen Catalog',
    description:
      'A digital platform to help Kenyan farmers locate vet officers and browse a searchable semen database with booking features.',
    image: '/bull-catalog.png',
    github: 'https://github.com/Ka-few/bull-semen-catalog',
    demo: 'https://ka-few.github.io/Bull-Semen-Catalog/'
  },
  {
    title: 'Mama Mboga Grocery App',
    description:
      'An online grocery shop built with React and JSON Server allowing users to add products, browse, and manage a cart.',
    image: '/mama-mboga.png',
    github: 'https://github.com/Ka-few/mama-mboga',
    demo: 'https://mama-mboga-pkyg.vercel.app/'
  }
];

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.paper',
        color: 'text.primary',
        p: 4
      }}
    >
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={3}>
  {projects.map((project, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            height: 180,
            width: '100%',
            objectFit: 'contain',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            startIcon={<GitHubIcon sx={{ fontSize: 18 }} />}
            href={project.github}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Button>
          <Button
            size="small"
            href={project.demo}
            target="_blank"
            rel="noopener"
          >
            Live Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

    </Box>
  );
}

export default Projects;
