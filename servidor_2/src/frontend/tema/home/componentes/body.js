import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { pink } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
<<<<<<< HEAD

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Header from './../../../header/encabezado.js';
import Footer from './../../../footer/pie.js';
=======
import Header from './../../../header/encabezado.js';
>>>>>>> 1d0407f231c8a93eb560af99b7e92b628d5a8004
import c1 from './../../../../assets/c1.jpg';
import lotecomercial from './../../../../assets/lotecomercial.jpg';
import loteresidencial from './../../../../assets/loteresidencial.jpg';
import oficinas from './../../../../assets/oficinas.jpeg';
import urbanizacion from './../../../../assets/urbanizacion.jpg';
import apartamento from './../../../../assets/apartamento.jpg';

import Footer from './../../../footer/pie.js';

const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: pink[500],
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),},
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          >
            <Card className={classes.card}>
              <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Casas"
                subheader=""
              />
              <CardMedia
                className={classes.media}
                image={c1}
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Esta es una pequeña representación del estilo del la vista de la información
                </Typography>
              </CardContent> */}
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Lote Comercial"/* 
                subheader="Ubicación: Managua" */
              />
              <CardMedia
                className={classes.media}
                image={lotecomercial}
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Esta es una pequeña representación del estilo del la vista de la información
                </Typography>
              </CardContent> */}
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                </IconButton>
              </CardActions>

            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Lote Residencial"
              />
              <CardMedia
                className={classes.media}
                image={loteresidencial}
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Esta es una pequeña representación del estilo del la vista de la información
                </Typography>
              </CardContent> */}
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="oficinas"
              />
              <CardMedia
                className={classes.media}
                image={oficinas}
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Esta es una pequeña representación del estilo del la vista de la información
                </Typography>
              </CardContent> */}
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
      
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Urbanización"
              />
              <CardMedia
                className={classes.media}
                image={urbanizacion}
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Esta es una pequeña representación del estilo del la vista de la información
                </Typography>
              </CardContent> */}
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Departamentos"
              />
              <CardMedia
                className={classes.media}
                image={apartamento}
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Esta es una pequeña representación del estilo del la vista de la información
                </Typography>
              </CardContent> */}
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  
    {/*<h1 >Bienvenidos a Bienes Raices</h1>
    <p align ="justify">Bienes Raíces Juigalpa es una compañía ubicada en Juigalpa, Nicaragua, que se ha destacado como líder en la venta y renta de propiedades residenciales y comerciales en Managua, León y, San Juan del Sur, también se ha especializado en venta de terrenos en las playas así como  fincas agrícolas y ganaderas.  Nuestra oficina principal está ubicada en Sto. Domingo las Sierritas en el Km 8 carretera Masaya. Nos especializamos en el área residencial de más alto nivel: Santo Domingo, Las Colinas, Jean Paul Genie y Villa Fontana.

Aurora Bienes Raices ofrece casas residenciales amuebladas y sin muebles en la area de Managua.  Tambien tenemos apartamentos con muebles y sin muebles.  Adicionalmente ofrecemos lotes residenciales y comerciales en Managua, espacio de oficinas y bodegas en venta y alquiler en el area de managua.  De último, Aurora Bienes Raices tambien ofrece fincas en todo el territorio Nicaraguense.

Por que trabajar con Aurora Bienes Raíces?

Aurora Bienes Raíces es la compañía con mas experiencia en la industria local y ofrecemos propiedades exclusivas que no se puede conseguir a través de otras agencias. 
Todo los agentes de Aurora Bienes Raíces son  bilingües, hablan y escriben ingles y español.
Aurora Bienes Raíces maneja información privilegiada sobre el Mercado local.
Nuestra base de datos es la más extensa de todo Managua.
Tenemos  contactos de negocios en Nicaragua y en toda Centro América
Es la empresa con mas sucursales en Nicaragua, además de Managua,  ofrecemos servicios completos en León a través de Aurora Colonial Properties, en San Juan del Sur por Aurora Beachfront Realty y estamos iniciando operaciones en la ciudad de Granada. Ofrecemos propiedades de playa en todo el Pacifico así como en el Atlántico.
Contamos con el inventario mas grande de fincas y haciendas para la venta.  .
Aurora es un compañía con un trayectoria e historia de honestidad y eficiencia.
              </p> */}
    </>
  );
}