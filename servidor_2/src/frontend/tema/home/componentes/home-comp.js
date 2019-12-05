import Header from '../../../tema/componentes/encabezado.js';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Image1 from './../../../../assets/apartamento.jpg';
import Image2 from './../../../../assets/c1.jpg';
import Image3 from './../../../../assets/c2.jpg';
import Image4 from './../../../../assets/c3.jpg';
import Image5 from './../../../../assets/csa2.jpg';
import Image6 from './../../../../assets/c5.jpg';

const Image =[

  {
    img: Image1,
    title: 'Casa',
    precio: '$ 50,000'

  },
  {
    img: Image2,
    title: 'Departamento',
    precio: '$ 10,000'

  },
  {
    img: Image3,
    title: 'Casa',
    precio: '$ 20,000'

  },
  {
    img: Image4,
    title: 'Terreno',
    precio: '$ 80,000'

  },
  {
    img: Image5,
    title: 'Departamento',
    precio: '$ 60,000'

  },
  {
    img: Image6,
    title: 'Departamento',
    precio: '$ 40,000'

  },

]
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 30,
    marginLeft: 20,
    maxWidth: 500,
  },
  image: {
    width: 250,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  ButViewEsp:{
    marginTop: 50,
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <>
    <Header/>

    {Image.map((item) =>{
      return (

      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={item.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    {item.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {item.precio}
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Button className={classes.ButViewEsp} variant="outlined" color="primary" href="#outlined-buttons">
                Ver más
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
      );
    })}
    </>
  );
}