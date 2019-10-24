import React from 'react';
import Listado from './lista';

const Inicio = (props) => {

    const { imagenes, color, cambiarColor } = props;

    return (
        <div>
            <Listado
                color={color}
                cambiarColor={cambiarColor}
                imagenes={imagenes}
            />
        </div>
    );

};

export default Inicio;