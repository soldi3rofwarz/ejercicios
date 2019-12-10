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
      padding: theme.spacing(2),
      marginTop: 30,
      marginLeft: 20,
      maxWidth: 500,
      flexBox: 2,
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
  }
    const AllImagen = (props) => {

    const { datos } = props;

    return (

        <>
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
    </>
    );

};
