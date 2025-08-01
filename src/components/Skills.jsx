import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  Divider,
} from '@mui/material';

const categorizedSkills = {
  'Frontend': ['React', 'Material UI', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  'Backend': ['Node.js', 'Express', 'JSON Server', 'MongoDB'],
  'Tools & Others': ['Git & GitHub', 'Netlify', 'Vercel', 'Postman', 'Figma', 'VS Code'],
};

function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Skills
      </Typography>

      <Stack spacing={4} mt={4}>
        {Object.entries(categorizedSkills).map(([category, skills], idx) => (
          <Paper
            key={idx}
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              bgcolor: 'background.paper',
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {category}
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Stack direction="row" spacing={1} flexWrap="wrap">
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  variant="outlined"
                  color="primary"
                  sx={{ m: 0.5 }}
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export default Skills;
