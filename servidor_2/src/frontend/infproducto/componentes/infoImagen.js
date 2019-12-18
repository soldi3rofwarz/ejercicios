import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tema from './../../tema/componentes/tema';
const useStyles = makeStyles(theme => ({
  root: {
    width:'100%',
    flexGrow: 2,
    overflow : 'hidden',
    height: '430px',
    marginTop: '20px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    fontSize: '18px;',
    background:'#3F51B5',
    //background: 'linear-gradient(to top,#00203F, #3F51B5)',
  },
}));
//boton
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 22,
    left: '40%',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
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
      backgroundColor: 'green',
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

const VerProducto = (props) => {

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
                <Paper className={classes.paper}>En {categoria}</Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>Precio:{precio}</Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>Dueños: {propietario}</Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>Direccion: {ubicacion}</Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>Tipo: {titulo}</Paper>
              </Grid>

              <BootstrapButton variant="contained" color="secondary" disableRipple className={classes.margin}>
              Reservar
            </BootstrapButton>
            </Grid>
        </div>
    );
};


export default VerProducto;