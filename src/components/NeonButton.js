import React from 'react';
import { Button } from '@mui/material';
import { neonStyles } from '../styles/authStyles';

const NeonButton = ({ children, onClick, fullWidth = false, ...props }) => {
  return (
    <Button
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        ...neonStyles.neonButton,
        ...(fullWidth ? { width: '100%' } : {}),
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NeonButton;
