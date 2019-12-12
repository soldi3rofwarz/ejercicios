import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, withStyles,ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    width:'100%',
    flexGrow: 2,
    overflow : 'hidden',
    height: '430px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    fontSize: '18px;',
    background: 'linear-gradient(to left, #085078, #85D8CE)',
  },
}));
//boton
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    left: '40%',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#FFBC9A',
      borderColor: '#FFBC9A',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#0062cc',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);



const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const Info =(props)=>{
  const {
    categoria,
    precio,
    propietario,
    titulo,
    ubicacion
} = props;

    const classes = useStyles();
    return(
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
    <Paper className={classes.paper}>{categoria}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Precio:</Paper>
        </Grid>
        <Grid item xs={6}>
    <Paper className={classes.paper}>{precio}</Paper>
        </Grid>
        <Grid item xs={6}>
    <Paper className={classes.paper}>Dueño:</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{propietario}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Direccion:</Paper>
        </Grid><Grid item xs={6}>
    <Paper className={classes.paper}>{ubicacion}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Tipo:</Paper>
        </Grid><Grid item xs={6}>
    <Paper className={classes.paper}>{titulo}</Paper>
        </Grid>
        <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        Reservar
      </BootstrapButton>
      </Grid>
    </div>
    )
}


export default Info;