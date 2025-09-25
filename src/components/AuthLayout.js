import React from 'react';
import { Box, Container } from '@mui/material';

const AuthLayout = ({ children, title }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container 
        component="main" 
        maxWidth="lg"
        sx={{
          py: 4,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default AuthLayout;
