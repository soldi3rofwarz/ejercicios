import React from 'react';
import Header from './../../tema/componentes/header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
    fondo:{
        width :'100%',
        background: '#3F51B5',

    },

    root: {
      maxWidth: '50%',
      flexGrow: 1,
      marginTop: '20px',
      margin:200,
      backgroundColor: '#3F51B5',
      
    },

    container:{
        width: '70%',
        
    },
    Grid:{
        marginLeft:'50%',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        fontSize: '25px;',
        background: '#3F51B5',
        // border: '1px solid black',
        margin: 2,
      },
}
))

  

const registro = (props) => {
    
    const classes = useStyles();

    const {
        eventoCambiarCategoria,
        categoria,
        categoriaResultado,

        eventoCambiarImagen,
        imagen,
        imagenResultado,

        eventoCambiarPrecio,
        precio,
        precioResultado,

        eventoCambiarPropietario,
        propietario,
        propietarioResultado,

        eventoCambiarTitulo,
        titulo,
        tituloResultado,

        eventoCambiarUbicacion,
        ubicacion,
        ubicacionResultado,
        
        eventoGuardar,
        guardado,
        
    } = props;

    return(
    <>
        <Header/>
        <div className = {classes.fondo}>
            <div className ={classes.root}> 
                <Grid container>
                <Grid xs={12}>
                <Paper className={classes.paper}>
                    <TextField id="standard-basic" label="Categoría" 
                        placeholder='Categoria'
                        onChange={eventoCambiarCategoria}
                        value={categoria}
                    />
                </Paper>
                </Grid>
                {/* <Grid xs={12}>
                    <Paper className={classes.paper}> 
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        {/* <label htmlFor="contained-button-file"> */}
                            <Button variant="contained" color="primary" component="span">
                            Upload
                            </Button>
                        {/* </label> */}
                    {/* </Paper> */}
                    </Grid> */}
                    <Grid xs={12}>
                        <Paper className={classes.paper}>
                        <TextField id="standard-basic" label="Precio"
                            placeholder='Precio'
                            onChange={eventoCambiarPrecio}
                            value={precio}
                        />
                        </Paper>
                    </Grid>
                    <Grid xs={12}>
                        <Paper className={classes.paper}>
                        <TextField id="standard-basic" label="Propietario"
                            placeholder='Propietario'
                            onChange={eventoCambiarPropietario}
                            value={propietario}
                        />
                        </Paper>
                    </Grid>
                    <Grid xs={12}>
                        <Paper className={classes.paper}>
                        <TextField id="standard-basic" label="Título" 
                            placeholder='Título'
                            onChange={eventoCambiarTitulo}
                            value={titulo}
                        />
                        </Paper>
                    </Grid>
                    <Grid xs={12}>
                        <Paper className={classes.paper}>
                        <TextField id="standard-basic" label="Ubicación" 
                            placeholder='Ubicacion'
                            onChange={eventoCambiarUbicacion}
                            value={ubicacion}
                        />
                        </Paper>
                    </Grid>
                    <Grid xs={12}>
                    <Paper className={classes.paper}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                        Registrar
                        </Button>
                    </Paper>
                   
                        {
                            guardado === true && (<h1>{categoriaResultado}</h1>)
                        }
                    
                </Grid>      
        </div>
    </div>
    </>
    );
};
export default registro;