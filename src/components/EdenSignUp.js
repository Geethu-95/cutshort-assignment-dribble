import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
// import { makeStyles } from '@mui/styles';
import './styles.css';

const steps = ["", "", "", ""];

// const useStyles = makeStyles(() => ({
//   root: {
//     "& .MuiStepIcon-active": { color: "violet" },
//     "& .MuiStepIcon-root": { color: "violet" }
//     // "& .MuiStepIcon-completed": { color: "green" },
//     // "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
//   }
// }));

export default function EdenSignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    // handleHalt();
    return completedSteps() === totalSteps();
    
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleHalt = () => {
    setActiveStep(3);
    // setCompleted({});
  };
  const styles = {
    cardSelected: {
      // background: "#f1f1f1",
      "&:hover": {
        background: "blue",
      },
    },
  };

  return (
    <div  >
    <Grid 
      container
      // style={{  marginLeft: 250 }}
      alignItems="center"
      align={"center"}
      justifyContent="center"
    >
      <Grid item xs={12} align={"center"}>
        <Box sx={{ width: "50%"}} style={{ marginTop: "25px" }} >
          <Stepper nonLinear activeStep={activeStep} align={"center"}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: '#7B68EE', 
                },
                '& .MuiStepLabel-root .Mui-active': {
                  color: '#7B68EE', 
                }}}
                >
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Grid
                  container
                  lg={12}
                  align={"center"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Grid item align={"center"} xs={12}>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                  </Grid>
                  {/* <Grid item xs={12} align={'center'}>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto",}} />
                      <Button sx={{backgroundColor:'#7B68EE' }}
                        variant="contained"
                        align='center'
                        onClick={handleReset}
                        style={{ marginRight: 755 }}
                      >
                        Reset
                      </Button>
                    </Box>
                  </Grid> */}
                </Grid>
              </React.Fragment>
            ) : activeStep + 1 == 1 ? (
              <>
                <Grid
                  container
                  align={"center"}
                  alignItems={"center"}
                  style={{ marginTop: "100px" }}
                >
                  <Grid item xs={12}>
                    <FirstStep> </FirstStep>
                  </Grid>
                </Grid>
                <br></br>

                <Box
                // sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                >
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Grid align="center">
                    <Button
                      onClick={handleComplete}
                      sx={{ mr: 1,backgroundColor:'#7B68EE' }}
                      variant="contained"
                      style={{
                        align: "center",
                        marginLeft: "0px",
                        width: "250px",
                      }}
                    >
                      {/* Next */}
                      Create Workspace
                    </Button>
                  </Grid>
                </Box>
              </>
            ) : activeStep + 1 == 2 ? (
              <>
                <Grid container align={"center"} alignItems={"center"}>
                  <Grid item xs={12} style={{ marginTop: "100px" }}>
                    <SecondStep> </SecondStep>
                  </Grid>
                </Grid>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Grid container alignItems={"center"} align={"center"}>
                    <Grid item xs={12}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button
                        onClick={handleComplete}
                        sx={{ mr: 1 ,backgroundColor:'#7B68EE'}}
                        variant="contained"
                        style={{
                          // marginRight:'650px',
                          width: "250px",
                        }}
                        align={"center"}
                      >
                        Create Workspace
                      </Button>
                    </Grid>{" "}
                  </Grid>
                </Box>
              </>
            ) : activeStep + 1 == 3 ? (
              <>
                <Grid align="center" style={{ marginTop: "100px" }}>
                  <ThirdStep> </ThirdStep>
                </Grid>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Grid container alignItems={"center"} align={"center"}>
                    <Grid item xs={12}>
                      <Button
                        onClick={handleComplete}
                        sx={{ mr: 1,backgroundColor:'#7B68EE' }}
                        variant="contained"
                        style={{
                          // ,marginRight:'650px'
                          width: "250px",
                        }}
                        align={"center"}
                      >
                        Create Workspace
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </>
            ) : (
              <>
                <Grid align="center">
                  <FourthStep />
                  <Button
                    variant="contained"
                    onClick={handleComplete}
                    style={{ width: 300 }}
                    sx={{backgroundColor:'#7B68EE'}}
                  >
                    Launch Eden
                  </Button>
                </Grid>
              </>
            )}
          </div>
        </Box>
      </Grid>
    </Grid>
    </div>
  );
}
