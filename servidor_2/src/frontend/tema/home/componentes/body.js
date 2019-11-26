import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import Header from './../../../header/encabezado.js';
import Footer from './../../../footer/pie.js';
import Dep from './../../../../assets/c1.jpg';
import './body.css';
import c1 from './../../../../assets/c1.jpg';
import lotecomercial from './../../../../assets/lotecomercial.jpg';
import loteresidencial from './../../../../assets/loteresidencial.jpg';
import oficinas from './../../../../assets/oficinas.jpg';
import urbanizacion from './../../../../assets/urbanizacion.jpg';
import apartamento from './../../../../assets/apartamento.jpg';


const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
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
    backgroundColor: red[500],
  },
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
                <ExpandMoreIcon />
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
                <ExpandMoreIcon />
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
                <ExpandMoreIcon />
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
                <ExpandMoreIcon />
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
                <ExpandMoreIcon />
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
                <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
}