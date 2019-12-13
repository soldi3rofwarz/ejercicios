import React from 'react';
import Tema from './../../tema/componentes/tema';
import CompImagen from './compimagen';
import InfoIma from './infoImagen';

import Grid from '@material-ui/core/Grid';

const Producto = (props) =>{

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
                            <CompImagen />
                        </Grid>
                </Grid>
            </Grid>
        </Tema>
    );

};
export default Producto;