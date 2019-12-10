import React from 'react';
import ImagenBackg from './../../../assets/Exteriores.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backG: {
        position: 'relative',
    },
    ImgBack: {
        width: '100%',
        height: '230px',
        objectFit: 'cover',
    },
    DescLem: {
        position: 'absolute',
        width: '600px',
        height: '100px',
        left: 'calc(40% - 20px)',
        top: 'calc(50% - 50px)',
        fontSize: '24px',
    },
    contenedorDatos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    datos: {
        marginLeft: '8px',
        marginRight: '8px',
        color: '#828282',
        backgroundColor: '#f5f5f5',
        borderColor: '#e0dcde',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
}));

const BackImg = (props) => {

    const classes = useStyles();

    return (
        <>
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
                    <div className={classes.datos}>
                        <b>Ventas</b>
                    </div>

                    <div className={classes.datos}>
                        <b>Alquileres</b>
                    </div>

                    <div className={classes.datos}>
                        <b>Departamentos</b>
                    </div>

                    <div className={classes.datos}>
                        <b>Proyectos nuevos</b> 
                    </div>

                </div>
            </div>
        </>
    );
}
export default BackImg;