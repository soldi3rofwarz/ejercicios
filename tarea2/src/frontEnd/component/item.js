import React from 'react';
import './item.css';

const Item = (props) => {

    const { dato, color, cambiarColor } = props;

    return (
        <div className={color} onClick={cambiarColor}>
            <img
                src={dato.imagen}
            />
            <p>
                {dato.nombre}
            </p>
            <p>
                {dato.apellido}
            </p>
            <p>
                {dato.carnet}
            </p>
        </div>
    );

};

export default Item;