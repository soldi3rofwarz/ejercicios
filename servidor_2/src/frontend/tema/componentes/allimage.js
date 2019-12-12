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
    padding: theme.spacing.unit * (2),
    margin: 'auto',
    maxWidth: 400,
    marginBottom:'35px',
    background:'#f4f4f4',
  },
  image: {
    width: 128,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cat:{

    fontSize: '15px',
    fontWeight: 350,
    color: '#828282',
    marginTop:'30px',
  },

  viewmore:{
      
    position:'right',
  }
}));

const Allimage = (props) =>{
    
    const classes = useStyles();
    const { dato } = props;

    console.log("0000000000",dato);
    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={4}>
            <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={dato.imagen} />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={4}>
                <Grid item xs spacing={2}>
                    <Typography gutterBottom>
                        <h3 className={classes.cat}>Ubicación: {dato.ubicacion}</h3>
                    </Typography>
                    <Typography color="textSecondary">Precio: {dato.precio}</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{ cursor: 'pointer' }}>
                        <Button className='viewmore' variant="contained" color="primary" href="#contained-buttons">Ver más</Button>
                    </Typography>
                </Grid>
                </Grid>
                <Grid item>
                <Typography>
                    
                </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Paper>
        </div>
    );
};
export default Allimage;