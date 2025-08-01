import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';

const experiences = [
  {
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    period: 'Jan 2023 – Present',
    location: 'Remote',
    description:
      'Developed custom web applications using React, Node.js, and MongoDB. Worked closely with clients to deliver responsive, user-friendly websites and dashboards.',
  },
  {
    title: 'IT Sales Specialist',
    company: 'TechPlus Solutions',
    period: 'May 2021 – Dec 2022',
    location: 'Nakuru, Kenya',
    description:
      'Provided technical support and product guidance to clients. Contributed to a 20% increase in client retention by delivering tailored tech solutions.',
  },
  {
    title: 'Technical Support Intern',
    company: 'JKUAT IT Department',
    period: 'Jan 2020 – Apr 2021',
    location: 'Nairobi, Kenya',
    description:
      'Assisted in network maintenance, hardware troubleshooting, and user support. Gained hands-on experience in system admin and ticket resolution.',
  },
];

function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.paper',
        color: 'text.primary',
        p: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Experience
      </Typography>

      <Grid container spacing={3} mt={3}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {exp.company} • {exp.location}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {exp.period}
                </Typography>
                <Typography variant="body2">{exp.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Experience;
