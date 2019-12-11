import React from 'react';
import Grid from '@material-ui/core/Grid';
import {

} from '@material-ui/core/styles'
import Allimage from './allimage';

const Imagen = (props) => {

    const {datos } = props;

    return (
        <section>
            <Grid
                container
                justify='center'
            >
                <Grid
                    item
                    xs={11}
                    sm={10}
                    md={8}
                >
                    <Grid
                        container
                        justify='center'
                        spacing={1}
                        className=''
                    >
                        {
                            
                            datos.map(dato => {

                                
                                
                                return (
                                    <Grid
                                        key={dato.id}
                                        item
                                        xs={6}
                                    >
                                        <Allimage
                                            dato={dato}
                                        />
                                    </Grid>
                                );

                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );

};

export default Imagen;