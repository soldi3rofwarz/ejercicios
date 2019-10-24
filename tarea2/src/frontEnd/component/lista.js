import React from 'react';
import Item from './item';
import './lista.css';

const Listado = (props) => {

    const { imagenes, color, cambiarColor } = props;

    return (
        <div className='listado'>
            {
                imagenes.map(imagen => {
                    return (
                        <Item
                            cambiarColor={cambiarColor}
                            color={color}
                            key={imagen.carnet} 
                            dato ={imagen.nombre}
                            dato ={imagen.apellidos}
                            dato ={imagen.carnet}
                            dato={imagen}

                        />
                    );
                })
            }
        </div>
    );

};

export default Listado;