import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} style={{ color: 'white', textDecoration: 'none', textTransform: 'uppercase' }}>Employee Site</Link>
          </Typography>
          <Button color="inherit"><Link to={'/'} style={{ color: 'white', textDecoration: 'none' ,textTransform:'initial'}}>Home</Link></Button>
          <Button color="inherit"><Link to={'/list'} style={{ color: 'white', textDecoration: 'none',textTransform:'initial' }}>Employee Dashboard</Link></Button>
          <Button color="inherit"><Link to={'/form'} style={{ color: 'white', textDecoration: 'none',textTransform:'initial' }}>Employee Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;
