import React from 'react';
import ImagenBackg from './../../../assets/Exteriores.jpg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    backG: {
        position: 'relative',
    },
    ImgBack: {
        width: '100%',
        height: '400px',
    },
    DescLem: {
        position: 'absolute',
        width: '600px',
        height: '100px',
        left: 'calc(40% - 20px)',
        top: 'calc(50% - 120px)',
        fontSize: '30px',
        color:'red',
        fontWeight: 600,
    },
    contenedorDatos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    datos: {
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        color: 'black',
        backgroundColor: 'grey',
        borderColor: '#e0dcde',
        padding: '20px',
        borderRadius: '7px',
        fontWeight:600,
        fontSize:'20px',
    },
}));

const BackImg = (props) => {

 const {cambiarCategoria, cambiarTitulo, verTodos}=props;
    const classes = useStyles();

    return (
        <div>
            <div
                className={classes.backG}
            >
                <img
                    className={classes.ImgBack}
                    src={ImagenBackg}
                />
                <h4 className={classes.DescLem}>
                    My lucifer is lonely...
                </h4>
            
            </div>
            <div>
                <div
                    className={classes.contenedorDatos}
                >
                    <div onClick= { ()=> verTodos ()} className={classes.datos}>
                        Todo
                    </div>

                    <div onClick= { ()=> cambiarCategoria ("Venta")} className={classes.datos}>
                        Ventas
                    </div>

                    <div onClick= { ()=> cambiarCategoria ("Alquiler")} className={classes.datos}>
                        Alquileres
                    </div>

                    <div onClick= { ()=> cambiarTitulo ("Departamento")} className={classes.datos}>
                        Departamentos
                    </div>

                    <div onClick= { ()=> cambiarTitulo ("Casa")} className={classes.datos}>
                        Casas
                    </div>

                    <div onClick= { ()=> cambiarTitulo ("Oficina")} className={classes.datos}>
                        oficinas
                    </div>

                </div>
            </div>
        </div>
    );
}
export default BackImg;