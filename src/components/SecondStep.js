import { Grid, Typography } from '@mui/material';
import react from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from 'bootstrap';
import Stack from '@mui/material/Stack';

export default function FirstStep() {
    return (
        <>
      {/* <Box
      
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100ch' },
        }}
        noValidate
        autoComplete="off"
      > */}
      <Grid lg={12} xs={12} style={{align:"center"}}>
        <Grid lg={12} xs={12} style={{align:"center"}}>
        <Typography>
        <h1>
            Let's set up a home for all your work
        </h1>
        <h5>
            You can always create another workspace later.
        </h5>
       </Typography>
        </Grid>
       
       {/* <> */}
       <Grid>
       <Grid style={{ marginRight:'90px'}} lg={12} xs={12} sm={12}>
        <label><b>Workspace Name</b></label> 
        </Grid>

        <Grid style={{align:'center'}} lg={12} xs={12} >
        <TextField style={{backgroundColor:'white'}} id="outlined-basic" label="Full Name" variant="outlined"/>
        </Grid>
       </Grid>
       <br></br>
        

       <Grid style={{ marginRight:'30px'}} lg={12} xs={12} sm={12}>
        <label><b>Workspace URL (optional) </b></label>
        </Grid>

        <Grid style={{align:'center'}} lg={12} xs={12}>
        <TextField style={{backgroundColor:'white'}} id="outlined-basic" label="Display Name" variant="outlined" />
        </Grid>

      {/* <Grid>
      <Button variant="contained">Contained</Button>
      </Grid> */}
    
        </Grid>
      {/* </Box> */}
      </>
    );
  }