import React from 'react';
import Tema from './../../tema/componentes/tema';
import CompImagen from './compimagen';
import InfoIma from './infoImagen';

import Grid from '@material-ui/core/Grid';

const Producto = (props) =>{
    const {
        imagen,
        categoria,
        precio,
        propietario,
        titulo,
        ubicacion
      } = props;

    return (
        <Tema
        >
            <Grid
                container
                justify='center'
            >
                <Grid
                    item
                    xs={12}
                    justify='center'

                >
                        <Grid
                        item
                        xs={10}
                         >
                            <CompImagen imagen={imagen}/>
                        </Grid>

                        <Grid
                        item
                        xs={10}
                         >
                             
                            <InfoIma
                                categoria= {categoria}
                                precio ={precio}
                                propietario ={propietario}
                                titulo= {titulo}
                                ubicacion={ubicacion}/>
                        </Grid>

                </Grid>
            </Grid>
        </Tema>
    );

};
export default Producto;