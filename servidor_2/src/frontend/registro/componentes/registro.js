import React from 'react';
import Header from './../../tema/componentes/header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '100%',
      flexGrow: 1,
      marginTop: '20px',
      backgroundColor: '#F9F9F6',
    },

    container:{
        
        
    },
    Grid:{
        marginLeft:'50%',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        fontSize: '18px;',
        background: 'linear-gradient(to left, #085078, #85D8CE)',
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
        <div className ={classes.root}> 
            <Grid container>
                <Grid xs={12}>
                <Paper className={classes.paper}>
                    <h1>Categoria</h1>
                    <input
                        placeholder='Categoria'
                        onChange={eventoCambiarCategoria}
                        value={categoria}
                    />
                </Paper>
                </Grid>
                <Grid xs={12}>
                    <h1>Imagen</h1>
                    <input type="file"
                        placeholder='Imagen'
                        onChange={eventoCambiarImagen}
                        value={imagen}
                    />
                    </Grid>
                    <Grid xs={12}>
                        <h1>Precio</h1>
                        <input
                            placeholder='Precio'
                            onChange={eventoCambiarPrecio}
                            value={precio}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <h1>Propietario</h1>
                        <input
                            placeholder='Propietario'
                            onChange={eventoCambiarPropietario}
                            value={propietario}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <h1>Título</h1>
                        <input
                            placeholder='Título'
                            onChange={eventoCambiarTitulo}
                            value={titulo}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <h1>Ubicacion</h1>
                        <input
                            placeholder='Ubicacion'
                            onChange={eventoCambiarUbicacion}
                            value={ubicacion}
                        />
                    </Grid>
            <button
                onClick={eventoGuardar}
            >
                Guardar
            </button>
            {
                guardado === true && (<h1>{categoriaResultado}</h1>)
            }
            </Grid>
        </div>
    </>
    );
};
export default registro;