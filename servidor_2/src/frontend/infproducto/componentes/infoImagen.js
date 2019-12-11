import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    width:'100%',
    flexGrow: 2,
  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    fontSize: '18px;',
    background: 'linear-gradient(to left, #085078, #85D8CE)',
  },
}));

const Info =()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Casa:</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Precio:</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Dueño:</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Direccion:</Paper>
        </Grid><Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
    )
}


export default Info;