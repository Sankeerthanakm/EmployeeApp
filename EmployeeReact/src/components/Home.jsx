import React from 'react';
import Typography from '@mui/material/Typography';

const StyledHeading = () => {
  return (
    <div style={{ 
      height: '100vh', 
      backgroundImage: 'url("https://img.freepik.com/premium-photo/keyboard-coffee-smartphone-notebook-color-background-top-view_1286-776.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    }}>
      <Typography 
        variant="h5" 
        sx={{ 
          color: 'black', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          textTransform: 'uppercase', 
          letterSpacing: '2px', 
          marginBottom: '20px',
          padding: '20px', 
          fontSize:'32px'
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <i>Welcome to Employee App</i><br />
       
      </Typography>
    </div>
  );
};

export default StyledHeading;
