import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cat:{

    fontSize: '14px',
    fontWeight: 400,
    color: '#828282',

  }
}));

const Allimage = (props) =>{
    
    const classes = useStyles();
    const { dato } = props;

    console.log("0000000000",dato);
    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={16}>
            <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={dato.imagen} alt={dato.titulo} />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                    <Typography gutterBottom>
                        <h3 className={classes.cat}>{dato.categoría}</h3>
                    </Typography>
                    
                    <Typography color="textSecondary">{dato.precio}</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{ cursor: 'pointer' }}>{dato.categoría}</Typography>
                </Grid>
                </Grid>
                <Grid item>
                <Typography variant="subtitle1">
                    <Button variant="contained" color="primary" href="#contained-buttons">Ver más</Button>
                </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Paper>
        </div>
    );
};
export default Allimage;










/* import React from 'react';
import './stylesimag.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    
    contenido: {
        paddingTop: '16px',
        paddingBottom: '8px',
    },
    
    galeriaimagen: {
        position: 'relative',
    },
    
    imagen: {
        width: '100%',
        height: '260px',
        objectFit: 'cover',
    },
    
    titulo: {
        position: 'absolute',
        bottom: 0,
        color: '#fff',
        textAlign: 'center',
        paddingTop: '8px',
        paddingBottom: '8px',
        background: 'greylight',
        width: '100%',
        margin: 0,
        marginBottom:'4px',
    },
}));

const AllImagen = (props) => {

    const { dato } = props;

    console.log("0000000000",dato);

    return (
        <>
              <div>         
                  <img 
                            src={dato.imagen}
                            alt={dato.titulo}
                        />
                    
                        <h1>{dato.titulo}</h1>
                        
                        <b>{dato.categoría}</b>
                </div> 
        </>
    );

};
export default AllImagen; */