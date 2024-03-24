import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Empform = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', textAlign: 'center', minHeight: '100vh' }}>
      <Typography variant='h4' style={{textAlign:'center', color:'black', paddingTop: '20px',fontFamily:'Times New Roman'}} >EMPLOYEE FORM</Typography>
      <br></br>
      
      <Box>
        <div>
          <TextField
            id="outlined-required"
            label="Name"
            style={{ backgroundColor:'white' }}
          />
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-required"
            label="Designation"
            style={{ backgroundColor:'white' }}
          />
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-required"
            label="Location"
            style={{ backgroundColor:'white' }}
          />
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-required"
            label="Salary"
            style={{ backgroundColor:'white' }}
          />
        </div>
        <br></br>
      </Box>
      
      <Button style={{ backgroundColor: '#04AA6D', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Submit</Button>
    </div>
  );
};

export default Empform;
