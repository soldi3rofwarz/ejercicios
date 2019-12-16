import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@material-ui/core/Grid';
import Infoimg from './infoimagen'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [

];

const useStyles = makeStyles(theme => ({
  root: {
    width: '120%',
    height:350,
    flexGrow: 1,
    marginTop: '20px',
    backgroundColor: '#E6E4D5',
    
  },
  header:{
    "&::after":{
      content: "after",
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    
    top: '30px',
  },
  

  img: {
    height: 305,
    display: 'block',
    maxWidth: 500,
    overflow: 'hidden',
    width: '100%',
    
  },
  container:{
      marginLeft: 20,
      width: '100%',
  }
}));

function SwipeableTextMobileStepper(props) {
    const {
    imagen,
    categoria,
    precio,
    propietario,
    titulo,
    ubicacion
    } = props;
    
const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Grid container >
          <Grid xs={12} sm={12} md={6} lg={6}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                <img className={classes.img} src={imagen} />
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                }
                
            />
          </Grid>
        <Grid xs={6} sm={6} md={6} lg={6}>
             <Infoimg
              categoria= {categoria} 
              precio ={precio}
              propietario ={propietario}
              titulo= {titulo}
              ubicacion={ubicacion}
             />   
        </Grid>
      </Grid>
    </div>
  );
};

export default SwipeableTextMobileStepper;
