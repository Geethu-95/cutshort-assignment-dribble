import { Grid, Typography } from '@mui/material';
// import react from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import { Button } from 'bootstrap';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';


import Button from '@mui/material/Button';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    // width: '5rem',
    // height: '5rem',
  };
export default function FourthStep() {

    const [ borderCard, setBorderCard] = React.useState('1px solid white')
    const [ borderCard1,setBorderCard1] = React.useState('1px solid white')

    const cardSelect = () => {
        setBorderCard('1px solid blue')
    }

    const cardDeSelect = () => {
        setBorderCard('1px solid white')
    }

    const cardSelect1 = () => {
        setBorderCard1('1px solid blue')
    }

    const cardDeSelect1 = () => {
        setBorderCard1('1px solid white')
    }

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
           Congratulations, Eren!
        </h1>
        <h5>
            You have completed onboarding, you can start using the Eden
        </h5>
       </Typography>
        </Grid>
        </Grid>
        
      {/* </Box> */}
      </>
    );
  }