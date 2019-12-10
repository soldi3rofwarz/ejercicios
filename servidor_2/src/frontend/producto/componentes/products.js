import React from 'react';
import Tema from './../../tema/componentes/tema';
import SectionApp from './sectionapp';
import Imagenes from './../../tema/componentes/image';

import Grid from '@material-ui/core/Grid';

const Product = (props) => {

    const { oferts } = props;

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
                    md={8}
                >
                    <SectionApp />
                </Grid>

            </Grid>
            <Imagenes
                datos={oferts}
            />
        </Tema>
    );

};

export default Product;