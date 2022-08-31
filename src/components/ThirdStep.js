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
import ButtonBase from '@mui/material/ButtonBase';


import Button from '@mui/material/Button';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    // width: '5rem',
    // height: '5rem',
  };
export default function FirstStep() {

    const [ borderCard, setBorderCard] = React.useState('1px solid white')
    const [ borderCard1,setBorderCard1] = React.useState('1px solid white')

    const cardSelect = () => {
        setBorderCard('1px solid blue')

        cardDeSelect1();
    }

    const cardDeSelect = () => {
        setBorderCard('1px solid white')
    }

    const cardSelect1 = () => {
        setBorderCard1('1px solid blue')

        cardDeSelect();
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
           How are you planning to use Eden?
        </h1>
        <h5>
            We'll streamline your setup experience accordingly.
        </h5>
       </Typography>
        </Grid>

        <Grid container lg={8} spacing={1}>
       <Grid item lg={6}>
        <Card 
        // style={{backgroundColor:'#dcdcdc'}}
        sx={{ width: 200 ,height:200, border:borderCard }}
        //  onChange={cardSelect}
        //  onChange={cardDeSelect}
        >
          <ButtonBase 
          onClick={cardSelect}
          // onMouseOut={cardDeSelect}
          >
      <CardContent>
        <PersonIcon/>
        <Typography>
            <b>For myself</b>
        </Typography>
        <br></br>
        <Typography>
            Write better. Think more clearly. Stay organised.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </ButtonBase>
    </Card>
    </Grid>

    <Grid item lg={6}>
        <Card sx={{ width: 200 ,height:200, border:borderCard1 }}
        // style={{backgroundColor:'#dcdcdc'}}
        //  onMouseOver={cardSelect1}
        //  onMouseOut={cardDeSelect1}
         >
             <ButtonBase 
          onClick={cardSelect1}
          >
      <CardContent>
        <GroupsIcon/>
        <Typography>
        <b>With my team</b> 
        </Typography>
        <br></br>
        <Typography>
            Wikis, docs, tasks & projects, all in one place.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}

</ButtonBase>
    </Card>
    </Grid>

    </Grid>
        </Grid>
      {/* </Box> */}
      </>
    );
  }