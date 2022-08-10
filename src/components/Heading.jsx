import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Heading() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, m: 2 }}>
      <Typography variant='h4' component='div' gutterBottom>
        Todo List App
      </Typography>
    </Box>
  );
}
