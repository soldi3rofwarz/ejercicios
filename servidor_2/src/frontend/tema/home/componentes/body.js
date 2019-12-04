import Header from './../../../header/componentes/encabezado.js';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop:30,
    height: 330,
    width: 250,
    backgroundColor: '#f8f8f8',
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(4);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <>
    <Header/>
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}