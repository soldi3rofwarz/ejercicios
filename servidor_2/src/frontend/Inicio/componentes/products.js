import React from 'react';
import Tema from '../../tema/componentes/tema';
import SectionApp from './sectionapp';
import ImagenContent from './../../producto/contenedor/imagen-contenedor';

import Grid from '@material-ui/core/Grid';

const Product = (props) => {

    const {cambiarCategoria,cambiarTitulo,verTodos, datos}=props;

    return (
        <Tema>
            <Grid
                container
                justify='center'
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                >
                    <SectionApp cambiarCategoria={cambiarCategoria}
                                cambiarTitulo={cambiarTitulo}
                                verTodos={verTodos}

                    />
                </Grid>

            </Grid>
            <ImagenContent datos={datos}/>
        </Tema>
    );

};

export default Product;