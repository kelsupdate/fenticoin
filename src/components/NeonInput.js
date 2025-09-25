import React from 'react';
import { Input, FormControl, FormLabel } from '@mui/material';

const NeonInput = ({ label, type = 'text', fullWidth = true, ...props }) => {
  return (
    <FormControl fullWidth={fullWidth} sx={{ marginBottom: 2 }}>
      <FormLabel sx={{ 
        color: '#00B140',
        '&.Mui-focused': {
          color: '#00FF00',
        },
      }}>
        {label}
      </FormLabel>
      <Input
        type={type}
        sx={{
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          border: '2px solid #00B140',
          borderRadius: 1,
          '&:hover': {
            borderColor: '#00FF00',
          },
          '&.Mui-focused': {
            borderColor: '#00FF00',
            boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
          },
          '& input': {
            color: '#ffffff',
            padding: '12px 14px',
          },
        }}
        {...props}
      />
    </FormControl>
  );
};

export default NeonInput;
