import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tema from '../../tema/componentes/tema';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        backgroundColor:'#00b8a9',
        marginTop:'50px',
        marginBottom:'50px',
        borderRadius:'10px',
        paddingTop:'50px',
        paddingBottom:'50px',
        width: '50%',
    },
    textField: {
        width: '80%',
        fontSize:'20px',
    },
    button:{
        marginTop:'20px',
        width:'50%',
    },
}));

const AgregarProd = (props) => {

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

    const classes = useStyles();

    return (
        <Tema>
            <Grid
                container
                justify='center'
            >
                <Grid
                    container
                    justify='center'
                    item
                    xs={12}
                    sm={10}
                    md={8}
                >
                        <Grid
                            
                            className={classes.container}
                        >
                            <Grid
                                container
                                justify='center'
                                item
                                xs={12}
                            >
                                <TextField
                                    className={classes.textField}
                                    label="Categoria"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue={categoria}
                                    onChange={eventoCambiarCategoria}
                                />
                            </Grid>
                            <Grid
                                container
                                justify='center'
                                item
                                xs={12}
                            >
                                <TextField
                                    className={classes.textField}
                                    label="Ubicacion"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue={ubicacion}
                                    onChange={eventoCambiarUbicacion}
                                />
                            </Grid>
                            <Grid
                                container
                                justify='center'
                                item
                                xs={12}
                            >
                                <TextField
                                    className={classes.textField}
                                    label="Precio"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue={precio}
                                    onChange={eventoCambiarPrecio}
                                />
                            <Grid
                                container
                                justify='center'
                                item
                                xs={12}
                            >
                                <TextField
                                    className={classes.textField}
                                    label="Propietario"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue={propietario}
                                    onChange={eventoCambiarPropietario}
                                />
                            </Grid>
                            <Grid
                                container
                                justify='center'
                                item
                                xs={12}
                            >
                                <TextField
                                    className={classes.textField}
                                    label="Titulo"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue={titulo}
                                    onChange={eventoCambiarTitulo}
                                />
                            </Grid>
                            </Grid>
                            <Grid
                                container
                                justify='center'
                                item
                                xs={12}
                            >
                                <TextField
                                    className={classes.textField}
                                    label="URL de Imagen"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue={imagen}
                                    onChange={eventoCambiarImagen}
                                />
                            </Grid>
                            <Grid
                                container
                                justify='center'
                                item
                                xs={12}
                            >
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        className={classes.button}
                                        startIcon={<SaveIcon />}
                                        onClick={eventoGuardar}
                                    >
                                        Registrar producto
                                    </Button>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Tema>
    );

};

export default AgregarProd;
