/* 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ButtonBase from '@material-ui/core/ButtonBase';
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
    
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4,5,6,7].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper}  > 
              <ButtonBase className={classes.image} >
                      <img className={classes.img} alt="complex" src="./../../../../assets/c1.jpg" />
                    </ButtonBase>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
  );
} */
import Header from './../../../header/componentes/encabezado.js';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#42a5f5',
    margin: '90px',
    marginLeft:'-100px',
    width:'100%',
    height: '100%'
  },
  gridList: {
    width: 500,
    height: 450,
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  GridListTile:{
    display: 'flex',
    flexWrap: 'wrap',

  }
}));


import image from './../../../../assets/c1.jpg';
import image2 from './../../../../assets/c2.jpg';
import image3 from './../../../../assets/c3.jpg';
import image4 from './../../../../assets/c5.jpg';
import image5 from './../../../../assets/csa1.jpg';
import image6 from './../../../../assets/csa2.jpg';
 
 const tileData = [
   {
      img: image,
      title: 'Casa',
      precio: '$50000',
    },
    {
      img: image2,
      title: 'Casa',
      precio: '45000',
    },
    {
      img: image3,
      title: 'Casa',
      precio: '43000',
    },
    {
      img: image4,
      title: 'Casa',
      precio: '30000',
    },
    {
      img: image5,
      title: 'Casa',
      precio: '50000',
    },
    {
      img: image6,
      title: 'Casa',
      precio: 'a37000',
    },
 ];
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <>
    <Header/>
    <Grid
      container
      justify='center'
    >
      <Grid item xs={11} sm={11} md={9}>
        <Grid
          container
          spacing={8}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          ></Grid>
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} >
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div"><h1>Productos</h1></ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Precio: {tile.precio}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Grid>
    </Grid>
    </Grid>
    </>
  );
}